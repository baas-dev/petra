"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  FileQuestion,
  Hand,
  Home,
  HomeIcon,
  MessageSquare,
  PhoneCall,
  Sticker,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import AssistanceTrigger from "../../Assistant/AssistanceTrigger"
import MobileNavSheet from "../../mobile-nav-sheet"

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
          <div className="flex ">
            {/* <ThemeToggle /> */}
            <AssistanceTrigger />
          </div>
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
  return (
    <>
      <header className="bg-white w-full">
        <div className=" mx-auto px-4 py-8 flex items-center">
          <div className="mr-auto md:w-48 flex-shrink-0">
            <Image
              src={"/images/petra-blue.svg"}
              height={75}
              width={150}
              alt=""
            />
          </div>

          <div className="w-full max-w-md xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md  xl:flex items-center">
            <select
              className="bg-transparent uppercase font-bold text-sm p-4 mr-4"
              name=""
              id=""
            >
              <option>all categories</option>
            </select>
            <input
              className=" border-gray-300 bg-transparent font-semibold text-sm pl-4"
              type="text"
              placeholder="I'm searching for ..."
            />
            <svg
              className="ml-auto h-5 px-4 text-gray-500"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="search"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              // className="svg-inline--fa fa-search fa-w-16 fa-9x"
            >
              <path
                fill="currentColor"
                d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
              ></path>
            </svg>
          </div>

          <div className="ml-auto md:w-48  sm:flex flex-col place-items-end">
            <span className="font-bold md:text-xl">8 800 332 65-66</span>
            <span className="font-semibold text-sm text-gray-400">
              Support 24/7
            </span>
          </div>

          <nav className="contents">
            <ul className="ml-4 xl:w-48 flex items-center justify-end">
              <li className="ml-2 lg:ml-4 relative inline-block">
                <a className="" href="">
                  <svg
                    className="h-9 lg:h-10 p-2 text-gray-500"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="user"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    // className="svg-inline--fa fa-user fa-w-14 fa-9x"
                  >
                    <path
                      fill="currentColor"
                      d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="ml-2 lg:ml-4 relative inline-block">
                <a className="" href="">
                  <div className="absolute -top-1 right-0 z-40 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                    3
                  </div>
                  <svg
                    className="h-9 lg:h-10 p-2 text-gray-500"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="heart"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    // className="svg-inline--fa fa-heart fa-w-16 fa-9x"
                  >
                    <path
                      fill="currentColor"
                      d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="ml-2 lg:ml-4 relative inline-block">
                <a className="" href="">
                  <div className="absolute -top-1 right-0 z-40 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                    12
                  </div>
                  <svg
                    className="h-9 lg:h-10 p-2 text-gray-500"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="shopping-cart"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    // className="svg-inline--fa fa-shopping-cart fa-w-18 fa-9x"
                  >
                    <path
                      fill="currentColor"
                      d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <AssistanceTrigger />
              </li>
            </ul>
          </nav>
        </div>

        <hr />
        <NavigationMenu className="items-center text-center mx-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" className="" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div className="flex-wrap text-cente items-center">
                    <span> Home</span>
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div className="flex-wrap text-cente items-center">
                    <span> About Petra</span>
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/social" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div className="flex-wrap text-center items-center">
                    <span>Social</span>
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        // href="/"
                      >
                        <Icons.logo className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Resources for Homebuyers
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Mortgage Calculator">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Downloads & Links">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="FAQ's">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div className="flex-wrap text-center items-center">
                    <span> Contact Us</span>
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/prequalify" className="" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Get Prequalified
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </>
  )
}

const MobileNavbar = () => {
  return (
    <>
      <div className="w-1/2">
        <MobileNavSheet />
      </div>
    </>
  )
}
