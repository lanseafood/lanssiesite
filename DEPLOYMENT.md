# Deployment Guide for lanssie.com

## Current Setup
- **Domain**: lanssie.com (purchased from GoDaddy)
- **Site Type**: Jekyll static site
- **Status**: Needs HTTPS/SSL enabled

## Enabling HTTPS/SSL

### Option 1: If hosted on GoDaddy
1. Log into your GoDaddy account
2. Go to **My Products** → **Web Hosting** → **Manage**
3. Look for **SSL Certificate** or **Security** section
4. Enable **Free SSL** (usually Let's Encrypt) or purchase an SSL certificate
5. Wait 24-48 hours for SSL to activate
6. Force HTTPS redirect (usually available in hosting settings)

### Option 2: If hosted elsewhere (GitHub Pages, Netlify, etc.)
- **GitHub Pages**: Automatically provides HTTPS. Just ensure your site is set up correctly.
- **Netlify**: Automatically provides HTTPS via Let's Encrypt
- **Other hosts**: Check your hosting provider's SSL/HTTPS settings

### Option 3: Using Cloudflare (Recommended - Free)
1. Sign up for free Cloudflare account
2. Add your domain `lanssie.com`
3. Update your DNS nameservers in GoDaddy to point to Cloudflare
4. Cloudflare automatically provides free SSL/HTTPS
5. Enable "Always Use HTTPS" in Cloudflare settings

## How to Deploy Changes

### Step 1: Build Your Site
Jekyll needs to be built before deployment. Run:

```bash
bundle exec jekyll build
```

This creates a `_site` folder with all the static HTML files.

### Step 2: Deploy Based on Your Hosting

#### If using GoDaddy Web Hosting:
1. Build your site: `bundle exec jekyll build`
2. Log into GoDaddy File Manager or use FTP
3. Upload all contents of the `_site` folder to your `public_html` directory
4. Replace existing files when prompted

**FTP Details** (usually found in GoDaddy hosting settings):
- Host: ftp.yourdomain.com or IP address
- Username: Your hosting username
- Password: Your hosting password
- Port: 21 (or 22 for SFTP)

#### If using GitHub Pages:
1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main` or `gh-pages`)
4. GitHub automatically builds and deploys your Jekyll site
5. Your site will be available at `https://yourusername.github.io/repo-name`
6. To use custom domain, add `CNAME` file with `lanssie.com` and update DNS

#### If using Netlify:
1. Connect your GitHub repository to Netlify
2. Set build command: `bundle exec jekyll build`
3. Set publish directory: `_site`
4. Netlify automatically builds and deploys on every git push

#### If using other hosting (FTP/SFTP):
1. Build your site: `bundle exec jekyll build`
2. Use FTP client (FileZilla, Cyberduck, etc.) or command line
3. Upload `_site` contents to your web root directory

## Quick Deployment Script

You can use the provided `deploy.sh` script (if created) or manually:

```bash
# Build the site
bundle exec jekyll build

# Then upload _site contents via your preferred method
```

## Testing Locally

Before deploying, test your site locally:

```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` to preview your site.

## Troubleshooting

### SSL Not Working?
- Wait 24-48 hours after enabling SSL
- Clear your browser cache
- Check if your hosting provider requires manual SSL activation
- Verify DNS settings are correct

### Changes Not Appearing?
- Make sure you built the site (`jekyll build`)
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check if you uploaded to the correct directory
- Verify file permissions on server

### Finding Your Hosting Provider
1. Check your GoDaddy account for hosting services
2. Look for emails from hosting providers
3. Check your domain's DNS records (use `dig lanssie.com` or online tools)
4. The nameservers will tell you where it's hosted

## Recommended: Set Up Automated Deployment

Consider using:
- **GitHub Pages** (free, automatic HTTPS)
- **Netlify** (free tier, automatic HTTPS, easy setup)
- **Cloudflare Pages** (free, automatic HTTPS)

These services automatically build and deploy your site when you push to GitHub, and provide free SSL certificates.


