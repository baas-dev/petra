"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { submitPetraFormClient } from "@/lib/petra-client"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import SubmitButton from "@/components/BAAS/Forms/Buttons/submit"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import TextAreaInput from "@/components/BAAS/Forms/Inputs/TextArea"

export const ContactFormSchema = z.object({
  name: z.string().min(2, "Please complete first name"),
  email: z.string().min(2, "Please complete second name"),
  message: z.string().min(2, "Please complete second name"),
  type: z.string(),
})

export default function ContactForm() {
  const r = useRouter()
  const [loading, setLoading] = useState(false)

  const faqFormCXT = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      type: "contact",
    },
  })
  async function onSubmit(data: z.infer<typeof ContactFormSchema>) {
    setLoading(true)
    try {
      await submitPetraFormClient("contact", data)
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
    } catch (error) {
      toast({
        variant: "destructive",
        title: "We could not send your message",
        description:
          error instanceof Error
            ? error.message
            : "Please try again in a moment.",
      })
    } finally {
      setLoading(false)
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
        <SubmitButton loading={loading} />
      </form>
    </Form>
  )
}
