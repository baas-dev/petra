import { useRouter } from "next/navigation"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { GetFormContext, SubmitForm } from "@/components/BAAS/Forms"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import { FormConfig } from "@/components/BAAS/Forms/Types"

export const productsFormSchema = z.object({
  Name: z.string().min(2, "Please complete first name"),
})

export default function ProductInitForm() {
  const productsFormCXT = GetFormContext(productsFormSchema)

  const r = useRouter()
  async function onSubmit(data: z.infer<typeof productsFormSchema>) {
    await SubmitForm({
      APIRoute: "products",
      FormData: data,
      FormSchema: productsFormSchema,
      Router: r,
      ClientPath: "/admin/products",
      OnSuccess: {
        Message: "Your Product Has Been Created",
        GoToRecord: true,
      },
      OnFailure: {
        Message: "Unable to Create This Right Now",
      },
      SubmitType: "CREATE",
    })
  }

  return (
    <Form {...productsFormCXT}>
      <form
        onSubmit={productsFormCXT.handleSubmit(onSubmit)}
        className="w-full space-y-6"
      >
        <TextInput
          form={productsFormCXT}
          options={{
            name: "Name",
            label: "Name of Product",
          }}
        />

        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  )
}
