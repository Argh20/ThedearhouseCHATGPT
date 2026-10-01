/** Server-only contract. Implement in Vercel functions or Supabase Edge Functions. */
export type CheckoutInput={items:{productId:string;size:string;color:string;quantity:number}[];customer:{name:string;email:string;phone:string;address:string;city:string;state:string;pincode:string};coupon?:string};
// 1. Validate input (Zod recommended); load products from Supabase using service role.
// 2. Recalculate price, shipping, coupon discount and confirm stock on the server.
// 3. Insert PENDING_PAYMENT order/items and create Razorpay order with RAZORPAY_KEY_SECRET.
// 4. Send only Razorpay order id, amount, currency and VITE_RAZORPAY_KEY_ID to browser.
// 5. Verify razorpay_payment_id + razorpay_order_id + razorpay_signature via HMAC SHA256 server-side.
// 6. Also verify Razorpay webhook signature, atomically decrement stock, and mark PAID.
// Never accept browser totals, stock availability or payment status as truth.
