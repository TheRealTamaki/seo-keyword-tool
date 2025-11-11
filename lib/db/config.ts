import { Client, Pool } from 'pg';

let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: parseInt(process.env.DATABASE_POOL_SIZE || '20', 10),
    });
  }
  return pool;
}

export async function query<T = any>(
  text: string,
  params?: (string | number | boolean | null)[]
): Promise<{ rows: T[]; rowCount: number }> {
  const pool = getPool();
  const result = await pool.query(text, params);
  return {
    rows: result.rows as T[],
    rowCount: result.rowCount || 0,
  };
}

export async function queryOne<T = any>(
  text: string,
  params?: (string | number | boolean | null)[]
): Promise<T | null> {
  const result = await query<T>(text, params);
  return result.rows[0] || null;
}

export async function execute(
  text: string,
  params?: (string | number | boolean | null)[]
): Promise<number> {
  const result = await query(text, params);
  return result.rowCount;
}

export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
  }
}
