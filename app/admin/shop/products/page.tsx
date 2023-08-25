import { z } from "zod"

import Banner from "@/components/BAAS/Banners/Banner"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import TableActions from "@/components/BAAS/Table/TableActions"
import BACKEND from "@/app/API"

import { columns } from "./columns"
import productsAdminForm, { productsFormSchema } from "./form"

async function getData(): Promise<z.infer<typeof productsFormSchema>[]> {
  let data = await fetch("http://localhost:4000/products", {
    cache: "no-cache",
  })

  return await data.json()
}
const api = new BACKEND()

const GetData = async (route: string) => {
  let val = await api.GET({
    Route: route,
  })

  return val
}
export default async function productsPage() {
  const data = await getData()
    .then((val) => val)
    .catch((err) => [])

  const attributes = await GetData(`product-attributes`)
    .then((val) => val.data)
    .catch((err) => [])

  return (
    <>
      <TableActions
        apiPath="shop/products"
        formName={"productInit"}
        data={attributes ? attributes : []}
      />
      <DataTable
        columns={columns}
        data={data ? data : []}
        routePath="/shop/products"
      />
    </>
  )
}
