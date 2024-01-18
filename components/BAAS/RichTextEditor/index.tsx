import HardBreak from "@tiptap/extension-hard-break"
import BaseHeading from "@tiptap/extension-heading"
import Image from "@tiptap/extension-image"
import Underline from "@tiptap/extension-underline"
import Youtube from "@tiptap/extension-youtube"
import { EditorProvider, mergeAttributes } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

import { FormField, FormItem } from "@/components/ui/form"

import Content from "./Content"
import Heading from "./Plugins/Headings"
import Links from "./Plugins/Links"
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
                        let html = instance.editor.getHTML()
                        let text = instance.editor.getText()
                        form.setValue(field.name, html)
                        form.setValue("ContentText", text)
                      }}
                      extensions={[
                        StarterKit.configure({
                          heading: false,
                        }),
                        Heading,
                        Youtube,
                        Image,
                        // Link,
                        Links,
                        Underline,
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
