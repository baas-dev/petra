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

export default function Pagination({
  TotalHits,
  CurrentPage,
  TotalPages,
}: {
  TotalHits: number
  CurrentPage: number
  TotalPages: number
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!
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
    router.push(
      `${pathname}?${createQueryString("page", (CurrentPage + 1).toString())}`
    )
  }
  function GoBack() {
    router.push(
      `${pathname}?${createQueryString("page", (CurrentPage - 1).toString())}`
    )
  }

  // Calculate the starting and ending item numbers
  const startItem = (CurrentPage - 1) * 5 + 1
  const endItem = Math.min(CurrentPage * 5, TotalHits)

  return (
    <div className="flex mb-4 justify-between container">
      <div className="text-light">
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
              router.push(`${pathname}?${createQueryString("page", val)}`)
            }}
            defaultValue={CurrentPage ? CurrentPage.toString() : "1"}
          >
            <SelectTrigger className="bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: TotalPages }, (_, index) => {
                const page = index + 1
                return (
                  <SelectItem key={page} value={(index + 1).toString()}>
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
