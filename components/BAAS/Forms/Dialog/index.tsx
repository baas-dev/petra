"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Description } from "@radix-ui/react-toast"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useAdminTableContext } from "@/app/admin/Context/TableContext"

import { useTableContext } from "../../Table/Context"

export default function ManageDataDialog(props: {
  path?
  refreshFunction?
  Form?
  data?
  Key?
  Text
  Title
  Description
}) {
  const r = useRouter()
  const { setAdminTableCXT } = useAdminTableContext()
  const { tableCXTObject, setTableCXT } = useTableContext()
  function HandleChange() {
    if (!props.data) {
      setAdminTableCXT({
        Data: props.data,
      })
    }
    if (props.data) {
      setAdminTableCXT({
        Data: props.data,
      })
    }

    if (!props.path) {
      if (tableCXTObject.ShouldDialogBeOpen) {
        setTableCXT({ ShouldDialogBeOpen: false })
      }

      if (!tableCXTObject.ShouldDialogBeOpen) {
        setTableCXT({ ShouldDialogBeOpen: true })
      }
    }

    if (props.path) {
      r.push(props.path)
    }
  }
  console.log(props.Title, props.Description)

  return (
    <>
      <Sheet modal>
        <SheetTrigger asChild>
          <Button
            type="button"
            className="text-primary"
            variant={"ghost"}
            onClick={HandleChange}
          >
            {props.Text}
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"top"}
          className="mx-auto h-full w-full  overflow-y-scroll bg-secondary"
        >
          <SheetHeader className="mx-auto max-w-7xl rounded-xl border bg-white p-4 shadow-md">
            <SheetTitle>{props.Title}</SheetTitle>
            <SheetDescription>{props.Description}</SheetDescription>
          </SheetHeader>
          <div className="my-auto flex items-center align-middle">
            {props.Form}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
