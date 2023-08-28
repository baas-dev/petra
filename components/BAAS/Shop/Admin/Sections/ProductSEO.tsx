"use client"

import SelectInput from "@/components/BAAS/Forms/Inputs/Select"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import TextAreaInput from "@/components/BAAS/Forms/Inputs/TextArea"

export default function SEOInformation({ form, items }) {
  return (
    <div className="container bg-white rounded-xl w-full py-8 mb-8">
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
          name: "category",
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
          placeholder: "Describe your product...",
        }}
      />
    </div>
  )
}
