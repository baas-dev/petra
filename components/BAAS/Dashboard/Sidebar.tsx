"use client"

import Link from "next/link"
import { FileImage } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { SidebarItems } from "@/app/asdfasfdsdfasdf/layout"

import MediaDialog from "./MediaDialog"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: { title: string; items: SidebarItems[] }[]
}

export function Sidebar({ className, items }: SidebarProps) {
  return (
    <div className={cn("pb-12 w-full", className)}>
      <div className="space-y-4 py-4">
        <MediaDialog />

        <div className="space-y-1   ">
          {items.map((item, i) => (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className=" border bg-white shadow-md rounded-lg">
                  <h2 className="relative text-md font-semibold tracking-tight pl-4">
                    {item.title}
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 mt-2 ">
                  <RenderSidebarItems items={item.items} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  )
}

function RenderSidebarItems(props: { items: SidebarItems[] }) {
  return (
    <>
      {props.items &&
        props.items.map((item, i) =>
          item.children && item.children?.length > 0 ? (
            <Accordion
              type="single"
              collapsible
              className="w-full items-start py-2 mt-2"
            >
              <AccordionItem value="item-1 text-left">
                <AccordionTrigger className="text-left bg-white">
                  {item.icon}
                  <span className="font-normal text-sm pl-4">{item.title}</span>
                </AccordionTrigger>
                <AccordionContent className="bg-white rounded-xl">
                  {item.children.map((subitem, j) => (
                    <Link href={`${subitem.href}`}>
                      <Button
                        key={`${subitem}-${j}`}
                        variant="ghost"
                        className="w-full justify-start"
                      >
                        <span className="text-md pl-4">{subitem.title}</span>
                      </Button>
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            <Link href={`${item.href}`} className="w-full ">
              <div className="w-full  hover:bg-gray-500/20 mb-1 text-white bg-white border shadow-sm hover:cursor-pointer">
                <Button
                  key={`${item}-${i}`}
                  variant="link"
                  className="w-ful p-0 justify-start font-normal ml-2  rounded-lg hover:no-underline "
                >
                  <span className="pl-4">{item.icon}</span>
                  <span className="text-md pl-2  ">{item.title}</span>
                </Button>
              </div>
            </Link>
          )
        )}
    </>
  )
}
