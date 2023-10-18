import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Cog,
  FileQuestion,
  FlipHorizontal,
  FormInput,
  Group,
  LogIn,
  LogOut,
  Package,
  PanelTopClose,
  Pen,
  Percent,
  PersonStanding,
  Quote,
  Users,
  Wallet,
  Wrench,
} from "lucide-react"
import { signOut } from "next-auth/react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import BACKEND from "@/app/API"

import BigCard from "../Cards/BigCard"
import MediaDialog from "../Dashboard/MediaDialog"

export interface SidebarItems {
  href: string
  title: string
  icon: JSX.Element
  description?: string
  classes?: string
  children?: SidebarItems[]
}

const ContentItems: { title: string; bgColor: string; items: SidebarItems[] } =
  {
    title: "Site Content",
    bgColor: "bg-primary",
    items: [
      {
        title: "FAQs",
        href: "/admin/faqs",
        description: "The most frequent questions you answer",
        classes: "bg-blue-100 hover:bg-blue-300 ",
        icon: <FileQuestion className="h-8 w-8 mr-2 font-light" />,
      },
      {
        title: "Resources",
        href: "/admin/resources",
        description: "Helpful links, downloads, and other content",
        classes: "bg-blue-100 hover:bg-blue-300 ",

        icon: <Wrench className="h-8 w-8 mr-2  font-light" />,
      },
      {
        title: "Team Members",
        href: "/admin/team",
        description:
          "Biographical information about your company for the public",
        classes: "bg-blue-100 hover:bg-blue-300 ",

        icon: <Users className="h-8 w-8 mr-2 font-light " />,
      },
      {
        title: "Testimonials",
        href: "/admin/testimonials",
        description: "Public facing managed reviews of your services",

        classes: "bg-blue-100 hover:bg-blue-300 ",

        icon: <Quote className="h-8 w-8 mr-2  font-light" />,
      },
      {
        title: "Articles",
        href: "/admin/articles",
        description: "Content posts to serve to your users",
        classes: "bg-orange-100 hover:bg-orange-300",

        icon: <Pen className="h-8 w-8 mr-2 " />,
      },
      {
        title: "Article Categories",
        classes: "bg-orange-100 hover:bg-orange-300",
        href: "/admin/articles/categories",
        description: "Classification categories for article posts",
        icon: <Group className="h-8 w-8 mr-2 " />,
      },
      {
        title: "Form Submissions",
        href: "/admin/forms",
        description: "Form submissions recorded in your system.",

        classes: "bg-green-100 hover:bg-green-300",

        icon: <FormInput className="h-8 w-8 mr-2 " />,
      },
      {
        title: "Form Delivery Settings",
        href: "/admin/forms/settings",
        description: "Emails that receive copies of forms submitted",

        classes: "bg-green-100 hover:bg-green-300",

        icon: <Cog className="h-8 w-8 mr-2 " />,
      },

      {
        title: "Users",
        classes: "bg-purple-100 hover:bg-purple-300",
        description: "Accounts with admin capabilities",
        href: "/admin/users",
        icon: <Users className="h-8 w-8 mr-2 " />,
      },
      // {
      //   title: "Log Out",
      //   classes: "bg-red-300 hover:bg-red-500",
      //   description: "Accounts with admin capabilities",
      //   href: "/admin/users",
      //   icon: <LogIn className="h-8 w-8 mr-2 " />,
      // },
    ],
  }

const EditorContentItems: {
  title: string
  bgColor: string
  items: SidebarItems[]
} = {
  title: "Site Content",
  bgColor: "bg-primary",
  items: [
    {
      title: "FAQs",
      href: "/admin/faqs",
      description: "The most frequent questions you answer",
      classes: "bg-blue-100 hover:bg-blue-300 ",
      icon: <FileQuestion className="h-8 w-8 mr-2 font-light" />,
    },
    {
      title: "Resources",
      href: "/admin/resources",
      description: "Helpful links, downloads, and other content",
      classes: "bg-blue-100 hover:bg-blue-300 ",

      icon: <Wrench className="h-8 w-8 mr-2  font-light" />,
    },

    {
      title: "Articles",
      href: "/admin/articles",
      description: "Content posts to serve to your users",
      classes: "bg-orange-100 hover:bg-orange-300",

      icon: <Pen className="h-8 w-8 mr-2 " />,
    },
    {
      title: "Article Categories",
      classes: "bg-orange-100 hover:bg-orange-300",
      href: "/admin/articles/categories",
      description: "Classification categories for article posts",
      icon: <Group className="h-8 w-8 mr-2 " />,
    },
    {
      title: "Form Submissions",
      href: "/admin/forms",
      description: "Form submissions recorded in your system.",

      classes: "bg-green-100",

      icon: <FormInput className="h-8 w-8 mr-2 " />,
    },
  ],
}
// const ShopItems: { title: string; bgColor: string; items: SidebarItems[] } = {
//   title: "Shop",
//   bgColor: "bg-accent",

