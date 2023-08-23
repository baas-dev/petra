import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import TextAreaInput from "@/components/BAAS/Forms/Inputs/TextArea"

import { CreateNewFormSubmission, GetAllFormSubmissions } from "../API/FORMS"

export const ContactFormSchema = z.object({
  name: z.string().min(2, "Please complete first name"),
  email: z.string().min(2, "Please complete second name"),
  message: z.string().min(2, "Please complete second name"),
})

export default function ContactForm() {
  const r = useRouter()

  const faqFormCXT = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {},
  })
  async function onSubmit(data: z.infer<typeof ContactFormSchema>) {
    const result = ContactFormSchema.safeParse(data)

    if (!result.success) {
      // Handle the validation errors

      toast({
        title: "Errors Detected:",
        description: (
          <p>Please fix errors!</p>
          // <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          //   <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          // </pre>
        ),
      })
    }

    if (result.success) {
      let id = await CreateNewFormSubmission(data)
      toast({
        title: "Your Submission Was Successful!",
        description: (
          <div>
            <h2>Thank you!</h2>
            <p>A team member will reach out to you.</p>
          </div>
        ),
      })
      r.push("/success")
    }
  }
  // ID: string
  // Question: string
  // Answer: string
  // Published: boolean
  return (
    <Form {...faqFormCXT}>
      <form
        onSubmit={faqFormCXT.handleSubmit(onSubmit)}
        className="w-full space-y-6"
      >
        <TextInput
          form={faqFormCXT}
          options={{
            name: "name",
            label: "Your Name",
          }}
        />
        <TextInput
          form={faqFormCXT}
          options={{
            name: "email",
            label: "Contact Email",
          }}
        />
        <TextAreaInput
          form={faqFormCXT}
          options={{
            name: "message",
            label: "What can we help you with?",
          }}
        />
        <Button type="submit">Submit!</Button>
      </form>
    </Form>
  )
}
