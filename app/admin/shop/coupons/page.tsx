import { DataTable } from "@/components/BAAS/Table/DataTable"
import BACKEND from "@/app/API"

import { columns } from "./columns"
import TeamForm from "./form"

const api = new BACKEND()

async function getData() {
  return api.GET({
    Route: "team",
  })
}

export default async function TestimonialsPage() {
  let data = await getData()
    .then((val) => val.data)
    .catch((err) => [])

  return (
    <>
      {/* <DataTable
        form={TeamForm}
        columns={columns}
        data={data ? data : []}
        routePath="/team"
      /> */}
    </>
  )
}
