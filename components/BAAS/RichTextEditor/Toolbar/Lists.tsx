import { useCurrentEditor } from "@tiptap/react"
import { ListOrdered as LOrdered, List } from "lucide-react"

import ToolbarItem from "./ToolbarItem"

export function ListUnordered() {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }
  return (
    <ToolbarItem
      config={{
        Component: <List />,
        onClick: () => editor.chain().focus().toggleBulletList().run(),
      }}
    />
  )
}

export function ListOrdered() {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }
  return (
    <ToolbarItem
      config={{
        Component: <LOrdered />,
        onClick: () => editor.chain().focus().toggleOrderedList().run(),
      }}
    />
  )
}
