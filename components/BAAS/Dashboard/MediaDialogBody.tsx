"use client"

import { Switch } from "@material-tailwind/react"
import {
  BellRing,
  Check,
  ChevronDownIcon,
  CircleIcon,
  Download,
  Folder,
  LucideStickyNote,
  PlusIcon,
  StarIcon,
  Trash,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export interface MediaItemOptions {
  title: string
  description: string
  type: string
}

export default function MediaDialogBody() {
  return (
    <>
      <div className="max-h-[600px] overflow-y-scroll grid grid-cols-4 gap-1 mt-8">
        <FolderCard />
        <FolderCard />
        <FileCard />
        <FileCard />
        <FileCard />
      </div>
    </>
  )
}
type CardProps = React.ComponentProps<typeof Card>

function FolderCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-full h-48 ", className)} {...props}>
      <CardHeader className="grid grid-cols-2">
        <div className="">
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </div>
        <div className="float-right">
          <Button variant={"destructive"} className="float-right  w-16">
            <Trash />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4"></CardContent>
      <CardFooter>
        <Button className="w-full bg-yellow-600">
          <Folder className="mr-2 h-4 w-4 " /> Open Folder
        </Button>
      </CardFooter>
    </Card>
  )
}

function FileCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-full h-48", className)} {...props}>
      <CardHeader className="">
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4"></CardContent>
      <CardFooter className="flex gap-2">
        <Button className="w-full">
          <LucideStickyNote className="mr-2 h-4 w-4 " /> View Details
        </Button>
        <Button className="w-full">
          <Download className="mr-2 h-4 w-4 " /> Download
        </Button>
      </CardFooter>
    </Card>
  )
}
