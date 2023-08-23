import { z } from "zod"

import { DataTable } from "@/components/BAAS/Table/DataTable"

import { ContactSchema } from "../form"
import { columns } from "./columns"

async function getData(): Promise<z.infer<typeof ContactSchema>[]> {
  let data = await fetch("http://localhost:4000/forms", {
    cache: "no-cache",
  })

  return await data.json()
}

export default async function ContactFormPage() {
  const data = await getData()

  return (
    <>
      <DataTable columns={columns} routePath="/forms/contact" data={[]} />
    </>
  )
}
