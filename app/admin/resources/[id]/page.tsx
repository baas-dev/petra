import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { DeleteButton, UpdateButton } from "@/components/BAAS/CRUD/DataActions"
import DetailPage from "@/components/BAAS/CRUD/DetailPage"

// import { Resource } from "../columns"

async function GetData(id: string, path: string): Promise<any[]> {
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
  const data = await GetData(params.id, "resources")

  console.log(data)
  return (
    <>
      <div className="container my-4 max-w-2xl">
        <QuoteForm data={data[0]} />
      </div>
    </>
  )
}
function QuoteForm(props: { data }) {
  return (
    <div className="flex flex-wrap">
      <div className="mb-8 flex w-full justify-between gap-2">
        <Button variant={"outline"} className=" w-full text-lg">
          Go Back
        </Button>

        <UpdateButton path={`/quotes/${props.data.ID}`} />
      </div>
      <div className="mb-2 w-full">
        <Label className="text-lg font-semibold">Title</Label>
        <Input defaultValue={props.data.Title} />
      </div>
      <div className="mb-2 w-full">
        <Label className="text-lg font-semibold">Description</Label>
        <Textarea defaultValue={props.data.Description} />
      </div>
      <div className="mb-2 w-full">
        <Label className="text-lg font-semibold">Resource Link</Label>
        <Input defaultValue={props.data.Link} />
      </div>
    </div>
  )
}
