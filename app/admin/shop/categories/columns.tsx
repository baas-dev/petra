import { ColumnDef } from "@tanstack/react-table"
import { z } from "zod"

import { FAQFormSchema } from "./form"

export const columns: ColumnDef<z.infer<typeof FAQFormSchema>>[] = [
  {
    accessorKey: "Question",
    header: "Question",
  },
  {
    accessorKey: "Answer",
    header: "Answer",
  },
]
