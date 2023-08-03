"use client"

import { ColumnDef } from "@tanstack/react-table"

import RowActions from "@/components/BAAS/Table/RowActions"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type TeamMember = {
  ID: string
  name: number
  bio: string
  phone: number
  email: string
}

export const columns: ColumnDef<TeamMember>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const quote = row.original
      return (
        <RowActions
          Model={{
            ID: quote.ID,
            Path: "team",
          }}
        />
      )
    },
  },
]
