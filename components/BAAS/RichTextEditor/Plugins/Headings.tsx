import BaseHeading from "@tiptap/extension-heading"
import { mergeAttributes } from "@tiptap/react"

type Levels = 2 | 3 | 4

const classes: Record<Levels, string> = {
  2: "text-3xl",
  3: "text-2xl",
  4: "text-xl",
}

const Heading = BaseHeading.configure({ levels: [2, 3, 4] }).extend({
  levels: [2, 3, 4],
  renderHTML({ node, HTMLAttributes }) {
    const level = this.options.levels.includes(node.attrs.level)
      ? node.attrs.level
      : this.options.levels[0]
    const classes = {
      2: "text-3xl",
      3: "text-2xl",
      4: "text-xl",
    }
    return [
      `h${level}`,
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        class: `${classes[level]}`,
      }),
      0,
    ]
  },
})

export default Heading
