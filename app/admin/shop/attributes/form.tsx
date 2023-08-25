import { useRouter } from "next/navigation"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { GetFormContext, SubmitForm } from "@/components/BAAS/Forms"
import SwitchInput from "@/components/BAAS/Forms/Inputs/Switch"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import { FormConfig } from "@/components/BAAS/Forms/Types"

export const AttributeFormSchema = z.object({
  Name: z.string().min(2, "Please complete first name"),
  IsRequired: z.boolean(),
})

export default function AttributesInitForm() {
  const attributeFormCXT = GetFormContext(AttributeFormSchema)

  const r = useRouter()
  async function onSubmit(data: z.infer<typeof AttributeFormSchema>) {
    await SubmitForm({
      APIRoute: "product-attributes",
      FormData: data,
      FormSchema: AttributeFormSchema,
      Router: r,
      ClientPath: "/admin/shop/attributes",
      OnSuccess: {
        Message: "Your Attribute Has Been Created",
        GoToRecord: true,
      },
      OnFailure: {
        Message: "Unable to Create This Right Now",
      },
      SubmitType: "CREATE",
    })
  }

  return (
    <Form {...attributeFormCXT}>
      <form
        onSubmit={attributeFormCXT.handleSubmit(onSubmit)}
        className="w-full space-y-6"
      >
        <TextInput
          form={attributeFormCXT}
          options={{
            name: "Name",
            label: "Name",
          }}
        />
        <SwitchInput
          form={attributeFormCXT}
          options={{
            name: "IsRequired",
            label: "Is Required?",
          }}
        />
        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  )
}
