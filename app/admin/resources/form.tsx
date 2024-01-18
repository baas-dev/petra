"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import MediaDialog from "@/components/BAAS/Dashboard/MediaDialog"
import { GetFormContext, SubmitForm } from "@/components/BAAS/Forms"
import SubmitButton from "@/components/BAAS/Forms/Buttons/submit"
import FormHeader from "@/components/BAAS/Forms/Components/FormHeader"
import NumberInput from "@/components/BAAS/Forms/Inputs/NumberInput"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import { FormConfig } from "@/components/BAAS/Forms/Types"
import { useTableContext } from "@/components/BAAS/Table/Context"

import { useAdminTableContext } from "../Context/TableContext"

export const ResourceFormSchema = z.object({
  ID: z.string().optional(),
  Title: z.string().min(2, "Please Complete Title"),
  Description: z.string(),
  Link: z.string().url(),
  IconLink: z.string().url(),
  Order: z.number(),
})

export default function ResourcesForm() {
  const r = useRouter()
  const { setTableCXT } = useTableContext()
  const { adminTableCXT } = useAdminTableContext()

  const [loading, setLoading] = useState(false)

  const faqFormCXT = useForm<z.infer<typeof ResourceFormSchema>>({
    resolver: zodResolver(ResourceFormSchema),
    defaultValues: {
      ID: adminTableCXT.Data?.ID ? adminTableCXT.Data.ID : "",
      Title: adminTableCXT.Data?.Title ? adminTableCXT.Data.Title : "",
      Description: adminTableCXT.Data?.Description
        ? adminTableCXT.Data.Description
        : "",
      Link: adminTableCXT.Data?.Link ? adminTableCXT.Data.Link : "",
      IconLink: adminTableCXT.Data?.IconLink
        ? adminTableCXT.Data?.IconLink
        : "",
      Order: adminTableCXT.Data?.Order ? adminTableCXT.Data.Order : 0,
    },
  })

  async function onSubmit(data: z.infer<typeof ResourceFormSchema>) {
    setLoading(true)

    await SubmitForm({
      APIRoute:
        faqFormCXT.getValues("ID") === "0"
          ? "resources"
          : `resources/${faqFormCXT.getValues("ID")}`,
      FormData: data,
      FormSchema: ResourceFormSchema,
      Router: r,
      ClientPath: "/admin/resources",
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
    <Form {...faqFormCXT}>
      <form
        onSubmit={faqFormCXT.handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-7xl  space-y-6"
      >
        <div className="mt-4 rounded-xl bg-white p-4 shadow-md">
          <TextInput
            form={faqFormCXT}
            options={{
              name: "Title",
              label: "Title",
            }}
          />
          <TextInput
            form={faqFormCXT}
            options={{
              name: "Description",
              label: "Description",
            }}
          />

          <TextInput
            form={faqFormCXT}
            options={{
              name: "Link",
              label: "Link",
            }}
          />
          <TextInput
            form={faqFormCXT}
            options={{
              name: "IconLink",
              label: "Icon Link",
            }}
          />
          <NumberInput
            form={faqFormCXT}
            options={{
              name: "Order",
              label: "Order",
            }}
          />
          <div className="mb-2">
            <MediaDialog />
          </div>
        </div>
        <SubmitButton loading={loading} />
      </form>
    </Form>
  )
}
