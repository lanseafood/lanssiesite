#!/bin/bash

# Deployment script for lanssie.com
# This script builds your Jekyll site and prepares it for deployment

set -e  # Exit on error

echo "🚀 Building Jekyll site..."
bundle exec jekyll build

echo "✅ Build complete! Files are in the _site directory"
echo ""
echo "📦 Next steps:"
echo "   1. If using FTP: Upload contents of _site/ to your web server"
echo "   2. If using GitHub Pages: Push to your repository"
echo "   3. If using Netlify: Push to your connected repository"
echo ""
echo "💡 Tip: Check DEPLOYMENT.md for detailed instructions"


