"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { GetFormContext, SubmitForm } from "@/components/BAAS/Forms"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import { FormConfig } from "@/components/BAAS/Forms/Types"

export const ResourceFormSchema = z.object({
  ID: z.string().optional(),
  Title: z.string().min(2, "Please complete first name"),
  Description: z.string().min(2, "Please complete second name"),
  Link: z.string().min(2, "Please complete second name"),
})

export default function ResourcesForm(props: {
  data?: z.infer<typeof ResourceFormSchema>
  // LoadDataFunc: () => z.infer<typeof ResourceFormSchema>
}) {
  const r = useRouter()

  const faqFormCXT = useForm<z.infer<typeof ResourceFormSchema>>({
    resolver: zodResolver(ResourceFormSchema),
    defaultValues: {
      ID: props.data?.ID ? props.data.ID : "",
      Title: props.data?.Title ? props.data.Title : "",
      Description: props.data?.Description ? props.data.Description : "",
      Link: props.data?.Link ? props.data.Link : "",
    },
  })

  async function onSubmit(data: z.infer<typeof ResourceFormSchema>) {
    await SubmitForm({
      APIRoute:
        faqFormCXT.getValues("ID") === "0"
          ? "resources"
          : `resources/${faqFormCXT.getValues("ID")}`,
      FormData: data,
      FormSchema: ResourceFormSchema,
      Router: r,
      ClientPath: "/admin/resources",
      OnSuccess: {
        Message: "Your Testimonials Has Been Created",
        GoToRecord: false,
      },
      OnFailure: {
        Message: "Unable to Create This Right Now",
      },
      SubmitType: props.data ? "UPDATE" : "CREATE",
    })
  }

  return (
    <Form {...faqFormCXT}>
      <form
        onSubmit={faqFormCXT.handleSubmit(onSubmit)}
        className="w-full space-y-6"
      >
        <TextInput
          form={faqFormCXT}
          options={{
            name: "Title",
            label: "Title",
          }}
        />
        <TextInput
          form={faqFormCXT}
          options={{
            name: "Description",
            label: "Description",
          }}
        />
        <TextInput
          form={faqFormCXT}
          options={{
            name: "Link",
            label: "Link",
          }}
        />
        <Button type="submit">
          {props.data ? "UPDATE" : "CREATE"} changes
        </Button>
      </form>
    </Form>
  )
}
