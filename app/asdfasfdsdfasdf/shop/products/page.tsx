import { z } from "zod"

import Banner from "@/components/BAAS/Banners/Banner"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import TableActions from "@/components/BAAS/Table/TableActions"

import { columns } from "./columns"
import productsAdminForm, { productsFormSchema } from "./form"

async function getData(): Promise<z.infer<typeof productsFormSchema>[]> {
  let data = await fetch("http://localhost:4000/products", {
    cache: "no-cache",
  })

  return await data.json()
}

export default async function productsPage() {
  const data = await getData()

  return (
    <>
      <TableActions apiPath="products" formName={"productInit"} />
      <DataTable
        columns={columns}
        data={data ? data : []}
        routePath="/shop/products"
      />
    </>
  )
}
