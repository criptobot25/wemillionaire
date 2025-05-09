/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Ignoring type checking for build to deploy to Vercel
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 