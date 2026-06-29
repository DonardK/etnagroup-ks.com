import { sendSiteEmail } from '../utils/sendEmail'

interface Env {
  RESEND_API_KEY?: string
}

interface PagesContext {
  request: Request
  env: Env
}

interface ContactBody {
  name?: string
  email?: string
  phone?: string
  project?: string
  message?: string
}

const json = (data: unknown, status = 200): Response =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  })

const MAX_FIELD = 500
const MAX_MESSAGE = 4000

export const onRequestPost = async (context: PagesContext): Promise<Response> => {
  if (context.request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405)
  }

  let body: ContactBody
  try {
    body = (await context.request.json()) as ContactBody
  } catch {
    return json({ error: 'Invalid JSON' }, 400)
  }

  const name = body.name?.trim().slice(0, MAX_FIELD)
  const email = body.email?.trim().slice(0, MAX_FIELD)
  const phone = body.phone?.trim().slice(0, MAX_FIELD)
  const project = body.project?.trim().slice(0, MAX_FIELD) || 'General'
  const message = body.message?.trim().slice(0, MAX_MESSAGE)

  if (!name || !email || !phone || !message) {
    return json({ error: 'Missing required fields' }, 400)
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Invalid email' }, 400)
  }

  const text = [
    'New contact form submission — etnagroup-ks.com',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Project: ${project}`,
    '',
    'Message:',
    message,
  ].join('\n')

  try {
    await sendSiteEmail(context.env, {
      subject: `[Contact] ${name} — ${project}`,
      text,
      replyTo: { email, name },
    })
    return json({ ok: true })
  } catch (err) {
    console.error('contact send error:', err)
    return json({ error: 'Failed to send message' }, 503)
  }
}
