import BaseHeading from "@tiptap/extension-heading"
import Image from "@tiptap/extension-image"
import { EditorProvider, mergeAttributes } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

import { FormField, FormItem } from "@/components/ui/form"

import Content from "./Content"
import Heading from "./Plugins/Headings"
import Toolbar from "./Toolbar"

interface RTEOptions {
  name: string
  placeholder?: string
  label?: string
  description?: string
  defaultValue?: string
  value?: string[]
  items?: {
    id: string
    label: string
  }[]
}

export default function RichTextEditor({
  form,
  options,
}: {
  form: any
  options: RTEOptions
}) {
  //   const editor = useEditor({
  //     editorProps: {
  //       attributes: {
  //         class: "awesome-wysiwyg-editor",
  //       },
  //     },
  //     onUpdate: ({ editor: _editor }) => {
  //       console.log(_editor.getJSON())
  //       localStorage.setItem("_editorContent", JSON.stringify(_editor.getJSON()))
  //     },
  //     extensions: [
  //       StarterKit.configure({
  //         heading: {
  //           levels: [2, 3, 4, 5],
  //         },
  //       }),

  //       Image,
  //       //   TextAlign,
  //       //   TextStyle,
  //       //   Underline,
  //       //   Link.configure({
  //       //     openOnClick: false,
  //       //     validate: (href) => /^https?:\/\//.test(href),
  //       //   }),
  //       //   CharacterCount,
  //       //   Placeholder.configure({
  //       //     placeholder: ({ node }) => {
  //       //       if (node.type.name === "heading") {
  //       //         return "What’s the title?"
  //       //       }

  //       //       return "Can you add some further context?"
  //       //     },
  //       //   }),

  //       //   Youtube.configure({
  //       //     inline: false,
  //       //     nocookie: true,
  //       //   }),
  //     ],
  //     content,
  //   })

  //   if (!editor) {
  //     return null
  //   }
  return (
    <>
      <FormField
        control={form.control}
        name={options.name}
        render={() => (
          <FormItem>
            <FormField
              control={form.control}
              name={options.name}
              render={({ field }) => {
                return (
                  <>
                    <EditorProvider
                      content={field.value}
                      onUpdate={(instance) => {
                        console.log("hit")
                        let html = instance.editor.getHTML()
                        form.setValue(field.name, html)
                        console.log(form.getValues(field.name))
                      }}
                      extensions={[
                        StarterKit.configure({
                          heading: false,
                        }),
                        Heading,
                      ]}
                      slotBefore={<Toolbar />}
                      // slotAfter={<Content />}
                    >
                      <></>
                    </EditorProvider>
                    <Content />
                  </>
                )
              }}
            />
          </FormItem>
        )}
      />
    </>
  )
}
