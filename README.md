# Rimasanfer Website

Next.js website for Rimasanfer Ltd.

## Local development

```bash
npm install
npm run dev
```

## Production form delivery

The contact form posts to `/api/contact`.

Required environment variables:

- `RESEND_API_KEY`: API key for Resend
- `CONTACT_TO_EMAIL`: destination inbox (default: `manuel@rimasanfer.com`)
- `CONTACT_FROM_EMAIL`: sender identity verified in Resend (example: `Rimasanfer Website <contact@rimasanfer.com>`)

## Build

```bash
npm run build
npm run start
```
