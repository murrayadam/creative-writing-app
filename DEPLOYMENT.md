# Deploying blankrite to Cloudflare Pages

This guide covers deploying blankrite as a static site to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (free or paid)
- A GitHub repository with this code

## Setup Steps

### Option 1: Connect GitHub Repository (Recommended)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
2. Click "Create a project" → "Connect to Git"
3. Select your GitHub repository
4. Configure build settings:
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist/spa`
5. Click "Save and Deploy"

The app will automatically deploy on every push to your main branch.

### Option 2: Manual Deployment

```bash
# Install Wrangler CLI
npm install -g wrangler

# Authenticate with Cloudflare
wrangler login

# Build the app
pnpm build

# Deploy to Cloudflare Pages
wrangler pages deploy dist/spa
```

## Project Structure for Pages

```
dist/spa/               # Built React SPA (output from vite build)
├── index.html
├── assets/
└── ...

_redirects              # SPA routing configuration
wrangler.toml          # Cloudflare Pages config
```

## SPA Routing

The `_redirects` file ensures all unmatched routes serve `index.html`, enabling React Router to handle client-side routing:

```
/* /index.html 200
```

## Performance Tips

1. **Caching**: Cloudflare automatically caches static assets (HTML, CSS, JS, images)
2. **Compression**: Enable Gzip/Brotli compression in Cloudflare settings
3. **Analytics**: Monitor performance via Cloudflare Analytics
4. **Custom Domain**: Add a custom domain via Pages settings

## Troubleshooting

### Build fails
- Check `pnpm build` runs locally without errors
- Verify Node.js version (18+) in GitHub Actions
- Check `package.json` build scripts

### Routes 404 after deploy
- Ensure `_redirects` file exists in project root
- Verify build output is in `dist/spa/`

## Monitoring & Analytics

View deployment status and analytics:
- Cloudflare dashboard → Pages → blankrite
- GitHub Actions workflow runs (if connected to GitHub)

## Rollback

To rollback to a previous deployment:
1. Go to Cloudflare dashboard → Pages → blankrite → Deployments
2. Find the deployment you want to rollback to
3. Click the three dots → Rollback to this deployment

---

For more info, see [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/).
