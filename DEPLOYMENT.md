# Deploying blankrite to Cloudflare Pages

This guide covers deploying blankrite to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (free or paid)
- A GitHub repository with this code
- `wrangler` CLI installed locally (`npm install -g wrangler`)

## Setup Steps

### 1. Create a Cloudflare Pages Project

```bash
# Authenticate with Cloudflare
wrangler login

# Create a new Pages project
wrangler pages project create blankrite
```

Or create one via the Cloudflare dashboard:
- Go to Pages → Create a project → Connect to Git
- Select your GitHub repo
- Set build command to: `pnpm build:client`
- Set build output directory to: `dist/spa`

### 2. Configure Environment Variables (Optional)

In the Cloudflare dashboard:
- Go to Pages → blankrite → Settings → Environment variables
- Add any required environment variables (e.g., `PING_MESSAGE`)

### 3. Deploy via GitHub Actions (Recommended)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy-cloudflare-pages.yml`) that automatically deploys on push to main.

**Setup:**

1. Generate a Cloudflare API token:
   - Go to Cloudflare dashboard → Account → API Tokens
   - Create a token with "Pages" permissions
   - Copy the token

2. Add GitHub secrets:
   - Go to your GitHub repo → Settings → Secrets and variables → Actions
   - Add `CLOUDFLARE_API_TOKEN` (from step 1)
   - Add `CLOUDFLARE_ACCOUNT_ID` (from your Cloudflare account page)

3. Push to main branch to trigger automatic deployment

### 4. Manual Deployment

```bash
# Build the app
pnpm build

# Deploy to Cloudflare Pages
pnpm run deploy
```

## Project Structure for Pages

```
dist/spa/               # Built React SPA (output from vite build)
├── index.html
├── assets/
└── ...

functions/              # Cloudflare Pages Functions (optional API routes)
├── api/
│   ├── ping.ts
│   ├── demo.ts
│   └── _middleware.ts
└── ...

_redirects              # SPA routing configuration
wrangler.toml          # Cloudflare Pages config
```

## API Routes

The app includes optional API endpoints via Cloudflare Pages Functions:

- `GET /api/ping` - Health check endpoint
- `GET /api/demo` - Demo endpoint

These are defined in `functions/api/` and run as serverless functions.

## SPA Routing

The `_redirects` file ensures all unmatched routes serve `index.html`, enabling React Router to handle client-side routing:

```
/* /index.html 200
```

## Environment Variables

Configure environment variables in Cloudflare Pages dashboard or `wrangler.toml`:

```toml
[env.production]
vars = { ENVIRONMENT = "production" }
```

## Performance Tips

1. **Caching**: Cloudflare automatically caches static assets (HTML, CSS, JS, images)
2. **Compression**: Enable Gzip/Brotli compression in Cloudflare settings
3. **Analytics**: Monitor performance via Cloudflare Analytics
4. **Custom Domain**: Add a custom domain via Pages settings

## Troubleshooting

### Build fails
- Check `pnpm build:client` runs locally without errors
- Verify Node.js version (18+) in GitHub Actions
- Check `package.json` build scripts

### Routes 404 after deploy
- Ensure `_redirects` file exists in project root
- Verify build output is in `dist/spa/`
- Check `wrangler.toml` `main` points to `dist/spa/index.html`

### API routes not working
- Check `functions/api/` files are in project root
- Verify function exports use `PagesFunction` type
- Check CORS headers in `_middleware.ts`

### Environment variables not loading
- Variables must be set in Cloudflare dashboard or `wrangler.toml`
- Access via `context.env.VARIABLE_NAME` in Functions
- Frontend cannot access backend env vars directly (security)

## Monitoring & Analytics

View deployment status and analytics:
- Cloudflare dashboard → Pages → blankrite
- GitHub Actions workflow runs
- Cloudflare Analytics Engine (paid feature)

## Rollback

To rollback to a previous deployment:
1. Go to Cloudflare dashboard → Pages → blankrite → Deployments
2. Find the deployment you want to rollback to
3. Click the three dots → Rollback to this deployment

---

For more info, see [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/).
