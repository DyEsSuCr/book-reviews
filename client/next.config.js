/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'books.google.com'
      },
      {
        protocol: 'https',
        hostname: 'www.salonlfc.com'
      }
    ]
  }
}

module.exports = nextConfig
