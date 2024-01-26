import { Metadata } from "next"

interface RootLayoutProps {
  children: React.ReactNode
}

let SEO = {
  title:
    "Home Loan Prequalification | Discover Your Lending Options | Petra Home Lending",
  description:
    "Take the first step towards homeownership with our hassle-free home loan prequalification. Submit the form to give our expert team insights into your financial profile. Explore tailored lending options at Petra Home Lending.",
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
    canonical: `/prequalification`,
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
      <div className=" min-h-screen` bg-secondary">{children}</div>
    </>
  )
}
