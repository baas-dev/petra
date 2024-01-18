"use client"

import { useCallback } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function PaginationComponent({
  TotalHits,
  CurrentPage,
  TotalPages,
  Limit,
  PageID,
}: {
  TotalHits: number
  CurrentPage: number
  TotalPages: number
  Limit: number
  PageID?: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!
  console.log(CurrentPage)
  let MorePages: boolean = false

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams, MorePages]
  )

  function GoForward() {
    let queryName = PageID ? PageID : "page"
    router.push(
      `${pathname}?${createQueryString(
        queryName,
        (CurrentPage + 1).toString()
      )}`
    )
  }
  function GoBack() {
    let queryName = PageID ? PageID : "page"
    router.push(
      `${pathname}?${createQueryString(
        queryName,
        (CurrentPage - 1).toString()
      )}`
    )
  }

  // Calculate the starting and ending item numbers
  const startItem = (CurrentPage - 1) * Limit + 1
  const endItem = Math.min(CurrentPage * Limit, TotalHits)

  return (
    <div className="container flex w-full items-center justify-between pb-4">
      <div className="text-light w-full">
        Showing:
        <b>
          {startItem === endItem
            ? `${endItem} of ${TotalHits}`
            : `${startItem}-${endItem} of ${TotalHits}`}{" "}
        </b>
      </div>
      <div className="flex gap-2">
        {CurrentPage < 2 ? (
          <></>
        ) : (
          <Button onClick={GoBack}>
            <ArrowLeftIcon />
          </Button>
        )}

        <Button variant={"ghost"}>
          <Select
            onValueChange={(val) => {
              let queryName = PageID ? PageID : "page"

              router.push(`${pathname}?${createQueryString(queryName, val)}`)
            }}
            value={CurrentPage ? CurrentPage.toString() : "1"}
          >
            <SelectTrigger className="bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: TotalPages }, (_, index) => {
                const page = index + 1
                return (
                  <SelectItem key={index} value={(index + 1).toString()}>
                    {page}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </Button>

        {CurrentPage >= TotalPages ? (
          <></>
        ) : (
          <Button onClick={GoForward}>
            <ArrowRightIcon />
          </Button>
        )}
      </div>
    </div>
  )
}
