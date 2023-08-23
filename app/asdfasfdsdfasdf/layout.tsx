import { Metadata } from "next"
import Image from "next/image"
import {
  Banknote,
  Check,
  Cog,
  DollarSign,
  Edit,
  FileQuestion,
  Group,
  Package,
  PanelTopClose,
  Pen,
  Percent,
  Phone,
  Quote,
  Users,
  Wallet,
  Wrench,
} from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { Sidebar } from "@/components/BAAS/Dashboard/Sidebar"

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
}

export interface SidebarItems {
  href: string
  title: string
  icon: JSX.Element
  children?: SidebarItems[]
}

const sidebarNavItems: { title: string; items: SidebarItems[] } = {
  title: "Site Content",
  items: [
    {
      title: "FAQs",
      href: "/admin/faqs",
      icon: <FileQuestion />,
    },
    {
      title: "Resources",
      href: "/admin/resources",
      icon: <Wrench />,
    },
    {
      title: "Team Members",
      href: "/admin/team",
      icon: <Users />,
    },
    {
      title: "Testimonials",
      href: "/admin/testimonials",
      icon: <Quote />,
    },
  ],
}

const formNavItems: { title: string; items: SidebarItems[] } = {
  title: "Forms",
  items: [
    {
      title: "Contact Us",
      href: "/admin/forms/contact",
      icon: <Phone />,
    },
    {
      title: "Prequalification",
      href: "/admin/forms/prequalification",
      icon: <Check />,
    },
    {
      title: "Settings",
      href: "/admin/forms/settings",
      icon: <Cog />,
    },
  ],
}

const articleNavItems: { title: string; items: SidebarItems[] } = {
  title: "Articles",
  items: [
    {
      title: "Articles",
      href: "/admin/articles",
      icon: <Pen />,
    },
    {
      title: "Categories",
      href: "/admin/articles/categories",
      icon: <Group />,
    },
  ],
}

const shopNavItems: { title: string; items: SidebarItems[] } = {
  title: "Shop",
  items: [
    {
      title: "Products",
      href: "/admin/shop/products",
      icon: <Package />,
    },
    {
      title: "Categories",
      href: "/admin/team",
      icon: <Group />,
    },
    {
      title: "Orders",
      href: "/admin/shop/orders",
      icon: <Wallet />,
    },

    {
      title: "Coupons",
      href: "/admin/team",
      icon: <Percent />,
    },
    {
      title: "Attributes",
      href: "/admin/shop/attributes",
      icon: <PanelTopClose />,
    },
  ],
}

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      {/* Media Popover */}
      <div className="grid grid-cols-6 min-h-screen pt-24 gap-4 bg-secondary px-4">
        <Sidebar
          items={[sidebarNavItems, formNavItems, articleNavItems, shopNavItems]}
          className=""
        />
        <div className="w-full mx-auto rounded-lg col-span-5">{children}</div>
      </div>
    </>
  )
}