//   items: [
//     {
//       title: "Products",
//       href: "/admin/shop/products",
//       icon: <Package />,
//     },
//     {
//       title: "Categories",
//       href: "/admin/shop/categories",
//       icon: <Group />,
//     },
//     {
//       title: "Orders",
//       href: "/admin/shop/orders",
//       icon: <Wallet />,
//     },

//     {
//       title: "Coupons",
//       href: "/admin/shop/coupons",
//       icon: <Percent />,
//     },
//     {
//       title: "Attributes",
//       href: "/admin/shop/attributes",
//       icon: <PanelTopClose />,
//     },
//   ],
// }
const api = new BACKEND()

export default function AdminNav() {
  let [open, setOpen] = useState(false)
  let [userData, setUserData] = useState({
    Name: "",
    Email: "",
    CreatedAt: "",
    Role: "",
  })

  useEffect(() => {}, [])

  function handleChange() {
    if (!open) {
      setOpen(true)
    }

    if (open) {
      setOpen(false)
    }
  }
  function RoleSwitch(role: string) {
    switch (role) {
      case "editor":
        return EditorContentItems
      case "admin":
        return ContentItems
      case "superadmin":
        return ContentItems
      default:
        return ContentItems
    }
  }
  let RoleView = RoleSwitch(userData.Role)
  return (
    <div className="mx-auto max-w-6xl  mb-4 flex justify-between">
      <Sheet open={open} onOpenChange={handleChange}>
        <SheetTrigger asChild>
          <Button className="text-lg">
            <FlipHorizontal className="mr-2" />
            Admin Navigation
          </Button>
        </SheetTrigger>
        <SheetContent side={"bottom"} className="h-screen">
          <div className="flex w-full justify-between max-w-6xl mx-auto ">
            <SheetHeader className="mb-8 w-full ">
              <SheetTitle>Admin Navigation</SheetTitle>
              <SheetDescription>
                Make changes to your site by targeting different scopes
              </SheetDescription>
            </SheetHeader>
          </div>
          <ScrollArea className="h-full  max-w-6xl mx-auto">
            <div className=" mx-auto">
              <NavGroupSection {...RoleView} action={handleChange} />

              {/* <NavGroupSection {...FormItems} action={handleChange} />
              <NavGroupSection {...ArticleItems} action={handleChange} /> */}
              {/* <NavGroupSection {...ShopItems} action={handleChange} /> */}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      <MediaDialog />
    </div>
  )
}

function NavGroupSection(props: {
  title: string
  bgColor: string
  items: SidebarItems[]
  action: () => void
}) {
  let { title, bgColor, items } = props

  return (
    <>
      <div className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 ">
          {items.map((item, i) => (
            <>
              <Link href={item.href} onClick={props.action}>
                <Card
                  className={`w-full p-4 flex items-center hover:cursor-pointer ${item.classes}`}
                >
                  {item.icon}
                  <div>
                    <CardTitle className="text-md font-light">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {item.description}
                    </CardDescription>
                  </div>
                </Card>
              </Link>
            </>
          ))}
          <div
            onClick={() => {
              signOut({
                redirect: true,
                callbackUrl: "/admin",
              })
            }}
          >
            <Card
              className={`w-full p-4 flex items-center hover:cursor-pointer bg-red-200 hover:bg-red-300`}
            >
              {<LogOut />}
              <div>
                <CardTitle className="text-md font-light">
                  {`Log Out`}
                </CardTitle>
                <CardDescription className="text-sm">
                  {`Sign out of your account`}
                </CardDescription>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
