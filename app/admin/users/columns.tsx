"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Edit, MoreHorizontal } from "lucide-react"
import moment from "moment"
import { useSession } from "next-auth/react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import ManageDataDialog from "@/components/BAAS/Forms/Dialog"
import UserRoleControl, {
  UserInteraction,
} from "@/components/BAAS/Table/UserRoleControl"
import BACKEND from "@/app/api"

import UserManagementForm, { UsersFormSchema } from "./form"

export const columns: ColumnDef<z.infer<typeof UsersFormSchema>>[] = [
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     return (
  //       <>
  //         <ManageDataDialog
  //           Text={"Edit"}
  //           Form={<UserManagementForm />}
  //           data={row.original}
  //           Title={"Editing User"}
  //           Description={"Manage selected user"}
  //         />
  //       </>
  //     )
  //   },
  // },

  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "Email",
    header: "Email",
  },
  {
    accessorKey: "Role",
    header: "Role",

    cell: ({ row }) => {
      return (
        <UserRoleControl
          TargetUser={{
            ...row.original,
            ID: row.original.ID ? row.original.ID : "",
          }}
        />
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

      return (
        <>
          <div className="font-medium">{moment(time).calendar()}</div>
        </>
      )
    },
  },
]
