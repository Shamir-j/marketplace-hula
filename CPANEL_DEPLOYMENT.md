# cPanel Deployment Guide

## Project Configuration

This project has been configured for static hosting on cPanel. Here's what was changed:

### Changes Made:

1. **next.config.ts**
   - Added `output: "export"` for static HTML generation
   - Enabled `unoptimized` images for static hosting

2. **package.json**
   - Removed Node.js server dependency
   - Removed `server.js` start script
   - Project now builds static HTML files only

3. **.htaccess**
   - Created for proper URL routing
   - Handles clean URLs (removes .html extensions)
   - Includes caching headers for performance
   - Enables gzip compression

## Deployment Steps:

1. **Build the project locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Upload to cPanel:**
   - Connect via FTP/SFTP or cPanel's File Manager
   - Upload the `out/` directory contents to your public_html folder
   - Upload the `.htaccess` file to public_html

3. **Verify deployment:**
   - Visit your domain to check if it loads
   - Test navigation between pages
   - Check console for any errors

## File Structure for cPanel:

```
public_html/
├── index.html
├── cart.html
├── checkout.html
├── conditions-of-use.html
├── privacy-notice.html
├── product-detail.html
├── results-page.html
├── 404.html
├── .htaccess
└── _next/
    └── [static assets]
```

## Important Notes:

- **No backend needed** - This is a static site, perfect for cPanel
- **No Node.js required** - Works with standard cPanel hosting
- **No database required** - All pages are pre-rendered
- **Future-proof** - When you add backend in Q1 2026, migrate to Node.js hosting

## Performance Considerations:

- Static files are served directly by Apache (fastest)
- Gzip compression enabled for text assets
- Browser caching configured for optimal performance
- All images are optimized during build

## Troubleshooting:

- If pages show 404, ensure `.htaccess` is uploaded
- If styling looks broken, check that `_next/` folder is uploaded completely
- Clear browser cache if seeing old content
