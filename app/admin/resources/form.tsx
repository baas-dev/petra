import { useRouter } from "next/navigation"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { GetFormContext, SubmitForm } from "@/components/BAAS/Forms"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import TextAreaInput from "@/components/BAAS/Forms/Inputs/TextArea"
import { FormConfig } from "@/components/BAAS/Forms/Types"

export const ResourceFormSchema = z.object({
  Title: z.string().min(2, "Please complete first name"),
  Description: z.string().min(2, "Please complete second name"),
  Link: z.string().min(2, "Please complete second name"),
})

export default function ResourceInitForm() {
  const ResourceFormCXT = GetFormContext(ResourceFormSchema)

  const r = useRouter()
  async function onSubmit(data: z.infer<typeof ResourceFormSchema>) {
    await SubmitForm({
      APIRoute: "resources",
      FormData: data,
      FormSchema: ResourceFormSchema,
      Router: r,
      ClientPath: "/admin/resources",
      OnSuccess: {
        Message: "Your Resource Has Been Created",
        GoToRecord: true,
      },
      OnFailure: {
        Message: "Unable to Create This Right Now",
      },
      SubmitType: "CREATE",
    })
  }

  return (
    <Form {...ResourceFormCXT}>
      <form
        onSubmit={ResourceFormCXT.handleSubmit(onSubmit)}
        className="w-full space-y-6"
      >
        <TextInput
          form={ResourceFormCXT}
          options={{
            name: "Title",
            label: "Title",
          }}
        />
        <TextAreaInput
          form={ResourceFormCXT}
          options={{
            name: "Description",
            label: "Description",
          }}
        />
        <TextInput
          form={ResourceFormCXT}
          options={{
            name: "Link",
            label: "Link",
          }}
        />
        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  )
}
