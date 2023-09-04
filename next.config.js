/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'calmessimple.com.ar',
      },
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
      },
    ],
  }
}

module.exports = nextConfig
