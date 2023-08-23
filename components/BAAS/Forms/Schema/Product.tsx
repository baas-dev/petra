import * as z from "zod"

const ProductFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  slug: z.string().min(2, {
    message: "Slug must be at least 2 characters and unique",
  }),
  visibility: z.boolean().default(false),
})

export default ProductFormSchema
