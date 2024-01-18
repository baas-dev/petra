import { Editor, useCurrentEditor } from "@tiptap/react"
import {
  BoldIcon,
  Heading,
  Heading2,
  Heading3,
  Heading4,
  Italic,
  UnderlineIcon,
} from "lucide-react"

import ToolbarItem from "./ToolbarItem"

export function Bold() {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }
  return (
    <ToolbarItem
      config={{
        Component: <BoldIcon />,
        onClick: () => editor.chain().focus().toggleBold().run(),
        Title: "Bold",
        Desc: "Bold text selected, or in new line.",
      }}
    />
  )
}

export function Italics() {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }
  return (
    <ToolbarItem
      config={{
        Component: <Italic />,
        onClick: () => editor.chain().focus().toggleItalic().run(),
        Title: "Italic",
        Desc: "Makes selected text italic",
      }}
    />
  )
}

export function Underline() {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }
  return (
    <ToolbarItem
      config={{
        Component: <UnderlineIcon />,
        onClick: () => editor.chain().focus().toggleUnderline().run(),
        Title: "Underline",
        Desc: "Underline mark under selected text",
      }}
    />
  )
}
