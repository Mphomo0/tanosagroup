import { NextRequest } from 'next/server'

const INDEXNOW_KEY = '2h9xvau3nt5cnest7y6x5a7mr8ucwcnf'
const INDEXNOW_HOST = 'www.tanosagroup.com'
const INDEXNOW_URL = 'https://api.indexnow.org/indexnow'

export async function GET() {
  return new Response(INDEXNOW_KEY, {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const urls: string[] = body.urls || (body.url ? [body.url] : [])

    if (!urls.length) {
      return Response.json({ error: 'Provide url or urls array' }, { status: 400 })
    }

    const results = []

    for (const url of urls) {
      const params = new URLSearchParams({ url, key: INDEXNOW_KEY })
      const res = await fetch(`${INDEXNOW_URL}?${params}`, { method: 'GET' })
      results.push({ url, status: res.status, ok: res.ok })
    }

    return Response.json({ submitted: results.length, results })
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }
}
