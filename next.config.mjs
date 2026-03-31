/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.honda-motorcycle-europe.com',
      'www.honda2wheelersindia.com',
      'edge.sitecorecloud.io'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.honda2wheelersindia.com',
      },
      {
        protocol: 'https',
        hostname: 'edge.sitecorecloud.io',
      },
    ],
  },
};

export default nextConfig;
