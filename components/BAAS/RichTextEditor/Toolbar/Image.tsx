import { useCallback } from "react"
import { useCurrentEditor } from "@tiptap/react"
import { ImageIcon } from "lucide-react"

import ToolbarItem from "./ToolbarItem"

export default function Image() {
  const { editor } = useCurrentEditor()

  const addImage = useCallback(() => {
    const url = window.prompt("URL")

    if (!editor) {
      return
    }

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("image").clearContent().run()
      return
    }
    editor.commands.setImage({
      src: url,
    })
  }, [editor])
  return (
    <ToolbarItem
      config={{
        Component: <ImageIcon />,
        onClick: addImage,
        Title: "Image",
        Desc: "Embed images in your article",
      }}
    />
  )
}
