"use client"

import { useCallback, useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Bold, Facebook, Router } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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
import { toast } from "@/components/ui/use-toast"

function Sidebar({
  items,
  loadedParams,
}: {
  items
  loadedParams: {
    query: string | null
    sort: string | null
    categories: string | null
  }
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )
  return (
    <div className="w-full grid grid-cols-3 gap-2">
      <div className="col-span-2">
        <SearchComponent
          CreateQueryString={createQueryString}
          router={router}
          pathname={pathname}
          query={loadedParams.query}
        />
      </div>

      <CategoryPopover
        CreateQueryString={createQueryString}
        router={router}
        pathname={pathname}
        categories={loadedParams.categories}
        items={items}
      />
      {/* <div className="flex w-full gap-1">
        <SortByComponent
          CreateQueryString={createQueryString}
          router={router}
          pathname={pathname}
        />
     
      </div> */}
    </div>
  )
}

function SearchComponent({ CreateQueryString, router, pathname, query }) {
  const [timer, setTimer] = useState<number | null>(null)
  function HandleChange(value: string) {
    if (timer !== null) {
      window.clearTimeout(timer) // Clear the existing timer if there is one.
    }

    setTimer(
      window.setTimeout(() => {
        router.push(pathname + "?" + CreateQueryString("query", value))
      }, 300)
    )
  }

  return (
    <div className="mb-4 w-full">
      <Label htmlFor="searchInput" className="text-lg">
        Search
      </Label>
      <div className="flex w-full items-center space-x-2">
        <Input
          type="email"
          placeholder="Search titles, content, etc"
          className="bg-white rounded-lg"
          defaultValue={query}
          autoFocus
          onChange={(e) => {
            HandleChange(e.target.value)
          }}
        />
      </div>
    </div>
  )
}

const CategoryPopover = ({
  items,
  router,
  CreateQueryString,
  pathname,
  categories,
}) => {
  console.log(categories)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  useEffect(() => {
    if (categories) {
      // If categories exist in the query params, split by '+' and set the state.
      setSelectedCategories(categories ? categories.split("+") : [])
    }
  }, [categories])

  const handleCheckboxChange = (checked: boolean, itemValue: string) => {
    let updatedCategories = [...selectedCategories]

    if (checked) {
      updatedCategories.push(itemValue)
    } else {
      updatedCategories = updatedCategories.filter(
        (value) => value !== itemValue
      )
    }

    if (updatedCategories.length > 0) {
      const queryString = updatedCategories.join("+")
      router.push(`${pathname}?${CreateQueryString("categories", queryString)}`)
    } else {
      setSelectedCategories([]) // Set state to an empty array explicitly
      router.push(pathname) // Navigate without the categories parameter in the URL
    }
  }

  return (
    <>
      <div className="w-full">
        <Label className="text-lg ">Categories :</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full bg-white text-left">
              Categories
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            {items.map((item, i) => {
              return (
                <div key={item.value} className="flex mb-2">
                  <Checkbox
                    checked={selectedCategories.includes(item.value)}
                    value={item.value}
                    id={item.value}
                    onCheckedChange={(checked) => {
                      console.log(typeof checked)
                      if (typeof checked === "boolean") {
                        handleCheckboxChange(checked, item.value)
                      }
                    }}
                    className="mr-2"
                  />
                  <Label
                    htmlFor={item.value}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item.label}
                  </Label>
                </div>
              )
            })}
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

function SortByComponent(props: {
  CreateQueryString: Function
  router
  pathname
}) {
  function HandleChange(value: string) {
    props.router.push(
      props.pathname + "?" + props.CreateQueryString("sort", value)
    )
  }

  return (
    <>
      <div className="mb-4 w-full">
        {/* <Label htmlFor="searchInput" className="text-lg ">
          Sort By:
        </Label> */}
        <Label htmlFor="sort" className="text-lg">
          Sort By:
        </Label>
        <div className="flex w-full">
          <Select onValueChange={(e) => HandleChange(e)}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Date Posted" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Title-asc">Title (A-Z)</SelectItem>
              <SelectItem value="Title-desc">Title (Z-A)</SelectItem>
              <SelectItem value="PublishedAt-asc">
                Published (Newest First)
              </SelectItem>
              <SelectItem value="PublishedAt-desc">
                Published (Oldest First)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  )
}

export default Sidebar
