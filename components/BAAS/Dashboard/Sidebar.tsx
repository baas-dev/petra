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
import { SidebarItems } from "@/app/admin/layout"

import MediaDialog from "./MediaDialog"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarItems[]
  adminItems: SidebarItems[]
}

export function Sidebar({ className, items, adminItems }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <MediaDialog />

        <div className="py-2">
          <h2 className="relative text-lg font-semibold tracking-tight">
            Site Content
          </h2>
          <div className="space-y-1   ">
            {items?.map((item, i) => (
              <>
                {item.children && item.children?.length > 0 ? (
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full items-start py-0"
                  >
                    <AccordionItem value="item-1 text-left">
                      <AccordionTrigger className="text-left py-2">
                        {item.icon}
                        <span className="text-md pl-4">{item.title}</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        {item.children.map((subitem, j) => (
                          <Link href={`${subitem.href}`}>
                            <Button
                              key={`${subitem}-${j}`}
                              variant="ghost"
                              className="w-full justify-start"
                            >
                              <span className="text-md pl-4">
                                {subitem.title}
                              </span>
                            </Button>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link href={`${item.href}`}>
                    <Button
                      key={`${item}-${i}`}
                      variant="ghost"
                      className="w-full p-0 justify-start font-normal"
                    >
                      {item.icon}
                      <span className="text-md pl-4  ">{item.title}</span>
                    </Button>
                    <Separator />
                  </Link>
                )}
              </>
            ))}
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative text-lg font-semibold tracking-tight">
            Admin Managment
          </h2>
          <div className="space-y-1">
            {adminItems?.map((item, i) => (
              <>
                <Button
                  key={`${item}-${i}`}
                  variant="ghost"
                  className="w-full justify-start p-0 font-bold"
                >
                  {item.icon}
                  <span className="text-md pl-2">{item.title}</span>
                </Button>
                {item.children && item.children?.length > 0 ? (
                  item.children.map((subitem, j) => (
                    <Button
                      key={`${subitem}-${j}`}
                      variant="ghost"
                      className="w-full justify-start font-normal"
                    >
                      <span className="text-md pl-4">{subitem.title}</span>
                    </Button>
                  ))
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
