"use client"

import Link from "next/link"
import { ColumnDef } from "@tanstack/react-table"
import moment from "moment"
import { z } from "zod"

import { Button } from "@/components/ui/button"

export const columns: ColumnDef<any>[] = [
  {
    id: "actions",
    header: () => {
      return <div className="max-w-10"></div>
    },
    cell: ({ row }) => {
      return (
        <>
          <div className="max-w-8">
            <Link href={`/admin/forms/${row.original.ID}`}>
              <Button>View</Button>
            </Link>
          </div>
        </>
      )
    },
  },
  {
    accessorKey: "Type",
    header: "Type",
  },
  {
    accessorKey: "CreatedAt",
    header: "Created At",
    cell: ({ row }) => {
      const time: Date = row.getValue("CreatedAt")

      return <div className="font-medium">{moment(time).calendar()}</div>
    },
  },
]
