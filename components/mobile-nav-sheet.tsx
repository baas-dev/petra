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
              Meet Petra
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
                router.push("/apply"), setOpen(false)
              }}
              variant="ghost"
              className="w-full justify-start"
            >
              <Pen className="mr-2 h-4 w-4" />
              Apply Now
            </Button>
            <HoverCard>
              <HoverCardTrigger>
                <Button
                  onClick={() => {
                    router.push("/prequalification"), setOpen(false)
                  }}
                  variant="ghost"
                  className="w-full justify-start"
                >
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Prequalification
                </Button>
              </HoverCardTrigger>
              <HoverCardContent></HoverCardContent>
            </HoverCard>

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
          </div>
        </div>
      </div>
    </div>
  )
}
