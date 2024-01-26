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
  Paperclip,
  Pen,
  Percent,
  PersonStanding,
  Quote,
  Users,
  Wallet,
  Wrench,
} from "lucide-react"
import { signOut, useSession } from "next-auth/react"

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
import BACKEND from "@/app/api"

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

const FormItems: { title: string; bgColor: string; items: SidebarItems[] } = {
  title: "Forms",
  bgColor: "",
  items: [
    {
      title: "Form Submissions",
      href: "/admin/forms",
      description: "Form submissions recorded in your system.",

      classes: "bg-green-100 hover:bg-green-300",

      icon: <FormInput className="mr-2 h-8 w-8 " />,
    },
    {
      title: "Form Delivery Settings",
      href: "/admin/forms/settings",
      description: "Emails that receive copies of forms submitted",

      classes: "bg-green-100 hover:bg-green-300",

      icon: <Cog className="mr-2 h-8 w-8 " />,
    },
  ],
}

const AdminItems: { title: string; bgColor: string; items: SidebarItems[] } = {
  title: "Admin Management",
  bgColor: "bg-primary",
  items: [
    {
      title: "Users",
      classes: "bg-purple-100 hover:bg-purple-300",
      description: "Accounts with portal capabilities",
      href: "/admin/users",
      icon: <Users className="mr-2 h-8 w-8 " />,
    },
  ],
}
const DocItems: { title: string; bgColor: string; items: SidebarItems[] } = {
  title: "Documentation",
  bgColor: "bg-orange-500",
  items: [
    {
      title: "Docs",
      classes: "bg-orange-100 hover:bg-orange-300",
      description: "Help articles for users of this system.",
      href: "/admin/docs",
      icon: <Paperclip className="mr-2 h-8 w-8 " />,
    },
  ],
}
const ContentItems: { title: string; bgColor: string; items: SidebarItems[] } =
  {
    title: "Site Content",
    bgColor: "bg-primary",
    items: [
      {
        title: "Resources",
        href: "/admin/resources",
        description: "Helpful links, downloads, and other content",
        classes: "bg-blue-100 hover:bg-blue-300 ",

        icon: <Wrench className="mr-2 h-8 w-8  font-light" />,
      },
      {
        title: "Team Members",
        href: "/admin/team",
        description:
          "Biographical information about your company for the public",
        classes: "bg-blue-100 hover:bg-blue-300 ",

        icon: <Users className="mr-2 h-8 w-8 font-light " />,
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
  group: string
  items: SidebarItems[]
} = {
  title: "Site Content",
  bgColor: "bg-primary",
  group: "Site Content",

  items: [
    {
      title: "Resources",
      href: "/admin/resources",
      description: "Helpful links, downloads, and other content",
      classes: "bg-blue-100 hover:bg-blue-300 ",

      icon: <Wrench className="mr-2 h-8 w-8  font-light" />,
    },

    {
      title: "Form Submissions",
      href: "/admin/forms",
      description: "Form submissions recorded in your system.",

      classes: "bg-green-100",

      icon: <FormInput className="mr-2 h-8 w-8 " />,
    },
  ],
}

const api = new BACKEND()

export default function AdminNav() {
  let session = useSession()
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
  function RoleSwitch() {
    let role = session.data?.user?.role
    switch (role) {
      case "editor":
        return [ContentItems, FormItems, DocItems]
      case "admin":
        return [ContentItems, FormItems, DocItems, AdminItems]
      case "superadmin":
        return [ContentItems, FormItems, DocItems, AdminItems]
      default:
        return [ContentItems, DocItems]
    }
  }
  let NavItemsRendered = RoleSwitch()
  return (
    <div className="mx-auto mb-4  flex max-w-6xl justify-between">
      <Sheet open={open} onOpenChange={handleChange}>
        <SheetTrigger asChild>
          <Button className="text-lg">
            <FlipHorizontal className="mr-2" />
            Admin Navigation
          </Button>
        </SheetTrigger>
        <SheetContent side={"bottom"} className="h-screen">
          <div className="mx-auto flex w-full max-w-6xl justify-between ">
            <SheetHeader className="mb-8 w-full ">
              <SheetTitle className="text-4xl font-bold">
                Admin Navigation
              </SheetTitle>
              <SheetDescription>
                Make changes to your site by targeting different scopes
              </SheetDescription>
            </SheetHeader>
          </div>
          <ScrollArea className="mx-auto  h-full max-w-6xl">
            <div className=" mx-auto">
              <NavGroupSection action={handleChange} items={NavItemsRendered} />
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      <MediaDialog />
    </div>
  )
}

function NavGroupSection(props: {
  action: () => void
  items: {
    title: string
    bgColor: string
    items: SidebarItems[]
  }[]
}) {
  return (
    <>
      {props.items.map((item, idx) => {
        return (
          <div key={idx} className="mb-4 h-full">
            <Label className="text-lg font-semibold text-primary underline">
              {item.title}
            </Label>
            <div className="grid h-full grid-cols-1 gap-2  md:grid-cols-4">
              {item.items.map((subitem, i) => (
                <>
                  <Link key={i} href={subitem.href} onClick={props.action}>
                    <Card
                      className={`flex h-full w-full items-center p-4  hover:cursor-pointer ${subitem.classes}`}
                    >
                      <div>
                        <CardTitle className="text-lg underline font-light flex ">
                          {subitem.icon}

                          {subitem.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {subitem.description}
                        </CardDescription>
                      </div>
                    </Card>
                  </Link>
                </>
              ))}
            </div>
          </div>
        )
      })}
      <Label className="text-lg font-semibold text-primary underline">
        Logout
      </Label>
      <div
        onClick={() => {
          signOut({
            redirect: true,
            callbackUrl: "/admin",
          })
        }}
        className="grid h-full grid-cols-1 gap-2  md:grid-cols-4"
      >
        <Card
          className={`flex w-full items-center bg-red-200 p-4 hover:cursor-pointer hover:bg-red-300`}
        >
          {<LogOut />}
          <div>
            <CardTitle className="text-md font-light">{`Log Out`}</CardTitle>
            <CardDescription className="text-sm">
              {`Sign out of your account`}
            </CardDescription>
          </div>
        </Card>
      </div>
    </>
  )
}
