import { FileImage } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
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

import MediaDialogBody from "./MediaDialogBody"

export default function MediaDialog() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-full bg-accent shadow-md p-0">
          <FileImage className="mr-2  text-white" />

          <span className="text-lg text-white">Browse Files</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={"bottom"} className="bg-secondary h-screen w-screen">
        <SheetHeader className="mb-4">
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <MediaDialogBody />
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
