"use client"

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
  ID: z.string(),
  Question: z.string().min(2, "Please complete first name"),
  Answer: z.string().min(2, "Please complete second name"),
})

export default function FAQFullForm(props: {
  data: z.infer<typeof FAQFormSchema>
}) {
  const r = useRouter()

  let { ID, Answer, Question } = props.data

  const faqFormCXT = useForm<z.infer<typeof FAQFormSchema>>({
    resolver: zodResolver(FAQFormSchema),
    defaultValues: {
      ID: ID,
      Answer: Answer,
      Question: Question,
    },
  })

  async function onSubmit(data: z.infer<typeof FAQFormSchema>) {
    await SubmitForm({
      APIRoute: `faq/${props.data.ID}`,
      FormData: data,
      FormSchema: FAQFormSchema,
      SubmitType: "UPDATE",
      Router: r,
      ClientPath: "/admin/faqs",
      OnSuccess: {
        Message: "Your FAQ Has Been Updated!",
        GoToRecord: true,
      },
      OnFailure: {
        Message: "Unable to Create This Right Now",
      },
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
        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  )
}
