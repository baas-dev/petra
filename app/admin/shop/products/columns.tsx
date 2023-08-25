"use client"

import { ColumnDef } from "@tanstack/react-table"
import { z } from "zod"

import { productsFormSchema } from "./form"

export const columns: ColumnDef<z.infer<typeof productsFormSchema>>[] = [
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "Price",
    header: "Price",
  },
]
