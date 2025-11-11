# Product Requirements Document (PRD)
# Personal SEO Keyword Research & Rank Tracking Tool

**Version:** 1.0  
**Last Updated:** November 11, 2025  
**Powered By:** DataForSEO API  
**Purpose:** Keyword research and rank tracking for personal website optimization

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Product Vision](#product-vision)
3. [Core Features](#core-features)
4. [Technical Architecture](#technical-architecture)
5. [API Integration](#api-integration)
6. [User Interface](#user-interface)
7. [Data Requirements](#data-requirements)
8. [Development Plan](#development-plan)
9. [Cost Estimates](#cost-estimates)

---

## 1. Executive Summary

A lightweight SEO tool focused exclusively on keyword research and rank tracking. This tool will help you discover profitable keywords, track your rankings, analyze competitors, and make data-driven content decisions.

### Key Goals
- Find high-value keywords with low competition
- Track rankings across Google, Bing, and YouTube
- Monitor competitor keyword strategies
- Simple, fast, cost-effective

---

## 2. Product Vision

**Vision:** A simple, powerful keyword tool that answers three questions:
1. What keywords should I target?
2. Where do I rank for my keywords?
3. What are my competitors doing?

**Non-Goals:**
- ❌ Backlink analysis
- ❌ Technical SEO audits
- ❌ Content optimization
- ❌ Local SEO tracking

---

## 3. Core Features

### 3.1 Rank Tracking Module

**API Used:** SERP API (Google, Bing, YouTube)

#### Features:

**Multi-Engine Tracking:**
- Google desktop rankings
- Google mobile rankings
- YouTube video rankings
- Bing rankings (optional)

**Location Targeting:**
- Track rankings for specific countries
- Multiple locations per keyword
- City/region level tracking

**Tracking Configuration:**
- Configurable update frequency (daily/weekly/monthly)
- Track up to 10 competitor domains
- SERP feature detection (Featured Snippets, PAA, Images, Videos)
- Unlimited historical data storage

**Analytics & Metrics:**
- Current ranking position
- Position change (daily/weekly/monthly)
- Visibility score (weighted by search volume)
- Estimated traffic from rankings
- Ranking distribution chart (positions 1-3, 4-10, 11-20, 21+)
- Best/worst performing keywords
- Average position across all keywords
- Share of voice vs competitors

**SERP Features Tracking:**
- Featured Snippets
- People Also Ask
- Knowledge Panel
- Image Pack
- Video Carousel
- Shopping Results
- Top Stories

#### Key Views:

**Overview Dashboard:**
- Total keywords tracked
- Average position
- Position changes (up/down/same)
- Visibility score trend

**Keyword Table:**
```
| Keyword           | Position | Change | Volume | URL           | SERP Features |
|-------------------|----------|--------|--------|---------------|---------------|
| example keyword   | 3        | ↑ +2   | 12.1K  | /page1        | Featured Snip |
| another keyword   | 12       | ↓ -1   | 8.2K   | /page2        | -             |
| local keyword     | 7        | →  0   | 3.4K   | /local        | PAA, Images   |
```

**Ranking Graphs:**
- Line charts showing position over time
- Compare multiple keywords
- Overlay competitor positions
- Mark SERP feature wins

**Competitor Comparison:**
- Side-by-side ranking comparison
- Track competitor position changes
- Identify keywords where competitors rank but you don't

---

### 3.2 Keyword Research Tool

**API Used:** Keyword Data API (Google Ads, Google Trends), DataForSEO Labs API

#### Features:

**Keyword Discovery:**
- Seed keyword expansion
- Related keywords (semantic variations)
- Question keywords (who, what, where, when, why, how)
- Long-tail keyword suggestions
- Search suggestions (autocomplete data)
- Keywords by competitor domain

**Keyword Metrics:**
- Monthly search volume
- 12-month historical search volume
- Keyword difficulty score (0-100)
- Cost per click (CPC)
- Competition level (Low/Medium/High)
- Seasonal trends
- Year-over-year trends

**Advanced Analysis:**
- Search intent classification
  - Informational (how to, what is, guide)
  - Navigational (brand names, login)
  - Transactional (buy, best, review)
  - Commercial (vs, comparison, alternative)
- SERP analysis for each keyword
- Top 10 ranking URLs
- Domain authority of top rankers
- Content types ranking (blog, product, video, etc.)

**Keyword Organization:**
- Save keywords to lists
- Tag keywords by topic/category
- Group keywords by intent
- Create keyword clusters
- Export to CSV

**Opportunity Scoring:**
- Automatic priority score: `(Search Volume / Difficulty) * Intent Weight`
- Quick win identification (high volume, low difficulty)
- Low-hanging fruit (positions 11-20)
- Content gap keywords

#### Key Views:

**Research Dashboard:**
```
Enter seed keyword: [_____________] [Search]

Results: 247 keywords found

Filters: 
☐ Volume > 1000   ☐ Difficulty < 50   ☐ Questions Only
☐ Long-tail (3+ words)   ☐ Commercial Intent

Sort by: [Opportunity Score ▼]

| Keyword              | Volume | Difficulty | CPC   | Trend | Intent        | Score |
|----------------------|--------|------------|-------|-------|---------------|-------|
| seed keyword guide   | 12.1K  | 32         | $1.80 | 📈    | Informational | 9.2   |
| best seed keyword    | 8.2K   | 45         | $3.40 | 📊    | Commercial    | 7.8   |
| what is seed keyword | 3.4K   | 18         | $0.50 | 📉    | Informational | 8.9   |

[Save Selected] [Add to Tracking] [Export CSV]
```

**Keyword Details View:**
- Search volume trend graph (12 months)
- SERP preview with top 10 results
- Related questions (PAA)
- Related searches
- Seasonal pattern analysis

**Keyword Lists:**
- Saved keyword collections
- Edit/delete lists
- Bulk operations
- Share/export

---

### 3.3 Competitor Keyword Analysis

**API Used:** DataForSEO Labs API, SERP API

#### Features:

**Competitor Discovery:**
- Identify SERP competitors (not just business competitors)
- Find domains ranking for your target keywords
- Add up to 10 competitors for tracking

**Competitor Intelligence:**
- See ALL keywords a competitor ranks for
- Filter by ranking position (1-3, 4-10, 11-20, 21+)
- Estimated traffic from organic rankings
- Top performing competitor pages
- Ranking history trends

**Keyword Gap Analysis:**
- Keywords competitors rank for that you don't
- Keyword overlap (both you and competitor rank)
- Keywords you rank for that competitors don't
- Difficulty assessment for gap keywords
- Priority scoring for gaps

**Competitive Benchmarking:**
- Compare visibility scores
- Compare average positions
- Compare ranking distribution
- Share of voice in your niche
- Historical performance comparison

**Opportunity Identification:**
- Keywords where competitors rank 4-20 (easier to outrank)
- High-volume keywords competitors are missing
- Content topics competitors are covering
- SERP feature opportunities

#### Key Views:

**Competitor Overview:**
```
Competitor: competitor.com

Total Ranked Keywords: 2,847
Estimated Organic Traffic: 45.2K/month
Average Position: 18
Visibility Score: 67/100

Top Keywords:
| Keyword          | Position | Volume | Your Position |
|------------------|----------|--------|---------------|
| main keyword     | 3        | 22.1K  | 12           |
| competitor term  | 1        | 18.5K  | Not Ranking  |
```

**Keyword Gap Matrix:**
```
                    You    Competitor1    Competitor2
Total Keywords:     234         2,847         1,923
Shared Keywords:     89           89            76
Unique Keywords:    145         2,758         1,847

Gap Opportunities: 432 keywords (competitors rank, you don't)
Priority Targets: 87 keywords (high volume, low competition)
```

**Gap Analysis Table:**
```
| Keyword               | Who Ranks    | Position | Volume | Difficulty | Priority |
|-----------------------|--------------|----------|--------|------------|----------|
| competitor keyword 1  | Comp1, Comp2 | 3, 7     | 12.1K  | 38        | High     |
| competitor keyword 2  | Comp1        | 5        | 8.2K   | 42        | Medium   |
| competitor keyword 3  | Comp2        | 9        | 15.3K  | 56        | Medium   |
```

---

### 3.4 Dashboard & Reporting

#### Main Dashboard:

**Overview Metrics (Cards):**
- Total Keywords Tracked: 234
- Average Position: 18.4 (↑ 2.1)
- Visibility Score: 72/100 (↑ 5)
- Estimated Traffic: 12.5K/month (↑ 1.2K)
- Keywords in Top 3: 23 (↑ 4)
- Keywords in Top 10: 89 (↑ 12)

**Recent Changes (Last 7 Days):**
```
↑ Biggest Gains:
  • "keyword 1" moved from #15 → #8 (+7)
  • "keyword 2" moved from #23 → #12 (+11)

↓ Biggest Losses:
  • "keyword 3" dropped from #8 → #14 (-6)
  • "keyword 4" dropped from #5 → #9 (-4)

🆕 New Rankings:
  • "keyword 5" entered top 100 at #47
```

**Visualization Widgets:**
- Position distribution pie chart
- Ranking trend line graph (30/90 days)
- Keyword performance table (sortable)
- Competitor comparison bars
- SERP feature wins timeline

**Quick Actions:**
- Add new keywords to track
- Run keyword research
- Check competitor gaps
- Generate report
- Export data

#### Reporting:

**Report Types:**
1. **Ranking Report**
   - Period comparison (week/month/quarter)
   - Position changes
   - Best/worst performers
   - SERP feature wins/losses

2. **Keyword Research Report**
   - Discovered keywords summary
   - Top opportunities
   - Competitive landscape
   - Recommended targets

3. **Competitor Analysis Report**
   - Gap analysis summary
   - Competitive positioning
   - Opportunity assessment
   - Action items

**Export Formats:**
- PDF (formatted report with charts)
- CSV (raw data)
- Excel (formatted spreadsheet with multiple sheets)
- Google Sheets (direct integration)

**Scheduled Reports:**
- Weekly summary email
- Monthly performance digest
- Custom schedules

---

## 4. Technical Architecture

### 4.1 System Architecture

```
┌─────────────────────────────────┐
│     Frontend (React/Next.js)    │
│   • Dashboard                   │
│   • Keyword Research UI         │
│   • Rank Tracking UI            │
│   • Reports                     │
└─────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│      Backend API                │
│   • REST API                    │
│   • Authentication              │
│   • Business Logic              │
│   • Background Jobs             │
└─────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│   DataForSEO Integration        │
│   • SERP API                    │
│   • Keyword Data API            │
│   • DataForSEO Labs API         │
│   • Caching Layer               │
└─────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────┐
│      Data Storage               │
│   • PostgreSQL (main data)      │
│   • TimescaleDB (rankings)      │
│   • Redis (cache)               │
└─────────────────────────────────┘
```

### 4.2 Technology Stack

**Frontend:**
- React with Next.js 14+ (App Router)
- Tailwind CSS for styling
- shadcn/ui for components
- Recharts for data visualization
- TanStack Table for data tables
- React Query for API state management

**Backend:**
- Node.js + Express OR
- Python + FastAPI
- JWT authentication
- BullMQ for job queue (Redis-based)

**Database:**
- PostgreSQL 14+ (main database)
- TimescaleDB extension (time-series rankings)
- Redis 7+ (caching + queue)

**Deployment:**
- **Option 1 (Easiest):** Vercel (frontend) + Railway (backend+db)
- **Option 2 (Cheapest):** Single VPS (DigitalOcean $12/mo)
- **Option 3 (Free):** Self-hosted + Cloudflare Tunnel

### 4.3 API Optimization Strategy

**Caching Rules:**
- Rankings: 24 hours
- Keyword metrics: 30 days
- SERP data: 24 hours
- Competitor data: 7 days

**Use maxAge Parameter:**
```javascript
// 500% faster by using cached DataForSEO results
{
  "keyword": "example",
  "max_age": 172800000  // 48 hours
}
```

**Batch Operations:**
- Check up to 100 keywords in one request
- Batch keyword research (1000 keywords per request)
- Queue non-urgent updates

**Smart Scheduling:**
- High-priority keywords: Daily
- Medium priority: 3x/week
- Low priority: Weekly
- Historical snapshots: Monthly

---

## 5. API Integration

### 5.1 SERP API (Rank Tracking)

**Endpoint:**
```
POST /v3/serp/google/organic/live/advanced
```

**Request Example:**
```json
[{
  "keyword": "seo keyword tool",
  "location_code": 2840,  // United States
  "language_code": "en",
  "device": "desktop",
  "depth": 100,
  "max_age": 86400000  // Use 24h cache if available
}]
```

**What to Store:**
- Your domain's ranking position
- URL that's ranking
- SERP features present
- Top 10 competitor domains
- Timestamp

**Update Frequency:**
- Critical keywords: Daily (7am)
- Important keywords: Mon/Wed/Fri
- General keywords: Weekly (Monday)

---

### 5.2 Keyword Data API

**Endpoint:**
```
POST /v3/keywords_data/google_ads/keywords_for_keywords/live
```

**Request Example:**
```json
[{
  "keywords": ["keyword1", "keyword2", ...],  // Up to 1000
  "location_code": 2840,
  "language_code": "en",
  "max_age": 2592000000  // Use 30-day cache
}]
```

**What to Store:**
- Search volume (monthly)
- Keyword difficulty
- CPC
- Competition level
- Last updated timestamp

**Update Frequency:**
- New keywords: Immediate
- Existing keywords: Monthly refresh

---

### 5.3 DataForSEO Labs API

**Key Endpoints:**

**1. Keyword Suggestions:**
```
POST /v3/dataforseo_labs/keyword_suggestions/live
```

**2. Related Keywords:**
```
POST /v3/dataforseo_labs/related_keywords/live
```

**3. Competitor Ranked Keywords:**
```
POST /v3/dataforseo_labs/ranked_keywords/live
```

**4. SERP Competitors:**
```
POST /v3/dataforseo_labs/serp_competitors/live
```

**What to Store:**
- Discovered keywords
- Competitor keyword mappings
- Ranking positions
- Traffic estimates

---

## 6. User Interface

### 6.1 Navigation Structure

```
┌─────────────────────────────────────┐
│  [Logo]           [Search]  [User]  │
├─────────────────────────────────────┤
│ • Dashboard                         │
│ • Rank Tracking                     │
│ • Keyword Research                  │
│ • Competitor Analysis               │
│ • Reports                           │
└─────────────────────────────────────┘
```

### 6.2 Dashboard Layout

```
┌─────────────────────────────────────────────────────┐
│  Dashboard                                          │
├─────────────────────────────────────────────────────┤
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐   │
│  │ Total  │  │  Avg   │  │Visible │  │Traffic │   │
│  │ Keys   │  │  Pos   │  │ Score  │  │ Est.   │   │
│  │  234   │  │  18.4  │  │ 72/100 │  │ 12.5K  │   │
│  └────────┘  └────────┘  └────────┘  └────────┘   │
│                                                     │
│  ┌──────────────────────────────────────────────┐  │
│  │  Ranking Trend (Last 30 Days)                │  │
│  │  [Line Chart]                                │  │
│  └──────────────────────────────────────────────┘  │
│                                                     │
│  Recent Changes                                     │
│  ┌──────────────────────────────────────────────┐  │
│  │ keyword 1    12 → 8    ↑ +4    📈           │  │
│  │ keyword 2    23 → 12   ↑ +11   📈           │  │
│  │ keyword 3    8 → 14    ↓ -6    📉           │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

### 6.3 Rank Tracking Interface

**Filters Bar:**
```
[Search Engine: Google ▼] [Location: US ▼] [Device: Desktop ▼]
[Date Range: Last 30 Days ▼] [Change: All ▼]
```

**Table View:**
```
| ☐ | Keyword        | Position | Change | Volume | URL       | Chart |
|---|----------------|----------|--------|--------|-----------|-------|
| ☐ | keyword 1      | 8        | ↑ +4   | 12.1K  | /page1    | 📈    |
| ☐ | keyword 2      | 12       | ↓ -1   | 8.2K   | /page2    | 📊    |
| ☐ | keyword 3      | 3        | →  0   | 22.4K  | /best     | 📈    |

Bulk Actions: [Export] [Add Tags] [Remove]
```

**Keyword Detail View:**
- Position history graph
- SERP preview
- Competitor positions
- SERP features timeline

### 6.4 Keyword Research Interface

**Search Input:**
```
┌────────────────────────────────────────────┐
│  🔍  Enter seed keyword...                 │
│                                             │
│  Or analyze competitor: [domain.com]       │
└────────────────────────────────────────────┘
      [Find Keywords]
```

**Results Table:**
```
Showing 247 results | Save: [Name list] [💾]

| ☐ | Keyword          | Volume | Diff | CPC   | Intent | Score | Actions |
|---|------------------|--------|------|-------|--------|-------|---------|
| ☐ | keyword guide    | 12.1K  | 32   | $1.80 | Info   | 9.2   | [Track] |
| ☐ | best keyword     | 8.2K   | 45   | $3.40 | Comm   | 7.8   | [Track] |
| ☐ | what is keyword  | 3.4K   | 18   | $0.50 | Info   | 8.9   | [Track] |

Bulk: [Add to Tracking] [Save to List] [Export CSV]
```

### 6.5 Competitor Analysis Interface

**Competitor Selector:**
```
Your Domain: [yourdomain.com]

Competitors:
[competitor1.com] [×]
[competitor2.com] [×]
[+ Add Competitor]
```

**Gap Analysis View:**
```
┌─────────────────────────────────────────────────────┐
│  Keyword Gap Analysis                               │
│                                                     │
│  You: 234 keywords | Comp1: 2,847 | Comp2: 1,923  │
│                                                     │
│  [Venn Diagram showing overlap]                    │
│                                                     │
│  Gap Opportunities: 432 keywords                   │
│  Priority: 87 keywords (high volume, low diff)    │
└─────────────────────────────────────────────────────┘

Filters: [Volume > 1000] [Difficulty < 50] [All Competitors]

| ☐ | Keyword         | Ranks      | Pos | Volume | Diff | Priority |
|---|-----------------|------------|-----|--------|------|----------|
| ☐ | gap keyword 1   | C1, C2     | 3,7 | 12.1K  | 38   | High     |
| ☐ | gap keyword 2   | C1         | 5   | 8.2K   | 42   | Medium   |

[Add Selected to Tracking] [Export]
```

---

## 7. Data Requirements

### 7.1 Database Schema

**Projects Table:**
```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  domain VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Keywords Table:**
```sql
CREATE TABLE keywords (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  keyword TEXT NOT NULL,
  search_volume INTEGER,
  difficulty INTEGER,
  cpc DECIMAL(10,2),
  intent VARCHAR(50),
  tags TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(project_id, keyword)
);

CREATE INDEX idx_keywords_project ON keywords(project_id);
CREATE INDEX idx_keywords_volume ON keywords(search_volume DESC);
```

**Rankings Table (Time-Series):**
```sql
CREATE TABLE rankings (
  time TIMESTAMPTZ NOT NULL,
  keyword_id UUID REFERENCES keywords(id) ON DELETE CASCADE,
  search_engine VARCHAR(50) NOT NULL,
  location VARCHAR(100) NOT NULL,
  device VARCHAR(20) NOT NULL,
  position INTEGER,
  url TEXT,
  serp_features JSONB,
  PRIMARY KEY (time, keyword_id, search_engine, location, device)
);

-- Convert to hypertable for time-series optimization
SELECT create_hypertable('rankings', 'time');

-- Create indexes
CREATE INDEX idx_rankings_keyword ON rankings(keyword_id, time DESC);
```

**Competitors Table:**
```sql
CREATE TABLE competitors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  domain VARCHAR(255) NOT NULL,
  added_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(project_id, domain)
);
```

**Competitor Keywords Table:**
```sql
CREATE TABLE competitor_keywords (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  competitor_id UUID REFERENCES competitors(id) ON DELETE CASCADE,
  keyword TEXT NOT NULL,
  position INTEGER,
  search_volume INTEGER,
  url TEXT,
  checked_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_comp_keywords ON competitor_keywords(competitor_id, position);
```

**Keyword Lists Table:**
```sql
CREATE TABLE keyword_lists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE keyword_list_items (
  list_id UUID REFERENCES keyword_lists(id) ON DELETE CASCADE,
  keyword TEXT NOT NULL,
  search_volume INTEGER,
  difficulty INTEGER,
  added_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (list_id, keyword)
);
```

### 7.2 Data Retention

**Rankings:**
- Keep forever (essential historical data)
- Compress data older than 90 days

**Keyword Metrics:**
- Update monthly
- Keep all historical snapshots

**Competitor Data:**
- Weekly snapshots
- Keep 6 months of history

**Cache (Redis):**
- Rankings: 24h TTL
- Keyword data: 30d TTL
- SERP data: 24h TTL
- Competitor data: 7d TTL

---

## 8. Development Plan

### Phase 1: MVP (Weeks 1-3)

**Week 1: Setup & Foundation**
- [ ] Set up project structure (Next.js + PostgreSQL)
- [ ] Database schema implementation
- [ ] User authentication (single user)
- [ ] DataForSEO API integration setup
- [ ] Basic caching with Redis

**Week 2: Rank Tracking**
- [ ] Add/manage keywords interface
- [ ] Integrate SERP API
- [ ] Store ranking data
- [ ] Display current rankings table
- [ ] Basic ranking history chart
- [ ] CSV export

**Week 3: Dashboard**
- [ ] Main dashboard with metrics cards
- [ ] Recent changes widget
- [ ] Position distribution chart
- [ ] Keyword performance table
- [ ] Testing and bug fixes

**MVP Deliverable:**
- Track 50-100 keywords
- View current rankings
- See ranking history
- Basic dashboard
- Export to CSV

---

### Phase 2: Keyword Research (Weeks 4-6)

**Week 4: Keyword Discovery**
- [ ] Keyword research interface
- [ ] Integrate Keyword Data API
- [ ] Display search volume, difficulty, CPC
- [ ] Keyword filtering and sorting
- [ ] Save keywords to lists

**Week 5: Advanced Research**
- [ ] Integrate Labs API for suggestions
- [ ] Related keywords
- [ ] Question keywords
- [ ] Intent classification
- [ ] Opportunity scoring

**Week 6: Enhancement**
- [ ] SERP preview for keywords
- [ ] Trend charts (Google Trends)
- [ ] Bulk operations
- [ ] One-click add to tracking
- [ ] Export keyword lists

**Phase 2 Deliverable:**
- Complete keyword research tool
- Discover 1000+ keywords
- Save to lists
- Priority scoring
- Add directly to tracking

---

### Phase 3: Competitor Analysis (Weeks 7-9)

**Week 7: Competitor Setup**
- [ ] Add/manage competitors interface
- [ ] Integrate ranked keywords API
- [ ] Display competitor keyword rankings
- [ ] Competitor overview metrics

**Week 8: Gap Analysis**
- [ ] Keyword gap calculation
- [ ] Gap analysis table
- [ ] Filter and sort gaps
- [ ] Priority scoring for gaps
- [ ] Visual gap representation

**Week 9: Competitive Intelligence**
- [ ] Competitor comparison charts
- [ ] Share of voice calculation
- [ ] Top competitor pages
- [ ] Opportunity identification
- [ ] Bulk add gap keywords to tracking

**Phase 3 Deliverable:**
- Track up to 10 competitors
- Identify keyword gaps
- Prioritize opportunities
- Competitive benchmarking

---

### Phase 4: Reporting & Polish (Weeks 10-12)

**Week 10: Reporting**
- [ ] Report generation system
- [ ] PDF export with charts
- [ ] Excel export (multi-sheet)
- [ ] Google Sheets integration
- [ ] Scheduled reports (email)

**Week 11: Optimization**
- [ ] Background job processing
- [ ] API cost optimization
- [ ] Performance tuning
- [ ] Mobile responsiveness
- [ ] PWA setup

**Week 12: Final Polish**
- [ ] UI/UX improvements
- [ ] Error handling
- [ ] Loading states
- [ ] User documentation
- [ ] Testing
- [ ] Deployment

**Phase 4 Deliverable:**
- Production-ready application
- Full reporting capabilities
- Optimized performance
- Mobile-friendly
- Documentation

---

## 9. Cost Estimates

### 9.1 DataForSEO API Costs

**Light Usage (~$15-25/month):**
- 100 keywords tracked daily: $3/month
- Keyword research (200 requests/month): $5/month
- 2 competitor analyses: $5/month
- SERP data for research: $5/month
- **Total: ~$18-25/month**

**Medium Usage (~$40-60/month):**
- 300 keywords tracked daily: $9/month
- Keyword research (500 requests/month): $15/month
- 5 competitor analyses: $15/month
- SERP data for research: $10/month
- **Total: ~$49-60/month**

**Heavy Usage (~$80-120/month):**
- 500 keywords tracked daily: $15/month
- Keyword research (1000 requests/month): $30/month
- 10 competitor analyses: $30/month
- Additional SERP data: $20/month
- **Total: ~$95-120/month**

### 9.2 Infrastructure Costs

**Option 1: Managed (Railway/Render)**
- Backend + PostgreSQL: $7-20/month
- Redis (Upstash free tier): $0
- Frontend (Vercel): $0
- **Total: $7-20/month**

**Option 2: VPS (DigitalOcean)**
- 2GB Droplet: $12/month
- Backups: $2.40/month
- **Total: $14-15/month**

**Option 3: Self-Hosted**
- Home server/old laptop: $0
- Cloudflare Tunnel: $0
- **Total: $0/month**

### 9.3 Total Monthly Costs

| Usage Level | API Costs | Infrastructure | Total      |
|-------------|-----------|----------------|------------|
| Light       | $25       | $15            | **$40**    |
| Medium      | $60       | $15            | **$75**    |
| Heavy       | $120      | $15            | **$135**   |

**Cost Optimization Tips:**
- Use aggressive caching (saves 70%)
- Use maxAge parameter (500% faster)
- Track only important keywords daily
- Run competitor analysis weekly, not daily
- Batch all API requests

---

## 10. Key Metrics & KPIs

### Product Metrics

**Keyword Tracking:**
- Total keywords tracked
- Average position across all keywords
- Visibility score
- Estimated monthly traffic
- Keywords in top 3/10/20

**Keyword Research:**
- Keywords discovered per session
- Keywords added to tracking
- Lists created
- Opportunity score distribution

**Competitor Analysis:**
- Competitors tracked
- Keyword gaps identified
- Gap keywords added to tracking

### Technical Metrics

**Performance:**
- Page load time < 2s
- API response time < 500ms
- Cache hit rate > 80%
- Background job success rate > 95%

**Cost Efficiency:**
- API cost per keyword per month
- Cache hit ratio
- Batch operation percentage

---

## Appendix A: API Endpoint Summary

### You'll Use These DataForSEO Endpoints:

**Rank Tracking:**
1. `/v3/serp/google/organic/live/advanced` - Google rankings
2. `/v3/serp/bing/organic/live/advanced` - Bing rankings (optional)
3. `/v3/serp/youtube/organic/live/advanced` - YouTube rankings (optional)

**Keyword Research:**
1. `/v3/keywords_data/google_ads/keywords_for_keywords/live` - Volume, CPC, competition
2. `/v3/keywords_data/google_trends/explore/live` - Trend data
3. `/v3/dataforseo_labs/keyword_suggestions/live` - Suggestions
4. `/v3/dataforseo_labs/related_keywords/live` - Related keywords
5. `/v3/dataforseo_labs/keyword_ideas/live` - More keyword ideas

**Competitor Analysis:**
1. `/v3/dataforseo_labs/ranked_keywords/live` - Competitor keywords
2. `/v3/dataforseo_labs/serp_competitors/live` - Find competitors
3. `/v3/dataforseo_labs/domain_intersection/live` - Keyword gaps

---

## Appendix B: Quick Start Code

### Database Setup (PostgreSQL)

```sql
-- Create extension for UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create extension for TimescaleDB
CREATE EXTENSION IF NOT EXISTS timescaledb;

-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  domain VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Keywords table
CREATE TABLE keywords (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  keyword TEXT NOT NULL,
  search_volume INTEGER,
  difficulty INTEGER,
  cpc DECIMAL(10,2),
  intent VARCHAR(50),
  tags TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(project_id, keyword)
);

-- Rankings table (time-series)
CREATE TABLE rankings (
  time TIMESTAMPTZ NOT NULL,
  keyword_id UUID REFERENCES keywords(id) ON DELETE CASCADE,
  search_engine VARCHAR(50) NOT NULL,
  location VARCHAR(100) NOT NULL,
  device VARCHAR(20) NOT NULL,
  position INTEGER,
  url TEXT,
  serp_features JSONB,
  PRIMARY KEY (time, keyword_id, search_engine, location, device)
);

-- Convert rankings to hypertable
SELECT create_hypertable('rankings', 'time');

-- Create indexes
CREATE INDEX idx_keywords_project ON keywords(project_id);
CREATE INDEX idx_rankings_keyword ON rankings(keyword_id, time DESC);
```

### DataForSEO Integration (Node.js)

```javascript
// lib/dataforseo.js
const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.dataforseo.com/v3',
  auth: {
    username: process.env.DATAFORSEO_LOGIN,
    password: process.env.DATAFORSEO_PASSWORD
  }
});

// Check rankings
async function checkRankings(keyword, location = 2840) {
  const response = await api.post('/serp/google/organic/live/advanced', [{
    keyword,
    location_code: location,
    language_code: 'en',
    device: 'desktop',
    depth: 100,
    max_age: 86400000  // 24h cache
  }]);
  
  return response.data.tasks[0].result[0];
}

// Keyword research
async function researchKeywords(seedKeyword, location = 2840) {
  const response = await api.post('/dataforseo_labs/keyword_suggestions/live', [{
    keyword: seedKeyword,
    location_code: location,
    language_code: 'en',
    include_seed_keyword: true,
    limit: 100
  }]);
  
  return response.data.tasks[0].result;
}

// Get keyword metrics
async function getKeywordMetrics(keywords, location = 2840) {
  const response = await api.post('/keywords_data/google_ads/keywords_for_keywords/live', [{
    keywords: keywords,
    location_code: location,
    language_code: 'en',
    max_age: 2592000000  // 30-day cache
  }]);
  
  return response.data.tasks[0].result;
}

// Competitor ranked keywords
async function getCompetitorKeywords(domain, location = 2840) {
  const response = await api.post('/dataforseo_labs/ranked_keywords/live', [{
    target: domain,
    location_code: location,
    language_code: 'en',
    limit: 1000
  }]);
  
  return response.data.tasks[0].result;
}

module.exports = {
  checkRankings,
  researchKeywords,
  getKeywordMetrics,
  getCompetitorKeywords
};
```

### Caching Layer (Redis)

```javascript
// lib/cache.js
const Redis = require('redis');
const client = Redis.createClient({
  url: process.env.REDIS_URL
});

client.connect();

async function getCached(key) {
  const data = await client.get(key);
  return data ? JSON.parse(data) : null;
}

async function setCached(key, value, ttlSeconds) {
  await client.setEx(key, ttlSeconds, JSON.stringify(value));
}

// Wrapper for DataForSEO calls with caching
async function cachedApiCall(cacheKey, ttlSeconds, apiFunction) {
  const cached = await getCached(cacheKey);
  if (cached) {
    console.log('Cache hit:', cacheKey);
    return cached;
  }
  
  console.log('Cache miss, calling API:', cacheKey);
  const data = await apiFunction();
  await setCached(cacheKey, data, ttlSeconds);
  return data;
}

module.exports = { getCached, setCached, cachedApiCall };
```

### Background Jobs (BullMQ)

```javascript
// jobs/rankingJobs.js
const { Queue, Worker } = require('bullmq');
const { checkRankings } = require('../lib/dataforseo');
const db = require('../lib/db');

const rankingQueue = new Queue('rankings', {
  connection: { host: 'localhost', port: 6379 }
});

// Add ranking check job
async function scheduleRankingCheck(keywordId, keyword, location) {
  await rankingQueue.add('check-ranking', {
    keywordId,
    keyword,
    location
  }, {
    repeat: { cron: '0 8 * * *' }  // Daily at 8 AM
  });
}

// Process ranking check jobs
const rankingWorker = new Worker('rankings', async (job) => {
  const { keywordId, keyword, location } = job.data;
  
  console.log(`Checking ranking for: ${keyword}`);
  const result = await checkRankings(keyword, location);
  
  // Find your domain in results
  const yourDomain = 'yourdomain.com';
  const yourPosition = result.items.findIndex(
    item => item.domain === yourDomain
  ) + 1;
  
  // Store in database
  await db.query(`
    INSERT INTO rankings (time, keyword_id, search_engine, location, device, position, url)
    VALUES (NOW(), $1, 'google', $2, 'desktop', $3, $4)
  `, [keywordId, location, yourPosition || null, result.items[yourPosition-1]?.url || null]);
  
  console.log(`Stored ranking: ${keyword} at position ${yourPosition}`);
}, {
  connection: { host: 'localhost', port: 6379 }
});

module.exports = { scheduleRankingCheck };
```

---

## Summary

This PRD outlines a focused keyword research and rank tracking tool that:

✅ **Tracks rankings** across Google, Bing, YouTube  
✅ **Discovers keywords** with volume, difficulty, and opportunity scoring  
✅ **Analyzes competitors** to find keyword gaps and opportunities  
✅ **Provides insights** through dashboards and reports  

**Estimated Timeline:** 12 weeks  
**Estimated Cost:** $40-135/month (depending on usage)  
**Focus:** Simple, fast, cost-effective keyword tool for personal use

---

**Start with Phase 1 MVP (3 weeks) to validate the concept, then expand based on what you actually use.**
