"use client"

import Image from "next/image"
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
import { Checkbox } from "@/components/ui/checkbox"
import DeleteButton from "@/components/BAAS/Forms/Buttons/delete"
import ManageDataDialog from "@/components/BAAS/Forms/Dialog"
import RowActions from "@/components/BAAS/Table/RowActions"

import TestimonialsForm, { TestimonialsFormSchema } from "./form"

export const columns: ColumnDef<z.infer<typeof TestimonialsFormSchema>>[] = [
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
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <>
          <ManageDataDialog
            Text={"Edit"}
            Form={<TestimonialsForm />}
            data={row.original}
            Title={"Testimonials Form"}
            Description={"Public facing reviews managed here"}
          />
        </>
      )
    },
  },
  {
    id: "Image",
    cell: ({ row }) => {
      return (
        <>
          <Image
            src={row.original.Image}
            width={128}
            height={128}
            className="rounded-full bg-gray-200"
            alt=""
          />
        </>
      )
    },
  },
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "QuoteText",
    header: "Quote",
    cell: ({ row }) => {
      return <p className="line-clamp-2">{row.original.QuoteText}</p>
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
