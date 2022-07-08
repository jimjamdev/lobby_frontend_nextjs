/** @type {import('next').NextConfig} */
const nextConfig = {
 i18n: {
   locales: ['en', 'fr', 'nl'],
   defaultLocale: 'en'
 },
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
