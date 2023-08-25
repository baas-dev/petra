import { z } from "zod"

import Banner from "@/components/BAAS/Banners/Banner"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import TableActions from "@/components/BAAS/Table/TableActions"

import { columns } from "./columns"
import TestimonialsAdminForm, { TestimonialsFormSchema } from "./form"

async function getData(): Promise<z.infer<typeof TestimonialsFormSchema>[]> {
  let data = await fetch("http://localhost:4000/quotes", {
    cache: "no-cache",
  })

  return await data.json()
}

export default async function TestimonialsPage() {
  const data = await getData()

  return (
    <>
      <TableActions apiPath="quotes" formName={"testimonialInit"} />
      <DataTable
        columns={columns}
        data={data ? data : []}
        routePath="/quotes"
      />
    </>
  )
}
