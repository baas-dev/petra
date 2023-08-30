"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import RowActions from "@/components/BAAS/Table/RowActions"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type FAQ = {
  ID: string
  Question: string
  Answer: string
  Published: boolean
}

export const columns: ColumnDef<FAQ>[] = [
  {
    accessorKey: "Question",
    header: "Question",
  },
  {
    accessorKey: "Answer",
    header: "Answer",
  },
  {
    accessorKey: "tags",
    header: "Tags ",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const quote = row.original
      return (
        <RowActions
          Model={{
            ID: quote.ID,
            Path: "faqs",
          }}
        />
      )
    },
  },
]
