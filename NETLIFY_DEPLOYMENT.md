# Netlify Deployment Guide

This project is now configured to deploy on Netlify with support for the contact form API.

## Setup

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   # or
   bun install
   ```

2. **Environment Variables**

   Set the following environment variables in your Netlify dashboard (Site settings → Environment variables):

   - `RESEND_API_KEY` - Your Resend API key for sending emails
   - `RESEND_FROM` (optional) - Email address to send from (defaults to "support@inzight.nz")
   - `CONTACT_EMAIL` (optional) - Email address to send contact form submissions to (defaults to "inzight_support@stat.auckland.ac.nz")

3. **Deploy to Netlify**

   - Connect your repository to Netlify
   - Netlify will automatically detect the `netlify.toml` configuration
   - The build command (`npm run build`) and publish directory (`build`) are already configured
   - The contact form API will be available at `/api/contact` (automatically redirected to the Netlify Function)

## How It Works

- The contact form in `src/components/ContactForm/ContactForm.tsx` calls `/api/contact`
- Netlify's redirect rule (in `netlify.toml`) routes `/api/contact` to `/.netlify/functions/contact`
- The Netlify Function at `netlify/functions/contact.ts` handles the request and sends emails via Resend

## Files Created/Modified

- `netlify/functions/contact.ts` - Netlify Function version of the contact API
- `netlify/functions/templates/` - Email templates (copied from `api/templates/`)
- `netlify.toml` - Netlify configuration file
- `package.json` - Added `@netlify/functions` dependency

## Notes

- The original Vercel API at `api/contact.ts` is still present and can be used if deploying to Vercel
- Both deployment options (Vercel and Netlify) are now supported
- The contact form component doesn't need any changes - it works with both platforms
