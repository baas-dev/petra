/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/backend/:path*",
        destination: `https://petra-api/:path*`,
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/backend/:path*",
          destination: `https://petra-api/:path*`,
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
