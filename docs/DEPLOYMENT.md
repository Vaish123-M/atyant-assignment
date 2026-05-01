Deployment steps for /launchpad vertical

1) Build the app

# From project root
npm run build

This generates a production build in `dist/` with assets prefixed for `/launchpad/` thanks to `vite.config.js` (base: '/launchpad/').

2) Serve the build

Option A — Static hosting (recommended for Vite SPA):
- Upload the `dist/` folder to your static host (S3 + CloudFront, Netlify, Vercel, or your server).
- Ensure the site serves `index.html` from `/launchpad/` and assets from `/launchpad/assets/`.

Option B — Self-host with a simple static server:
- Install `serve` or use Nginx to point `/launchpad/` to `/var/www/launchpad/dist/`.

3) NGINX reverse-proxy example (see `nginx/launchpad.conf`)
- Configure `upstream` to point to your app process or static server.
- Ensure `location /launchpad/` proxies to the upstream and that `assets` are cached.
- Add `/.well-known/acme-challenge/` for Let's Encrypt validation.

4) HTTPS (Let's Encrypt)
- Use Certbot to request a cert for `atyant.in` and `www.atyant.in`.
- Enable `listen 443 ssl` and configure `ssl_certificate`/`ssl_certificate_key`.

5) SEO & canonical headers
- Ensure pages under `/launchpad/` include canonical tags pointing to the correct `/launchpad/...` URL.
- Add `robots.txt` rules and update sitemap.

6) Analytics & tracking
- Add GA4/Segment snippet to the app (copy from main site). Ensure cross-domain/session tracking works (same GA property or measurement ID).

7) Test
- smoke test: `curl -I https://www.atyant.in/launchpad/`
- confirm assets load and `index.html` returns for nested routes.

8) Rollout
- Use a feature flag or temporary banner for the first few hours.
- Monitor logs and analytics; prepare rollback (disable proxy or route back to previous content).

Notes:
- If you require server-side rendering for SEO-critical pages, consider migrating the vertical to Next.js or using prerendering for public pages.
- When using subpath, cookies domain should be `.atyant.in` to share auth sessions across verticals.
