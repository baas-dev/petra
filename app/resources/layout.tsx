import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import Banner from "@/components/BAAS/Banners/Banner"

import MortgageCalcProvider from "./mortgage-calculator/components/formContext"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <MortgageCalcProvider>
        <div className=" bg-secondary min-h-screen`">{children}</div>
      </MortgageCalcProvider>
    </>
  )
}
