"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import {
  AlertCircle,
  Globe,
  Home,
  Info,
  LayoutGrid,
  Library,
  ListMusic,
  Menu,
  MenuIcon,
  Mic,
  Mic2,
  MoreHorizontal,
  MoreVertical,
  Music2,
  Newspaper,
  Phone,
  PlayCircle,
  Radio,
  User,
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
import { MenubarShortcut } from "./ui/menubar"

const SHEET_POSITIONS = ["top", "right", "bottom", "left"] as const

type SheetPosition = (typeof SHEET_POSITIONS)[number]

export default function MobileNavSheet() {
  const [position, setPosition] = useState<SheetPosition>("left")
  return (
    <div className="w-full text-left">
      {/* <RadioGroup
        defaultValue={position}
        onValueChange={(value) => setPosition(value as SheetPosition)}
      >
        <div className="grid grid-cols-2 gap-2">
          {SHEET_POSITIONS.map((position, index) => (
            <div
              key={`${position}-${index}`}
              className="flex items-center space-x-2"
            >
              <RadioGroupItem value={position} id={position} />
              <Label htmlFor={position}>{position}</Label>
            </div>
          ))}
        </div>
      </RadioGroup> */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} className="ml-2">
            <MoreVertical /> Menu
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} size="xl">
          <SheetHeader className="text-left">
            <SheetTitle>Site Navigation</SheetTitle>
            <SheetDescription>
              We are excited to help you with your mortgage lending
            </SheetDescription>
          </SheetHeader>
          <div>
            <MobileNavMenu />
          </div>
          <SheetFooter>
            <p>Made by BAAS Software</p>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

const MobileNavMenu = ({ className, playlists }: SidebarProps) => {
  let router = useRouter()
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className=" py-2">
          <h2 className="mb-2 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Button
              onClick={() => router.push("/")}
              variant={"ghost"}
              className="w-full justify-start"
            >
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button
              onClick={() => router.push("/about")}
              variant="ghost"
              className="w-full justify-start"
            >
              <Info className="mr-2 h-4 w-4" />
              About
            </Button>
            {/* <Link href="/social"> */}
            <Button
              onClick={() => router.push("/social")}
              variant="ghost"
              className="w-full justify-start"
            >
              <Newspaper className="mr-2 h-4 w-4" />
              Social
            </Button>
            {/* </Link> */}
            <Button
              onClick={() => router.push("/resources")}
              variant="ghost"
              className="w-full justify-start"
            >
              <Radio className="mr-2 h-4 w-4" />
              Resource Center
            </Button>

            <Button
              onClick={() => router.push("/contact")}
              variant="ghost"
              className="w-full justify-start"
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact
            </Button>
            <Button
              onClick={() => router.push("/prequalify")}
              variant="ghost"
              className="w-full justify-start"
            >
              <AlertCircle className="mr-2 h-4 w-4" />
              Get Prequalified
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
