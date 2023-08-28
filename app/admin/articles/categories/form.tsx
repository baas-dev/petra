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
import TextAreaInput from "@/components/BAAS/Forms/Inputs/TextArea"
import { FormConfig } from "@/components/BAAS/Forms/Types"

export const TestimonialsFormSchema = z.object({
  ID: z.string().optional(),
  Title: z.string().min(2),
  Scope: z.string(),
  Description: z.string().min(2),
})

export default function ArticleCategoryForm(props: {
  data?: z.infer<typeof TestimonialsFormSchema>
}) {
  const testimonialFormCXT = useForm<z.infer<typeof TestimonialsFormSchema>>({
    resolver: zodResolver(TestimonialsFormSchema),
    defaultValues: {
      ID: props.data?.ID ? props.data.ID : "",
      Scope: props.data?.Scope ? props.data.Scope : "articles",
      Title: props.data?.Title ? props.data.Title : "",
      Description: props.data?.Description ? props.data.Description : "",
    },
  })

  const r = useRouter()

  async function onSubmit(data: z.infer<typeof TestimonialsFormSchema>) {
    await SubmitForm({
      APIRoute:
        testimonialFormCXT.getValues("ID") === ""
          ? "categories"
          : `categories/${testimonialFormCXT.getValues("ID")}`,
      FormData: data,
      FormSchema: TestimonialsFormSchema,
      Router: r,
      ClientPath: "/admin/articles/categories",
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
    <Form {...testimonialFormCXT}>
      <form
        onSubmit={testimonialFormCXT.handleSubmit(onSubmit)}
        className="w-full space-y-6"
      >
        <TextInput
          form={testimonialFormCXT}
          options={{
            name: "Title",
            label: "Title",
          }}
        />

        <TextAreaInput
          form={testimonialFormCXT}
          options={{
            name: "Description",
            label: "Description",
          }}
        />

        <Button type="submit">
          {props.data ? "UPDATE" : "CREATE"} changes
        </Button>
      </form>
    </Form>
  )
}
