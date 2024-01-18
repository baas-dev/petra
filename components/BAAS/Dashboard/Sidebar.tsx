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

import { SidebarItems } from "../Nav/AdminNav"
import MediaDialog from "./MediaDialog"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: { title: string; items: SidebarItems[] }[]
}

export function Sidebar({ className, items }: SidebarProps) {
  return (
    <div className={cn("w-full pb-12", className)}>
      <div className="mx-auto max-w-4xl space-y-4 py-4">
        <MediaDialog />

        <div className="space-y-1   ">
          {items.map((item, i) => (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className=" rounded-lg border bg-white shadow-md">
                  <h2 className="text-md relative pl-4 font-semibold tracking-tight">
                    {item.title}
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="mt-2 space-y-4 ">
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
              className="mt-2 w-full items-start py-2"
            >
              <AccordionItem value="item-1 text-left">
                <AccordionTrigger className="bg-white text-left">
                  {item.icon}
                  <span className="pl-4 text-sm font-normal">{item.title}</span>
                </AccordionTrigger>
                <AccordionContent className="rounded-xl bg-white">
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
              <div className="mb-1  w-full border bg-white text-white shadow-sm hover:cursor-pointer hover:bg-gray-500/20">
                <Button
                  key={`${item}-${i}`}
                  variant="link"
                  className="w-ful ml-2 justify-start rounded-lg p-0  font-normal hover:no-underline "
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
