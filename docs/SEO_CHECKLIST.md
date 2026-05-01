SEO checklist for /launchpad integration

1) Canonical URLs
- Each page under `/launchpad/` must include a canonical link:
  <link rel="canonical" href="https://www.atyant.in/launchpad/" />
- For subpages: use the full path e.g. `https://www.atyant.in/launchpad/pricing/`.

2) Meta tags
- Title, description, open graph (og:title, og:description, og:image, og:url), twitter cards.
- Keep descriptions concise (120–160 chars) and action-oriented.

3) Structured data
- Add JSON-LD for Organization, Website, BreadcrumbList, and if applicable Product/Service schema for plans.

4) Sitemap & robots
- Update `sitemap.xml` to include `/launchpad/*` pages.
- Ensure `robots.txt` does not block `/launchpad/`.

5) Performance & pre-render
- For SEO-critical landing pages, prerender HTML at build-time (Vite pre-render or switch to Next.js SSR).
- Ensure first contentful paint is fast (<1s ideally on 3G simulated mobile).

6) Social preview images
- Provide `og:image` sized 1200x630, upload to CDN and reference absolute URL.

7) Canonical link back to main site
- If content is duplicated elsewhere, set canonical to `/launchpad/` to avoid duplicate-content penalties.

8) Tracking & analytics
- Use the same GA4 Measurement ID as main site or configure cross-domain measurement.
- Ensure events (signup, purchase) map to the same conversion goals.

9) Redirects & 301s
- If migrating existing pages, implement 301 redirects from old URLs to `/launchpad/*`.

10) Accessibility & semantic HTML
- Use proper H1/H2 hierarchy, alt text on images, ARIA attributes for interactive elements.

11) Testing
- Run Lighthouse audits (Performance, SEO, Accessibility).
- Crawl site with Screaming Frog or similar to validate meta tags and sitemap.

12) Monitoring
- Monitor Search Console for indexing issues and crawl errors after deployment.
