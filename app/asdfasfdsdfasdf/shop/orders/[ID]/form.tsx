"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { GetFormContext, SubmitForm } from "@/components/BAAS/Forms"
import NumberInput from "@/components/BAAS/Forms/Inputs/NumberInput"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import { FormConfig } from "@/components/BAAS/Forms/Types"

export const AdminProductSchema = z.object({
  ID: z.string(),
  Name: z.string().min(2, "Please complete first name"),
  Description: z.string().min(2, "Please complete second name"),
  Price: z.number(),
  Image: z.string().url("Needs to be a complete URL"),
})

export default function ProductFullForm(props: {
  data: z.infer<typeof AdminProductSchema>
}) {
  const r = useRouter()

  let { ID, Name, Description, Price, Image } = props.data

  const productFormCXT = useForm<z.infer<typeof AdminProductSchema>>({
    resolver: zodResolver(AdminProductSchema),
    defaultValues: {
      ID: ID,
      Name: Name,
      Description: Description,
      Price: Price,
      Image: Image,
    },
  })

  async function onSubmit(data: z.infer<typeof AdminProductSchema>) {
    await SubmitForm({
      APIRoute: `products/${props.data.ID}`,
      FormData: data,
      FormSchema: AdminProductSchema,
      SubmitType: "UPDATE",
      Router: r,
      ClientPath: "/admin/shop/products",
      OnSuccess: {
        Message: "Your product Has Been Updated!",
        GoToRecord: true,
      },
      OnFailure: {
        Message: "Unable to Create This Right Now",
      },
    })
  }

  return (
    <Form {...productFormCXT}>
      <form
        onSubmit={productFormCXT.handleSubmit(onSubmit)}
        className="w-full space-y-6"
      >
        <TextInput
          form={productFormCXT}
          options={{
            name: "Name",
            label: "Name",
          }}
        />
        <TextInput
          form={productFormCXT}
          options={{
            name: "Description",
            label: "Description",
          }}
        />
        <NumberInput
          form={productFormCXT}
          options={{
            name: "Price",
            label: "Price",
          }}
        />
        <TextInput
          form={productFormCXT}
          options={{
            name: "Image",
            label: "Main Image URL",
          }}
        />
        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  )
}
