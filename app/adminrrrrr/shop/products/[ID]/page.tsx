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

export type AttributesSelectedForProduct = {
  ID: string
  ProductID: string
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
  let res = await GetData(`products/${params.ID}`).then(async (val) => {
    let { AttributesChosen } = val.data

    if (AttributesChosen && AttributesChosen.length > 0) {
      let AttributeInfo = await GetData(`product-attributes`).then((subval) => {
        console.log(subval)
        return subval
      })
      console.log(AttributeInfo)
    }
    return val.data
  })

  return (
    <div>
      <ProductFullForm data={res ? res : null} />
    </div>
  )
}
