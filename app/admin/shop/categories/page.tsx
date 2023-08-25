import { z } from "zod"

import Banner from "@/components/BAAS/Banners/Banner"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import TableActions from "@/components/BAAS/Table/TableActions"

import { columns } from "./columns"
import FAQAdminForm, { FAQFormSchema } from "./form"

async function getData(): Promise<z.infer<typeof FAQFormSchema>[]> {
  let data = await fetch("http://localhost:4000/categories", {
    cache: "no-cache",
  })

  return await data.json()
}

export default async function FAQPage() {
  const data = await getData()

  return (
    <>
      <TableActions apiPath="categories" formName={"categoriesInit"} />
      <DataTable
        columns={columns}
        data={data ? data : []}
        routePath="/categoriess"
      />
    </>
  )
}
