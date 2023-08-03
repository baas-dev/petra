"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Calculator,
  Calendar,
  Command,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

import NavTabs from "./NavTabs"
import { SearchInput } from "./Search"

export interface TableActionOptions {
  path: string
}

export default function TableActions(props: TableActionOptions) {
  const r = useRouter()
  async function CreateNewItemAtEndpoint() {
    let response = await fetch(`http://localhost:4000${props.path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({}),
    })
    const result = await response.json()
    const id = result.ID
    r.push(`/admin/${props.path}/${id}`)

    // parses JSON response into native JavaScript objects
  }
  return (
    <>
      <div className="flex pb-2  w-full pr-4">
        <SearchInput />

        <div className=" w-full flex justify-end gap-2">
          {/* <Link href={props.path}> */}

          <Button className="" onClick={CreateNewItemAtEndpoint}>
            Create New
          </Button>
          {/* </Link> */}
        </div>
      </div>
    </>
  )
}
