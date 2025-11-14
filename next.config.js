/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '' : '', // Set to '/lanssiesite' if using GitHub Pages subdirectory
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '', // Set to '/lanssiesite' if using GitHub Pages subdirectory
  trailingSlash: true,
}

module.exports = nextConfig

