import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { DeleteButton, UpdateButton } from "./DataActions"

export default async function DetailPage() {
  return (
    <>
      <div className="container my-4 max-w-xl">
        {/* <div>{props.form}</div>
        <div className="w-full flex gap-2 mt-4">
          <DeleteButton path={`/${props.path}/${props.ID}`} />
          <UpdateButton path={`/${props.path}/${props.ID}`} />
        </div> */}
      </div>
    </>
  )
}
