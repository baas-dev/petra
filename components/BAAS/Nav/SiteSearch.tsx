"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import BACKEND from "@/app/API"

import {
  ArticleResult,
  FAQResult,
  ResourceResult,
  SearchResult,
} from "./SearchResultTypes"

const api = new BACKEND()

export default function SiteSearch() {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [openSearchResults, setOpenSearchResults] = useState<boolean>(false)
  const [data, setData] = useState<SearchResult>()

  const searchResultsRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null) // Added ref for input

  const handleClickOutside = (e: MouseEvent) => {
    if (
      searchResultsRef.current &&
      !searchResultsRef.current.contains(e.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(e.target as Node)
    ) {
      setOpenSearchResults(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const params = new URLSearchParams()
  const SearchQuery = async () => {
    await api
      .GET({
        Route: "search?" + params.toString(),
      })
      .then((val) => {
        console.log(val.data)
        setData({
          meta: val.data.meta,
          results: val.data.results,
        })
      })
      .catch((err) => {})
  }
  function closeSearchResults() {
    setOpenSearchResults(false)
  }
  useEffect(() => {
    params.set("query", searchTerm)
    if (searchTerm !== "") {
      SearchQuery()
    }
  }, [searchTerm])

  return (
    <div className="w-full relative max-w-md xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md  xl:flex items-center flex flex-wrap">
      <div className="w-full flex">
        <Input
          ref={inputRef} // Attach ref to Input
          className="border-none  bg-transparent font-semibold text-sm pl-4"
          type="text"
          placeholder="I'm searching for ..."
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
          onFocus={(e) => {
            setOpenSearchResults(true)
          }}
        />
        <Search className="w-8 mx-2 my-auto" />
      </div>
      {openSearchResults ? (
        <div className="w-full z-20 absolute top-full" ref={searchResultsRef}>
          <div className=" w-full bg-white border max-w-2xl">
            <Card className="w-full rounded- none">
              <Separator className="w-full border" />
              <div className="" style={{ zIndex: 999 }}>
                <Command className="rounded-lg border shadow-md z-50 ">
                  <CommandList>
                    <CommandGroup className="" heading="Search Results">
                      {data?.results.map((item, i) => {
                        return (
                          <RenderResultBasedOnType
                            key={i}
                            Item={item}
                            closeSearchResults={closeSearchResults}
                          />
                        )
                      })}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
            </Card>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

function RenderResultBasedOnType(props: {
  Item: FAQResult | ResourceResult | ArticleResult
  closeSearchResults
}) {
  const r = useRouter()
  function NavigateTo(route: string) {
    console.log("navigating to ", route)
    r.push(route)
  }
  let { Item } = props

  let res = () => {
    switch (Item.Source) {
      case "resources":
        return (
          <Link
            href={`/resources/downloads`}
            onClick={() => props.closeSearchResults()}
          >
            <CommandItem className="w-full p-4 rounded-none flex hover:cursor-pointer justify-between border  max-w-2xl">
              <div className="flex-1 max-w-sm overflow-clip truncate">
                <h2 className="font-bold">{Item.Title}</h2>
                {Item.Description}
              </div>
              <Label className="italic font-semibold underline text-green-400">
                Links & Downloads
              </Label>
            </CommandItem>
          </Link>
        )
      case "faqs":
        return (
          <Link
            href={`/resources/faqs`}
            onClick={() => props.closeSearchResults()}
          >
            <CommandItem className="w-full p-4 rounded-none flex hover:cursor-pointer justify-between border  max-w-2xl">
              <div className="flex-1 max-w-sm overflow-clip truncate">
                <h2 className="font-bold">{Item.Question}</h2>
                {Item.Answer}
              </div>
              <Label className="italic font-semibold underline text-purple-400">
                FAQ
              </Label>
            </CommandItem>
          </Link>
        )
      case "articles":
        return (
          <Link
            href={`/social/${Item.ID}`}
            onClick={() => props.closeSearchResults()}
          >
            <CommandItem className="w-full p-4 rounded-none hover:cursor-pointer  flex justify-between border  max-w-2xl">
              <div className="flex-1 max-w-sm overflow-clip truncate">
                <h2 className="font-bold">{Item.Title}</h2>
                {Item.Description}
              </div>
              <Label className="italic font-semibold underline text-primary">
                Articles
              </Label>
            </CommandItem>
          </Link>
        )
      default:
        return <></>
    }
  }
  return res()
}
