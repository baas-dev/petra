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
import DeleteButton from "@/components/BAAS/Forms/Buttons/delete"
import ManageDataDialog from "@/components/BAAS/Forms/Dialog"
import RowActions from "@/components/BAAS/Table/RowActions"

import ArticleCategoryForm, { TestimonialsFormSchema } from "./form"

export const columns: ColumnDef<z.infer<typeof TestimonialsFormSchema>>[] = [
  {
    accessorKey: "Title",
    header: "Title",
  },
  {
    accessorKey: "Description",
    header: "Description",
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
    id: "actions",
    cell: ({ row }) => {
      const record = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {/* <ManageDataDialog form={<ArticleCategoryForm data={record} />}>
              View Record
            </ManageDataDialog> */}
            <DropdownMenuSeparator />
            <DeleteButton
              DeleteOptions={{
                APIPath: "categories",
                ID: record.ID,
              }}
            />
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
