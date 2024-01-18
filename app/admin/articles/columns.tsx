"use client"

import Link from "next/link"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Edit, MoreHorizontal } from "lucide-react"
import moment from "moment"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import { ArticleFormSchema } from "./[id]/form"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Articles = {
  ID: string
  Title: string
  Description: string
  Category: {
    Title?: string
    UpdatedAt?: string
    CreatedAt?: string
  }
  CategoryID: string
  Published: boolean
  PublishedAt: Date
  UpdatedAt: Date
  CreatedAt: Date
}

export const columns: ColumnDef<Articles>[] = [
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
          <Link href={`/admin/articles/${row.original.ID}`}>
            <Button variant={"link"}>Edit</Button>
          </Link>
        </>
      )
    },
  },
  {
    accessorKey: "Title",
    header: "Title",
  },
  {
    accessorKey: "Description",
    header: "Description",
  },
  {
    accessorKey: "Category",
    header: "Category ",
    cell: ({ row }) => {
      console.log(row.original)

      return (
        <>
          {row.original.CategoryID !== null ? (
            <Label className="text-primary">
              {row.original.Category.Title}
            </Label>
          ) : (
            <Label className="text-accent">No Category</Label>
          )}
        </>
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
  {
    accessorKey: "Published",
    // header: "Published",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Published
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return row.original.Published ? (
        <Label className="text-green-500">Yes</Label>
      ) : (
        <Label className="text-red-500">No</Label>
      )
    },
  },
]
