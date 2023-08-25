import { BodyRenderer } from "@/components/BAAS/Forms/Render"
import BACKEND from "@/app/API"

import ProductFullForm from "./form"

export interface Attribute {
  ID: string
  Name: string
  IsRequired: boolean
  Choices: AttributeChoices[]
}

export type AttributeChoices = {
  ID: string
  Name: string
  Value: string
  Label: string
  AttributeID: string
}
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
      <ProductFullForm data={res ? res.data : null} />
    </div>
  )
}
