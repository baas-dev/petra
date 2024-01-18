"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { GetFormContext, SubmitForm } from "@/components/BAAS/Forms"
import SwitchInput from "@/components/BAAS/Forms/Inputs/Switch"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import TextAreaInput from "@/components/BAAS/Forms/Inputs/TextArea"
import { FormConfig } from "@/components/BAAS/Forms/Types"

export const AttributeFormSchema = z.object({
  ID: z.string(),
  Name: z.string().min(2, "Please complete first name"),
  IsRequired: z.boolean(),
  Choices: z.array(
    z.object({
      Name: z.string().min(2, "Please complete first name"),
      Value: z.string().min(2, "Please complete first name"),
      Label: z.string().min(2, "Please complete first name"),
    })
  ),
})

export default function AttributeForm(props: {
  data: z.infer<typeof AttributeFormSchema>
}) {
  const r = useRouter()

  let { ID, Name, IsRequired, Choices } = props.data

  const AttributeFormCXT = useForm<z.infer<typeof AttributeFormSchema>>({
    resolver: zodResolver(AttributeFormSchema),
    defaultValues: {
      ID: ID,
      Name: Name,
      IsRequired: IsRequired,
      Choices: Choices ? Choices : [],
    },
  })

  async function onSubmit(data: z.infer<typeof AttributeFormSchema>) {
    await SubmitForm({
      APIRoute: `product-attributes/${props.data.ID}`,
      FormData: data,
      FormSchema: AttributeFormSchema,
      SubmitType: "UPDATE",
      Router: r,
      ClientPath: "/admin/shop/attributes",
      OnSuccess: {
        Message: "Your Attribute Has Been Updated!",
        GoToRecord: true,
      },
      OnFailure: {
        Message: "Unable to Create This Right Now",
      },
    })
  }

  function handleOptionAdd() {
    AttributeFormCXT.setValue("Choices", [
      ...AttributeFormCXT.getValues("Choices"),
      {
        Label: "",
        Name: "",
        Value: "",
      },
    ])
  }

  AttributeFormCXT.watch()

  return (
    <Form {...AttributeFormCXT}>
      <form
        onSubmit={AttributeFormCXT.handleSubmit(onSubmit)}
        className="w-full space-y-6"
      >
        <TextInput
          form={AttributeFormCXT}
          options={{
            name: "Name",
            label: "Name",
          }}
        />
        <SwitchInput
          form={AttributeFormCXT}
          options={{
            name: "IsRequired",
            label: "Is Required?",
          }}
        />
        <Button onClick={handleOptionAdd}>Add Option Choice</Button>
        {AttributeFormCXT.getValues("Choices") &&
          AttributeFormCXT.getValues("Choices").map((item, i) => (
            <>
              <div className="flex gap-2">
                <TextInput
                  form={AttributeFormCXT}
                  options={{
                    name: `Choices[${i}].Name`,
                    label: "Name",
                  }}
                />
                <TextInput
                  form={AttributeFormCXT}
                  options={{
                    name: `Choices[${i}].Value`,
                    label: "Value",
                  }}
                />
                <TextInput
                  form={AttributeFormCXT}
                  options={{
                    name: `Choices[${i}].Label`,
                    label: "Label",
                  }}
                />
              </div>
            </>
          ))}

        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  )
}
