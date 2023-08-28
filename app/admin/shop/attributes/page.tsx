import { z } from "zod"

import Banner from "@/components/BAAS/Banners/Banner"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import TableActions from "@/components/BAAS/Table/TableActions"

import { columns } from "./columns"
import { AttributeFormSchema } from "./form"

async function getData(): Promise<z.infer<typeof AttributeFormSchema>[]> {
  let data = await fetch("http://localhost:4000/product-attributes", {
    cache: "no-cache",
  })

  return await data.json()
}

export default async function AttributesPage() {
  const data = await getData()

  return (
    <>
      <TableActions apiPath="product-attributes" formName={"attributeInit"} />
      <DataTable
        sortFilters={["Name"]}
        columns={columns}
        data={data ? data : []}
        routePath="/shop/attributes"
      />
    </>
  )
}
