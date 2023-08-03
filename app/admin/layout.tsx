import { Metadata } from "next"
import Image from "next/image"
import {
  Edit,
  FormInput,
  FunctionSquare,
  HelpCircle,
  Package,
  Quote,
  ShoppingBag,
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

const sidebarNavItems: SidebarItems[] = [
  {
    title: "Articles",
    href: "/admin/articles",
    icon: <Edit />,
  },
  {
    title: "Forms",
    href: "/admin/forms",

    icon: <FormInput />,
    children: [
      {
        href: "/admin/forms/submissions",
        icon: <Edit />,
        title: "Contact Us",
      },
      {
        href: "/admin/forms/config",
        icon: <Edit />,
        title: "Prequalification Profiles",
      },
    ],
  },
  {
    title: "Page Components",
    href: "/admin/components",
    icon: <Package />,
    // children: [
    //   {
    //     title: "Quotes",
    //     href: "/admin/quotes",
    //     icon: <Quote />,
    //   },
    //   {
    //     title: "Team",
    //     href: "/admin/team",
    //     icon: <FunctionSquare />,
    //   },
    //   {
    //     title: "FAQs",
    //     href: "/admin/faqs",
    //     icon: <FunctionSquare />,
    //   },

    //   {
    //     title: "Resources",
    //     href: "/admin/resources",
    //     icon: <HelpCircle />,
    //   },
    // ],
  },
]

const adminItems: SidebarItems[] = [
  {
    title: "Users",
    href: "/admin/forms",
    icon: <FunctionSquare />,
  },
  {
    title: "Config",
    href: "/admin/team",
    icon: <HelpCircle />,
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="container mx-auto">
        <div className=" space-y-6 py-10 pb-16 md:block">
          <div className="space-y-0.5">
            <h2 className="text-4xl font-bold tracking-tight">Admin</h2>
            <p className="text-muted-foreground">Manage your site</p>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col space-y-12 lg:flex-row lg:space-x-12 lg:space-y-0">
            {/* Media Popover */}
            <Sidebar
              items={sidebarNavItems}
              adminItems={adminItems}
              className="w-1/5"
            />

            <div className="flex-1 border-4 border-dashed rounded-lg">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
