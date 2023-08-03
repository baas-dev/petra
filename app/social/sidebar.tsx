"use client"

import { Bold, Facebook } from "lucide-react"

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
import { Toggle } from "@/components/ui/toggle"

function Sidebar() {
  return (
    <div className="w-full">
      <div className="flex w-full gap-2">
        <SearchComponent />

        <SortByComponent />
        <CategoryPopover />
      </div>
    </div>
  )
}

function SearchComponent() {
  return (
    <div className="mb-4 w-1/2">
      <Label htmlFor="searchInput" className="text-lg">
        Search
      </Label>
      <div className="flex w-full items-center space-x-2">
        <Input
          type="email"
          placeholder="Search titles, content, etc"
          className="bg-white rounded-lg"
        />
      </div>
    </div>
  )
}

const CategoryPopover = () => {
  return (
    <>
      <div className="w-1/4">
        <Label className="text-lg ">Categories :</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full bg-white text-left">
              Select Cateogories
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input
                    id="width"
                    defaultValue="100%"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxWidth">Max. width</Label>
                  <Input
                    id="maxWidth"
                    defaultValue="300px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">Height</Label>
                  <Input
                    id="height"
                    defaultValue="25px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxHeight">Max. height</Label>
                  <Input
                    id="maxHeight"
                    defaultValue="none"
                    className="col-span-2 h-8"
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  )
}

const SourceChoice = () => {
  return (
    <>
      <div className="w-full flex flex-wrap">
        {" "}
        <Label className="text-lg w-full -mb-4">Sources :</Label>
        <div className="w-full gap-2">
          <Toggle className="bg-white" aria-label="Toggle italic">
            <Facebook className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Bold className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
    </>
  )
}

function SortByComponent() {
  return (
    <>
      <div className="mb-4 w-1/4 ">
        {/* <Label htmlFor="searchInput" className="text-lg ">
          Sort By:
        </Label> */}
        <Label htmlFor="sort" className="text-lg">
          Sort By:
        </Label>
        <div className="flex w-full">
          <Select>
            <SelectTrigger className="bg-white">
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

export default Sidebar
