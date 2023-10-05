"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAdminTableContext } from "@/app/admin/Context/TableContext"

import { useTableContext } from "../../Table/Context"

export default function ManageDataDialog(props: {
  path?
  refreshFunction?
  Form?
  data?
  Key?
  Text
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

  return (
    <>
      <Sheet modal>
        <SheetTrigger asChild>
          <Button
            type="button"
            className=""
            variant={"link"}
            onClick={HandleChange}
          >
            {props.Text}
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"top"}
          className="w-full h-full mx-auto flex items-center"
        >
          {props.Form}
        </SheetContent>
      </Sheet>
    </>
  )
}
