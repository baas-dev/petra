import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { FormLabel } from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import MultiSelectInput from "@/components/BAAS/Forms/Inputs/MultiSelect"
import BACKEND from "@/app/API"
import {
  Attribute,
  AttributeChoices,
} from "@/app/admin/shop/products/[ID]/page"

interface AttributeEditing {
  Attributes: Attribute[]
  formCxt: any
}

export default function AttributeEditing(props: AttributeEditing) {
  props.formCxt.watch()

  function AttributeClass(): Array<{ id: string; label: string }> {
    let options: any = []

    if (props.Attributes && props.Attributes.length > 0) {
      props.Attributes.forEach((item, i) => {
        options.push({
          id: item.ID,
          label: item.Name,
        })
      })
    }

    return options
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-xl p-4 flex">
        <div className="w-full">
          <MultiSelectInput
            form={props.formCxt}
            options={{
              name: "ActiveAttributes",
              label: "Product Attributes Enabled",
              description:
                "These will determine what is needed for the base product and variants",
              placeholder: "Choose a product category",
              items: AttributeClass(),
            }}
          />
        </div>
      </div>
    </>
  )
}
