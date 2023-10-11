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
import { useSession } from "next-auth/react"

import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
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
  filters?: { label: string; value: string }[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
  scope,
  filters,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState({})
  const [filterSelected, setFilterSelected] = useState(0)
  const { data: session } = useSession()
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
      columnFilters,
    },
  })

  let r = useRouter()

  const { setAdminTableCXT } = useAdminTableContext()
  console.log(scope)

  return (
    <>
      {filters && filters?.length > 0 ? (
        <div className="flex items-center py-4 gap-2">
          <Input
            placeholder={`Filtering by ${filters[filterSelected].value}...`}
            value={
              (table
                .getColumn(filters[filterSelected].value)
                ?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table
                .getColumn(filters[filterSelected].value)
                ?.setFilterValue(event.target.value)
            }
            className="w-full bg-white"
          />
          <Select
            defaultValue={"0"}
            onValueChange={(val) => {
              console.log(columnFilters)
              setColumnFilters([])
              if (val == "") {
                setFilterSelected(0)
              }
              if (val != "") {
                setFilterSelected(parseInt(val))
              }
            }}
          >
            <SelectTrigger className="w-1/4 bg-white">
              <SelectValue placeholder="Filter By" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectGroup>
                <SelectLabel>Search Column</SelectLabel>

                {filters.map((item, i) => {
                  return (
                    <>
                      <SelectItem key={i} value={i.toString()}>
                        {item.label}
                      </SelectItem>
                    </>
                  )
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      ) : null}

      <Table className="mt-2 mb-16 rounded-xl">
        <TableHeader className="bg-white rounded-xl font-bold text-primary">
          {table.getHeaderGroups().map((headerGroup, i) => (
            <>
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => {
                  let role = session?.user?.role

                  if (
                    index === 0 &&
                    !(role === "admin" || role === "superadmin")
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
                    let role = session?.user?.role

                    if (
                      index === 0 &&
                      !(role === "admin" || role === "superadmin")
                    ) {
                      return null
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
          (session?.user?.role === "admin" ||
            session?.user?.role === "superadmin") ? (
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
