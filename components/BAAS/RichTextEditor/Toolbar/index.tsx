import { Editor, useCurrentEditor } from "@tiptap/react"

import { H2, H3, H4 } from "./Headings"
import Image from "./Image"
import Links from "./Link"
import { ListOrdered, ListUnordered } from "./Lists"
import { Bold, Italics, Underline } from "./TextDecorations"
import { Youtube } from "./Youtube"

export default function Toolbar() {
  return (
    <>
      <div className="mb-2 flex w-full gap-4">
        <div className="flex gap-1">
          <H2 />
          <H3 />
          <H4 />
        </div>
        <div className="flex gap-1">
          <Bold />
          <Italics />
          <Underline />
        </div>
        <div className="flex gap-1">
          <ListUnordered />
          <ListOrdered />
        </div>
        <div className="flex gap-1">
          <Links />
          <Youtube />
          <Image />
        </div>

        {/* <Links /> */}
      </div>
    </>
  )
}
