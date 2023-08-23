import { DataTable } from "@/components/BAAS/Table/DataTable"
import TableActions from "@/components/BAAS/Table/TableActions"
import { GetAllResources } from "@/app/API/RESOURCES"

import { columns } from "./columns"

const GetData = async () => {
  let val = await GetAllResources()

  return val
}

export default async function AdminResourcePage() {
  let data = await GetData()
  return (
    <>
      <TableActions apiPath="/resources" formName="resource" />

      <DataTable
        columns={columns}
        data={data ? data : []}
        routePath="/resources"
      />
    </>
  )
}
