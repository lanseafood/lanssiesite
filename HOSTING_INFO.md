# Your Website Hosting Information

## ✅ Current Deployment Status

**Your site is hosted on GitHub Pages!**

- **Repository**: https://github.com/lanseafood/lanssiesite.git
- **Domain**: lanssie.com
- **Hosting Provider**: GitHub Pages
- **DNS Nameservers**: GoDaddy (ns75.domaincontrol.com, ns76.domaincontrol.com)
- **IP Address**: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 (GitHub Pages) ✅

## 🔍 How to Verify & Manage Your Deployment

### 1. Check GitHub Pages Settings
1. Go to: https://github.com/lanseafood/lanssiesite
2. Click **Settings** (in the repository)
3. Scroll to **Pages** section (left sidebar)
4. You'll see:
   - Source branch (usually `main`, `master`, or `gh-pages`)
   - Custom domain: Should show `lanssie.com`
   - SSL certificate status

### 2. Enable HTTPS on GitHub Pages
GitHub Pages provides free SSL, but you need to:
1. Go to repository Settings → Pages
2. Under "Custom domain", make sure `lanssie.com` is entered
3. Check "Enforce HTTPS" checkbox (this may take a few minutes to appear after domain is verified)
4. If checkbox is grayed out, wait 24 hours after adding the domain

### 3. Update DNS Records in GoDaddy
Your DNS is currently pointing to GitHub Pages correctly. ✅ To verify:
1. Log into GoDaddy
2. Go to **My Products** → **DNS** (or **Domain Manager**)
3. Look for A records pointing to:
   - `185.199.108.153` ✅
   - `185.199.109.153` ✅
   - `185.199.110.153` ✅
   - `185.199.111.153` ✅
4. All four A records should be present for HTTPS to work

## 🚀 How to Deploy Changes

Since you're using GitHub Pages, deployment is automatic:

1. **Make your changes** to files in this repository
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin master  # or 'main' depending on your branch
   ```
3. **GitHub automatically builds and deploys** your Jekyll site
4. Changes appear on lanssie.com within 1-2 minutes

## 🔒 Fixing HTTPS/SSL

The SSL certificate error suggests the domain might not be properly configured in GitHub Pages:

1. **Add/Verify Custom Domain in GitHub**:
   - Repository Settings → Pages
   - Under "Custom domain", enter: `lanssie.com`
   - Save

2. **Update DNS in GoDaddy** (if needed):
   - Add A records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or keep current IPs if they're working

3. **Wait for DNS propagation** (can take up to 48 hours)

4. **Enable "Enforce HTTPS"** in GitHub Pages settings once available

## 📝 Quick Commands

```bash
# Check your git remote
git remote -v

# Push changes to deploy
git add .
git commit -m "Update website"
git push origin master

# Test locally before deploying
bundle exec jekyll serve
```

## 🆘 Troubleshooting

- **Changes not appearing?** Wait 1-2 minutes after pushing, then hard refresh (Cmd+Shift+R)
- **SSL not working?** Check GitHub Pages settings, wait for DNS propagation
- **Need to check deployment status?** Go to repository → Actions tab (if enabled)

