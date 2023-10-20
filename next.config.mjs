/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/backend/:path*",
        destination: `https://api.petralending.com/:path*`,
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/backend/:path*",
          destination: `https://api.petralending.com/:path*`,
        },
      ],
    }
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
