import { DataTable } from "@/components/ui/dataTable"
import TableActions from "@/components/BAAS/Table/TableActions"

// import { SheetPosition } from "@/components/Assistant/Sheet"

import { TeamMember, columns } from "./columns"

async function getData(): Promise<TeamMember[]> {
  let data = await fetch("http://localhost:4000/team", {
    cache: "no-cache",
  })

  return await data.json()
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <>
      <div className="container my-4">{/* <SheetPosition /> */}</div>
      <div className="container mx-auto mt-4 py-10">
        <TableActions path="/team" />
        <DataTable columns={columns} data={data} />
      </div>
    </>
  )
}
