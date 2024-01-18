import { useCurrentEditor } from "@tiptap/react"

export default function Content() {
  const { editor } = useCurrentEditor()

  return <div>{editor?.getHTML()}</div>
}
