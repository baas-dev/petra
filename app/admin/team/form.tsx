"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { SubmitForm } from "@/components/BAAS/Forms"
import SubmitButton from "@/components/BAAS/Forms/Buttons/submit"
import ImageSingleUpload from "@/components/BAAS/Forms/Inputs/ImageSingleUpload"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import TextAreaInput from "@/components/BAAS/Forms/Inputs/TextArea"
import RichTextEditor from "@/components/BAAS/RichTextEditor"
import Status from "@/components/BAAS/Shop/Admin/Sections/Status"

import { useAdminTableContext } from "../Context/TableContext"

export const TeamFormSchema = z.object({
  ID: z.string().optional(),
  Name: z.string().min(3, "Required"),

  Image: z.string().optional(),
  RNumber: z.string().optional(),
  Biography: z.string().optional(),
  Phone: z.string().optional(),
  Email: z.string().optional(),
  Title: z.string().optional(),
  Published: z.boolean().optional(),
})

export default function TeamForm(props: {
  data?: z.infer<typeof TeamFormSchema>
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
        Name: adminTableCXT.Data?.Name ? adminTableCXT.Data.Name : "",
        RNumber: adminTableCXT.Data?.RNumber ? adminTableCXT.Data.RNumber : "",
        Biography: adminTableCXT.Data?.Biography
          ? adminTableCXT.Data.Biography
          : "",
        Phone: adminTableCXT.Data?.Phone ? adminTableCXT.Data.Phone : "",
        Email: adminTableCXT.Data?.Email ? adminTableCXT.Data.Email : "",
        Image: adminTableCXT.Data?.Image ? adminTableCXT.Data.Image : "",
        Title: adminTableCXT.Data?.Title ? adminTableCXT.Data.Title : "",
        Published: adminTableCXT.Data?.Published
          ? adminTableCXT.Data.Published
          : false,
      }
    }
  }

  const teamFormCXT = useForm<z.infer<typeof TeamFormSchema>>({
    resolver: zodResolver(TeamFormSchema),
    defaultValues: SetDefaultValues(),
  })

  const r = useRouter()

  async function onSubmit(data: z.infer<typeof TeamFormSchema>) {
    setLoading(true)

    await SubmitForm({
      APIRoute:
        teamFormCXT.getValues("ID") === undefined
          ? "team"
          : `team/${teamFormCXT.getValues("ID")}`,
      FormData: data,
      FormSchema: TeamFormSchema,
      Router: r,
      ClientPath: "/admin/team",
      OnSuccess: {
        Message: "Your Team Has Been Created",
        GoToRecord: false,
      },
      OnFailure: {
        Message: "Unable to Create This Right Now",
      },
      SubmitType:
        teamFormCXT.getValues("ID") === undefined ? "CREATE" : "UPDATE",
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
    <Form {...teamFormCXT}>
      <form
        onSubmit={teamFormCXT.handleSubmit(onSubmit)}
        className="w-full space-y-6 max-w-7xl mx-auto h-screen overflow-y-scroll py-8 pb-8"
      >
        <div className="bg-white  rounded-xl border shadow-lg  flex">
          <div className="w-1/5">
            <ImageSingleUpload
              form={teamFormCXT}
              options={{
                Name: "Image",
              }}
            />
          </div>
          <div className="w-4/5 my-auto pr-4">
            <Status
              form={teamFormCXT}
              options={{
                name: "Published",
              }}
            />

            <div className="flex gap-1">
              <TextInput
                form={teamFormCXT}
                options={{
                  name: "Name",
                  label: "Name",
                }}
              />
              <TextInput
                form={teamFormCXT}
                options={{
                  name: "RNumber",
                  label: "RMLO Number",
                }}
              />
              <TextInput
                form={teamFormCXT}
                options={{
                  name: "Title",
                  label: "Position",
                }}
              />
            </div>
            <div className="flex gap-1">
              <TextInput
                form={teamFormCXT}
                options={{
                  name: "Phone",
                  label: "Phone #",
                }}
              />
              <TextInput
                form={teamFormCXT}
                options={{
                  name: "Email",
                  label: "Email",
                }}
              />
            </div>
          </div>
        </div>

        <RichTextEditor
          form={teamFormCXT}
          options={{
            name: "Biography",
          }}
        />

        <SubmitButton loading={loading} />
      </form>
    </Form>
  )
}
