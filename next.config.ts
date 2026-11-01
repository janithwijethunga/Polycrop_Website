import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true }, // Enables hosting on Vercel, Firebase Hosting, or GitHub Pages
  trailingSlash: true,
};

export default nextConfig;