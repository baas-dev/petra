import { z } from "zod"

import Banner from "@/components/BAAS/Banners/Banner"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import TableActions from "@/components/BAAS/Table/TableActions"
import BACKEND from "@/app/API"

import { columns } from "./columns"
import AttributesInitForm, { AttributeFormSchema } from "./form"

const api = new BACKEND()

const GetData = async (route: string) => {
  let val = await api.GET({
    Route: route,
  })

  return val
}

export default async function AttributesPage() {
  const data = await GetData(`product-attributes`)
    .then((val) => val.data)
    .catch((err) => [])

  return (
    <>
      <DataTable
        form={AttributesInitForm}
        columns={columns}
        data={data ? data : []}
        routePath="/shop/attributes"
      />
    </>
  )
}
