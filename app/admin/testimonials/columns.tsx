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
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import moment from "moment"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import RowActions from "@/components/BAAS/Table/RowActions"

import { TestimonialsFormSchema } from "./form"

export const columns: ColumnDef<z.infer<typeof TestimonialsFormSchema>>[] = [
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "QuoteText",
    header: "Quote",
  },
  {
    accessorKey: "CreatedAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const time: Date = row.getValue("CreatedAt")

      return <div className="font-medium">{moment(time).calendar()}</div>
    },
  },
]
