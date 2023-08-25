export default function AttributeSelecting() {
  // function AttributeOptions(arg: { item: string }) {
  //   let obj = GetAttributeByID(arg.item)

  //   return (
  //     <>
  //       {obj?.Choices && obj.Choices.length > 0 ? (
  //         obj.Choices.map((choice, i) => (
  //           <SelectItem key={choice?.ID} value={choice?.ID ? choice.ID : ""}>
  //             {choice.Label}
  //           </SelectItem>
  //         ))
  //       ) : (
  //         <></>
  //       )}
  //     </>
  //   )
  // }
  // const AttributeSectionSchema = z.object({
  //   OptionsSelected: z.array(
  //     z.object({
  //       key: z.string(),
  //       value: z.string(),
  //     })
  //   ),
  // })
  // function handleValChange(childValue: string, parentIndex: number): void {
  // let SelectedOptions = attributeFormCXT.getValues("OptionsSelected")
  // find the specifc parent in options seleected
  // let recordIndex = SelectedOptions.findIndex(
  //   (val) => val.key === props.Attributes[parentIndex].ID
  // )
  // Found parent index in selected options array
  // if (recordIndex >= 0) {
  //   SelectedOptions[recordIndex].value = childValue
  //   attributeFormCXT.setValue("OptionsSelected", SelectedOptions)
  // }
  // Did not find
  // create a new record
  // if (recordIndex < 0) {
  //   SelectedOptions.push({
  //     key: props.Attributes[parentIndex].ID,
  //     value: childValue,
  //   })
  //   attributeFormCXT.setValue("OptionsSelected", SelectedOptions)
  // }
  // }

  //   function GetAttributeByID(ID: string) {
  //     let obj = props.Attributes.find((x: Attribute) => x.ID === ID)
  //     return obj
  //   }

  //-----------------------------------
  // const attributeFormCXT = useForm<z.infer<typeof AttributeSectionSchema>>({
  //   resolver: zodResolver(AttributeSectionSchema),
  //   defaultValues: {
  //     OptionsSelected: [],
  //   },
  // })

  return (
    <div>
      {/* <div className="w-full">
          {attributeFormCXT.getValues("ActiveAttributes") &&
            attributeFormCXT.getValues("ActiveAttributes").length > 0 &&
            attributeFormCXT.getValues("ActiveAttributes").map((item, i) => {
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
            })}
        </div> */}
    </div>
  )
}
