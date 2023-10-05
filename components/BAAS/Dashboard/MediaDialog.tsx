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

export default function MediaDialog(userInfo: {}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className=" bg-accent shadow-md ">
          <FileImage className="mr-2  text-white" />

          <span className="text-lg text-white">Browse Files</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={"bottom"} className="bg-secondary h-screen w-screen">
        <SheetHeader className="mb-4 w-full">
          <div className="flex w-full justify-between">
            <div>
              <SheetTitle>Media Files Uploaded</SheetTitle>
              <SheetDescription>
                Upload and manage files for your site
              </SheetDescription>
            </div>
            {/* <div className="mr-4">
              <Button className="bg-accent">Upload</Button>
            </div> */}
          </div>
        </SheetHeader>
        <Separator />
        <MediaDialogBody />
      </SheetContent>
    </Sheet>
  )
}
