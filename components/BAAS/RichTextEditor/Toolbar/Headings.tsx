import { Editor, useCurrentEditor } from "@tiptap/react"
import { Heading, Heading2, Heading3, Heading4 } from "lucide-react"

import { Label } from "@/components/ui/label"

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
        Title: "Heading 2",
        Desc: "Largest heading you can use. Secondary to Heading 1 in SEO",
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
        Title: "Heading 3",
        Desc: "Largest heading you can use. Secondary to Heading 2 in SEO",
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
        Title: "Heading 4",
        Desc: "Largest heading you can use. Secondary to Heading 3 in SEO",
      }}
    />
  )
}
function HeadingItem(props: { arg: string }) {
  switch (props.arg) {
    case "H2":
      return <Label>XXL</Label>
    case "H3":
      return <Label>XL</Label>
    case "H4":
      return <Label>LG</Label>
    default:
      return <Heading />
  }
}
