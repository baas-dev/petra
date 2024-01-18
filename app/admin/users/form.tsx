"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SubmitForm } from "@/components/BAAS/Forms"
import FormHeader from "@/components/BAAS/Forms/Components/FormHeader"
import PasswordInput from "@/components/BAAS/Forms/Inputs/PasswordInput"
import SelectInput from "@/components/BAAS/Forms/Inputs/Select"
import SwitchInput from "@/components/BAAS/Forms/Inputs/Switch"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"

import { useAdminTableContext } from "../Context/TableContext"

export const UsersFormSchema = z.object({
  ID: z.string().optional(),

  Role: z.string(),
  Enabled: z.boolean(),
})

export default function UserManagementForm() {
  const r = useRouter()
  const { adminTableCXT } = useAdminTableContext()
  const [loading, setLoading] = useState(false)
  const usersFormCXT = useForm<z.infer<typeof UsersFormSchema>>({
    resolver: zodResolver(UsersFormSchema),
    defaultValues: {
      ID: adminTableCXT.Data?.ID ? adminTableCXT.Data.ID : "",
      Enabled: adminTableCXT.Data?.Email ? adminTableCXT.Data.Enabled : "",
      Role: adminTableCXT.Data?.Role ? adminTableCXT.Data.Role : "editor",
    },
  })

  async function onSubmit(data: z.infer<typeof UsersFormSchema>) {
    setLoading(true)

    await SubmitForm({
      APIRoute:
        usersFormCXT.getValues("ID") === undefined
          ? "users"
          : `users/${usersFormCXT.getValues("ID")}/access`,
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
      SubmitType: adminTableCXT.Data ? "UPDATE" : "CREATE",
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

  console.log(adminTableCXT.Data)
  return (
    <div className="mx-auto mt-4 w-full">
      <Form {...usersFormCXT}>
        <form
          onSubmit={usersFormCXT.handleSubmit(onSubmit)}
          className="w-full space-y-6 "
        >
          <Tabs defaultValue="role" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="role">Role</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="role" className="w-full">
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
                      value: "manager",
                      label: "manager",
                    },
                    {
                      value: "admin",
                      label: "admin",
                    },
                  ],
                }}
              />
            </TabsContent>
            <TabsContent value="password">
              <PasswordInput
                form={usersFormCXT}
                options={{
                  name: "Password",
                  label: "Password",
                  forReset: true,
                }}
              />
            </TabsContent>
          </Tabs>

          {/* <Status form={usersFormCXT} /> */}

          <Button type="submit">
            {adminTableCXT.Data ? "UPDATE" : "CREATE"} changes
          </Button>
        </form>
      </Form>
    </div>
  )
}
