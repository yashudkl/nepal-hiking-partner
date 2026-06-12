#!/usr/bin/env node
const { MongoClient } = require('mongodb')

async function main() {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    console.error('Please set MONGODB_URI environment variable to your cluster connection string')
    process.exit(1)
  }

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  try {
    await client.connect()
    const db = client.db('nepalhikingpartner')
    const coll = db.collection('reviews')

    // Adjust the filter below to match the "test" documents you want removed.
    const filter = {
      $or: [
        { name: /test/i },
        { comment: /test/i },
        { trekId: 'test' },
      ],
    }

    const res = await coll.deleteMany(filter)
    console.log(`Deleted ${res.deletedCount} documents matching filter`)
  } catch (err) {
    console.error('Error deleting test reviews:', err)
    process.exit(1)
  } finally {
    await client.close()
  }
}

main()
.catch((e) => {
  console.error(e)
  process.exit(1)
})
