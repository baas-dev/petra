"use client"

import { useState } from "react"
import Link from "next/link"
import { ColumnDef } from "@tanstack/react-table"
import { Loader2 } from "lucide-react"
import moment from "moment"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export const columns: ColumnDef<any>[] = [
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
    header: () => {
      return <div className="max-w-10"></div>
    },
    cell: ({ row }) => {
      let data = JSON.parse(row.original.SubmissionData)
      const [loading, setLoading] = useState(false)
      return (
        <>
          <div className="max-w-8">
            {loading ? (
              <>{<Loader2 className="text-2xl animate-spin text-accent" />}</>
            ) : (
              <>
                <Link href={`/admin/forms/${row.original.ID}`}>
                  <Button>View</Button>
                </Link>
              </>
            )}
          </div>
        </>
      )
    },
  },
  {
    id: "Team",
    header: "Team Member(s) Credited",
    cell: ({ row }) => {
      let data = JSON.parse(row.original.SubmissionData)
      return (
        <div>
          {data &&
            data.Team &&
            data.Team.map((item, i) => {
              return <p key={item}>{`${i + 1}) ${item}`}</p>
            })}
        </div>
      )
    },
  },
  {
    id: "Boroowers",
    header: "Borrower(s) Information Submitted",
    cell: ({ row }) => {
      let data = JSON.parse(row.original.SubmissionData)
      return (
        <div>
          {data &&
            data.Borrowers &&
            data.Borrowers.map((item, i) => {
              return <p key={i}>{`- ${item.FirstName} ${item.LastName}`}</p>
            })}
        </div>
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
