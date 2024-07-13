/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.timbu.cloud/:path*', // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
