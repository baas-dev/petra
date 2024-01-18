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
          className="h-16 w-full rounded-full border-2 bg-blue-100  hover:bg-blue-300 hover:text-black"
        >
          <div className="flex-wrap justify-between py-8  text-center ">
            <HelpCircle className=" mx-auto  w-6" />
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
                <CommandItem className=" border-2 border-blue-500 bg-blue-600 text-white hover:cursor-pointer">
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
