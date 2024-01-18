"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
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
import Pagination from "./PaginationComponent"

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

interface IPagination {
  TotalRows: number
  TotalPages: number
  CurrentPage: number
  Limit: number
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  pagination?: IPagination
  scope?: BatchDelete
  filters?: { label: string; value: string }[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
  scope,
  filters,
  pagination,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState({})
  const [filterSelected, setFilterSelected] = useState(0)
  const session = useSession()
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
  let searchParams = useSearchParams()
  let pageParams = searchParams.get("page")
  let queryParams = searchParams.get("query")
  let queryScope = searchParams.get("queryScope")
  let sortParams = searchParams.get("sort")
  const { setAdminTableCXT } = useAdminTableContext()

  return (
    <>
      {filters && filters?.length > 0 ? (
        <div className="flex items-center gap-2 py-4">
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

      <Table className="mb-16 mt-2 rounded-xl">
        <TableHeader className="rounded-xl bg-white font-bold text-primary">
          {table.getHeaderGroups().map((headerGroup, i) => (
            <>
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => {
                  let role = session.data?.user?.role

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
                    let role = session.data?.user?.role

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
        <TableFooter className="min-w-7xl mt-4 flex justify-between gap-2">
          <div className="w-full">
            {scope != undefined &&
            (session.data?.user?.role === "admin" ||
              session.data?.user?.role === "superadmin") ? (
              <BatchDeleteButton
                TableName={scope.TableName}
                SearchName={scope.SearchName ? scope.SearchName : ""}
                Items={rowSelection}
                Rows={table.getRowModel().rows}
              />
            ) : null}
          </div>
          {/* <div className="w-full">
            <Pagination
              Limit={pagination?.Limit ? pagination.Limit : 5}
              TotalHits={pagination?.TotalRows ? pagination.TotalRows : 0}
              TotalPages={pagination?.TotalPages ? pagination.TotalPages : 0}
              CurrentPage={pagination?.CurrentPage ? pagination.CurrentPage : 0}
            />
          </div> */}
        </TableFooter>
      </Table>
    </>
  )
}
