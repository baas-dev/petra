import { z } from "zod"

import Banner from "@/components/BAAS/Banners/Banner"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import TableActions from "@/components/BAAS/Table/TableActions"

import { columns } from "./columns"
import { ArticleFormSchema } from "./form"

async function getData(): Promise<z.infer<typeof ArticleFormSchema>[]> {
  let data = await fetch("http://localhost:4000/articles", {
    cache: "no-cache",
  })

  return await data.json()
}

export default async function FAQPage() {
  const data = await getData()

  return (
    <>
      <TableActions apiPath="article" formName={"articleInit"} />
      <DataTable
        columns={columns}
        data={data ? data : []}
        routePath="/articles"
      />
    </>
  )
}
