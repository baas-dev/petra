import { useRouter } from "next/navigation"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { GetFormContext, SubmitForm } from "@/components/BAAS/Forms"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import TextAreaInput from "@/components/BAAS/Forms/Inputs/TextArea"
import { FormConfig } from "@/components/BAAS/Forms/Types"

export const TestimonialsFormSchema = z.object({
  QuoteText: z.string().min(2, "Please complete first name"),
  Name: z.string().min(2, "Please complete second name"),
  Label: z.string().min(2, "Please complete second name"),
})

export default function TestimonialsInitForm() {
  const testimonialFormCXT = GetFormContext(TestimonialsFormSchema)

  const r = useRouter()
  async function onSubmit(data: z.infer<typeof TestimonialsFormSchema>) {
    await SubmitForm({
      APIRoute: "quotes",
      FormData: data,
      FormSchema: TestimonialsFormSchema,
      Router: r,
      ClientPath: "/admin/testimonials",
      OnSuccess: {
        Message: "Your Testimonials Has Been Created",
        GoToRecord: true,
      },
      OnFailure: {
        Message: "Unable to Create This Right Now",
      },
      SubmitType: "CREATE",
    })
  }

  return (
    <Form {...testimonialFormCXT}>
      <form
        onSubmit={testimonialFormCXT.handleSubmit(onSubmit)}
        className="w-full space-y-6"
      >
        {/* <TextInput
          form={testimonialFormCXT}
          options={{
            name: "Image",
            label: "Image",
          }}
        /> */}
        <TextAreaInput
          form={testimonialFormCXT}
          options={{
            name: "QuoteText",
            label: "Quote",
          }}
        />
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

        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  )
}
