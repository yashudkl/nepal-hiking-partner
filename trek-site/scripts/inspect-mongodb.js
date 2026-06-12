#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { MongoClient } = require('mongodb')

function getEnvVar(name) {
  if (process.env[name]) return process.env[name]
  try {
    const envPath = path.join(process.cwd(), '.env.local')
    const txt = fs.readFileSync(envPath, 'utf8')
    const match = txt.match(new RegExp(`${name}=(?:\"([^\"]+)\"|([^\n]+))`))
    if (match) return match[1] || match[2]
  } catch (e) {}
  return null
}

async function main() {
  const uri = getEnvVar('MONGODB_URI')
  if (!uri) {
    console.error('MONGODB_URI not found')
    process.exit(1)
  }
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const db = client.db('nepalhikingpartner')
    const coll = db.collection('reviews')
    const count = await coll.countDocuments()
    console.log('reviews count:', count)
    const docs = await coll.find().sort({ createdAt: -1 }).limit(5).toArray()
    console.log('sample docs:')
    console.dir(docs, { depth: null })
  } catch (err) {
    console.error('inspect failed', err.message)
  } finally {
    await client.close()
  }
}

main()
