**Prabod Sandaruwan — Portfolio**

A polished, minimal portfolio built with React and Vite to showcase projects, skills, and contact information for Prabod Sandaruwan.

---

**Live demo:** Add your production URL to `index.html` (canonical + OG) and here: https://example.com/

**Preview**
- Open the project locally and run the dev server to preview the site.

---

**Highlights**
- Clean responsive design focused on readability and performance
- Accessible structure (semantic headings, descriptive alt text)
- SEO-ready: meta tags, Open Graph, Twitter Card, and JSON-LD included
- Optimized images with `loading="lazy"` and hero preload for better LCP

---

## Tech Stack
- React
- Vite
- Framer Motion (animations)
- react-simple-typewriter

---

## Setup & Local Development

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build locally

```bash
npm run preview
```

Notes: If your `package.json` uses different scripts, replace the commands above accordingly.

---

## SEO & Accessibility Notes
- `index.html` already contains: description, keywords, author, robots, canonical link, Open Graph and Twitter meta tags, and JSON-LD Person + Website structured data. Replace placeholder `https://example.com/` and image URLs with your real site URL and hosted images.
- Decorative images use empty `alt=""` and `aria-hidden="true"` so screen readers skip them.
- Main hero heading has been converted to an `h1` for better SEO.

---

## Where to customize
- Meta tags & structured data: [index.html](index.html)
- Routes and page components: [src/pages](src/pages)
- Global styles: [src/App.css](src/App.css) and [src/pages/pages.css](src/pages/pages.css)
- Components: [src/components](src/components)

---

## Deployment Suggestions
- Deploy with Vercel, Netlify, or static hosting. Point your domain to the deployment and update `index.html` canonical/OG URLs.
- Enable Brotli/Gzip compression and set long cache lifetimes for static assets.

---

## Recommended next steps
1. Replace `example.com` placeholders with your production URL in `index.html`.
2. Add per-route meta tags using a head management library (e.g., `react-helmet-async`) for better per-page SEO.
3. Add badges (build, license) and a LICENSE file if you want to publish the repo.
4. Run Lighthouse and address any LCP/Cumulative Layout Shift suggestions.

---

## Contact
- Email: sandaruwanhapudeniya@gmail.com
- GitHub: https://github.com/Prabod-Sandaruwan
- LinkedIn: https://www.linkedin.com/in/sandaruwan-hapudeniya

---

If you want, I can:
- update `index.html` placeholders to your live URL now
- add `react-helmet-async` and per-route meta examples
- generate a small CI/CD workflow for automatic deploys

Tell me which of the above you'd like next.
