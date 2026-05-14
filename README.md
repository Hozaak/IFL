# IFL Institute — Production Website

Official Digital Admission & Marketing Platform for IFL Institute, Rohini, Delhi.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd /home/lucky/Documents/IFL
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
IFL/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (fonts, SEO, Navbar, Footer)
│   ├── page.tsx                  # Home page
│   ├── courses/
│   │   ├── page.tsx              # All courses listing
│   │   └── [slug]/page.tsx       # Dynamic course detail page
│   ├── admission/page.tsx        # Admission form page
│   ├── placement/page.tsx        # Placement guidance page
│   ├── contact/page.tsx          # Contact page
│   ├── sitemap.ts                # Auto-generated sitemap.xml
│   ├── robots.ts                 # robots.txt
│   └── not-found.tsx             # Custom 404 page
├── components/
│   ├── ui/                       # Reusable UI primitives
│   ├── layout/                   # Navbar, Footer
│   ├── home/                     # All home page sections
│   ├── courses/                  # CourseCard, CourseFAQ
│   └── admission/                # AdmissionForm
├── constants/
│   ├── site.ts                   # ⚠️ Update contact info here
│   ├── courses.ts                # ⚠️ Add/edit courses here
│   └── nav.ts                    # Navigation links
├── lib/
│   ├── utils.ts                  # Utility functions
│   └── seo.ts                    # SEO metadata + schema.org
└── public/                       # Static assets
```

---

## ✏️ How to Customize

### Update Contact Information
Edit `constants/site.ts`:
```ts
phone: '+91-XXXXXXXXXX',        // Your actual phone number
whatsapp: '91XXXXXXXXXX',       // WhatsApp number (no + or spaces)
email: 'info@yourdomain.in',
address: { ... },               // Your actual address
mapEmbedUrl: '...',             // Your Google Maps embed URL
url: 'https://yourdomain.in',   // Your actual domain
```

### Add / Edit Courses
Edit `constants/courses.ts`. Each course needs:
- `slug` — URL-friendly unique ID
- `name`, `shortDescription`, `description`
- `duration`, `durationMonths`, `fee`
- `syllabus`, `learningOutcomes`, `faqs`

### Get Google Maps Embed URL
1. Go to [maps.google.com](https://maps.google.com)
2. Search your address
3. Click **Share** → **Embed a map** → Copy iframe `src`

---

## 🔌 Backend Integration

The admission form (`components/admission/AdmissionForm.tsx`) is structured for easy backend wiring. Find the `handleSubmit` function and replace the `console.log` with:

```ts
// Option A: EmailJS
// Option B: Formspree fetch POST
// Option C: Your own API route at /api/admissions
await fetch('/api/admissions', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload),
})
```

---

## 🔍 SEO Checklist

- [x] `metadata` on every page
- [x] Open Graph tags
- [x] `sitemap.xml` auto-generated
- [x] `robots.txt` configured
- [x] `EducationalOrganization` + `LocalBusiness` schema
- [x] `Course` schema on each course detail page
- [x] Semantic HTML throughout
- [x] Canonical URLs
- [ ] Add real Google Analytics ID in `app/layout.tsx`
- [ ] Add real Google Search Console verification token in `app/layout.tsx`
- [ ] Replace `og-image.jpg` in `/public/` with a real 1200×630 image

---

## 📱 Mobile Features

- **Sticky bottom bar**: Call | WhatsApp | Apply Now (mobile only)
- **Floating WhatsApp button**: Desktop (bottom-right)
- **Mobile drawer navigation**: Hamburger menu with slide-in drawer
- **Mobile-first layout**: All sections are fully responsive

---

## 🎨 Design System

**Colors:**
- Primary Blue: `#2563eb` (blue-600)
- Deep Blue: `#1e40af` (blue-800)
- Light Blue BG: `#eff6ff` (blue-50)
- Dark Text: `#0f172a` (slate-900)

**Fonts:**
- Headlines: Plus Jakarta Sans (via Google Fonts)
- Body: Inter (via Google Fonts)

---

## ⚡ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 15.3.2 | Framework + App Router |
| TypeScript | ^5 | Type Safety |
| Tailwind CSS | ^3.4 | Styling |
| Framer Motion | ^11 | Animations |
| Lucide React | ^0.475 | Icons |

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Custom Server
```bash
npm run build
npm run start  # Port 3000
```
