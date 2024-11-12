/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    turbo: true, // Активируем Turbopack
    routeAnnouncer: false,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://server.gamevizor.ru/api/:path*/', // Прокси на ваш API сервер
      },
    ];
  },
};

module.exports = nextConfig;
