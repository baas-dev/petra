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
import TextAreaInput from "@/components/BAAS/Forms/Inputs/TextArea"
import { FormConfig } from "@/components/BAAS/Forms/Types"
import { useTableContext } from "@/components/BAAS/Table/Context"

import { useAdminTableContext } from "../../Context/TableContext"

export const ArticleCategorySchema = z.object({
  ID: z.string().optional(),
  Title: z.string().min(2),
  Scope: z.string(),
})

export default function ArticleCategoryForm(props: {
  data?: z.infer<typeof ArticleCategorySchema>
}) {
  const { adminTableCXT } = useAdminTableContext()
  console.log("props", adminTableCXT.Data)
  const articleFormCXT = useForm<z.infer<typeof ArticleCategorySchema>>({
    resolver: zodResolver(ArticleCategorySchema),
    defaultValues: {
      ID: adminTableCXT.Data?.ID ? adminTableCXT.Data.ID : "",
      Scope: adminTableCXT.Data?.Scope ? adminTableCXT.Data.Scope : "articles",
      Title: adminTableCXT.Data?.Title ? adminTableCXT.Data.Title : "",
    },
  })

  const r = useRouter()
  const { setTableCXT } = useTableContext()

  const [loading, setLoading] = useState(false)
  async function onSubmit(data: z.infer<typeof ArticleCategorySchema>) {
    setLoading(true)
    await SubmitForm({
      APIRoute:
        articleFormCXT.getValues("ID") === "0"
          ? "categories"
          : `categories/${articleFormCXT.getValues("ID")}`,
      FormData: data,
      FormSchema: ArticleCategorySchema,
      Router: r,
      ClientPath: "/admin/categoriess",
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
    <Form {...articleFormCXT}>
      <form
        onSubmit={articleFormCXT.handleSubmit(onSubmit)}
        className="w-full space-y-6"
      >
        <TextInput
          form={articleFormCXT}
          options={{
            name: "Title",
            label: "Title",
          }}
        />

        <TextAreaInput
          form={articleFormCXT}
          options={{
            name: "Description",
            label: "Description",
          }}
        />

        <SubmitButton loading={loading} />
      </form>
    </Form>
  )
}
