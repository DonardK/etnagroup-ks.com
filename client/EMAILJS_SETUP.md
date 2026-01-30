# EmailJS Setup Guide

The contact form is configured to send emails to **info@etnagroup-ks.com** using EmailJS.

## Quick Setup

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows up to 200 emails/month)

### Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Copy the **Service ID** (you'll need this)

### Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set up your template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone number
   - `{{project}}` - Selected project
   - `{{message}}` - Message content
   - `{{reply_to}}` - Reply-to email
4. Set **To Email** to: `info@etnagroup-ks.com`
5. Set **From Name** to: `{{from_name}}`
6. Set **Reply To** to: `{{reply_to}}`
7. Copy the **Template ID**

### Step 4: Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key**

### Step 5: Configure Environment Variables

Create a `.env` file in the `client` directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Important:** Never commit the `.env` file to git. Add it to `.gitignore`.

### Step 6: Restart Development Server

After creating the `.env` file, restart your development server:

```bash
npm run dev
```

## Fallback Behavior

If EmailJS is not configured, the form will fall back to opening the user's email client with a pre-filled mailto link to `info@etnagroup-ks.com`. This ensures the form always works, even without EmailJS setup.

## Testing

1. Fill out the contact form
2. Submit it
3. Check your inbox at `info@etnagroup-ks.com`
4. You should receive the email within a few seconds

## Troubleshooting

- **Email not sending**: Check that all environment variables are set correctly
- **Template errors**: Make sure your template variables match exactly (case-sensitive)
- **Service connection**: Verify your email service is properly connected in EmailJS dashboard
- **Free tier limits**: Free accounts are limited to 200 emails/month

## Production Deployment

For production deployment:
1. Set the environment variables in your hosting platform (Hostinger, Netlify, etc.)
2. Restart your application
3. Test the contact form on the live site
