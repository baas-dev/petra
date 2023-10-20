/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/backend/:path*",
        destination: `http://${process.env.NEXT_PUBLIC_APIURL}/:path*`,
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/backend/:path*",
          destination: `http://${process.env.NEXT_PUBLIC_APIURL}/:path*`,
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
