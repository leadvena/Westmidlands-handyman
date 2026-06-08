# Vercel Deployment Instructions

Here is the complete configuration to deploy your **West Midlands Handyman** website with server-side validation onto **Vercel** easily!

## Option A: Direct Static Deployment with Express Serverless Function
If you are exporting this project directly as a Vite static site plus server-side validation functions, configure `vercel.json` in your root folder:

```json
{
  "version": 2,
  "rewrites": [
    {
      "source": "/api/contact",
      "destination": "/api/contact.ts"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

1. Move `/vercel/api/contact.ts` into a root `/api/` directory so it resides at `/api/contact.ts` or `/api/contact.js`.
2. Connect your repository to your Vercel Dashboard.
3. Vercel will automatically compile the frontend static files using `npm run build` (directing assets to `dist/`) and run `/api/contact.ts` as a Node/Serverless Function.

## Option B: Deploying inside a Next.js App
If you are putting this form inside an existing Next.js (Pages router or App router) app:
1. Drop the React components from `/src/components/*` into your Next.js directory.
2. Put `/vercel/api/contact.ts` inside `/pages/api/contact.ts`.
3. In your `ContactForm.tsx` component, fetch directly to `/api/contact`, and Next.js will handle the server-side validation automatically!

---
*Created for West Midlands Handyman - No Job Too Small.*
