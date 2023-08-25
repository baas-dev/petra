"use client"

import { ColumnDef } from "@tanstack/react-table"

import RowActions from "@/components/BAAS/Table/RowActions"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Resource = {
  ID: string
  Title?: string
  Description?: string
  Link?: string
}

export const columns: ColumnDef<Resource>[] = [
  {
    accessorKey: "Title",
    header: "Title",
  },
  {
    accessorKey: "Description",
    header: "Description",
  },
  {
    accessorKey: "Link",
    header: "Link",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const resource = row.original
      return (
        <RowActions
          Model={{
            ID: resource.ID,
            Path: "resources",
          }}
        />
      )
    },
  },
]
