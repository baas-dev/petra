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
  Name: z.string(),
  Email: z.string(),
  Message: z.string(),
})

export default function ContactForm(props: { data: any }) {
  const r = useRouter()

  let { name, email, message } = JSON.parse(props.data.SubmissionData)

  const ResourceFormCXT = useForm<z.infer<typeof ResourceFormSchema>>({
    resolver: zodResolver(ResourceFormSchema),
    defaultValues: {
      ID: props.data.ID,
      Name: name,
      Email: email,
      Message: message,
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
            name: "Name",
            label: "Name",
            isDisabled: true,
          }}
        />
        <TextInput
          form={ResourceFormCXT}
          options={{
            name: "Email",
            label: "Email",
            isDisabled: true,
          }}
        />
        <TextAreaInput
          form={ResourceFormCXT}
          options={{
            name: "Message",
            label: "Message",
            isDisabled: true,
          }}
        />
        {/* <Button type="submit">Save changes</Button> */}
      </form>
    </Form>
  )
}
