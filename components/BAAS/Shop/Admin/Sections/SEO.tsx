"use client"

import { useEffect, useState } from "react"

import SelectInput from "@/components/BAAS/Forms/Inputs/Select"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import TextAreaInput from "@/components/BAAS/Forms/Inputs/TextArea"

interface SEOConfig {
  Description?: {
    Placeholder?: string
  }
}

export default function SEOInformation({
  form,
  items,
  options,
}: {
  form
  items
  options: SEOConfig
}) {
  return (
    <div className=" rounded-xl w-full">
      <TextInput
        form={form}
        options={{
          name: "Title",
          label: "Title",
          placeholder: "What the product is referred to as...",
        }}
      />
      <SelectInput
        form={form}
        options={{
          name: "CategoryID",
          label: "Category",
          description: "Categorization of this product",
          placeholder: "Choose a product category",
          items: items,
        }}
      />
      <TextAreaInput
        form={form}
        options={{
          name: "Description",
          label: "Description",
          placeholder:
            options.Description && options.Description.Placeholder
              ? options.Description?.Placeholder
              : "",
        }}
      />
    </div>
  )
}
