"use client"

import {
  FileQuestion,
  FormInput,
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

import { Sidebar } from "@/components/BAAS/Dashboard/Sidebar"
import { AuthProvider } from "@/components/BAAS/Shop/Context/AuthContext"

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
      title: "Form Submissions",
      href: "/admin/forms",
      icon: <FormInput />,
    },
    // {
    //   title: "Settings",
    //   href: "/admin/forms/settings",
    //   icon: <Cog />,
    // },
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
      href: "/admin/shop/categories",
      icon: <Group />,
    },
    {
      title: "Orders",
      href: "/admin/shop/orders",
      icon: <Wallet />,
    },

    {
      title: "Coupons",
      href: "/admin/shop/coupons",
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
      <AuthProvider>
        <div className=" min-h-screen pt-24 gap-4 bg-secondary px-4">
          <Sidebar
            items={[
              sidebarNavItems,
              formNavItems,
              articleNavItems,
              shopNavItems,
            ]}
            className=""
          />
          <div className="w-full mx-auto rounded-lg ">{children}</div>
        </div>
      </AuthProvider>
    </>
  )
}
