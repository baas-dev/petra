"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import RowActions from "@/components/BAAS/Table/RowActions"

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
