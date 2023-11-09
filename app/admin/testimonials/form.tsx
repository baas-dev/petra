"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { GetFormContext, SubmitForm } from "@/components/BAAS/Forms"
import SubmitButton from "@/components/BAAS/Forms/Buttons/submit"
import ImageSingleUpload from "@/components/BAAS/Forms/Inputs/ImageSingleUpload"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import TextAreaInput from "@/components/BAAS/Forms/Inputs/TextArea"
import { FormConfig } from "@/components/BAAS/Forms/Types"
import { useTableContext } from "@/components/BAAS/Table/Context"

import { useAdminTableContext } from "../Context/TableContext"

export const TestimonialsFormSchema = z.object({
  ID: z.string().optional(),
  QuoteText: z.string().min(2, "Please complete first name"),
  Name: z.string().min(2, "Please complete second name"),
  Label: z.string().min(2, "Please complete second name"),
  Image: z.string(),
})

export default function TestimonialsForm(props: {
  data?: z.infer<typeof TestimonialsFormSchema>
}) {
  const { adminTableCXT } = useAdminTableContext()
  const testimonialFormCXT = useForm<z.infer<typeof TestimonialsFormSchema>>({
    resolver: zodResolver(TestimonialsFormSchema),
    defaultValues: {
      ID: adminTableCXT.Data?.ID ? adminTableCXT.Data.ID : "",
      Name: adminTableCXT.Data?.Name ? adminTableCXT.Data.Name : "",
      Label: adminTableCXT.Data?.Label ? adminTableCXT.Data.Label : "",
      QuoteText: adminTableCXT.Data?.QuoteText
        ? adminTableCXT.Data.QuoteText
        : "",
      Image: adminTableCXT.Data?.Image ? adminTableCXT.Data.Image : "",
    },
  })

  const r = useRouter()
  const { setTableCXT } = useTableContext()

  const [loading, setLoading] = useState(false)
  async function onSubmit(data: z.infer<typeof TestimonialsFormSchema>) {
    setLoading(true)

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
      SubmitType: adminTableCXT.Data ? "UPDATE" : "CREATE",
    })
      .then((val) => {
        setTableCXT({
          ShouldDialogBeOpen: false,
        })
        if (window !== null || undefined) {
          window.location.reload()
        }
      })
      .catch((err) => {
        setLoading(false)
      })
  }

  return (
    <Form {...testimonialFormCXT}>
      <form
        onSubmit={testimonialFormCXT.handleSubmit(onSubmit)}
        className="w-full space-y-6 mt-4 max-w-7xl mx-auto"
      >
        <div className="bg-white p-4 rounded-xl shadow-md">
          <TextInput
            form={testimonialFormCXT}
            options={{
              name: "Name",
              label: "Name",
            }}
          />
          <TextInput
            form={testimonialFormCXT}
            options={{
              name: "Label",
              label: "Label",
            }}
          />
          <TextAreaInput
            form={testimonialFormCXT}
            options={{
              name: "QuoteText",
              label: "Quote Text",
            }}
          />
          <ImageSingleUpload
            form={testimonialFormCXT}
            options={{
              Name: "Image",
            }}
          />
        </div>
        <SubmitButton loading={loading} />
      </form>
    </Form>
  )
}
