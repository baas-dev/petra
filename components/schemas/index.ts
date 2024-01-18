import { z } from "zod"

export const AuthFormSchema = z.object({
  Email: z.string().email(),
  Code: z.any(),
})
