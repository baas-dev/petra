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
  QuoteText: z.string().min(2, "Please complete first name"),
  Name: z.string().min(2, "Please complete second name"),
  Label: z.string().min(2, "Please complete second name"),
})

export default function ArticleCategoryForm(props: {
  data?: z.infer<typeof TestimonialsFormSchema>
}) {
  const testimonialFormCXT = useForm<z.infer<typeof TestimonialsFormSchema>>({
    resolver: zodResolver(TestimonialsFormSchema),
    defaultValues: {
      ID: props.data?.ID ? props.data.ID : "",
      Name: props.data?.Name ? props.data.Name : "",
      Label: props.data?.Label ? props.data.Label : "",
      QuoteText: props.data?.QuoteText ? props.data.QuoteText : "",
    },
  })

  const r = useRouter()

  async function onSubmit(data: z.infer<typeof TestimonialsFormSchema>) {
    await SubmitForm({
      APIRoute:
        testimonialFormCXT.getValues("ID") === "0"
          ? "quotes"
          : `quotes/${testimonialFormCXT.getValues("ID")}`,
      FormData: data,
      FormSchema: TestimonialsFormSchema,
      Router: r,
      ClientPath: "/admin/testimonials",
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
