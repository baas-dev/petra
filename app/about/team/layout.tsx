import { Metadata } from "next"

interface RootLayoutProps {
  children: React.ReactNode
}

let SEO = {
  title: "Meet Our Expert Home Lending Team at Petra Home Lending",
  description:
    "Discover the dedicated professionals behind Petra Home Lending. Our home lending team brings expertise and personalized service to guide you through every step of your homeownership journey.",
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
    canonical: `/about/team`,
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

export default function AdminPageLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="">{children}</div>
    </>
  )
}
