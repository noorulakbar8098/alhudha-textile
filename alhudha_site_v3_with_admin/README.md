# AL HUDHA — Premium Textile Store Website

A modern, conversion-focused website for AL HUDHA Textile & Garments. Built to convert offline + online walk-in customers via WhatsApp.

## Design Highlights

- **Premium color palette** — Deep Emerald (#1B5E3F) + Gold (#D4AF37) + Warm Cream — textile-luxury aesthetic that feels both modern and traditional
- **Conversion-focused** — every product card has a WhatsApp "Enquire" button that pre-fills the product name
- **Trust signals** — testimonials, trust bar, years/customers stats, social proof everywhere
- **Sales-driving sections** — animated announcement bar, festive offer banner with rotating 40% OFF medal
- **Mobile-first** — fully responsive for the customers who'll find you on Instagram + Google
- **Real contact details** — your WhatsApp + phone numbers + Google Maps location are already wired up

## Your Contact Info (already in the site)

- **WhatsApp / Phone 1:** +91 80983 36237
- **Phone 2:** +91 81481 31929
- **Location:** https://maps.app.goo.gl/PgEMm2HVNo6cyo2Y7

These are configured throughout: navbar CTA, every product card, the contact section, footer, and the floating WhatsApp button.

## Sections (in order)

1. **Scrolling announcement bar** — sale messages on a loop, builds urgency
2. **Sticky navbar** with logo + WhatsApp CTA
3. **Hero** — premium fabric promise + stats + animated visual stack
4. **Trust bar** — quality, prices, delivery, exchange (4 reassurance pillars)
5. **Categories** — 6 cards (Women's Tops, Bottoms, Shawls, Essentials W/M, Home Textiles)
6. **Festive Offer Banner** — Up to 40% OFF — drives immediate action
7. **Product grids** — 24 sample products with badges (NEW, SALE, BESTSELLER, FEATURED), discount percent, WhatsApp enquiry button
8. **Testimonials** — 3 customer reviews with star ratings
9. **About** — your family story + 4 stat boxes (10+ yrs, 500+ products, 1000+ customers, 100% quality)
10. **Contact** — clickable WhatsApp + phone + location cards + embedded map + Get Directions button
11. **Final CTA banner** — last conversion push before footer
12. **Footer** — quick links, all contact methods, navigation
13. **Floating WhatsApp button** — always visible, animated pulse, "Chat with us" tooltip

## Before You Go Live — Final Customizations

### ✅ Already done for you
- Phone numbers wired in (8098336237, 8148131929)
- Google Maps link wired in
- WhatsApp click-to-chat pre-fills product names
- Color scheme, animations, layout all polished

### Quick swaps you'll want to make

| Find this | Where | Replace with |
|---|---|---|
| Sample product names + prices | Each `<article class="product">` | Your actual products and rates |
| `AL HUDHA Textiles` in iframe URL | Contact section map embed | Your shop's actual map embed (see below) |
| `[Year]` in footer tagline (if you keep it) | Footer | The year you started |

### How to get a perfect Google Maps embed

The current map iframe is a search-based default. For your exact shop pin:

1. Open https://www.google.com/maps and search for your shop name + city
2. Click your shop pin → "Share" → "Embed a map"
3. Copy the full `<iframe ...></iframe>` code
4. In `index.html`, find the line that starts with `<iframe src="https://maps.google.com/maps?q=AL+HUDHA+Textiles...`
5. Replace that whole iframe with your copied one

### Adding real product photos (recommended)

Currently each product has a stylish gradient placeholder. To add real photos:

1. Create folder `assets/products/`
2. Add photos at **800 × 1000 pixels** (4:5 aspect ratio is critical) — e.g., `kurti-blue.jpg`
3. In `index.html`, find each `<div class="product-img" style="background:..."></div>`
4. Replace with: `<img class="product-img" src="assets/products/kurti-blue.jpg" alt="Printed Cotton Kurti">`
5. In `style.css`, find `.product-img` block and add: `object-fit: cover; display: block;`

Once you have real photos, the site will look like a serious e-commerce store.

## Deploy — 3 Options (start with Netlify)

### Option 1: Netlify (Easiest, Free, 30 seconds)

1. Open https://app.netlify.com/drop in your browser
2. Drag the **alhudha-site folder** onto the page
3. Your site is live at a URL like `nimble-dolphin-12345.netlify.app`
4. Click "Site settings" → "Change site name" → type `alhudha` → URL becomes `alhudha.netlify.app`
5. (Optional) Connect a custom domain like `alhudhatextiles.com` from Domain Settings

### Option 2: GitHub Pages (Free, requires GitHub account)

1. Create a public repo named `alhudha-site` at https://github.com/new
2. Upload all files via "Upload files" button
3. Settings → Pages → Source: `main` branch / `(root)` → Save
4. Live at `https://your-username.github.io/alhudha-site/`

### Option 3: Hostinger / GoDaddy (~₹500/year, custom domain)

1. Buy a domain (e.g., alhudhatextiles.com) — ~₹500/year on Hostinger
2. Use their File Manager (cPanel) → upload all files to `public_html/` folder
3. Live at your domain

## How to Grow the Business Once Live

### Week 1 — Foundation
- ✅ Deploy site (Netlify drop)
- ✅ Replace placeholder products with real ones (start with 5 bestsellers)
- ✅ Add real photos for those 5 (phone camera + free background remover at remove.bg)
- ✅ Test WhatsApp link from your phone — make sure messages reach you

### Week 2 — Visibility
- **Google My Business listing** — free, pins your shop on Maps + Google Search. Add photos, hours, and your website URL. Single biggest lead source for local shops.
- **Instagram account** — @alhudha.textiles — post 3 products per week, link site in bio
- **WhatsApp Business** — set up automated greeting + catalogue. Pair with site.
- **Facebook Page** — same content as Instagram, link to site

### Week 3 — Activation
- Print **QR codes** linking to your site — put them at the shop counter, on shopping bags, on your shop board
- Tell every walk-in customer: "We're online now — message us on WhatsApp anytime, link is on this card"
- Print **business cards** with QR + WhatsApp number

### Week 4 — Conversion
- Collect **photos of happy customers** (with permission) — add as testimonials to site
- Post a **WhatsApp status** weekly with new arrivals — link to website
- Start a **referral offer**: "Bring a friend, both get 10% off"

### Long-term wins
- **Google Ads** for "textile shop near [your city]" — start with ₹200/day. Tight targeting.
- **Influencer collab** — local fashion bloggers, micro-influencers (1k-5k followers in your city)
- **Festive newsletter** — collect WhatsApp numbers, send festival sale broadcasts via WhatsApp Business

## Customization — Quick Reference

### Change color theme
In `assets/style.css`, find the `:root` block at the top. The three colors that matter:
- `--primary` (currently emerald green) — change for brand color
- `--gold` (currently gold) — accent color
- `--bg` (currently warm cream) — background

### Add more products
Copy any `<article class="product">...</article>` block in `index.html` and edit:
- Title in `<h4>`
- Meta line in `<p class="meta">`
- Price + old price + discount %
- Product image gradient (or replace with real photo)
- WhatsApp link — URL-encode the product name in the `?text=` parameter

### Add new category
- Add a new `<a href="#cat-NEW" class="cat-card">` block in the categories section
- Add a corresponding `<div id="cat-NEW" class="product-section">` in the products section with `<article>` cards

## Need help?

The site is yours — copy, edit, modify freely. If something looks off after edits, the structure is HTML with separate CSS — no build step needed. Open in any browser to preview.

Good luck with the business — wishing you brisk sales and happy customers. ✨
