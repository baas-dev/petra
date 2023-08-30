import { Editor, useCurrentEditor } from "@tiptap/react"

import { H2, H3, H4 } from "./Headings"
import { ListOrdered, ListUnordered } from "./Lists"

export default function Toolbar() {
  return (
    <>
      <div className="flex gap-1 mb-2">
        <H2 />
        <H3 />
        <H4 />
        <ListUnordered />
        <ListOrdered />
      </div>
    </>
  )
}
