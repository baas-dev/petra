"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useAuthContext } from "@/app/admin/Context/AuthContext"
import { useAdminTableContext } from "@/app/admin/Context/TableContext"

import { BatchDeleteButton } from "./BatchButtons"

interface DataTableActions {
  Create: boolean
  Read: boolean
  Update: boolean
  Delete: boolean
}

interface BatchDelete {
  TableName: string
  SearchName?: string
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  scope?: BatchDelete
}

export function DataTable<TData, TValue>({
  columns,
  data,
  scope,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState({})
  const { authObject } = useAuthContext()

  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      rowSelection,
    },
  })

  let r = useRouter()

  const { setAdminTableCXT } = useAdminTableContext()
  console.log(scope)

  return (
    <>
      <Table className="mt-2 mb-16">
        <TableHeader className="bg-white  font-bold text-primary">
          {table.getHeaderGroups().map((headerGroup, i) => (
            <>
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => {
                  if (
                    index === 0 &&
                    !(
                      authObject.Role === "admin" ||
                      authObject.Role === "superadmin"
                    )
                  ) {
                    return null
                  }
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            </>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <>
                <TableRow
                  className="bg-white hover:cursor-pointer hover:bg-secondary"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => {
                    setAdminTableCXT({
                      Data: row.original,
                    })
                  }}
                >
                  {row.getVisibleCells().map((cell, index) => {
                    if (
                      index === 0 &&
                      !(
                        authObject.Role === "admin" ||
                        authObject.Role === "superadmin"
                      )
                    ) {
                      return null // Skip rendering the cell at index 0 if the role isn't admin or superadmin
                    }
                    return (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    )
                  })}
                </TableRow>
              </>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter className="flex gap-2 mt-4">
          {scope != undefined &&
          (authObject.Role === "admin" || authObject.Role === "superadmin") ? (
            <BatchDeleteButton
              TableName={scope.TableName}
              SearchName={scope.SearchName ? scope.SearchName : ""}
              Items={rowSelection}
              Rows={table.getRowModel().rows}
            />
          ) : null}
        </TableFooter>
      </Table>
    </>
  )
}
