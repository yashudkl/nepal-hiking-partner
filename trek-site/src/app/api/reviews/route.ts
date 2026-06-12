import getClientPromise from '@/lib/mongodb'

export async function GET() {
  try {
    const client = await getClientPromise()
    const db = client.db('nepalhikingpartner')
    const coll = db.collection('reviews')
    const items = await coll.find({ status: 'published' }).sort({ createdAt: -1 }).limit(20).toArray()
    return new Response(JSON.stringify(items), { status: 200 })
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message || 'Failed to fetch' }), { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, rating, comment, trekId } = body
    if (!rating || !comment) return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 })

    const review = {
      name: name || 'Anonymous',
      rating: Number(rating),
      comment: String(comment),
      trekId: trekId || 'general',
      status: 'published',
      createdAt: new Date(),
    }

    const client = await getClientPromise()
    const db = client.db('nepalhikingpartner')
    const coll = db.collection('reviews')
    await coll.insertOne(review)

    return new Response(JSON.stringify({ ok: true }), { status: 201 })
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message || 'Failed to save' }), { status: 500 })
  }
}
