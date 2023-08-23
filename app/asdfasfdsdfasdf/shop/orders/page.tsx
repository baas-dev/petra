import { z } from "zod"

import Banner from "@/components/BAAS/Banners/Banner"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import TableActions from "@/components/BAAS/Table/TableActions"

import { columns } from "./columns"
import productsAdminForm, { productsFormSchema } from "./form"

async function getData(): Promise<z.infer<typeof productsFormSchema>[]> {
  try {
    let data = await fetch("http://localhost:4000/orders", {
      cache: "no-cache",
    })

    let res = await data.json()

    if (res) {
      return res
    }

    if (!res) {
      return []
    }
  } catch (err) {
    return []
  }

  return []
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
