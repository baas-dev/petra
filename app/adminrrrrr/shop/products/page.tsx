import { z } from "zod"

import Banner from "@/components/BAAS/Banners/Banner"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import TableActions from "@/components/BAAS/Table/TableActions"
import BACKEND from "@/app/API"

import { columns } from "./columns"
import productsAdminForm, { productsFormSchema } from "./form"
import ProductInitForm from "./form"

const api = new BACKEND()

const GetData = async (route: string) => {
  let val = await api.GET({
    Route: route,
  })

  return val
}

const GetAttributeOptions = async () => {
  let res = await GetData(`product-attributes`)
    .then((val) => val.data)
    .catch((err) => [])

  return await res
}
export default async function productsPage() {
  const data = await GetData(`products`)
    .then((val) => val.data)
    .catch((err) => [])
  let extraData = await GetAttributeOptions()

  return (
    <>
      {/* <TableActions
        apiPath="shop/products"
        formName={"productInit"}
        data={attributes ? attributes : []}
      /> */}
      <DataTable
        extraData={extraData}
        // form={TestimonialsForm}
        form={ProductInitForm}
        columns={columns}
        goToEditPage={true}
        data={data ? data : []}
        routePath="shop/products"
      />
    </>
  )
}
