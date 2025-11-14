# Fix HTTPS for lanssie.com

## Problem
HTTPS is unavailable because GitHub Pages needs time to provision the SSL certificate after DNS is correctly configured.

## Current DNS Status ✅
Your DNS records are **correctly configured**! Verified:
- `185.199.108.153` ✅
- `185.199.109.153` ✅
- `185.199.110.153` ✅
- `185.199.111.153` ✅

All four required A records are present and pointing to the correct GitHub Pages IP addresses.

## Step-by-Step Fix

### 1. Verify DNS Records (Already Correct ✅)

Your DNS is already properly configured! To verify:
1. **Log into GoDaddy**
   - Go to https://www.godaddy.com
   - Sign in to your account

2. **Navigate to DNS Management**
   - Go to **My Products**
   - Find `lanssie.com` and click **DNS** (or **Manage DNS**)

3. **Verify Four A Records**
   - You should see four A records pointing to:
     - `185.199.108.153` ✅
     - `185.199.109.153` ✅
     - `185.199.110.153` ✅
     - `185.199.111.153` ✅
   - If any are missing, add them using the same format as above

### 3. Optional: Add www Subdomain (Recommended)

If you want `www.lanssie.com` to work:

1. **Add CNAME Record**
   - Type: `CNAME`
   - Name: `www`
   - Value: `lanseafood.github.io` (your GitHub username + .github.io)
   - TTL: `600`

### 2. Configure Custom Domain in GitHub Pages

1. **Go to Repository Settings**
   - Visit: https://github.com/lanseafood/lanssiesite/settings/pages

2. **Add/Verify Custom Domain**
   - Under "Custom domain", enter: `lanssie.com`
   - Click **Save**
   - GitHub will verify the DNS configuration

3. **Ensure CNAME File Exists**
   - A `CNAME` file with `lanssie.com` should be in your repository
   - This file has been created in `public/CNAME` and will be included in deployments
   - If you need to create it manually, add a file named `CNAME` (no extension) with just: `lanssie.com`

4. **Wait for SSL Certificate Provisioning**
   - GitHub will automatically provision an SSL certificate
   - This typically takes **24-48 hours** after the domain is verified
   - The "Enforce HTTPS" checkbox will become available once SSL is ready
   - You'll see a green checkmark next to the domain when it's ready

### 4. Verify DNS Configuration

After updating, verify with these commands:

```bash
# Check A records (should show the 4 new IPs)
dig lanssie.com A +short

# Should output:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

### 5. Timeline

- **DNS Update**: 15 minutes - 2 hours (usually)
- **GitHub SSL Certificate**: 24-48 hours after DNS is correct
- **Total**: Up to 48-72 hours for HTTPS to be fully enabled

## Troubleshooting

### If HTTPS still unavailable after 48-72 hours:

1. **Verify DNS records** are correct (already verified ✅)
   ```bash
   dig lanssie.com A +short
   ```
   Should show all 4 IP addresses

2. **Check GitHub Pages settings**
   - Go to: https://github.com/lanseafood/lanssiesite/settings/pages
   - Ensure `lanssie.com` is entered in "Custom domain"
   - Look for any error messages or warnings

3. **Remove and re-add the domain** (if needed)
   - In GitHub Pages settings, remove the custom domain
   - Wait 5 minutes
   - Re-add `lanssie.com` and save
   - This can trigger a fresh SSL certificate provisioning

4. **Verify CNAME file is deployed**
   - Check that `public/CNAME` exists in your repository
   - After deployment, verify it's in the `out/` directory
   - The file should contain just: `lanssie.com`

5. **Check for DNS propagation issues**
   - Use multiple DNS checkers: https://www.whatsmydns.net
   - Ensure all checkers show the 4 correct IP addresses

6. **Contact GitHub Support** if still not working after 72 hours
   - Include your repository URL and domain
   - Mention that DNS is correctly configured

### Quick DNS Check Commands

```bash
# Check current A records
dig lanssie.com A +short

# Check nameservers
dig lanssie.com NS +short

# Detailed DNS lookup
dig lanssie.com A
```

## After HTTPS is Enabled

Once "Enforce HTTPS" becomes available:
1. ✅ Check the **"Enforce HTTPS"** checkbox
2. Your site will automatically redirect HTTP → HTTPS
3. Your site will be fully secure! 🔒

