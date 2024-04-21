/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/.well-known/assetlinks.json",
        destination: "/api/assetlinks",
      },
    ];
  },
  images: {
    unoptimized: true,
  },
  // rules: {
  //   "@next/next/no-img-element": "off",
  // },
  output: "export",
};

module.exports = nextConfig;




