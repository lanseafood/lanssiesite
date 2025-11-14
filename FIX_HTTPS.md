# Fix HTTPS for lanssie.com

## Problem
Your DNS records are pointing to **old GitHub Pages IP addresses**. GitHub Pages requires **four specific A records** to enable HTTPS.

## Current DNS (WRONG - Old IPs)
- `192.30.252.153` ❌
- `192.30.252.154` ❌

## Required DNS (CORRECT - New IPs)
You need **four A records** pointing to:
- `185.199.108.153` ✅
- `185.199.109.153` ✅
- `185.199.110.153` ✅
- `185.199.111.153` ✅

## Step-by-Step Fix

### 1. Update DNS Records in GoDaddy

1. **Log into GoDaddy**
   - Go to https://www.godaddy.com
   - Sign in to your account

2. **Navigate to DNS Management**
   - Go to **My Products**
   - Find `lanssie.com` and click **DNS** (or **Manage DNS**)

3. **Delete Old A Records**
   - Find any A records pointing to `192.30.252.153` or `192.30.252.154`
   - Delete them (click the trash icon or remove)

4. **Add Four New A Records**
   - Click **Add** or **+ Add Record**
   - Create **four separate A records**:
   
     **Record 1:**
     - Type: `A`
     - Name: `@` (or leave blank, or `lanssie.com`)
     - Value: `185.199.108.153`
     - TTL: `600` (or default)
   
     **Record 2:**
     - Type: `A`
     - Name: `@` (or leave blank)
     - Value: `185.199.109.153`
     - TTL: `600`
   
     **Record 3:**
     - Type: `A`
     - Name: `@` (or leave blank)
     - Value: `185.199.110.153`
     - TTL: `600`
   
     **Record 4:**
     - Type: `A`
     - Name: `@` (or leave blank)
     - Value: `185.199.111.153`
     - TTL: `600`

5. **Save Changes**
   - Click **Save** on each record
   - GoDaddy will save automatically

### 2. Optional: Add www Subdomain (Recommended)

If you want `www.lanssie.com` to work:

1. **Add CNAME Record**
   - Type: `CNAME`
   - Name: `www`
   - Value: `lanseafood.github.io` (your GitHub username + .github.io)
   - TTL: `600`

### 3. Verify in GitHub Pages

1. **Go to Repository Settings**
   - Visit: https://github.com/lanseafood/lanssiesite/settings/pages

2. **Check Custom Domain**
   - Under "Custom domain", make sure `lanssie.com` is entered
   - If not, enter it and click **Save**

3. **Wait for DNS Propagation**
   - DNS changes can take **15 minutes to 48 hours** to propagate
   - Usually takes 1-2 hours

4. **Check HTTPS Status**
   - After DNS propagates, GitHub will automatically provision SSL certificate
   - This can take additional **24-48 hours** after DNS is correct
   - The "Enforce HTTPS" checkbox will become available once SSL is ready

### 4. Verify DNS Changes

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

### If HTTPS still unavailable after 48 hours:

1. **Double-check DNS records** in GoDaddy
2. **Verify all 4 A records** are present and correct
3. **Check GitHub Pages settings** - make sure domain is saved
4. **Remove and re-add the domain** in GitHub Pages settings
5. **Contact GitHub Support** if still not working

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

