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

import { AttributeFormSchema } from "./form"

export const columns: ColumnDef<z.infer<typeof AttributeFormSchema>>[] = [
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "IsRequired",
    header: "Is Required?",
  },
]
