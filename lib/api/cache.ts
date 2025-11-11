import { createClient, RedisClientType } from 'redis';

let redisClient: RedisClientType | null = null;

async function getRedisClient(): Promise<RedisClientType> {
  if (!redisClient) {
    const url = process.env.REDIS_URL || 'redis://localhost:6379';
    redisClient = createClient({ url });

    redisClient.on('error', (err) => console.error('Redis Client Error', err));
    redisClient.on('connect', () => console.log('Redis Client Connected'));

    await redisClient.connect();
  }

  return redisClient;
}

export async function getCached<T>(key: string): Promise<T | null> {
  try {
    const client = await getRedisClient();
    const data = await client.get(key);
    return data ? (JSON.parse(data) as T) : null;
  } catch (error) {
    console.error('Cache get error:', error);
    return null;
  }
}

export async function setCached<T>(
  key: string,
  value: T,
  ttlSeconds: number = 3600
): Promise<void> {
  try {
    const client = await getRedisClient();
    await client.setEx(key, ttlSeconds, JSON.stringify(value));
  } catch (error) {
    console.error('Cache set error:', error);
  }
}

export async function deleteCached(key: string): Promise<void> {
  try {
    const client = await getRedisClient();
    await client.del(key);
  } catch (error) {
    console.error('Cache delete error:', error);
  }
}

export async function clearCache(pattern: string = '*'): Promise<void> {
  try {
    const client = await getRedisClient();
    const keys = await client.keys(pattern);
    if (keys.length > 0) {
      await client.del(keys);
    }
  } catch (error) {
    console.error('Cache clear error:', error);
  }
}

/**
 * Wrapper for API calls with caching
 */
export async function cachedApiCall<T>(
  cacheKey: string,
  ttlSeconds: number,
  apiFunction: () => Promise<T>
): Promise<T> {
  // Try to get from cache first
  const cached = await getCached<T>(cacheKey);
  if (cached) {
    console.log('Cache hit:', cacheKey);
    return cached;
  }

  // Cache miss, call API
  console.log('Cache miss, calling API:', cacheKey);
  const data = await apiFunction();

  // Store in cache
  await setCached(cacheKey, data, ttlSeconds);

  return data;
}

/**
 * Generate cache key for SERP results
 */
export function generateSERPCacheKey(
  keyword: string,
  location: string = 'US',
  device: string = 'desktop',
  engine: string = 'google'
): string {
  return `serp:${engine}:${location}:${device}:${keyword.toLowerCase()}`;
}

/**
 * Generate cache key for keyword metrics
 */
export function generateKeywordMetricsCacheKey(keywords: string[], location: string = 'US'): string {
  const keywordHash = keywords.sort().join('|').toLowerCase();
  return `metrics:${location}:${keywordHash}`;
}

/**
 * Generate cache key for keyword suggestions
 */
export function generateSuggestionsCacheKey(keyword: string, location: string = 'US'): string {
  return `suggestions:${location}:${keyword.toLowerCase()}`;
}

export async function closeRedisClient(): Promise<void> {
  if (redisClient) {
    await redisClient.quit();
    redisClient = null;
  }
}
