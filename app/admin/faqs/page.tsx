import { DataTable } from "@/components/BAAS/Table/DataTable"
import TableActions from "@/components/BAAS/Table/TableActions"

import { FAQ, columns } from "./columns"

async function getData(): Promise<FAQ[]> {
  let data = await fetch("http://localhost:4000/faq", {
    cache: "no-cache",
  })

  return await data.json()
}

export default async function FAQPage() {
  // const data = await getData()

  return (
    <>
      <div className="container my-4">{/* <SheetPosition /> */}</div>
      <div className="container mx-auto mt-4 py-10 ">
        <TableActions path="/faqs" />
        <DataTable columns={columns} data={[]} />
      </div>
    </>
  )
}
