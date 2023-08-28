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

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DataTableActions {
  Create: boolean
  Read: boolean
  Update: boolean
  Delete: boolean
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  routePath: string
  form: any
  goToEditPage?: boolean
  disableCreate?: boolean
}

export function DataTable<TData, TValue>({
  columns,
  data,
  routePath,
  form,
  goToEditPage,
  disableCreate,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [formData, setData] = useState()

  const [showDialog, setShowDialog] = useState(false)
  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  function HandleDialog(formdata, link?: string) {
    if (goToEditPage && link) {
      r.push(link)
    } else {
      setData(formdata)
      setShowDialog(true)
    }
  }

  async function HandleChange() {
    if (showDialog) {
      setShowDialog(false)

      r.refresh()
    }
  }
  let r = useRouter()
  return (
    <>
      <Dialog open={showDialog} onOpenChange={HandleChange}>
        <DataTableDialog Component={form} data={formData} />
        {disableCreate ? (
          <></>
        ) : (
          <Button
            className="bg-accent hover:bg-accent/50"
            onClick={() => HandleDialog(null)}
          >
            Create New
          </Button>
        )}

        <Table className="mt-2">
          <TableHeader className="bg-white  font-bold text-primary">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
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
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="bg-white hover:cursor-pointer hover:bg-secondary"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  // onClick={() => r.push(`/admin/${routePath}/${data[row.id].ID}`)}
                  onClick={() =>
                    HandleDialog(
                      data[row.id],
                      `/admin/${routePath}/${data[row.id].ID}`
                    )
                  }
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Dialog>
    </>
  )
}

function DataTableDialog({ Component, data }) {
  return (
    <div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {/* <DialogTitle>Managing Variant</DialogTitle>
          <DialogDescription>Create and managing content</DialogDescription> */}
        </DialogHeader>
        <Component data={data} />
      </DialogContent>
    </div>
  )
}
