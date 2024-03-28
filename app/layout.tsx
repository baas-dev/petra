import "@/app/styles/globals.css"
import { Metadata } from "next"
import Script from "next/script"

import { siteConfig } from "@/config/site"
// import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/BAAS/Nav/Footer"
import { CartProvider } from "@/components/BAAS/Shop/Context/CartContext"
import { TableContextProvider } from "@/components/BAAS/Table/Context"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

import AuthProvider from "./authProvider"

let SEO = {
  title: "Petra Home Lending | Your home. Our calling.",
  description:
    "We’re a small home mortgage lender, and that’s on purpose. Whether you’re buying your first home, need a larger home for your growing family, or are ready to downsize, our purpose is to provide that same rock-solid certainty with your mortgage. We are called to help you move into the home that’s right for you, right where you find yourself in life’s journey. Welcome to the family.",
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
  title: "Petra Home Lending | Your home. Our calling.",
  description:
    "We’re a small home mortgage lender, and that’s on purpose. Whether you’re buying your first home, need a larger home for your growing family, or are ready to downsize, our purpose is to provide that same rock-solid certainty with your mortgage. We are called to help you move into the home that’s right for you, right where you find yourself in life’s journey. Welcome to the family.",
  alternates: {
    canonical: `/`,
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

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "h-full min-h-screen font-sans antialiased"
            // fontSans.variable
          )}
        >
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-C6Q1GQP18V"
          />

          <Script id="google-analytics">
            {`
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
             
               gtag('config', 'G-C6Q1GQP18V');
          `}
          </Script>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AuthProvider>
              <TableContextProvider>
                <CartProvider>
                  <SiteHeader />
                  <Toaster />
                  <div className="min-h-screen w-full">{children}</div>
                  <Footer />
                  <TailwindIndicator />
                </CartProvider>
              </TableContextProvider>
            </AuthProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
