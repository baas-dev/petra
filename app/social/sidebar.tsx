import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function Sidebar() {
  return (
    <div className="px-4">
      <SearchComponent />

      {/* <CategorySelectComponent /> */}
      <SortByComponent />
    </div>
  )
}

function SearchComponent() {
  return (
    <div className="mb-4">
      <Label htmlFor="searchInput" className="text-lg">
        Search
      </Label>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="email"
          placeholder="Search titles, content, etc"
          className="bg-secondary"
        />
      </div>
    </div>
  )
}

function SortByComponent() {
  return (
    <>
      <div className="mb-4 ">
        {/* <Label htmlFor="searchInput" className="text-lg ">
          Sort By:
        </Label> */}
        <Label htmlFor="sort" className="text-lg">
          Sort By:
        </Label>
        <div className="flex w-full">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Date Posted" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Category</SelectItem>
              <SelectItem value="dark">Date Posted</SelectItem>
              <SelectItem value="system">Title</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  )
}

function CategorySelectComponent() {}

export default Sidebar
