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
import BACKEND from "@/app/API"

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
    enableResizing: true,
    size: 10,
    enableSorting: false,
    enableHiding: false,
  },
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
      const { data } = useSession()
      const api = new BACKEND()
      const HandleUpdate = async (newVal: string) => {
        await api.UPDATE({
          Route: `users/${row.original.ID}/access`,
          Body: JSON.stringify({
            Role: newVal,
          }),
        })
      }

      const CheckLevelPoints = (myRole) => {
        if (myRole == "admin") {
          return [
            {
              label: "Editor",
              value: "editor",
            },
            {
              label: "Admin",
              value: "admin",
            },
          ]
        }

        if (myRole == "superadmin") {
          return [
            {
              label: "Editor",
              value: "editor",
            },
            {
              label: "Admin",
              value: "admin",
            },
            {
              label: "Super Admin",
              value: "Admin",
            },
          ]
        }
      }
      return (
        <>
          {row.original.Role !== "superadmin" ? (
            // Check if the row's role is higher or same as the user's role
            row.original.Role !== "admin" || data?.user?.role === "admin" ? (
              row.original.ID === data?.user?.id ? (
                <p>{row.original.Role}</p>
              ) : (
                <Select
                  defaultValue={row.original.Role}
                  onValueChange={(val) => {
                    HandleUpdate(val)
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Choose User's Role.." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Roles</SelectLabel>
                      {CheckLevelPoints(data?.user?.role)?.map((item, i) => {
                        return (
                          <SelectItem value={item.value} key={i}>
                            {item.label}
                          </SelectItem>
                        )
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )
            ) : (
              <Select
                defaultValue={row.original.Role}
                onValueChange={(val) => {
                  HandleUpdate(val)
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Choose User's Role.." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Roles</SelectLabel>
                    {CheckLevelPoints(data?.user?.role)?.map((item, i) => {
                      return (
                        <SelectItem value={item.value} key={i}>
                          {item.label}
                        </SelectItem>
                      )
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )
          ) : (
            <Label>{row.original.Role}</Label>
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
    accessorKey: "Enabled",
    header: "Enabled?",
    cell: ({ row }) => {
      const api = new BACKEND()
      const { data } = useSession()

      const HandleUpdate = async (newVal: boolean) => {
        await api.UPDATE({
          Route: `users/${row.original.ID}/access`,
          Body: JSON.stringify({
            Enabled: newVal,
          }),
        })
      }

      const RoleCheck = (myRole, theirRole) => {
        if (myRole == "admin") {
          if (theirRole == "superadmin") {
            return true
          }
        }

        return false
      }

      let isEnabled = () => {
        if (row.original.Enabled == true) {
          return true
        }
        return false
      }
      return (
        <div className="flex items-center space-x-2">
          <Switch
            id="airplane-mode"
            disabled={
              row.original.ID == data?.user?.id ||
              RoleCheck(data?.user?.role, row.original.Role)
            }
            defaultChecked={isEnabled()}
            onCheckedChange={(val) => {
              HandleUpdate(val)
            }}
          />
        </div>
      )
    },
  },
]
