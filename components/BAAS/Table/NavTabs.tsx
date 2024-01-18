"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useComponentViewContext } from "@/components/Animations/ComponentViewContext"

export default function NavTabs() {
  const { selectedOption, setSelectedOption } = useComponentViewContext()

  const handleSelectChange = (value) => {
    setSelectedOption(value)
  }
  return (
    <div className="w-ull mb-4 flex justify-center gap-1">
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
