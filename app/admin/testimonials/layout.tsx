import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Banner from "@/components/BAAS/Banners/Banner"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="mx-auto max-w-6xl">{children}</div>
    </>
  )
}
