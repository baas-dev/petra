import { ColumnDef } from "@tanstack/react-table"
import { z } from "zod"

import { FAQFormSchema } from "../faqs/form"

export const columns: ColumnDef<z.infer<typeof FAQFormSchema>>[] = [
  {
    accessorKey: "Title",
    header: "Title",
  },
  {
    accessorKey: "Description",
    header: "Description",
  },
  {
    accessorKey: "Link",
    header: "Link",
  },
]
