import { useCallback } from "react"
import { Editor, useCurrentEditor } from "@tiptap/react"
import { YoutubeIcon } from "lucide-react"

import ToolbarItem from "./ToolbarItem"

export function Youtube() {
  const { editor } = useCurrentEditor()

  const addYoutubeVideo = useCallback(() => {
    const url = prompt("Enter YouTube URL")

    if (!editor) {
      return
    }
    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("youtube").clearContent().run()
      return
    }

    editor.commands.setYoutubeVideo({
      src: url,
      width: 320,
      height: 180,
    })
  }, [editor])

  if (!editor) {
    return null
  }
  return (
    <ToolbarItem
      config={{
        Component: <YoutubeIcon />,
        onClick: addYoutubeVideo,
        Title: "YouTube Video",
        Desc: "Youtube links that are embedded in your article",
      }}
    />
  )
}
