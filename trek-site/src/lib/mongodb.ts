import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
if (!uri) throw new Error('Please define the MONGODB_URI environment variable')

let client: MongoClient | undefined
let clientPromise: Promise<MongoClient>

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri)
  clientPromise = client.connect()
  global._mongoClientPromise = clientPromise
} else {
  clientPromise = global._mongoClientPromise
}

export default clientPromise
