"use client"

import { Label } from "@radix-ui/react-menubar"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Edit, MoreHorizontal } from "lucide-react"
import moment from "moment"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Banner from "@/components/BAAS/Banners/Banner"
import DeleteButton from "@/components/BAAS/Forms/Buttons/delete"
import ManageDataDialog from "@/components/BAAS/Forms/Dialog"

import FormSettingsForm, { FormSettingsFormSchema } from "./form"

export const columns: ColumnDef<z.infer<typeof FormSettingsFormSchema>>[] = [
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
            Form={<FormSettingsForm />}
            data={row.original}
            Title={"Form Delivery Settings"}
            Description={"Get a copy of forms entered on your site"}
          />
        </>
      )
    },
  },
  {
    accessorKey: "Email",
    header: "Email",
  },
  {
    accessorKey: "OnContactSubmit",
    header: "Send on Contact Submit?",
    cell: ({ row }) => {
      return row.original.OnContactSubmit ? (
        <Label className="text-green-500">Yes</Label>
      ) : (
        <Label className="text-red-500">No</Label>
      )
    },
  },

  {
    accessorKey: "OnPrequalificationSubmit",
    header: "Send on Prequal Submit?",
    cell: ({ row }) => {
      return row.original.OnPrequalificationSubmit ? (
        <Label className="text-green-500">Yes</Label>
      ) : (
        <Label className="text-red-500">No</Label>
      )
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
]
