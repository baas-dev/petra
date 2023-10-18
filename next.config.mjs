/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: {
    async rewrites() {
      return [
        {
          source: "/api/:path*",
          destination: "http://localhost:4000/:path*",
        },
      ]
    },
  },
  images: {
    domains: ["*"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

export default nextConfig
