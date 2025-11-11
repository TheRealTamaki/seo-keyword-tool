-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS timescaledb;

-- Users table (for future multi-user support)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  domain VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_projects_user ON projects(user_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_projects_domain_user ON projects(user_id, domain);

-- Keywords table
CREATE TABLE IF NOT EXISTS keywords (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  keyword TEXT NOT NULL,
  search_volume INTEGER,
  difficulty INTEGER,
  cpc DECIMAL(10,2),
  intent VARCHAR(50),
  tags TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(project_id, keyword)
);

CREATE INDEX IF NOT EXISTS idx_keywords_project ON keywords(project_id);
CREATE INDEX IF NOT EXISTS idx_keywords_volume ON keywords(search_volume DESC NULLS LAST);
CREATE INDEX IF NOT EXISTS idx_keywords_difficulty ON keywords(difficulty ASC NULLS LAST);

-- Rankings table (time-series with TimescaleDB)
CREATE TABLE IF NOT EXISTS rankings (
  time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  keyword_id UUID NOT NULL REFERENCES keywords(id) ON DELETE CASCADE,
  search_engine VARCHAR(50) NOT NULL DEFAULT 'google',
  location VARCHAR(100) NOT NULL DEFAULT 'US',
  device VARCHAR(20) NOT NULL DEFAULT 'desktop',
  position INTEGER,
  url TEXT,
  serp_features JSONB,
  PRIMARY KEY (time, keyword_id, search_engine, location, device)
);

-- Convert rankings to hypertable for time-series optimization
SELECT create_hypertable('rankings', 'time', if_not_exists => TRUE);

-- Create indexes for rankings
CREATE INDEX IF NOT EXISTS idx_rankings_keyword ON rankings(keyword_id, time DESC);
CREATE INDEX IF NOT EXISTS idx_rankings_engine_location ON rankings(search_engine, location, time DESC);

-- Competitors table
CREATE TABLE IF NOT EXISTS competitors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  domain VARCHAR(255) NOT NULL,
  added_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(project_id, domain)
);

CREATE INDEX IF NOT EXISTS idx_competitors_project ON competitors(project_id);

-- Competitor keywords table
CREATE TABLE IF NOT EXISTS competitor_keywords (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  competitor_id UUID NOT NULL REFERENCES competitors(id) ON DELETE CASCADE,
  keyword TEXT NOT NULL,
  position INTEGER,
  search_volume INTEGER,
  url TEXT,
  checked_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_comp_keywords_competitor ON competitor_keywords(competitor_id);
CREATE INDEX IF NOT EXISTS idx_comp_keywords_position ON competitor_keywords(position);

-- Keyword lists
CREATE TABLE IF NOT EXISTS keyword_lists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_keyword_lists_project ON keyword_lists(project_id);

-- Keyword list items
CREATE TABLE IF NOT EXISTS keyword_list_items (
  list_id UUID NOT NULL REFERENCES keyword_lists(id) ON DELETE CASCADE,
  keyword TEXT NOT NULL,
  search_volume INTEGER,
  difficulty INTEGER,
  added_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (list_id, keyword)
);

CREATE INDEX IF NOT EXISTS idx_keyword_list_items_list ON keyword_list_items(list_id);

-- Create views for common queries
CREATE OR REPLACE VIEW v_keyword_stats AS
SELECT
  k.id,
  k.keyword,
  k.search_volume,
  k.difficulty,
  k.cpc,
  k.intent,
  COUNT(DISTINCT r.time) as ranking_records,
  MAX(r.position) as latest_position,
  AVG(r.position::numeric) as avg_position,
  k.created_at
FROM keywords k
LEFT JOIN rankings r ON k.id = r.keyword_id
GROUP BY k.id, k.keyword, k.search_volume, k.difficulty, k.cpc, k.intent, k.created_at;

-- Add updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER projects_updated_at BEFORE UPDATE ON projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER keywords_updated_at BEFORE UPDATE ON keywords
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER keyword_lists_updated_at BEFORE UPDATE ON keyword_lists
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER competitors_updated_at BEFORE UPDATE ON competitors
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
