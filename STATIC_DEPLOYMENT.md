# Static Deployment Instructions for cPanel

Your Next.js app is configured for static export (`output: "export"` in next.config.ts).

## Build & Deploy Steps:

### 1. Build Static Files Locally
```bash
npm run build
# or
yarn build
```

This creates an `out/` folder with all static files.

### 2. Upload to cPanel
Upload **ONLY** the contents of the `out/` folder to your public_html directory:
```
/home/wfokccgc/public_html/
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── favicon.ico
└── ... (other static files)
```

### 3. Upload .htaccess
Copy the `.htaccess` file to `/home/wfokccgc/public_html/.htaccess`

### 4. Done!
Your static site should now be live. No Node.js setup needed!

## What Gets Deployed:
- ✅ HTML files
- ✅ CSS files (in `_next/static/`)
- ✅ JavaScript files (in `_next/static/`)
- ✅ Images (in `_next/static/` and root)
- ✅ Fonts
- ✅ Other static assets

## File Structure After Upload:
```
public_html/
├── .htaccess (for routing)
├── index.html (homepage)
├── product-detail.html
├── cart.html
├── checkout.html
├── _next/
│   └── static/
│       ├── css/
│       ├── chunks/
│       └── media/
└── favicon.ico
```

## Important Notes:
- ❌ Do NOT upload `node_modules/`
- ❌ Do NOT upload `.next/` (use `out/` instead)
- ❌ Do NOT upload `src/` or source files
- ✅ Only upload the `out/` folder contents
- ✅ Upload `.htaccess` for proper routing

## Testing:
After upload, visit your domain. All routes should work thanks to the `.htaccess` rewrite rules.
