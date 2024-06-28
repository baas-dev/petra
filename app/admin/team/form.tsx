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

import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"

import NumberInput from "@/components/BAAS/Forms/Inputs/NumberInput"
import Status from "@/components/BAAS/Forms/Status"

import { useAdminTableContext } from "../Context/TableContext"

export const TeamFormSchema = z.object({
  ID: z.string().optional(),
  Name: z.string().min(3, "Required"),
  Order: z.number(),
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
  const [value, setValue] = useState<string>()
  function SetDefaultValues() {
    if (adminTableCXT.Data == null) {
      return
    }

    if (!adminTableCXT.Data !== null) {
      return {
        ID: adminTableCXT.Data?.ID ? adminTableCXT.Data.ID : "",
        Name: adminTableCXT.Data?.Name ? adminTableCXT.Data.Name : "",
        Order: adminTableCXT.Data?.Order ? adminTableCXT.Data.Order : 0,

        RNumber: adminTableCXT.Data?.RNumber ? adminTableCXT.Data.RNumber : 0,
        Biography: adminTableCXT.Data?.Biography
          ? adminTableCXT.Data.Biography
          : "",
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
    data.Phone = value
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
        className="mx-auto h-4/5 w-full max-w-7xl space-y-6 overflow-y-scroll py-8"
      >
        <div className="rounded-xl  border bg-white p-4 shadow-lg  ">
          <ImageSingleUpload
            form={teamFormCXT}
            options={{
              Name: "Image",
              Label: "Image URL",
            }}
          />
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
            <NumberInput
              form={teamFormCXT}
              options={{
                name: "Order",
                label: "Order",
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
            {/* <TextInput
                form={teamFormCXT}
                options={{
                  name: "Phone",
                  label: "Phone #",
                }}
              /> */}
            <PhoneInput
              placeholder="Enter phone number"
              value={
                adminTableCXT.Data?.Phone ? adminTableCXT.Data.Phone : null
              }
              onChange={(e) => setValue(e)}
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
