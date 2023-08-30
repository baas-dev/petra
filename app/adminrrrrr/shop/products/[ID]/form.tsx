"use client"

import { Attributes, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Plus } from "lucide-react"
import { useForm } from "react-hook-form"
import { number, z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SubmitForm } from "@/components/BAAS/Forms"
import MultiSelectInput from "@/components/BAAS/Forms/Inputs/MultiSelect"
import NumberInput from "@/components/BAAS/Forms/Inputs/NumberInput"
import SelectInput from "@/components/BAAS/Forms/Inputs/Select"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import RichTextEditor from "@/components/BAAS/RichTextEditor"
import VariantTable from "@/components/BAAS/Shop/Admin/Sections/VariantTable"
import BACKEND from "@/app/API"

import { Attribute } from "./page"

const api = new BACKEND()

export const AdminProductSchema = z.object({
  ID: z.string(),
  Name: z.string().min(2, "Please complete first name"),
  Description: z.string().min(2, "Please complete second name"),
  AttributesChosen: z.array(z.any()),
})

export const ProductVariantSchema = z.object({
  SecondaryImages: z.array(
    z.object({
      Image: z.string(),
    })
  ),
  Image: z.string().url("Needs to be a complete URL"),
  Price: z.number(),
  AttributeConfig: z.array(
    z.object({
      ID: z.string(),
      Name: z.string(),
      Value: z.string(),
      Label: z.string(),
    })
  ),
})

export default function ProductFullForm(props: {
  data: z.infer<typeof AdminProductSchema>
  // Attributes: Attribute[]
}) {
  console.log(props.data)
  const r = useRouter()

  let { ID, Name, Description } = props.data

  const productFormCXT = useForm<z.infer<typeof AdminProductSchema>>({
    resolver: zodResolver(AdminProductSchema),
    defaultValues: {
      ID: ID,
      Name: Name,
      Description: Description,
      // Price: Price,
      // Image: Image,
      // SecondaryImages: SecondaryImages ? SecondaryImages : [],
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
  productFormCXT.watch()
  // attributeFormCXT.watch()

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
        <SelectInput
          form={productFormCXT}
          options={{
            name: "category",
            label: "Category",
            description: "Categorization of this product",
            placeholder: "Choose a product category",
            items: [],
          }}
        />
        <RichTextEditor
          form={productFormCXT}
          options={{
            name: "Content",
          }}
        />

        <div className="w-full h-96 bg-white rounded-xl shadow-xl">
          <VariantTable data={props.data} />
        </div>
        {/* <NumberInput
          form={productFormCXT}
          options={{
            name: "Price",
            label: "Price",
          }}
        /> */}
        {/* <div className="p-4 bg-white rounded-xl">
          <TextInput
            form={productFormCXT}
            options={{
              name: "Image",
              label: "Main Image URL",
            }}
          />
          <div>
            <Button
              onClick={(e) => {
                e.preventDefault()
                productFormCXT.setValue("SecondaryImages", [
                  ...productFormCXT.getValues("SecondaryImages"),
                  {
                    Image: "",
                  },
                ])
              }}
              variant={"outline"}
              className="bg-accent"
            >
              <Plus /> Add Secondary Image
            </Button>
          </div>
        </div> */}

        {/* {productFormCXT.getValues("SecondaryImages") &&
          productFormCXT.getValues("SecondaryImages").map((item, i) => (
            <div>
              <TextInput
                key={i}
                form={productFormCXT}
                options={{
                  name: `SecondaryImages[${i}].Image`,
                  label: "Secondary Image URL",
                }}
              />
            </div>
          ))} */}

        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  )
}
