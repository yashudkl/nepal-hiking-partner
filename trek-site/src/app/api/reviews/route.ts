import getClientPromise from '@/lib/mongodb'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  try {
    const client = await getClientPromise()
    const db = client.db('nepalhikingpartner')
    const coll = db.collection('reviews')
    const items = await coll.find({ status: 'published' }).sort({ createdAt: -1 }).limit(20).toArray()
    return new Response(JSON.stringify(items), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0',
      },
    })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch'
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0',
      },
    })
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

    return new Response(JSON.stringify({ ok: true }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0',
      },
    })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to save'
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0',
      },
    })
  }
}
