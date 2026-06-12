#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { MongoClient } = require('mongodb')

function getEnvVar(name) {
  if (process.env[name]) return process.env[name]
  // try to read .env.local in project root
  try {
    const envPath = path.join(process.cwd(), '.env.local')
    const txt = fs.readFileSync(envPath, 'utf8')
    const match = txt.match(new RegExp(`${name}=(?:\"([^\"]+)\"|([^\n]+))`))
    if (match) return match[1] || match[2]
  } catch (e) {
    // ignore
  }
  return null
}

async function main() {
  const uri = getEnvVar('MONGODB_URI')
  if (!uri) {
    console.error('MONGODB_URI not found in env or .env.local')
    process.exit(1)
  }

  const client = new MongoClient(uri, { useUnifiedTopology: true })
  try {
    await client.connect()
    // use database name 'nepalhikingpartner' explicitly
    const dbName = 'nepalhikingpartner'
    const db = client.db(dbName)

    // create collection if not exists
    const colls = await db.listCollections({ name: 'reviews' }).toArray()
    if (colls.length === 0) {
      await db.createCollection('reviews')
      console.log('Created collection: reviews')
    } else {
      console.log('Collection already exists: reviews')
    }

    const coll = db.collection('reviews')

    // create useful indexes
    await coll.createIndex({ trekId: 1, createdAt: -1 })
    await coll.createIndex({ rating: -1 })
    await coll.createIndex({ comment: 'text' })

    console.log('Indexes created: trekId, rating, text on comment')
  } catch (err) {
    console.error('Failed to initialize DB:', err && err.message)
    process.exit(1)
  } finally {
    await client.close()
  }
}

main()
