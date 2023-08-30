"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { GetFormContext, SubmitForm } from "@/components/BAAS/Forms"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import { FormConfig } from "@/components/BAAS/Forms/Types"
import AttributeEditing from "@/components/BAAS/Shop/Admin/Sections/AttributeEditing"
import BACKEND from "@/app/API"

import { Attribute, AttributeChoices } from "./[ID]/page"

export const productsFormSchema = z.object({
  Name: z.string().min(2, "Please complete first name"),
  AttributesChosen: z.array(z.string()),
})

export default function ProductInitForm(props: { data: Attribute[] }) {
  const productsFormCXT = useForm<z.infer<typeof productsFormSchema>>({
    resolver: zodResolver(productsFormSchema),
    defaultValues: {
      AttributesChosen: [],
    },
  })

  const r = useRouter()

  async function onSubmit(data: z.infer<typeof productsFormSchema>) {
    console.log(data)
    await SubmitForm({
      APIRoute: "products",
      FormData: data,
      FormSchema: productsFormSchema,
      Router: r,
      ClientPath: "/admin/shop/products",
      OnSuccess: {
        Message: "Your Product Has Been Created",
        GoToRecord: false,
      },
      OnFailure: {
        Message: "Unable to Create This Right Now",
      },
      SubmitType: "CREATE",
    })
  }

  return (
    <Form {...productsFormCXT}>
      <form
        onSubmit={productsFormCXT.handleSubmit(onSubmit)}
        className="w-full space-y-6"
      >
        <TextInput
          form={productsFormCXT}
          options={{
            name: "Name",
            label: "Name of Product",
          }}
        />
        <AttributeEditing Attributes={props.data} formCxt={productsFormCXT} />

        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  )
}
