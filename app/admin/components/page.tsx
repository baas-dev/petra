"use client"

import { DataTable } from "@/components/BAAS/Table/DataTable"
import NavTabs from "@/components/BAAS/Table/NavTabs"
import TableActions from "@/components/BAAS/Table/TableActions"

import { FAQ, columns } from "./columns"
import ComponentViewProvider from "./hooks/ComponentViewContext"

async function getData(): Promise<FAQ[]> {
  let data = await fetch("http://localhost:4000/faq", {
    cache: "no-cache",
  })
  return await data.json()
}

export default async function AdminComponentsPage() {
  // const data = await getData()

  return (
    <>
      <ComponentViewProvider>
        <div className="container mt-4 flex flex-wrap">
          <div>
            <h3>Currently Managing:</h3>
            <NavTabs />
          </div>
          <TableActions apiPath="/faqs" formName={""} />
          <DataTable
            columns={columns}
            data={[]}
            routePath={""}
            form={undefined}
          />
        </div>
      </ComponentViewProvider>
    </>
  )
}
