"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function VariantTable() {
  const [showDialog, setShowDialog] = useState(false)
  const [dialogData, setDialogData] = useState()
  function HandleDialog() {
    setShowDialog(true)
  }
  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <EditVariantDialog />
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Inventory Count</TableHead>

            <TableHead className="">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            className="hover:cursor-pointer"
            onClick={() => HandleDialog()}
          >
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell className="">$250.00</TableCell>
            <TableCell>0</TableCell>
            <TableCell>Credit Card</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Dialog>
  )
}

function EditVariantDialog() {
  return (
    <div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Managing Variant</DialogTitle>
          <DialogDescription>Create and managing content</DialogDescription>
        </DialogHeader>
        <div></div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </div>
  )
}
