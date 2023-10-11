"use client"

import Link from "next/link"
import { ColumnDef } from "@tanstack/react-table"
import moment from "moment"
import { z } from "zod"

import { Button } from "@/components/ui/button"

export const columnsAlt: ColumnDef<any>[] = [
  {
    id: "actions",
    header: () => {
      return <div className="max-w-10"></div>
    },
    cell: ({ row }) => {
      let data = JSON.parse(row.original.SubmissionData)
      data.Team
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
    id: "Boroowers",
    header: "Borrower(s) Information Submitted",
    cell: ({ row }) => {
      let data = JSON.parse(row.original.SubmissionData)
      console.log(data)
      // email, name, message
      return <div>{data.email}</div>
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
