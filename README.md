# ell bio

Next.js bio page exported as static files for GitHub Pages.

## Local preview

```bash
npm ci
npm run dev
```

## Static preview

```bash
npm run build
npm run preview
```

## GitHub Pages

1. Create a GitHub repository and push this folder to the `main` branch.
2. In repository settings, open `Pages`.
3. Set `Build and deployment` to `GitHub Actions`.
4. Push to `main`; the workflow publishes the static `out` folder.
