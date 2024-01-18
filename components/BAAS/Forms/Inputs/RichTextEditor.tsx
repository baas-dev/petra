import React from "react"
import { EditorProvider, useCurrentEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Bold, Italic, Redo, Strikethrough, Undo } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

type MenuBarItem = {
  Icon: JSX.Element
  onClick: () => void
  disabled: boolean
  className: string
}

const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  const MenuBarItems: MenuBarItem[] = [
    {
      Icon: <Bold />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      disabled: !editor.can().chain().focus().toggleBold().run(),
      className: editor.isActive("bold") ? "is-active" : "",
    },
    {
      Icon: <Italic />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      disabled: !editor.can().chain().focus().toggleItalic().run(),
      className: editor.isActive("bold") ? "is-active" : "",
    },
    {
      Icon: <Strikethrough />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      disabled: !editor.can().chain().focus().toggleStrike().run(),
      className: editor.isActive("strike") ? "is-active" : "",
    },
    {
      Icon: <Undo />,
      onClick: () => editor.chain().focus().undo().run(),
      disabled: !editor.can().chain().focus().undo().run(),
      className: editor.isActive("strike") ? "is-active" : "",
    },
    {
      Icon: <Redo />,
      onClick: () => editor.chain().focus().redo().run(),
      disabled: !editor.can().chain().focus().redo().run(),
      className: editor.isActive("strike") ? "is-active" : "",
    },
  ]

  return (
    <>
      {/* <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          clear marks
        </button>
        <button onClick={() => editor.chain().focus().clearNodes().run()}>
          clear nodes
        </button> */}
      <div className="grid grid-cols-3">
        <div className="col-span-2 w-full">
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Text Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="paragraph">
                <button
                  onClick={() => editor.chain().focus().setParagraph().run()}
                  className={editor.isActive("paragraph") ? "is-active" : ""}
                >
                  paragraph
                </button>
              </SelectItem>
              <SelectItem value="h2">
                <button
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                  }
                  className={
                    editor.isActive("heading", { level: 2 }) ? "is-active" : ""
                  }
                >
                  h2
                </button>
              </SelectItem>
              <SelectItem value="h3">
                <button
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                  }
                  className={
                    editor.isActive("heading", { level: 3 }) ? "is-active" : ""
                  }
                >
                  h3
                </button>
              </SelectItem>
              <SelectItem value="h4">
                <button
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 4 }).run()
                  }
                  className={
                    editor.isActive("heading", { level: 4 }) ? "is-active" : ""
                  }
                >
                  h4
                </button>
              </SelectItem>
              <SelectItem value="h5">
                <button
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 5 }).run()
                  }
                  className={
                    editor.isActive("heading", { level: 5 }) ? "is-active" : ""
                  }
                >
                  h5
                </button>
              </SelectItem>
              <SelectItem value="h6">
                <button
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 6 }).run()
                  }
                  className={
                    editor.isActive("heading", { level: 6 }) ? "is-active" : ""
                  }
                >
                  h6
                </button>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-1">
          {MenuBarItems.map((item, i) => (
            <Button
              size={"sm"}
              type="button"
              variant={"outline"}
              {...item}
              className="z-50 bg-white"
            >
              <div>{item.Icon}</div>
            </Button>
          ))}
        </div>
        {/* <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          blockquote
        </button> */}
        {/* <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          horizontal rule
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()}>
          hard break
        </button> */}
      </div>
      <Separator />
    </>
  )
}

const extensions = [
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
]

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>

`

export default function RTE(props: { form: any }) {
  let content = props.form.getValues("Content")
  return (
    <div className="border bg-white">
      <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={content}
        onUpdate={(ed) => props.form.setValue("Content", ed.editor.getHTML())}
      >
        <></>
      </EditorProvider>
    </div>
  )
}
