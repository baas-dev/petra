import { Editor, useCurrentEditor } from "@tiptap/react"
import { Heading, Heading2, Heading3, Heading4 } from "lucide-react"

import ToolbarItem from "./ToolbarItem"

export function H2() {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }
  return (
    <ToolbarItem
      config={{
        Component: <HeadingItem arg="H2" />,
        onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      }}
    />
  )
}

export function H3() {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }
  return (
    <ToolbarItem
      config={{
        Component: <HeadingItem arg="H3" />,
        onClick: () => {
          editor.chain().focus().toggleHeading({ level: 3 }).run()
        },
      }}
    />
  )
}

export function H4() {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }
  return (
    <ToolbarItem
      config={{
        Component: <HeadingItem arg="H4" />,
        onClick: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
      }}
    />
  )
}
function HeadingItem(props: { arg: string }) {
  switch (props.arg) {
    case "H2":
      return <Heading2 />
    case "H3":
      return <Heading3 />
    case "H4":
      return <Heading4 />
    default:
      return <Heading />
  }
}
