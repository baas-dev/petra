"use client"

import { Attributes, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { AccordionContent, AccordionItem } from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"
import { useForm } from "react-hook-form"
import { number, z } from "zod"

import { Accordion, AccordionTrigger } from "@/components/ui/accordion"
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
import SubmitButton from "@/components/BAAS/Forms/Buttons/submit"
import MultiSelectInput from "@/components/BAAS/Forms/Inputs/MultiSelect"
import NumberInput from "@/components/BAAS/Forms/Inputs/NumberInput"
import SelectInput from "@/components/BAAS/Forms/Inputs/Select"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import RichTextEditor from "@/components/BAAS/RichTextEditor"
import VariantEditor from "@/components/BAAS/Shop/Admin/Sections/VariantEditor"
import BACKEND from "@/app/API"

const api = new BACKEND()

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
  ID: z.string(),
  Visible: z.boolean(),
  Inventory: z.number(),
  BaseProductID: z.string(),
})

export const AdminProductSchema = z.object({
  ID: z.string(),
  Name: z.string().min(2, "Please complete first name"),
  Description: z.string().min(2, "Please complete second name"),
  AttributesChosen: z.array(z.any()),
  Variants: z.array(ProductVariantSchema),
})

export default function ProductFullForm(props: {
  data: z.infer<typeof AdminProductSchema>
  extraData: any
}) {
  const r = useRouter()

  let { ID, Name, Description, Variants } = props.data

  const productFormCXT = useForm<z.infer<typeof AdminProductSchema>>({
    resolver: zodResolver(AdminProductSchema),
    defaultValues: {
      ID: ID,
      Name: Name,
      Description: Description,
      Variants: Variants,
    },
  })

  console.log(props.data)
  async function onSubmit(data: z.infer<typeof AdminProductSchema>) {
    console.log(data)
    // await SubmitForm({
    //   APIRoute: `products/${props.data.ID}`,
    //   FormData: data,
    //   FormSchema: AdminProductSchema,
    //   SubmitType: "UPDATE",
    //   Router: r,
    //   ClientPath: "/admin/shop/products",
    //   OnSuccess: {
    //     Message: "Your product Has Been Updated!",
    //     GoToRecord: true,
    //   },
    //   OnFailure: {
    //     Message: "Unable to Create This Right Now",
    //   },
    // })
  }
  productFormCXT.watch()

  return (
    <>
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
          <VariantsList
            form={productFormCXT}
            attributeOptions={props.extraData}
          />
          <SubmitButton loading={false} />
        </form>
      </Form>
      <div className="w-full h-full bg-white rounded-xl shadow-xl"></div>
      {/* <Button type="submit">Save changes</Button> */}
    </>
  )
}

function VariantsList(props: { attributeOptions; form }) {
  let vals = props.form.getValues("Variants")
  return (
    <Accordion type="single" collapsible className="w-full">
      {vals &&
        vals.length > 0 &&
        vals.map((item, i) => (
          <AccordionItem
            value={`item-${i}`}
            className="bg-white shadow-xl p-4 border"
          >
            <AccordionTrigger className="border-b-2">
              <div className="w-full text-xl text-left ">
                {i == 0 ? " Base Item" : `Variant #${i + 1}`}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <VariantEditor
                attributeOptions={props.attributeOptions}
                form={props.form}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  )
}
