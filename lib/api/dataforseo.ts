import axios, { AxiosInstance } from 'axios';

interface DataForSEOConfig {
  login: string;
  password: string;
  baseURL?: string;
}

interface SERPRequest {
  keyword: string;
  location_code?: number;
  language_code?: string;
  device?: string;
  depth?: number;
  max_age?: number;
}

interface KeywordMetricsRequest {
  keywords: string[];
  location_code?: number;
  language_code?: string;
  max_age?: number;
}

interface KeywordSuggestionsRequest {
  keyword: string;
  location_code?: number;
  language_code?: string;
  include_seed_keyword?: boolean;
  limit?: number;
}

export class DataForSEOClient {
  private client: AxiosInstance;

  constructor(config: DataForSEOConfig) {
    this.client = axios.create({
      baseURL: config.baseURL || 'https://api.dataforseo.com/v3',
      auth: {
        username: config.login,
        password: config.password,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Get rankings for a keyword from Google SERP
   */
  async getGoogleRankings(request: SERPRequest) {
    try {
      const response = await this.client.post('/serp/google/organic/live/advanced', [
        {
          keyword: request.keyword,
          location_code: request.location_code || 2840, // US by default
          language_code: request.language_code || 'en',
          device: request.device || 'desktop',
          depth: request.depth || 100,
          max_age: request.max_age || 86400000, // 24 hours
        },
      ]);

      return response.data.tasks[0]?.result?.[0] || null;
    } catch (error: any) {
      console.error('DataForSEO Google SERP error:', error.message);
      throw error;
    }
  }

  /**
   * Get keyword metrics (volume, difficulty, CPC, etc.)
   */
  async getKeywordMetrics(request: KeywordMetricsRequest) {
    try {
      const response = await this.client.post(
        '/keywords_data/google_ads/keywords_for_keywords/live',
        [
          {
            keywords: request.keywords,
            location_code: request.location_code || 2840,
            language_code: request.language_code || 'en',
            max_age: request.max_age || 2592000000, // 30 days
          },
        ]
      );

      return response.data.tasks[0]?.result || [];
    } catch (error: any) {
      console.error('DataForSEO keyword metrics error:', error.message);
      throw error;
    }
  }

  /**
   * Get keyword suggestions
   */
  async getKeywordSuggestions(request: KeywordSuggestionsRequest) {
    try {
      const response = await this.client.post(
        '/dataforseo_labs/keyword_suggestions/live',
        [
          {
            keyword: request.keyword,
            location_code: request.location_code || 2840,
            language_code: request.language_code || 'en',
            include_seed_keyword: request.include_seed_keyword !== false,
            limit: request.limit || 100,
          },
        ]
      );

      return response.data.tasks[0]?.result || [];
    } catch (error: any) {
      console.error('DataForSEO suggestions error:', error.message);
      throw error;
    }
  }

  /**
   * Get competitor ranked keywords
   */
  async getCompetitorKeywords(domain: string, location: number = 2840) {
    try {
      const response = await this.client.post(
        '/dataforseo_labs/ranked_keywords/live',
        [
          {
            target: domain,
            location_code: location,
            language_code: 'en',
            limit: 1000,
          },
        ]
      );

      return response.data.tasks[0]?.result || [];
    } catch (error: any) {
      console.error('DataForSEO competitor keywords error:', error.message);
      throw error;
    }
  }

  /**
   * Find SERP competitors for a keyword
   */
  async getSERPCompetitors(keyword: string, location: number = 2840) {
    try {
      const response = await this.client.post(
        '/dataforseo_labs/serp_competitors/live',
        [
          {
            keyword: keyword,
            location_code: location,
            language_code: 'en',
            depth: 20,
          },
        ]
      );

      return response.data.tasks[0]?.result || {};
    } catch (error: any) {
      console.error('DataForSEO SERP competitors error:', error.message);
      throw error;
    }
  }
}

// Create a singleton instance
let instance: DataForSEOClient | null = null;

export function getDataForSEOClient(): DataForSEOClient {
  if (!instance) {
    const login = process.env.DATAFORSEO_LOGIN;
    const password = process.env.DATAFORSEO_PASSWORD;

    if (!login || !password) {
      throw new Error(
        'DataForSEO credentials not configured. Set DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD.'
      );
    }

    instance = new DataForSEOClient({ login, password });
  }

  return instance;
}
