import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { DeleteButton, UpdateButton } from "@/components/BAAS/CRUD/DataActions"
import DetailPage from "@/components/BAAS/CRUD/DetailPage"

import { Quote } from "../columns"

async function GetData(id: string, path: string): Promise<any> {
  let data = await fetch(`http://localhost:4000/${path}/${id}`, {
    cache: "no-cache",
  })
    .then(async (data) => {
      let d = await data.json()
      console.log(d)
      return d
    })
    .catch((err) => {
      console.log(err)
    })

  return data
}

export default async function DemoPage({ params }: { params: { id: string } }) {
  const data = await GetData(params.id, "quotes")

  console.log(data)
  return (
    <>
      <div className="container my-4 max-w-2xl">
        <QuoteForm data={data} />
      </div>
    </>
  )
}
function QuoteForm(props: { data: Quote }) {
  return (
    <div className="flex flex-wrap">
      <div className="w-full flex justify-between mb-8 gap-2">
        <Button variant={"outline"} className=" text-lg w-full">
          Go Back
        </Button>

        <UpdateButton path={`/quotes/${props.data.ID}`} />
      </div>

      <div className="w-full mb-4">
        <Label className="text-lg font-semibold">Name</Label>
        <Input defaultValue={props.data.Name} />
      </div>
      <div className="w-full mb-4">
        <Label className="text-lg font-semibold">Quote</Label>
        <Textarea defaultValue={props.data.QuoteText} />
      </div>
      <div className="w-full  mb-4">
        <Label className="text-lg mx-auto font-semibold">Date Received</Label>
        <Calendar />
      </div>
    </div>
  )
}
