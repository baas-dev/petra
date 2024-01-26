import { Metadata } from "next"

import MortgageCalcProvider from "./mortgage-calculator/components/formContext"

interface RootLayoutProps {
  children: React.ReactNode
}

let SEO = {
  title: "Helpful Mortgage Lending Resources",
  description:
    "Buying a home shouldn’t be hard. Our team is here to support you every step of the way. We have gathered a few resources to get you started.",
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
    canonical: `/resouces`,
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
      <MortgageCalcProvider>
        <div className="mb-16 h-full min-h-screen">{children}</div>
      </MortgageCalcProvider>
    </>
  )
}
