"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { SubmitForm } from "@/components/BAAS/Forms"
import PasswordInput from "@/components/BAAS/Forms/Inputs/PasswordInput"
import SelectInput from "@/components/BAAS/Forms/Inputs/Select"
import SwitchInput from "@/components/BAAS/Forms/Inputs/Switch"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"

import { useAdminTableContext } from "../Context/TableContext"

export const UsersFormSchema = z.object({
  Name: z.string(),
  Email: z.string(),
  Role: z.string(),
})

export default function UserManagementFormInit() {
  const r = useRouter()
  const { adminTableCXT } = useAdminTableContext()
  const [loading, setLoading] = useState(false)
  const usersFormCXT = useForm<z.infer<typeof UsersFormSchema>>({
    resolver: zodResolver(UsersFormSchema),
    defaultValues: {
      Email: adminTableCXT.Data?.Email ? adminTableCXT.Data.Email : "",
      Name: adminTableCXT.Data?.Name ? adminTableCXT.Data?.Name : "",
      Role: adminTableCXT.Data?.Role ? adminTableCXT.Data.Role : "",
    },
  })

  async function onSubmit(data: z.infer<typeof UsersFormSchema>) {
    setLoading(true)

    await SubmitForm({
      APIRoute: "auth/register",
      FormData: data,
      FormSchema: UsersFormSchema,
      Router: r,
      ClientPath: "/admin/users",
      OnSuccess: {
        Message: "Your user was saved!",
        GoToRecord: false,
      },
      OnFailure: {
        Message: "Unable to perform this action Right Now",
      },
      SubmitType: "CREATE",
    })
      .then((val) => {
        console.log(val)
        if (window !== null || undefined) {
          window.location.reload()
        }
      })
      .catch((err) => {
        setLoading(false)
      })
  }

  return (
    <Form {...usersFormCXT}>
      <form
        onSubmit={usersFormCXT.handleSubmit(onSubmit)}
        className="w-full max-w-7xl p-4 md:mt-4 space-y-6 mx-auto"
      >
        <TextInput
          form={usersFormCXT}
          options={{
            name: "Name",
            label: "Name",
          }}
        />
        <TextInput
          form={usersFormCXT}
          options={{
            name: "Email",
            label: "Email",
          }}
        />
        <SelectInput
          form={usersFormCXT}
          options={{
            name: "Role",
            label: "Role",
            items: [
              {
                value: "editor",
                label: "editor",
              },
              {
                value: "admin",
                label: "admin",
              },
            ],
          }}
        />

        {/* <Status form={usersFormCXT} /> */}

        <Button type="submit">
          {adminTableCXT.Data ? "UPDATE" : "CREATE"} changes
        </Button>
      </form>
    </Form>
  )
}
