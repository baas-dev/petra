import { useState } from "react"
import { format, setDate } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { date } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function AdminDateSelect() {
  const [date, setDate] = useState<Date>()
  return (
    <>
      <div className="flex ml-2 gap-2">
        <div className="w-full">
          <Label className="text-md  font-light pb-1 w-full">
            Published At:
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal bg-white",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className=""
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  )
}
