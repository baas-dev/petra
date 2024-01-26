import { Metadata } from "next"

import IntroSection from "@/components/Sections/General/IntroSection"

interface RootLayoutProps {
  children: React.ReactNode
}

let SEO = {
  title: "About Us | Petra Home Lending",
  description:
    " Our home lending team brings expertise and personalized service to guide you through every step of your homeownership journey.",
  site: "https://petralending.com",
  images: [
    {
      url: "https://media.petralending.com/logo_social.png", // Must be an absolute URL
      width: 1920,
      height: 1080,
    },
  ],
}
export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  alternates: {
    canonical: `/about`,
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
export default function AboutLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="mb-16">{children}</div>
    </>
  )
}
