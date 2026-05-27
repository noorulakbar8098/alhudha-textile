# 🔐 AL HUDHA Admin Panel — Setup Guide

Your site now has a built-in admin panel at `/admin/` where you can:

- Add new products
- Upload product photos (no coding!)
- Edit prices, descriptions, badges
- Add or rename whole categories
- Publish changes in 1 click — site updates in ~60 seconds

This guide walks you through the 15-minute setup. Do it once, use forever.

---

## How It Works

```
You upload photo + add product in /admin
        ↓
Decap CMS saves it to GitHub (via Netlify)
        ↓
Netlify rebuilds your site (~60 seconds)
        ↓
Your customers see the new product on alhudha.netlify.app
```

You never touch HTML. You never see code.

---

## What you need (free accounts)

1. A **GitHub account** — https://github.com/signup (your site code lives here)
2. A **Netlify account** — https://app.netlify.com/signup (free hosting + login service)

Both are free. Sign in with the same email if possible.

---

## Step-by-Step Setup (15 minutes)

### Step 1 — Put your site on GitHub (3 min)

1. Go to https://github.com/new
2. Repository name: `alhudha-site`
3. Set to **Public**
4. Click **Create repository**
5. On the new repo page, click **uploading an existing file**
6. Drag your whole `alhudha-site` folder contents (every file + folder, including `admin/`, `data/`, `assets/`, `netlify.toml`, `index.html`)
7. Scroll down, click **Commit changes**

Your site is now on GitHub.

### Step 2 — Deploy to Netlify (3 min)

1. Go to https://app.netlify.com
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub**, authorize Netlify
4. Pick your `alhudha-site` repo
5. Leave build settings as-is, click **Deploy site**
6. After ~1 min you'll get a URL like `random-name-12345.netlify.app`
7. **Site configuration** → **Change site name** → make it `alhudha` → URL becomes `alhudha.netlify.app`

Your site is live.

### Step 3 — Enable Netlify Identity (5 min)

This is what powers your login.

1. In Netlify, open your site dashboard
2. Top menu → **Integrations** (or **Site Configuration**) → **Identity**
3. Click **Enable Identity**
4. Scroll down to **Registration preferences** → set to **Invite only** (so only YOU can log in, not random strangers)
5. Scroll to **Git Gateway** → click **Enable Git Gateway**
6. Click **Invite users** → enter your email → **Send**
7. Open the invite email → click the link → **set your password**

You're now an admin.

### Step 4 — Open the Admin Panel (1 min)

1. Open `https://alhudha.netlify.app/admin/` in your browser
2. Click **Login** → enter your email + password
3. You'll see the admin dashboard with **🛍️ Products** in the sidebar
4. Click it → click **Full product catalog**
5. You see all your categories and products — click any to edit

### Step 5 — Add Your First Real Product (3 min)

1. Click **🛍️ Products** → **Full product catalog**
2. Find a category (e.g., **Women's Tops**) → expand it
3. Scroll to **Products in this category** → click **Add Product**
4. Fill in:
   - **Product Name:** e.g., "Cotton Anarkali Kurti"
   - **Description:** "Sizes XS-XXL · 6 colours"
   - **Price (₹):** 799
   - **Original Price:** 1199 (optional — shows strike-through)
   - **Badge:** Choose 🔥 SALE / ✨ NEW / etc.
   - **Product Photo:** Click → Upload from phone/laptop → Select
   - Leave **Fallback color** as default
5. Click **Save** at the top
6. Click **Publish** → **Publish now**
7. Wait ~60 seconds → refresh `alhudha.netlify.app` → your product is live!

---

## Daily Use — Once Set Up

Just open `https://alhudha.netlify.app/admin/` on your phone or laptop, log in, add/edit products, click Publish. That's it.

### Recommended photo size
- **800 × 1000 pixels** (portrait, 4:5 ratio)
- Phone camera works fine — just crop to portrait shape
- Use a free background remover at https://remove.bg if needed
- Each photo should be under 1 MB ideally

### Bulk add tip
- If you have 20 products to add, do them in one session — saves time
- Click Save after each one, then Publish All at the end

---

## Editing the Hero, About, Testimonials

The admin panel currently only manages products (that's what changes most). If you want to edit other sections like the hero or testimonials, edit `index.html` directly via GitHub web editor (open the file on github.com → click the pencil icon).

Or message me and I'll extend the admin to cover those sections too.

---

## Troubleshooting

**"Login button does nothing"**
- Identity isn't enabled. Re-do Step 3.

**"Can't find Git Gateway"**
- It's under Site Configuration → Identity → Services → Git Gateway. Newer Netlify menus moved it.

**"My change isn't showing on the site"**
- Wait 90 seconds (build takes ~60). Hard-refresh browser (Ctrl+F5 / Cmd+Shift+R).
- Check Netlify dashboard → Deploys → did the build succeed?

**"Forgot password"**
- Netlify Identity → Users → click your email → **Send password reset**

**"Want to give my staff access too?"**
- Netlify Identity → **Invite users** → enter their email → they get a setup link

---

## Direct JSON Edit (Alternative)

If you ever want to skip the admin panel and edit products directly:

1. Open `data/products.json` on GitHub
2. Click pencil icon to edit
3. Add/edit a product following the existing format
4. Commit — Netlify rebuilds in ~60 seconds

This is for power users — the admin panel is easier for daily use.

---

## What If I Don't Use Netlify?

The admin panel needs **Netlify** specifically (because it uses Netlify Identity + Git Gateway, both free).

If you host elsewhere (Hostinger, GoDaddy, AWS), you have three options:
1. Move to Netlify (recommended — free, fast, just works)
2. Edit `data/products.json` directly via your host's File Manager / FTP each time you want to add a product
3. Set up a separate CMS like Sanity or Forestry (more complex)

For 99% of shops, **just use Netlify**.

---

## Cost

Everything in this setup is **₹0 / month**:

- GitHub: Free for public repos
- Netlify Free tier: Up to 100 GB bandwidth, more than enough for a textile shop
- Decap CMS: Free, open source
- Domain (optional): ~₹500/year if you want `alhudhatextiles.com` instead of `alhudha.netlify.app`

Total: ~₹500/year if you buy a custom domain. Otherwise free forever.

---

## Wishing you brisk sales! ✨

Once this is set up, adding a new product takes 90 seconds. You can do it from your phone while sitting at the shop. That's a real upgrade for any local business.
