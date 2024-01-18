import Link from "next/link"
import { Eye } from "lucide-react"

import { Button } from "@/components/ui/button"

export interface RowActionOptions {
  Model: {
    ID: String
    Path: String
  }
}

export default function RowActions(props: RowActionOptions) {
  return (
    <>
      <div className="flex w-full justify-end gap-2 ">
        <Link href={`/admin/${props.Model.Path}/${props.Model.ID}`}>
          <Button variant={"link"}>
            <Eye className="pr-2" />
            View
          </Button>
        </Link>
      </div>
    </>
  )
}
