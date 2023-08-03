"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import RowActions from "@/components/BAAS/Table/RowActions"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Quote = {
  ID: string
  QuoteText: string
  Name: string
  Date: Date
}

export const columns: ColumnDef<Quote>[] = [
  {
    accessorKey: "QuoteText",
    header: "QuoteText",
  },
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "Date",
    header: "Date ",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const quote = row.original
      return (
        <RowActions
          Model={{
            ID: quote.ID,
            Path: "quotes",
          }}
        />
      )
    },
  },
]
