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
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import { FormConfig } from "@/components/BAAS/Forms/Types"

export const ArticleFormSchema = z.object({
  ID: z.string().optional(),
  Title: z.string().min(2, "Please  Title for Article"),
})

export default function ArticleInitForm(props: {
  data?: z.infer<typeof ArticleFormSchema>
  // LoadDataFunc: () => z.infer<typeof ArticleFormSchema>
}) {
  const r = useRouter()

  const [loading, setLoading] = useState(false)

  const faqFormCXT = useForm<z.infer<typeof ArticleFormSchema>>({
    resolver: zodResolver(ArticleFormSchema),
    defaultValues: {
      ID: props.data?.ID ? props.data.ID : "",
      Title: props.data?.Title ? props.data.Title : "",
    },
  })

  async function onSubmit(data: z.infer<typeof ArticleFormSchema>) {
    setLoading(true)
    await SubmitForm({
      APIRoute:
        faqFormCXT.getValues("ID") === "0"
          ? "articles"
          : `articles/${faqFormCXT.getValues("ID")}`,
      FormData: data,
      FormSchema: ArticleFormSchema,
      Router: r,
      ClientPath: "/admin/articles",
      OnSuccess: {
        Message: "Your Article Was Created!",
        GoToRecord: true,
      },
      OnFailure: {
        Message: "Unable to Create This Right Now",
      },
      SubmitType: props.data ? "UPDATE" : "CREATE",
    })
      .then((val) => {
        // if (window !== null || undefined) {
        //   window.location.reload()
        // }
      })
      .catch((err) => {
        setLoading(false)
      })
  }

  return (
    <Form {...faqFormCXT}>
      <form
        onSubmit={faqFormCXT.handleSubmit(onSubmit)}
        className="w-full space-y-6 mt-4 max-w-7xl mx-auto"
      >
        <TextInput
          form={faqFormCXT}
          options={{
            name: "Title",
            label: "Title",
          }}
        />

        <SubmitButton loading={loading} />
      </form>
    </Form>
  )
}
