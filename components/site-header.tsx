import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import AssistanceTrigger from "@/components/Assistant/AssistanceTrigger"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import MainNav from "./main-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40  w-full border-b bg-background">
      <MainNav />
    </header>
  )
}
