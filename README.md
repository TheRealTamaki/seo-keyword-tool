# SEO Keyword Tool

A personal SEO keyword research and rank tracking tool powered by DataForSEO API.

## Overview

This is a lightweight SEO tool focused on:
- **Rank Tracking**: Monitor your keyword rankings across search engines
- **Keyword Research**: Discover high-value keywords with metrics
- **Competitor Analysis**: Analyze competitors and find keyword gaps
- **Reporting**: Generate comprehensive reports and analytics

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Recharts** - Data visualization
- **React Query** - Data fetching and caching
- **React Table** - Advanced table component

### Backend
- **Node.js + Express** - REST API
- **PostgreSQL 14+** - Main database
- **TimescaleDB** - Time-series data for rankings
- **Redis** - Caching and job queue
- **BullMQ** - Job processing

### External APIs
- **DataForSEO API** - SERP, keyword data, competitor analysis

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── lib/                   # Utility functions
│   ├── api/              # API integrations
│   │   ├── dataforseo.ts # DataForSEO client
│   │   └── cache.ts      # Redis caching
│   └── db/               # Database utilities
│       └── config.ts     # Database connection
├── scripts/              # Database and setup scripts
│   ├── migrations.sql    # Database schema
│   └── init-db.js        # Database initialization
├── docs/                 # Documentation
│   └── SEO_Keyword_Tool_PRD.md
├── public/               # Static assets
├── .env.example          # Environment variables template
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── next.config.js        # Next.js configuration
```

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Redis 7+
- DataForSEO API credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd seo-keyword-tool
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Initialize the database**
   ```bash
   npm run db:init
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/seo_keyword_tool
DATABASE_POOL_SIZE=20

# Redis
REDIS_URL=redis://localhost:6379

# DataForSEO API
DATAFORSEO_LOGIN=your_login
DATAFORSEO_PASSWORD=your_password

# JWT
JWT_SECRET=your_jwt_secret_key_here_minimum_32_characters

# Next.js
NEXT_PUBLIC_APP_NAME=SEO Keyword Tool
```

## Development Phases

### Phase 1: MVP (Weeks 1-3) - Current
- [ ] Project setup and foundation
- [ ] Database schema
- [ ] User authentication
- [ ] DataForSEO API integration
- [ ] Rank tracking module
- [ ] Dashboard

### Phase 2: Keyword Research (Weeks 4-6)
- [ ] Keyword discovery interface
- [ ] Keyword metrics API integration
- [ ] Search intent classification
- [ ] Opportunity scoring
- [ ] Save keywords to lists

### Phase 3: Competitor Analysis (Weeks 7-9)
- [ ] Competitor keyword tracking
- [ ] Gap analysis
- [ ] Competitive benchmarking
- [ ] Share of voice calculation

### Phase 4: Reporting & Polish (Weeks 10-12)
- [ ] Report generation
- [ ] PDF/Excel export
- [ ] Scheduled reports
- [ ] Performance optimization
- [ ] Mobile responsiveness

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:init` - Initialize database
- `npm run db:migrate` - Run database migrations

## Database

### Setup PostgreSQL

```bash
# Create database
createdb seo_keyword_tool

# Connect to the database
psql seo_keyword_tool

# Run migrations (via script)
npm run db:init
```

### Key Tables

- **projects** - User projects (domain tracking)
- **keywords** - Keywords being tracked
- **rankings** - Time-series ranking data (TimescaleDB hypertable)
- **competitors** - Competitor domains
- **competitor_keywords** - Competitor keyword rankings
- **keyword_lists** - Saved keyword collections

## API Integration

### DataForSEO Client

```typescript
import { getDataForSEOClient } from '@/lib/api/dataforseo';

const client = getDataForSEOClient();

// Get rankings
const rankings = await client.getGoogleRankings({
  keyword: 'seo tools',
  location_code: 2840, // US
});

// Get keyword metrics
const metrics = await client.getKeywordMetrics({
  keywords: ['seo', 'keyword research'],
});
```

### Caching

```typescript
import { cachedApiCall, generateSERPCacheKey } from '@/lib/api/cache';

const cacheKey = generateSERPCacheKey('seo tools');
const rankings = await cachedApiCall(
  cacheKey,
  86400, // 24 hours in seconds
  () => client.getGoogleRankings({ keyword: 'seo tools' })
);
```

## Cost Optimization

The PRD estimates monthly costs:

| Usage Level | API Costs | Infrastructure | Total      |
|-------------|-----------|----------------|------------|
| Light       | $25       | $15            | **$40**    |
| Medium      | $60       | $15            | **$75**    |
| Heavy       | $120      | $15            | **$135**   |

### Tips to Minimize Costs
- Use aggressive caching (saves ~70% of API calls)
- Use `max_age` parameter for cached results
- Track only critical keywords daily
- Run competitor analysis weekly, not daily
- Batch all API requests

## Contributing

Contributions are welcome! Please follow these guidelines:
1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT License - See LICENSE file for details

## Support

For issues and questions, please check the documentation or create an issue in the repository.

## Roadmap

See [SEO_Keyword_Tool_PRD.md](./docs/SEO_Keyword_Tool_PRD.md) for detailed product requirements and roadmap.
