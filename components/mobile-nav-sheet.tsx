"use client"

import { useState } from "react"
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

const SHEET_POSITIONS = ["top", "right", "bottom", "left"] as const

type SheetPosition = (typeof SHEET_POSITIONS)[number]

export default function MobileNavSheet() {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full text-left">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant={"ghost"} className="ml-2">
            <MoreVertical /> Menu
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader className="text-left">
            <SheetTitle>Site Navigation</SheetTitle>
            <SheetDescription>
              We are excited to help you with your mortgage lending
            </SheetDescription>
          </SheetHeader>
          <div>
            <MobileNavMenu setOpen={setOpen} />
          </div>
          {/* <SheetFooter>
            <p>Made by BAAS Software</p>
          </SheetFooter> */}
        </SheetContent>
      </Sheet>
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
              About
            </Button>
            {/* <Link href="/social"> */}
            <Button
              onClick={() => {
                router.push("/articles"), setOpen(false)
              }}
              variant="ghost"
              className="w-full justify-start"
            >
              <Newspaper className="mr-2 h-4 w-4" />
              Articles
            </Button>
            {/* </Link> */}
            <Button
              onClick={() => {
                router.push("/resources/mortgage-calculator"), setOpen(false)
              }}
              variant="ghost"
              className="w-full justify-start"
            >
              <Calculator className="mr-2 h-4 w-4" />
              Mortgage Calculator
            </Button>
            <Button
              onClick={() => {
                router.push("/resources/downloads"), setOpen(false)
              }}
              variant="ghost"
              className="w-full justify-start"
            >
              <Download className="mr-2 h-4 w-4" />
              Downloads & Links
            </Button>

            <Button
              onClick={() => {
                router.push("/resources/faqs"), setOpen(false)
              }}
              variant="ghost"
              className="w-full justify-start"
            >
              <FileQuestion className="mr-2 h-4 w-4" />
              FAQs
            </Button>
            <Button
              onClick={() => {
                router.push("/contact"), setOpen(false)
              }}
              variant="ghost"
              className="w-full justify-start"
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact
            </Button>
            <HoverCard>
              <HoverCardTrigger>
                <Button
                  onClick={() => {
                    router.push("/snapshot"), setOpen(false)
                  }}
                  variant="ghost"
                  className="w-full justify-start"
                >
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Snapshot Tool
                </Button>
              </HoverCardTrigger>
              <HoverCardContent></HoverCardContent>
            </HoverCard>

            {/* <Button
              onClick={() => {
                router.push("/shop"), setOpen(false)
              }}
              variant="ghost"
              className="w-full justify-start"
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Shop
            </Button> */}
            {/* <Cart /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
