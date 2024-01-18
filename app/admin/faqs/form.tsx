"use client"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form } from "@/components/ui/form"
import { SubmitForm } from "@/components/BAAS/Forms"
import DeleteButton from "@/components/BAAS/Forms/Buttons/delete"
import SubmitButton from "@/components/BAAS/Forms/Buttons/submit"
import FormHeader from "@/components/BAAS/Forms/Components/FormHeader"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import TextAreaInput from "@/components/BAAS/Forms/Inputs/TextArea"
import { useTableContext } from "@/components/BAAS/Table/Context"

import { useAdminTableContext } from "../Context/TableContext"

export const FAQFormSchema = z.object({
  ID: z.string().optional(),
  Question: z.string().min(2, "Please complete "),
  Answer: z.string(),
})

export default function FAQFullForm(props: {
  data?: z.infer<typeof FAQFormSchema>
  // LoadDataFunc: () => z.infer<typeof FAQFormSchema>
}) {
  const r = useRouter()
  const { adminTableCXT } = useAdminTableContext()

  const [loading, setLoading] = useState(false)

  function SetDefaultValues() {
    if (adminTableCXT.Data == null) {
      return {}
    }

    if (!adminTableCXT.Data !== null) {
      return {
        ID: adminTableCXT.Data?.ID ? adminTableCXT.Data?.ID : "",
        Question: adminTableCXT.Data?.Question
          ? adminTableCXT.Data?.Question
          : "",
        Answer: adminTableCXT.Data?.Answer ? adminTableCXT.Data?.Answer : "",
      }
    }
  }

  const faqFormCXT = useForm<z.infer<typeof FAQFormSchema>>({
    resolver: zodResolver(FAQFormSchema),
    defaultValues: SetDefaultValues(),
  })

  async function onSubmit(data: z.infer<typeof FAQFormSchema>) {
    setLoading(true)
    await SubmitForm({
      APIRoute:
        faqFormCXT.getValues("ID") === undefined
          ? "faq"
          : `faq/${faqFormCXT.getValues("ID")}`,
      FormData: data,

      FormSchema: FAQFormSchema,
      Router: r,
      ClientPath: "/admin/faqs",
      OnSuccess: {
        Message: "Your FAQ Has Been Created",
        GoToRecord: false,
      },
      OnFailure: {
        Message: "Unable to Create This Right Now",
      },
      SubmitType:
        faqFormCXT.getValues("ID") === undefined ? "CREATE" : "UPDATE",
    })
      .then((val) => {
        if (window !== null || undefined) {
          window.location.reload()
        }
      })
      .catch((err) => {
        setLoading(false)
      })
  }

  return (
    <div className=" container h-full w-full">
      <Form {...faqFormCXT}>
        <form
          onSubmit={faqFormCXT.handleSubmit(onSubmit)}
          className="m-auto  h-full w-full max-w-7xl py-4"
        >
          <div className="my-4 rounded-xl bg-white p-4 shadow-md">
            <div className="mb-8">
              <TextInput
                form={faqFormCXT}
                options={{
                  name: "Question",
                  label: "Question",
                  description:
                    "Add words and terms that your users are looking for",
                }}
              />
            </div>
            <TextAreaInput
              form={faqFormCXT}
              options={{
                name: "Answer",
                label: "Answer",
                description:
                  "The answer to the above question, adding further information",
              }}
            />
            <div className="flex w-full justify-between">
              {props.data ? (
                <DeleteButton
                  DeleteOptions={{
                    APIPath: "faq",
                    ID: props.data?.ID,
                  }}
                />
              ) : (
                <></>
              )}
            </div>
          </div>

          <SubmitButton loading={loading} />
        </form>
      </Form>
    </div>
  )
}
