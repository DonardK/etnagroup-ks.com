const FROM_EMAIL = 'donard@etnagroup-ks.com'
const TO_EMAIL = 'donard@etnagroup-ks.com'
const FROM_NAME = 'Etna Group Website'

interface SendEmailOptions {
  subject: string
  text: string
  replyTo?: { email: string; name?: string }
}

interface Env {
  RESEND_API_KEY?: string
}

const sendViaResend = async (env: Env, opts: SendEmailOptions): Promise<boolean> => {
  const key = env.RESEND_API_KEY?.trim()
  if (!key) return false

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject: opts.subject,
      text: opts.text,
      reply_to: opts.replyTo?.email,
    }),
  })

  if (!res.ok) {
    const body = await res.text().catch(() => '')
    console.error('Resend error:', res.status, body)
    return false
  }
  return true
}

/** Mailchannels — free on Cloudflare; requires SPF DNS for etnagroup-ks.com. */
const sendViaMailchannels = async (opts: SendEmailOptions): Promise<boolean> => {
  const res = await fetch('https://api.mailchannels.net/tx/v1/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: TO_EMAIL }] }],
      from: { email: FROM_EMAIL, name: FROM_NAME },
      subject: opts.subject,
      content: [{ type: 'text/plain', value: opts.text }],
      ...(opts.replyTo
        ? { reply_to: { email: opts.replyTo.email, name: opts.replyTo.name ?? opts.replyTo.email } }
        : {}),
    }),
  })

  if (!res.ok) {
    const body = await res.text().catch(() => '')
    console.error('Mailchannels error:', res.status, body)
    return false
  }
  return true
}

export const sendSiteEmail = async (env: Env, opts: SendEmailOptions): Promise<void> => {
  if (await sendViaResend(env, opts)) return
  if (await sendViaMailchannels(opts)) return
  throw new Error(
    'Email delivery failed. Set RESEND_API_KEY in Cloudflare Pages env, or add SPF DNS for Mailchannels.',
  )
}
