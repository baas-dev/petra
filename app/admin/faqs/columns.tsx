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
        className="h-6 w-6 rounded-full"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="h-6 w-6 rounded-full"
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
    size: 5,
    cell: ({ row }) => {
      return (
        <>
          <ManageDataDialog
            Text={"Edit"}
            Form={<FAQFullForm />}
            data={row.original}
            Title={"FAQ Admin Form"}
            Description={"Answer common questions that your user's encounter"}
          />
        </>
      )
    },
  },
  {
    accessorKey: "Question",
    header: "Question",
    cell: ({ row }) => {
      return <p className="line-clamp-2">{row.original.Question}</p>
    },
  },
  {
    accessorKey: "Answer",
    header: "Answer",
    cell: ({ row }) => {
      return <p className="line-clamp-2">{row.original.Answer}</p>
    },
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
