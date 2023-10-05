import { mergeAttributes } from "@tiptap/core"
import Link from "@tiptap/extension-link"

const Links = Link.extend({
  renderHTML({ HTMLAttributes }) {
    return [
      `a`,
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        class: `text-blue-400 underline`,
      }),
    ]
  },
})

export default Links
