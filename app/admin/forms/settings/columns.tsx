"use client"

import { Label } from "@radix-ui/react-menubar"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Edit, MoreHorizontal } from "lucide-react"
import moment from "moment"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DeleteButton from "@/components/BAAS/Forms/Buttons/delete"
import ManageDataDialog from "@/components/BAAS/Forms/Dialog"

import FAQFullForm from "../../faqs/form"
import FormSettingsForm, { FormSettingsFormSchema } from "./form"

export const columns: ColumnDef<z.infer<typeof FormSettingsFormSchema>>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <>
          <ManageDataDialog
            Text={"Edit"}
            Form={<FormSettingsForm />}
            data={row.original}
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
