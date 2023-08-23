"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { GetFormContext, SubmitForm } from "@/components/BAAS/Forms"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import TextAreaInput from "@/components/BAAS/Forms/Inputs/TextArea"
import { FormConfig } from "@/components/BAAS/Forms/Types"

export const ResourceFormSchema = z.object({
  ID: z.string(),
  Title: z.string().min(2, "Please complete first name"),
  Description: z.string().min(2, "Please complete second name"),
  Link: z.string().min(2, "Please complete second name"),
})

export default function ResourceFullForm(props: {
  data: z.infer<typeof ResourceFormSchema>
}) {
  const r = useRouter()

  let { ID, Title, Description, Link } = props.data

  console.log(props.data)
  const ResourceFormCXT = useForm<z.infer<typeof ResourceFormSchema>>({
    resolver: zodResolver(ResourceFormSchema),
    defaultValues: {
      ID: ID,
      Title: Title,
      Description: Description,
      Link: Link,
    },
  })

  async function onSubmit(data: z.infer<typeof ResourceFormSchema>) {
    await SubmitForm({
      APIRoute: `resources/${props.data.ID}`,
      FormData: data,
      FormSchema: ResourceFormSchema,
      SubmitType: "UPDATE",
      Router: r,
      ClientPath: "/admin/resources",
      OnSuccess: {
        Message: "Your Resource Has Been Updated!",
        GoToRecord: true,
      },
      OnFailure: {
        Message: "Unable to Create This Right Now",
      },
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
