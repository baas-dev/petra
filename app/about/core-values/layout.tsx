import { Metadata } from "next"

interface RootLayoutProps {
  children: React.ReactNode
}

let SEO = {
  title: "Our Core Values | Petra Home Lending",
  description:
    "Explore the foundational principles that drive Petra Home Lending. Our commitment to integrity, transparency, and client-centric values sets us apart in the home lending industry.",
  site: "https://petralending.com",
  images: [
    {
      url: "https://files.petralending.com/logo_social.png", // Must be an absolute URL
      width: 1920,
      height: 1080,
    },
  ],
}
export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  alternates: {
    canonical: `/about/core-values`,
  },
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: SEO.site,
    siteName: "Petra Home Lending",
    images: SEO.images,
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="">{children}</div>
    </>
  )
}
