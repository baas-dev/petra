import { Metadata } from "next"

interface RootLayoutProps {
  children: React.ReactNode
}

let SEO = {
  title: "Contact the Petra Team. We Are Eager To Help You!",
  description:
    "Have questions about home loans or ready to start your homeownership journey? Contact Petra Home Lendingtoday. Our dedicated team is here to assist you with personalized and expert guidance.",
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
    canonical: `/contact`,
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
