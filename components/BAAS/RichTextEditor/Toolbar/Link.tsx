import { useCallback } from "react"
import { Editor, useCurrentEditor } from "@tiptap/react"
import { Link, YoutubeIcon } from "lucide-react"

import ToolbarItem from "./ToolbarItem"

export default function Links() {
  const { editor } = useCurrentEditor()
  if (!editor) {
    return null
  }
  const setUnsetLink = useCallback(() => {
    if (editor.isActive("link")) {
      editor.chain().focus().unsetLink().run()
      return
    }
    const previousUrl = editor.getAttributes("link").href
    const url = window.prompt("URL", previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run()
      return
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
  }, [editor])

  return (
    <ToolbarItem
      config={{
        Component: <Link />,
        onClick: setUnsetLink,
        Title: "Link",
        Desc: "Attach Link over selected text, or new line.",
      }}
    />
  )
}
