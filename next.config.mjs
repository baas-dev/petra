/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // images: {
  //   domains: ["images.unsplash.com", "imagedelivery.net", "*"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    esmExternals: true,
  },
}

export default nextConfig
