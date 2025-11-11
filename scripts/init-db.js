#!/usr/bin/env node

/**
 * Database initialization script
 * Run with: npm run db:init
 */

const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function initDatabase() {
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL is not set in .env file');
    process.exit(1);
  }

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    console.log('🔌 Connecting to database...');
    await client.connect();
    console.log('✅ Connected to database');

    // Read the migrations SQL file
    const migrationsPath = path.join(__dirname, 'migrations.sql');
    const sql = fs.readFileSync(migrationsPath, 'utf8');

    console.log('📝 Running migrations...');

    // Split by semicolon and execute each statement
    const statements = sql.split(';').filter(stmt => stmt.trim());

    for (let i = 0; i < statements.length; i++) {
      const stmt = statements[i].trim();
      if (stmt) {
        try {
          await client.query(stmt);
          console.log(`  ✓ Statement ${i + 1}/${statements.length}`);
        } catch (err) {
          // Some statements may fail if tables already exist, that's ok
          if (err.code !== '42P07' && err.code !== '42701') {
            console.warn(`  ⚠ Warning on statement ${i + 1}: ${err.message}`);
          }
        }
      }
    }

    console.log('✅ Database initialized successfully!');

  } catch (err) {
    console.error('❌ Database initialization failed:');
    console.error(err);
    process.exit(1);
  } finally {
    await client.end();
  }
}

initDatabase();
