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
    routeAnnouncer: false,
    turbo: {
      loaders: {
        // Добавьте здесь ваши загрузчики Turbopack
      }
    }
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
      };
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  css: {
    build: {
      extract: true,
      cssFile: './src/app/global.css',
    },
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://testserver.gamevizor.ru/api/:path*/', // Прокси на ваш API сервер
      },
    ];
  },
};

module.exports = nextConfig;
