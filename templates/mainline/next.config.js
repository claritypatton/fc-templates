/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Allow any HTTPS image source — agent rewrites these per client.
      { protocol: 'https', hostname: '**' },
    ],
  },
};

module.exports = nextConfig;
