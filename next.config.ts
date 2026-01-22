/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    // Enable responsive images with modern formats
    formats: ['image/avif', 'image/webp'],
    // Optimize by default
    unoptimized: false,
  },
  // Enable React strict mode only in dev for better error detection
  reactStrictMode: true,
  // Enable experimental optimizations for performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons', 'react-icons/fa', 'react-icons/si'],
  },
  // Compression settings
  compress: true,
}

module.exports = nextConfig

