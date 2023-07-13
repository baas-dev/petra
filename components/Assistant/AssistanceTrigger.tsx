import { Label } from "@radix-ui/react-menubar"
import { PhoneCall } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import CardExtra from "../BAAS/Cards/CardExtra"
import ServiceCard from "../BAAS/Cards/ServiceCard"
import { Input } from "../ui/input"
import { ScrollArea } from "../ui/scroll-area"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"

export default function AssistanceTrigger() {
  return (
    <Sheet key={0}>
      <SheetTrigger asChild>
        <Button variant="outline">{"Need Help?"}</Button>
      </SheetTrigger>

      <SheetContent side={"top"} className="container p-0">
        <ScrollArea className="h-screen rounded-md border p-4">
          <div className="max-w-4xl mx-auto">
            <SheetHeader>
              <SheetTitle className="text-4xl text-center font-light mb-2">
                Assistance Tool
              </SheetTitle>
              {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
            </SheetHeader>
            <ServiceCard
              description="It Only Takes 2 Steps"
              title="Are You Ready to Get Prequalified?"
              actionText="Get Prequalified Now"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <CardExtra
                icon={<PhoneCall />}
                title="Looking For Information?"
                actionText="Get Resources"
              />
              <CardExtra
                icon={<PhoneCall />}
                title="Facebook Message Us"
                actionText="214-432-0443"
              />
              <CardExtra
                icon={<PhoneCall />}
                title="Call Us"
                actionText="214-432-0443"
              />
            </div>

            <SheetFooter>
              <SheetClose asChild>
                <Button
                  type="reset"
                  variant={"destructive"}
                  className="mt-2 w-full"
                >
                  Close
                </Button>
              </SheetClose>
            </SheetFooter>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
    // <Popover>
    //   <PopoverTrigger className="bg-none">
    //     <Avatar className="w-10 h-10">
    //       <AvatarImage src="https://github.com/shadcn.png" />
    //       <AvatarFallback>CN</AvatarFallback>
    //     </Avatar>
    //   </PopoverTrigger>
    //   <PopoverContent>
    //     <div className="flex flex-wrap">
    //       <Button className="w-full bg-blue-500 hover:bg-blue-800">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-4 w-4 mr-2"
    //           fill="currentColor"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    //         </svg>
    //         Message Us On Facebook
    //       </Button>
    //       <ButtoAre You Readyn className="w-full mt-1 bg-violet-500 hover:bg-violet-800">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-4 w-4 mr-2"
    //           fill="currentColor"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    //         </svg>
    //         Find Answers
    //       </Button>
    //       <Button className="w-full mt-1 bg-violet-500 hover:bg-violet-800">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-4 w-4 mr-2"
    //           fill="currentColor"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    //         </svg>
    //         Contact Us
    //       </Button>
    //     </div>
    //   </PopoverContent>
    // </Popover>
  )
}
