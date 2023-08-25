import {
  Apple,
  Clock,
  FileSignature,
  GitPullRequestDraftIcon,
  PartyPopper,
  Plane,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function StatusSelect() {
  return (
    <div className="w-full">
      <Label className="text-md  font-light pb-1 w-full">
        Publishing Status
      </Label>
      <br />
      <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
        <Label className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4  hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
          <RadioGroupItem value="card" id="card" className="sr-only" />
          <FileSignature /> Draft
        </Label>
        <Label className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
          <RadioGroupItem value="paypal" id="paypal" className="sr-only" />
          <Clock className="mb-3 h-6 w-6" />
          Schedule
        </Label>
        <Label className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
          <RadioGroupItem value="apple" id="apple" className="sr-only" />
          <Plane className="mb-3 h-6 w-6" />
          Publish
        </Label>
      </RadioGroup>
    </div>
  )
}
