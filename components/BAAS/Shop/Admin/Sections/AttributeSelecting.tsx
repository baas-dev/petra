import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { FormLabel } from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import SelectInput from "@/components/BAAS/Forms/Inputs/Select"
import { Attribute } from "@/app/admin/shop/products/[ID]/page"

export default function AttributeSelecting(props: { Attributes: Attribute[] }) {
  const AttributeSectionSchema = z.object({
    OptionsSelected: z.array(
      z.object({
        key: z.string(),
        value: z.string(),
      })
    ),
  })

  const attributeFormCXT = useForm<z.infer<typeof AttributeSectionSchema>>({
    resolver: zodResolver(AttributeSectionSchema),
    defaultValues: {
      OptionsSelected: [],
    },
  })

  function FormatOptions(data: Attribute): {
    value: string
    label: string
  }[] {
    let items: any[] = []
    if (data && data.Choices.length > 0) {
      data.Choices.forEach((item) => {
        items.push({
          value: item.ID,
          label: item.Label,
        })
      })
    }
    return items
  }

  return (
    <div className="w-full">
      {props.Attributes.map((item, i) => {
        return (
          <>
            <SelectInput
              form={attributeFormCXT}
              options={{
                name: `OptionsSelected[${i}]`,
                label: item.Name,
                items: FormatOptions(item),
              }}
            />
          </>
        )
      })}
    </div>
  )
}
