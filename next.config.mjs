/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  eslint: {
    // This will allow builds to complete even with ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig; 