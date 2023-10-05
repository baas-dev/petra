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
    return val.data
  })

  let extraData = async () => {
    let { AttributesChosen } = res

    if (AttributesChosen && AttributesChosen.length > 0) {
      let uuids: string = ""

      AttributesChosen.forEach((item, i) => {
        if (uuids.length != 0) {
          uuids = uuids + "," + item.AttributeID
        }
        if (uuids.length == 0) {
          uuids = item.AttributeID
        }
      })
      return await GetData(`product-attributes?uuids=${uuids}`).then(
        (subval) => {
          console.log(subval)
          return subval.data
        }
      )
    }
  }
  let ed = await extraData().then((res) => res)
  return (
    <div className="pb-16">
      <ProductFullForm data={res ? res : null} extraData={ed ? ed : null} />
    </div>
  )
}
