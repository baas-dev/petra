"use client"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useComponentViewContext } from "@/app/asdfasfdsdfasdf/components/hooks/ComponentViewContext"

export default function NavTabs() {
  const { selectedOption, setSelectedOption } = useComponentViewContext()

  const handleSelectChange = (value) => {
    setSelectedOption(value)
  }
  return (
    <div className="flex w-ull mb-4 justify-center gap-1">
      <Select value={selectedOption} onValueChange={handleSelectChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>About Page</SelectLabel>
            <SelectItem value="Team">Team</SelectItem>
            <SelectItem value="Quotes">Quotes</SelectItem>
            <SelectLabel>Buyer Tools</SelectLabel>
            <SelectItem value="Resources">Resources</SelectItem>
            <SelectItem value="FAQs">FAQs</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
