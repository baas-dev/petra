"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Inspect, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import AssistanceTrigger from "../../Assistant/AssistanceTrigger"
import MobileNavSheet from "../../mobile-nav-sheet"
import BigCard from "../Cards/BigCard"
import Cart from "../Shop/components/Cart"
import SiteSearch from "./SiteSearch"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function MainNav() {
  return (
    <>
      <div className="hidden md:block">
        <div className="  h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <FullWidthNavbar />
        </div>
      </div>
      <div className=" md:hidden w-full">
        <div className=" flex h-16  items-center space-x-4 justify-between sm:space-x-0">
          <MobileNavbar />

          <div className="flex p-2">
            {/* <ThemeToggle /> */}
            <AssistanceTrigger />
          </div>
        </div>
        <div className="w-full px-1 bg-gray-100 mb-1">
          <SiteSearch />
        </div>
      </div>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const FullWidthNavbar = () => {
  let path = usePathname()
  console.log(path)
  return (
    <>
      <header className="bg-white w-full">
        <div className=" mx-auto px-4 py-2 flex items-center">
          <div className="mr-auto md:w-48 flex-shrink-0">
            <Image
              src={"/images/petra-blue.svg"}
              height={75}
              width={100}
              alt=""
            />
          </div>

          <SiteSearch />
          {/* <div className="w-full max-w-md xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md  xl:flex items-center">
            <Input
              className="border-none  bg-transparent font-semibold text-sm pl-4"
              type="text"
              placeholder="I'm searching for ..."
            />

            <Search className="w-8 mx-2" />
          </div> */}

          <div className="ml-auto md:w-48  sm:flex text-right flex-col place-items-end">
            <span className="font-medium md:text-xl"> Petra Home Lending</span>
            <span className="font-normal text-sm text-gray-400">
              3939 Belt Line Rd #150, Addison, TX 75001
            </span>
          </div>

          <nav className="contents">
            <ul className="ml-4 flex items-center justify-end">
              <li>
                <AssistanceTrigger />
              </li>
            </ul>
          </nav>
        </div>

        <hr />
        <NavigationMenu className="items-center text-center mx-auto py-1">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" className="" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div
                    className={`flex-wrap text-cente items-center  ${
                      path == "/" ? "text-accent underline" : ""
                    } `}
                  >
                    <span> Home</span>
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div
                    className={`flex-wrap text-cente items-center  ${
                      path == "/about" ? "text-accent underline" : ""
                    } `}
                  >
                    <span> About Petra</span>
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/social" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div
                    className={`flex-wrap text-cente items-center  ${
                      path == "/social" ? "text-accent underline" : ""
                    } `}
                  >
                    <span>Articles</span>
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] p-2">
                  <li className="row-span-3 h-full">
                    <NavigationMenuLink asChild className="h-full">
                      {/* <a
                        className="flex py-0 my-0 h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md"
                        // href="/"
                      > */}
                      <BigCard
                        bg={"bg-primary"}
                        bgHover={"bg-primary/20"}
                        link={"/resources/faqs"}
                        image={""}
                        Title={"Resources For Homebuyers"}
                        Description={"Useful tools to aid in your journey"}
                        btn={false}
                        btnText={null}
                        action={() => {}}
                      />
                      {/* </a> */}
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    className="h-full"
                    href="/resources/mortgage-calculator"
                    title="Mortgage Calculator"
                  >
                    An easy to use payment calculator
                  </ListItem>
                  <ListItem
                    className="h-full"
                    href="/resources/downloads"
                    title="Downloads & Links"
                  >
                    Public resources for homebuyers
                  </ListItem>
                  <ListItem
                    className="h-full"
                    href="/resources/faqs"
                    title="FAQ's"
                  >
                    Common Questions, Our Answers
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <HoverCard openDelay={0} closeDelay={0}>
              <Link href="/contact" legacyBehavior passHref>
                <HoverCardTrigger className={navigationMenuTriggerStyle()}>
                  <div
                    className={`flex-wrap text-cente items-center  ${
                      path == "/contact" ? "text-accent underline" : ""
                    } `}
                  >
                    Contact Us
                  </div>
                </HoverCardTrigger>
              </Link>
              <HoverCardContent className="bg-white">
                <div className="text-left">
                  <Label className="text-lg pb-2 underline  text-primary">
                    Talk With The Team
                  </Label>
                  <p>We are eager to hear from you!</p>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard openDelay={0} closeDelay={0}>
              <Link href="/prequalify" legacyBehavior passHref>
                <HoverCardTrigger className={navigationMenuTriggerStyle()}>
                  <div
                    className={`flex-wrap text-center items-center  ${
                      path == "/prequalify" ? "text-accent underline" : ""
                    } `}
                  >
                    Get Prequalified
                  </div>
                </HoverCardTrigger>
              </Link>
              <HoverCardContent className="bg-white">
                <div className="text-left">
                  <Label className="text-lg pb-2 underline text-primary ">
                    Start Prequalification
                  </Label>
                  <p>
                    Complete our short form to make your home buying experience
                    as easy as possible
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
            {/* <NavigationMenuItem>
              <Link href="/prequalify" className="" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Get Prequalified
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
            {/* <HoverCard openDelay={0}>
              <HoverCardTrigger className={navigationMenuTriggerStyle()}>
                Shop
              </HoverCardTrigger>
              <HoverCardContent className="bg-secondary">
                <Cart />

                <Link href="/shop" className="font-light hover:cursor-pointer">
                  <BigCard
                    Title={"Shop Our Store"}
                    Description={"Awesome Reality Merch Available in Stock Now"}
                    btnText={"Shop Now"}
                    btn={true}
                    bg={"bg-primary"}
                    link={"/shop"}
                    bgHover={"bg-primary/60"}
                    image={undefined}
                  />
                </Link>
              </HoverCardContent>
            </HoverCard> */}
          </NavigationMenuList>
        </NavigationMenu>
        <hr />
      </header>
    </>
  )
}

const MobileNavbar = () => {
  return (
    <>
      <div className="w-1/3">
        <MobileNavSheet />
      </div>
    </>
  )
}
