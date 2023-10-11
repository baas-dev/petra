"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { RefreshCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import BACKEND from "@/app/API"

const api = new BACKEND()

interface DeleteOptions {
  APIPath: string
  ID?: string
}

async function DeleteRecord(route, id) {
  return await api
    .DELETE({
      Route: route,
      ID: id,
      Body: {},
    })
    .then((val) => {
      return val
    })
}

export default function DeleteButton({
  DeleteOptions,
}: {
  DeleteOptions: DeleteOptions
}) {
  const [loading, setLoading] = useState(false)

  return (
    <Button
      type="button"
      variant={"destructive"}
      onClick={() => {
        setLoading(true),
          DeleteRecord(DeleteOptions.APIPath, DeleteOptions.ID).then(() => {
            setLoading(false)
            if (window !== null || undefined) {
              window.location.reload()
            }
          })
      }}
    >
      {loading ? <RefreshCcw className="animate-spin" /> : "Delete"}
    </Button>
  )
}
