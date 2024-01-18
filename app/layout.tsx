import "@/app/styles/globals.css"
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

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "h-full min-h-screen font-sans antialiased"
            // fontSans.variable
          )}
        >
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
