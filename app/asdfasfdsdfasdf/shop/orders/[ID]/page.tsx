import { BodyRenderer } from "@/components/BAAS/Forms/Render"
import BACKEND from "@/app/API"

const api = new BACKEND()

const GetData = async (route: string) => {
  let val = await api.GET({
    Route: route,
  })

  return val
}

export default async function FAQEditPage({ params }) {
  let res = await GetData(`products/${params.ID}`).then((val) => val)

  return (
    <div>
      <BodyRenderer ComponentName={"product"} data={res ? res.data : null} />
    </div>
  )
}
