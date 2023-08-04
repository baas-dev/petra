import { DataTable } from "@/components/BAAS/Table/DataTable"
import TableActions from "@/components/BAAS/Table/TableActions"

import { Quote, columns } from "./columns"

async function getData(): Promise<Quote[]> {
  let data = await fetch("http://localhost:4000/quotes")

  return await data.json()
}

export default async function DemoPage() {
  // const data = await getData()

  return (
    <>
      <div className="container my-4">{/* <SheetPosition /> */}</div>
      <div className="container mx-auto mt-4 py-10">
        <TableActions path="/quotes" />

        <DataTable columns={columns} data={[]} />
      </div>
    </>
  )
}
