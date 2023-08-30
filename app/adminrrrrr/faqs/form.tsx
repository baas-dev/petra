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

export const FAQFormSchema = z.object({
  ID: z.string().optional(),
  Question: z.string().min(2, "Please complete first name"),
  Answer: z.string().min(2, "Please complete second name"),
})

export default function FAQFullForm(props: {
  data?: z.infer<typeof FAQFormSchema>
  // LoadDataFunc: () => z.infer<typeof FAQFormSchema>
}) {
  const r = useRouter()

  const faqFormCXT = useForm<z.infer<typeof FAQFormSchema>>({
    resolver: zodResolver(FAQFormSchema),
    defaultValues: {
      ID: props.data?.ID ? props.data.ID : "",
      Question: props.data?.Question ? props.data.Question : "",
      Answer: props.data?.Answer ? props.data.Answer : "",
    },
  })

  async function onSubmit(data: z.infer<typeof FAQFormSchema>) {
    await SubmitForm({
      APIRoute:
        faqFormCXT.getValues("ID") === "0"
          ? "faq"
          : `faq/${faqFormCXT.getValues("ID")}`,
      FormData: data,
      FormSchema: FAQFormSchema,
      Router: r,
      ClientPath: "/admin/faqs",
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
            name: "Question",
            label: "Question",
          }}
        />
        <TextInput
          form={faqFormCXT}
          options={{
            name: "Answer",
            label: "Answer",
          }}
        />
        <Button type="submit">
          {props.data ? "UPDATE" : "CREATE"} changes
        </Button>
      </form>
    </Form>
  )
}
