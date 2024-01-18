"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { SubmitForm } from "@/components/BAAS/Forms"
import ImageSingleUpload from "@/components/BAAS/Forms/Inputs/ImageSingleUpload"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import TextAreaInput from "@/components/BAAS/Forms/Inputs/TextArea"

export const TeamFormSchema = z.object({
  ID: z.string().optional(),
  Name: z.string().min(2),
  Image: z.string().min(2).optional(),
  RNumber: z.string().min(2).optional(),
  Biography: z.string().min(2).optional(),
  Phone: z.string().optional(),
  Email: z.string().optional(),
})

export default function TeamForm(props: {
  data?: z.infer<typeof TeamFormSchema>
}) {
  const testimonialFormCXT = useForm<z.infer<typeof TeamFormSchema>>({
    resolver: zodResolver(TeamFormSchema),
    defaultValues: {
      ID: props.data?.ID ? props.data.ID : "",
      Name: props.data?.Name ? props.data.Name : "",
      RNumber: props.data?.RNumber ? props.data.RNumber : "",
      Biography: props.data?.Biography ? props.data.Biography : "",
      Phone: props.data?.Phone ? props.data.Phone : "",
      Email: props.data?.Email ? props.data.Email : "",
      Image: props.data?.Image ? props.data.Image : "",
    },
  })

  const r = useRouter()

  async function onSubmit(data: z.infer<typeof TeamFormSchema>) {
    await SubmitForm({
      APIRoute:
        testimonialFormCXT.getValues("ID") === "0"
          ? "team"
          : `team/${testimonialFormCXT.getValues("ID")}`,
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
      SubmitType: props.data ? "UPDATE" : "CREATE",
    })
  }

  return (
    <Form {...testimonialFormCXT}>
      <form
        onSubmit={testimonialFormCXT.handleSubmit(onSubmit)}
        className="w-full space-y-6"
      >
        <div className="flex w-6xl">
          <div className="w-full">
            {/* <ImageSingleUpload form={testimonialFormCXT} options={{}} /> */}
          </div>
          <div className="w-full">
            <TextInput
              form={testimonialFormCXT}
              options={{
                name: "Name",
                label: "Name",
              }}
            />
            <TextInput
              form={testimonialFormCXT}
              options={{
                name: "RNumber",
                label: "RMLO Number",
              }}
            />
            <TextInput
              form={testimonialFormCXT}
              options={{
                name: "Phone",
                label: "Phone #",
              }}
            />
            <TextInput
              form={testimonialFormCXT}
              options={{
                name: "Email",
                label: "Email",
              }}
            />
          </div>
        </div>

        <TextAreaInput
          form={testimonialFormCXT}
          options={{
            name: "Biography",
            label: "Biography",
          }}
        />

        <Button type="submit">
          {props.data ? "UPDATE" : "CREATE"} changes
        </Button>
      </form>
    </Form>
  )
}
