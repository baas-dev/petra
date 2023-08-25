import { z } from "zod"

import Banner from "@/components/BAAS/Banners/Banner"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import TableActions from "@/components/BAAS/Table/TableActions"

import { columns } from "./columns"
import { ResourceFormSchema } from "./form"

async function getData() {
  let data = await fetch("http://localhost:4000/resources", {
    cache: "no-cache",
  })

  return await data.json()
}

export default async function ResourcePage() {
  const data = await getData()

  return (
    <>
      <TableActions apiPath="resources" formName={"resourceInit"} />
      <DataTable
        columns={columns}
        routePath="/resources"
        data={data ? data : []}
      />
    </>
  )
}
