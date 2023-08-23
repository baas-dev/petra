import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { DialogFooter } from "@/components/ui/dialog"
import { Form } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"

export const ContactFormSchema = z.object({
  question: z.string().min(2, "Please complete first name"),
  answer: z.string().min(2, "Please complete second name"),
})

export default function ContactAdminForm() {
  const r = useRouter()

  const ContactFormCXT = useForm<z.infer<typeof ContactFormSchema>>({
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
      // let id = await CreateForm(data)
      // toast({
      //   title: "You submitted the following values:",
      //   description: (
      //     <p>{id}</p>
      //     // <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      //     //   <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      //     // </pre>
      //   ),
      // })
      // let addr = `/admin/Contacts/${id}`
      // r.push(addr)
    }
  }
  // ID: string
  // Question: string
  // Answer: string
  // Published: boolean
  return (
    <Form {...ContactFormCXT}>
      <form
        onSubmit={ContactFormCXT.handleSubmit(onSubmit)}
        className="w-full space-y-6"
      >
        <TextInput
          form={ContactFormCXT}
          options={{
            name: "question",
            label: "Question",
          }}
        />
        <TextInput
          form={ContactFormCXT}
          options={{
            name: "answer",
            label: "Answer",
          }}
        />
        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  )
}
