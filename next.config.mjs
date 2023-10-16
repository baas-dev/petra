/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  // images: {
  //   domains: ["images.unsplash.com", "imagedelivery.net", "*"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "*",
      },
    ],
    unoptimized: true,
  },
  // experimental: {
  //   // esmExternals: "loose",
  // },
}

export default nextConfig
