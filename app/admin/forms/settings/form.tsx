"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { SubmitForm } from "@/components/BAAS/Forms"
import SubmitButton from "@/components/BAAS/Forms/Buttons/submit"
import SwitchInput from "@/components/BAAS/Forms/Inputs/Switch"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import { useTableContext } from "@/components/BAAS/Table/Context"

import { useAdminTableContext } from "../../Context/TableContext"

export const FormSettingsFormSchema = z.object({
  ID: z.string().optional(),
  OnPrequalificationSubmit: z.boolean().optional(),
  OnContactSubmit: z.boolean().optional(),
  Email: z.string().email(),
})

export default function FormSettingsForm(props: {
  data?: z.infer<typeof FormSettingsFormSchema>
}) {
  const { adminTableCXT } = useAdminTableContext()
  const [loading, setLoading] = useState(false)

  function SetDefaultValues() {
    if (adminTableCXT.Data == null) {
      return {}
    }

    if (!adminTableCXT.Data !== null) {
      return {
        ID: adminTableCXT.Data?.ID ? adminTableCXT.Data.ID : "",
        Email: adminTableCXT.Data?.Email ? adminTableCXT.Data.Email : "",
        OnContactSubmit: adminTableCXT.Data?.OnContactSubmit
          ? adminTableCXT.Data.OnContactSubmit
          : false,
        OnPrequalificationSubmit: adminTableCXT.Data?.OnPrequalificationSubmit
          ? adminTableCXT.Data.OnPrequalificationSubmit
          : false,
      }
    }
  }
  const r = useRouter()

  const formSettingCXT = useForm<z.infer<typeof FormSettingsFormSchema>>({
    resolver: zodResolver(FormSettingsFormSchema),
    defaultValues: SetDefaultValues(),
  })

  async function onSubmit(data: z.infer<typeof FormSettingsFormSchema>) {
    setLoading(true)

    await SubmitForm({
      APIRoute:
        formSettingCXT.getValues("ID") === undefined
          ? "form-settings"
          : `form-settings/${formSettingCXT.getValues("ID")}`,
      FormData: data,
      FormSchema: FormSettingsFormSchema,
      Router: r,
      ClientPath: "/admin/form-settings",
      OnSuccess: {
        Message: "Your Item was successfully saved!",
        GoToRecord: false,
      },
      OnFailure: {
        Message: "Unable to Create This Right Now",
      },
      SubmitType:
        formSettingCXT.getValues("ID") === undefined ? "CREATE" : "UPDATE",
    })
      .then((val) => {
        console.log(val)
        setLoading(false)
        if (window !== null || undefined) {
          window.location.reload()
        }
      })
      .catch((err) => {
        setLoading(false)
      })
  }

  return (
    <Form {...formSettingCXT}>
      <form
        onSubmit={formSettingCXT.handleSubmit(onSubmit)}
        className="w-full space-y-6 max-w-7xl mx-auto"
      >
        <div className="bg-white rounded-xl shadow-md p-4 ">
          <TextInput
            form={formSettingCXT}
            options={{
              name: "Email",
              label: "Email",
            }}
          />
          <SwitchInput
            form={formSettingCXT}
            options={{
              name: "OnContactSubmit",
              label: "Contact Form",
              description:
                "Toggle if you would like to send a notification whenever a 'Contact Us' form is completed",
            }}
          />

          <SwitchInput
            form={formSettingCXT}
            options={{
              name: "OnPrequalificationSubmit",
              label: "Prequalification Form",
              description:
                "Toggle if you would like to send a notification whenever a 'Prequalification' form is completed",
            }}
          />
        </div>
        <SubmitButton loading={loading} />
      </form>
    </Form>
  )
}
