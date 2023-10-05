"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Edit } from "lucide-react"
import moment from "moment"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import ManageDataDialog from "@/components/BAAS/Forms/Dialog"

import FAQFullForm, { FAQFormSchema } from "./form"

export const columns: ColumnDef<z.infer<typeof FAQFormSchema>>[] = [
  {
    id: "select",

    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="w-6 h-6 rounded-full"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="w-6 h-6 rounded-full"
      />
    ),
    enableResizing: true,
    size: 10,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    enableResizing: true,
    size: 10,
    cell: ({ row }) => {
      return (
        <>
          <ManageDataDialog
            Text={"Edit"}
            Form={<FAQFullForm />}
            data={row.original}
          />
        </>
      )
    },
  },
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
  {
    accessorKey: "UpdatedAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Updated
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const time: Date = row.getValue("UpdatedAt")

      return <div className="font-medium">{moment(time).calendar()}</div>
    },
  },
]
