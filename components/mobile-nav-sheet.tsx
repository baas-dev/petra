"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { HoverCard } from "@radix-ui/react-hover-card"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import {
  AlertCircle,
  Calculator,
  DollarSign,
  Download,
  FileQuestion,
  Home,
  Info,
  MoreVertical,
  Newspaper,
  Pen,
  Phone,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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

import { playlists } from "./BAAS/Cards/data"
import Cart from "./BAAS/Shop/components/Cart"
import { HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { MenubarShortcut } from "./ui/menubar"
import { Separator } from "./ui/separator"

const SHEET_POSITIONS = ["top", "right", "bottom", "left"] as const

type SheetPosition = (typeof SHEET_POSITIONS)[number]

export default function MobileNavSheet() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex w-full items-center justify-between text-left">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant={"ghost"} className="ml-2">
            <MoreVertical />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader className="text-left">
            <SheetTitle>
              <Image
                src={"/images/petra-blue.svg"}
                height={50}
                width={100}
                alt=" mx-auto pl-8 mx-auto w-full absolute pb-4 mb-4 "
              />
            </SheetTitle>
            <SheetDescription>
              <div className="h-16 w-full">
                <Image
                  src={"/images/tag.png"}
                  height={500}
                  width={1000}
                  className=" mx-auto mb-4  w-full pb-4  "
                  alt=""
                />{" "}
              </div>
            </SheetDescription>
          </SheetHeader>
          <Separator className="w-full border bg-background text-primary" />

          <div>
            <MobileNavMenu setOpen={setOpen} />
          </div>
          {/* <SheetFooter>
            <p>Made by BAAS Software</p>
          </SheetFooter> */}
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center">
        <Image
          src={"/images/petra-blue.svg"}
          height={50}
          width={100}
          alt=" mx-auto pl-8 mx-auto w-full absolute pb-4 mb-4 "
        />
      </div>
    </div>
  )
}

const MobileNavMenu = ({ setOpen }) => {
  let router = useRouter()
  return (
    <div className={cn("pb-12")}>
      <div className="space-y-4 py-4">
        <div className=" py-2">
          <h2 className="mb-2 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Button
              onClick={() => {
                router.push("/"), setOpen(false)
              }}
              variant={"ghost"}
              className="w-full justify-start"
            >
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button
              onClick={() => {
                router.push("/about"), setOpen(false)
              }}
              variant="ghost"
              className="w-full justify-start"
            >
              <Info className="mr-2 h-4 w-4" />
              About Us
            </Button>
            {/* <Link href="/social"> */}

            {/* </Link> */}
            <Button
              onClick={() => {
                router.push("/resources"), setOpen(false)
              }}
              variant="ghost"
              className="w-full justify-start"
            >
              <Calculator className="mr-2 h-4 w-4" />
              Resources
            </Button>

            <Button
              onClick={() => {
                router.push("/contact"), setOpen(false)
              }}
              variant="ghost"
              className="w-full justify-start"
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Button>

            <Button
              onClick={() => {
                router.push("/client-center"), setOpen(false)
              }}
              variant="ghost"
              className="w-full justify-start"
            >
              <Pen className="mr-2 h-4 w-4" />
              Client Center
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
