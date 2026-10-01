# THE DEAR HOUSE

Premium React + TypeScript ecommerce foundation, designed for Vercel and independent of Shopify.

## Run locally

`npm install` then `npm run dev`.

## Configure before production

Copy `.env.example` to `.env.local`. Add only the public Supabase URL/anon key and Razorpay key ID to Vite variables. Keep `RAZORPAY_KEY_SECRET` and `SUPABASE_SERVICE_ROLE_KEY` on serverless/edge functions only.

Apply `supabase/migrations/001_initial.sql` in Supabase SQL Editor, then set appropriate user roles for admins. Build `/api/create-order` and `/api/verify-payment` using the supplied `api/razorpay-contract.ts` contract. The frontend intentionally does not simulate successful payment.

## Current working scope

Home, catalogue/filtering, responsive product pages and variants, cart persistence, cart drawer, checkout validation UI, route shells, and responsive navigation are implemented. Product imagery is editorial placeholder content from Unsplash—replace with licensed brand photography before launch. Authentication, admin authorisation, newsletter/contact persistence, live inventory, Razorpay server endpoints, transactional emails, analytics and Qikink require configuration/credentials and are deliberately represented as integration boundaries rather than fake integrations.
