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
    path: "http://test.petralending.com",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  },
  // experimental: {
  //   // esmExternals: "loose",
  // },
}

export default nextConfig
