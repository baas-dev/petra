import { z } from "zod"

import Banner from "@/components/BAAS/Banners/Banner"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import TableActions from "@/components/BAAS/Table/TableActions"

import { columns } from "./columns"

async function getData(): Promise<any[]> {
  let data = await fetch("http://localhost:4000/forms", {
    cache: "no-cache",
  })

  return await data.json()
}

export default async function ContactPage() {
  const data = await getData()

  return (
    <>
      <DataTable columns={columns} routePath="/forms" data={data ? data : []} />
    </>
  )
}
