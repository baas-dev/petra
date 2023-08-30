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
import { Attribute } from "@/app/adminrrrrr/shop/products/[ID]/page"

export default function AttributeSelecting(props: { Attributes: Attribute[] }) {
  function AttributeOptions(arg: { item: string }) {
    let obj = GetAttributeByID(arg.item)

    return (
      <>
        {obj?.Choices && obj.Choices.length > 0 ? (
          obj.Choices.map((choice, i) => (
            <SelectItem key={choice?.ID} value={choice?.ID ? choice.ID : ""}>
              {choice.Label}
            </SelectItem>
          ))
        ) : (
          <></>
        )}
      </>
    )
  }
  const AttributeSectionSchema = z.object({
    OptionsSelected: z.array(
      z.object({
        key: z.string(),
        value: z.string(),
      })
    ),
  })
  function handleValChange(childValue: string, parentIndex: number): void {
    let SelectedOptions = attributeFormCXT.getValues("OptionsSelected")
    let recordIndex = SelectedOptions.findIndex(
      (val) => val.key === props.Attributes[parentIndex].ID
    )
    if (recordIndex >= 0) {
      SelectedOptions[recordIndex].value = childValue
      attributeFormCXT.setValue("OptionsSelected", SelectedOptions)
    }

    if (recordIndex < 0) {
      SelectedOptions.push({
        key: props.Attributes[parentIndex].ID,
        value: childValue,
      })
      attributeFormCXT.setValue("OptionsSelected", SelectedOptions)
    }
  }

  function GetAttributeByID(ID: string) {
    let obj = props.Attributes.find((x: Attribute) => x.ID === ID)
    return obj
  }

  const attributeFormCXT = useForm<z.infer<typeof AttributeSectionSchema>>({
    resolver: zodResolver(AttributeSectionSchema),
    defaultValues: {
      OptionsSelected: [],
    },
  })

  return (
    <div className="w-full">
      {/* {attributeFormCXT.getValues("ActiveAttributes").map((item, i) => {
        let index = props.Attributes.findIndex((attr) => attr.ID === item)

        if (
          props.Attributes[index].Choices &&
          props.Attributes[index].Choices.length > 0
        ) {
          return (
            <Select
              // value={props.options.value ? props.options.value : field.value}
              onValueChange={(val) => handleValChange(val, index)}

              // defaultValue={field.value}
            >
              <FormLabel className="text-base">
                {GetAttributeByID(item)
                  ? `${GetAttributeByID(item)?.Name}`
                  : ""}
              </FormLabel>

              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={"Please select an option"} />
              </SelectTrigger>
              <SelectContent>
                <AttributeOptions item={item} />
              </SelectContent>
            </Select>
          )
        }
        return <></>
      })} */}
    </div>
  )
}
