import { sendSiteEmail } from '../utils/sendEmail'

interface Env {
  RESEND_API_KEY?: string
}

interface PagesContext {
  request: Request
  env: Env
}

interface ReportBody {
  description?: string
  pageUrl?: string
  email?: string
}

const json = (data: unknown, status = 200): Response =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  })

const MAX_DESC = 4000
const MAX_URL = 500

export const onRequestPost = async (context: PagesContext): Promise<Response> => {
  if (context.request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405)
  }

  let body: ReportBody
  try {
    body = (await context.request.json()) as ReportBody
  } catch {
    return json({ error: 'Invalid JSON' }, 400)
  }

  const description = body.description?.trim().slice(0, MAX_DESC)
  const pageUrl = body.pageUrl?.trim().slice(0, MAX_URL) || 'unknown'
  const email = body.email?.trim().slice(0, 200)

  if (!description || description.length < 10) {
    return json({ error: 'Please describe the issue (at least 10 characters)' }, 400)
  }

  const text = [
    'Website issue report — etnagroup-ks.com',
    '',
    `Page: ${pageUrl}`,
    email ? `Reporter email: ${email}` : 'Reporter email: (not provided)',
    '',
    'Description:',
    description,
  ].join('\n')

  try {
    await sendSiteEmail(context.env, {
      subject: `[Report] Website issue on ${pageUrl}`,
      text,
      replyTo: email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? { email } : undefined,
    })
    return json({ ok: true })
  } catch (err) {
    console.error('report send error:', err)
    return json({ error: 'Failed to send report' }, 503)
  }
}
