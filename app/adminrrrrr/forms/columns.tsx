"use client"

import { ColumnDef } from "@tanstack/react-table"
import moment from "moment"
import { z } from "zod"

export const columns: ColumnDef<any>[] = [
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
