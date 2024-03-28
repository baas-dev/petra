import { Metadata } from "next"

interface RootLayoutProps {
  children: React.ReactNode
}

let SEO = {
  title: "Awards and Recognition - Petra Home Lending Excellence",
  description:
    "Discover the accolades that distinguish Petra Home Lending as a leader in home lending. Our commitment to excellence has been recognized through industry awards, reflecting our dedication to providing top-notch service.",
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
    canonical: `/about/awards`,
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
