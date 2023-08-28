"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import moment from "moment"
import { z } from "zod"

import { Button } from "@/components/ui/button"

import { FAQFormSchema } from "./form"

export const columns: ColumnDef<z.infer<typeof FAQFormSchema>>[] = [
  {
    accessorKey: "Question",
    header: "Question",
  },
  {
    accessorKey: "Answer",
    header: "Answer",
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
