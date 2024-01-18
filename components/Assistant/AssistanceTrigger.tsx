import Link from "next/link"
import { Label } from "@radix-ui/react-menubar"
import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  Calculator,
  Calendar,
  CreditCard,
  Facebook,
  Hand,
  HelpCircle,
  MailQuestion,
  MessageCircle,
  Phone,
  PhoneCall,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

interface AssistanceSection {}

export default function AssistanceTrigger() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className="h-16 w-full hover:bg-blue-300 border-2 bg-blue-100  hover:text-black rounded-full"
        >
          <div className="flex-wrap py-8 justify-between  text-center ">
            <HelpCircle className=" w-6  mx-auto" />
            <p className="">Help</p>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Command className="rounded-lg">
          {/* <CommandInput placeholder="Type a command or search..." /> */}
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Contact Us!">
              <Link href="tel:12144320443">
                <CommandItem className="hover:cursor-pointer">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>Call Us</span>
                  {/* <CommandShortcut>⌘P</CommandShortcut> */}
                </CommandItem>
              </Link>
              <Link href="/contact">
                <CommandItem className="hover:cursor-pointer">
                  <MailQuestion className="mr-2 h-4 w-4" />
                  <span>Message Us</span>
                  {/* <CommandShortcut>⌘B</CommandShortcut> */}
                </CommandItem>
              </Link>

              <Link target="_blank" href="https://m.me/petralending">
                <CommandItem className=" hover:cursor-pointer border-2 border-blue-500 bg-blue-600 text-white">
                  <Facebook className="mr-2 h-4 w-4" />
                  <span>Message Us on Facebook</span>
                  {/* <CommandShortcut>⌘S</CommandShortcut> */}
                </CommandItem>
              </Link>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
