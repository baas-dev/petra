import { useRouter } from "next/navigation"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { GetFormContext, SubmitForm } from "@/components/BAAS/Forms"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import { FormConfig } from "@/components/BAAS/Forms/Types"

export const FAQFormSchema = z.object({
  Question: z.string().min(2, "Please complete first name"),
  Answer: z.string().min(2, "Please complete second name"),
})

export default function FAQInitForm() {
  const faqFormCXT = GetFormContext(FAQFormSchema)

  const r = useRouter()
  async function onSubmit(data: z.infer<typeof FAQFormSchema>) {
    await SubmitForm({
      APIRoute: "faq",
      FormData: data,
      FormSchema: FAQFormSchema,
      Router: r,
      ClientPath: "/admin/faqs",
      OnSuccess: {
        Message: "Your FAQ Has Been Created",
        GoToRecord: true,
      },
      OnFailure: {
        Message: "Unable to Create This Right Now",
      },
      SubmitType: "CREATE",
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
