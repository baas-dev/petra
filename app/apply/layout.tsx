import { Metadata } from "next"

interface RootLayoutProps {
  children: React.ReactNode
}

let SEO = {
  title: "Apply for a Home Loan | Streamlined Process at Petra Home Lending",
  description:
    "Ready to turn your homeownership dreams into reality? Complete the home loan application at Petra Home Lending  to kickstart your journey. Our straightforward process ensures a smooth experience as you apply for your ideal lending solution.",
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
    canonical: `/apply`,
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
export default function Layout({ children }) {
  return <div className="pb-16">{children}</div>
}
