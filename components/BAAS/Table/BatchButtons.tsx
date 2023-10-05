"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Loader } from "lucide-react"

import { Button } from "@/components/ui/button"
import BACKEND from "@/app/API"
import { useAuthContext } from "@/app/admin/Context/AuthContext"

interface BatchButton {
  TableName: string
  SearchName: string
  Items: any
  Rows: any[]
}

const api = new BACKEND()

export function BatchDeleteButton(props: BatchButton) {
  const { authObject } = useAuthContext()
  const [loading, setLoading] = useState<boolean>(false)

  const BatchDelFunc = async (
    IDs: string[],
    TableName: string,
    SearchName: string
  ) => {
    setLoading(true)
    await api
      .DELETE({
        Route: "batch/delete",
        AccessToken: authObject.AccessToken,
        Body: JSON.stringify({
          IDs: IDs,
          TableName: TableName,
          SearchName: SearchName,
        }),
      })
      .then((val) => {
        console.log(val)
        setLoading(false)
        if (window !== null || undefined) {
          window.location.reload()
        }
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  function HandleBatchDelete() {
    let IDs: string[] = []
    Object.keys(props.Items).forEach((item) => {
      IDs.push(props.Rows[item].original.ID)
    })
    BatchDelFunc(IDs, props.TableName, props.SearchName)
      .then((val) => {})
      .catch((err) => {})
  }

  return loading ? (
    <Button disabled variant={"destructive"}>
      <Loader className="animate-spin" />
    </Button>
  ) : (
    <Button
      onClick={HandleBatchDelete}
      variant={"destructive"}
      disabled={Object.keys(props.Items).length > 0 ? false : true}
    >
      Delete
    </Button>
  )
}
