# 🍽️ Aura - Luxury Restaurant & Bistro Website Template

A complete, production-ready, ultra-premium restaurant website template built with **React + Vite + Tailwind CSS**. Engineered specifically as a high-value freelance product to sell to local restaurants, bistros, steakhouses, fine dining venues, and cocktail lounges.

---

## ✨ Features Overview

- **5 Distinct Dedicated Views**:
  1. `Home` – Fullscreen luxury hero, opening hours strip, about teaser, signature dishes showcase, "Why Choose Us" feature pillars, animated metrics counter, customer praise slider, final reservation CTA banner.
  2. `Menu` – Sticky category tabs with animated active indicator, live instant search, dietary filter chips (Chef's Special, Vegetarian, Spicy, Gluten-Free), item cards with zoom and price badge, downloadable / printable menu view, and dish quick-view modal.
  3. `About / Our Story` – Culinary story & heritage, interactive milestones timeline, master chef & culinary team cards, core values grid, and parallax quote strip.
  4. `Gallery` – Filterable masonry grid with category pills, hover zoom, and lightbox modal with keyboard navigation (Esc, Left, Right).
  5. `Contact & Booking` – Dual layout with booking form, Web3Forms email delivery, honeypot spam protection (`botcheck`), live client validation, loading state, celebratory confetti confirmation, interactive Google Maps embed, click-to-call, and opening hours.
- **Single Master Config (`src/config.js`)**: All restaurant details, brand colors, phone numbers, WhatsApp, addresses, hours, and SEO keys live in one place.
- **Dark/Light Theme Toggle**: Remembered across visits via `localStorage`.
- **Floating WhatsApp Concierge**: Instant click-to-chat button with prefilled message.
- **Global Reservation Modal**: Accessible from any CTA button across the site.
- **Dynamic Schema.org JSON-LD**: Automatically injects structured `Restaurant` schema for rich search results in Google.
- **Zero-Lint Errors**: Passes `oxlint` with 0 errors and 0 warnings.
- **Lightning Fast**: Builds in under 100ms with Vite!

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized, production-ready static bundle inside the `dist/` directory.

---

## 🎨 How to Customize for a New Client (5-Minute Re-Brand)

You **never** need to touch complex component code to customize this site for a new restaurant client. All customizations are concentrated in 3 data files:

### 1. Master Branding: `src/config.js`
Open `src/config.js` and modify:
- **Restaurant Name & Tagline**: Change `restaurantName`, `shortName`, `tagline`, and `establishedYear`.
- **Logo**: Switch between `text` or `image` mode (point to `/favicon.svg` or `/assets/images/logo.png`).
- **Contact Details**: Update `phone`, `phoneRaw`, `email`, and `reservationsEmail`.
- **WhatsApp**: Update `whatsappNumber` (country code + number without `+` or spaces) and `whatsappPrefilledMessage`.
- **Address & Map**: Update `address` fields and paste the client's Google Maps iframe embed URL into `googleMapsEmbedUrl`.
- **Operating Hours**: Update `openingHours` array with days and hours.
- **Brand Colors**: Modify `brandColors.primary`, `brandColors.primaryHover`, `brandColors.accent` (CSS variables in `:root` automatically update the whole theme).
- **Hero & Story**: Update hero headline, background image URL, and about paragraphs.
- **Web3Forms Key**: Paste the client's free Web3Forms access key into `web3FormsAccessKey` (obtain free at [web3forms.com](https://web3forms.com)).

### 2. Menu Items & Pricing: `src/menu-data.js`
Open `src/menu-data.js` to manage the menu:
- Add or edit categories in `menuCategories`.
- Add or edit dishes in `menuItems` with:
  - `name`: Dish name
  - `category`: Matches category ID (e.g., `starters`, `pasta`, `mains`, `seafood`, `desserts`, `cocktails`)
  - `description`: Appetizing description
  - `price`: Number in USD/currency
  - `image`: Image URL or path
  - `tags`: Array containing `"chefs_special"`, `"veg"`, `"spicy"`, `"gluten_free"`, and `"featured"` (shows in Home signature carousel)
  - `rating`: e.g. `4.9`
  - `calories`: e.g. `"540 kcal"`

### 3. Gallery Photos: `src/gallery-data.js`
Open `src/gallery-data.js` to update the photo gallery:
- Add or replace photos in `galleryImages`.
- Categorize each image under `ambience`, `dishes`, `drinks`, or `kitchen`.

---

## 📬 Setting Up Reservation & Contact Form (Web3Forms)

1. Visit [https://web3forms.com](https://web3forms.com).
2. Enter the client's restaurant email and generate a free Access Key.
3. Open `src/config.js` and replace:
   ```javascript
   web3FormsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
   ```
   with the real access key (e.g., `web3FormsAccessKey: "e7655866-xxxx-xxxx-xxxx-xxxxxxxxxxxx"`).
4. Submissions from the Reservation Modal and Contact Page will immediately arrive directly in the restaurant's email inbox!
5. Built-in honeypot field (`botcheck`) automatically discards bot spam.

---

## 🌐 Deployment Instructions

### Deploy to Netlify (Recommended)
1. Drag and drop the `dist/` folder into the Netlify dashboard, OR
2. Connect your Git repository:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

### Deploy to Vercel
1. Install Vercel CLI or import repository to Vercel.
2. Framework Preset will auto-detect as **Vite**.
3. Deploy!

### Deploy to GitHub Pages
1. In `vite.config.js`, set `base: '/<repository-name>/'`.
2. Run `npm run build`.
3. Push the `dist/` folder to your `gh-pages` branch.

### Deploy to Traditional Shared Hosting / cPanel
1. Run `npm run build` on your computer.
2. Upload all files and folders inside `dist/` directly to your hosting's `public_html/` via FTP or cPanel File Manager.

---

## 📋 Freelance Client Hand-off Checklist

- [ ] Replaced Restaurant Name, Tagline & Established Year in `src/config.js`.
- [ ] Inserted client's phone number and WhatsApp number in `src/config.js`.
- [ ] Updated physical address & Google Maps iframe in `src/config.js`.
- [ ] Configured client's dining hours in `src/config.js`.
- [ ] Updated social media links (Instagram, Facebook, TripAdvisor).
- [ ] Placed client's menu dishes and prices in `src/menu-data.js`.
- [ ] Uploaded or linked high-resolution restaurant photos in `src/gallery-data.js`.
- [ ] Generated and added Web3Forms Access Key to receive reservation emails.
- [ ] Verified dark/light mode appearance.
- [ ] Run `npm run build` and tested production build.
