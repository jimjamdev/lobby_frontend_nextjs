/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'fr', 'nl', 'sv'],
    defaultLocale: 'en',
    localeDetection: true
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
};

module.exports = nextConfig;
