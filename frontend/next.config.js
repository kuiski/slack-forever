/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  webpack: (config, options) => {
    config.resolve.fallback = { fs: false, module: false, path: false }
    return config
  },
}

module.exports = nextConfig
