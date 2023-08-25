import { z } from "zod"

import Banner from "@/components/BAAS/Banners/Banner"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import TableActions from "@/components/BAAS/Table/TableActions"

import { columns } from "./columns"
import TeamAdminForm, { TeamFormSchema } from "./form"

async function getData(): Promise<z.infer<typeof TeamFormSchema>[]> {
  let data = await fetch("http://localhost:4000/team", {
    cache: "no-cache",
  })

  return await data.json()
}

export default async function TeamPage() {
  const data = await getData()

  return (
    <>
      <TableActions apiPath="team" formName={"teamInit"} />
      <DataTable columns={columns} data={data ? data : []} routePath="/team" />
    </>
  )
}
