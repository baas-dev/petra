import { DataTable } from "@/components/ui/dataTable"

// import { SheetPosition } from "@/components/Assistant/Sheet"

import { Payment, columns } from "./columns"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <>
      <div className="container my-4">
        <SheetPosition />
      </div>
      <div className="container mx-auto mt-4 py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  )
}
