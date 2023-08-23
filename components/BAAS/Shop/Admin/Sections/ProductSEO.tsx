"use client"

import TextInput from "@/components/BAAS/Forms/Inputs/Text"

export default function ProductSEO({ ProductForm }) {
  return (
    <div className="container bg-white rounded-xl w-full py-8 mb-8">
      <TextInput
        form={ProductForm}
        options={{
          name: "slug",
          label: "URL Address",
          placeholder: "product-name",
        }}
      />
      <TextInput
        form={ProductForm}
        options={{
          name: "name",
          label: "Name",
          placeholder: "Name of the product...",
        }}
      />
      <TextInput
        form={ProductForm}
        options={{
          name: "name",
          label: "Name",
          placeholder: "Name of the product...",
        }}
      />
      <TextInput
        form={ProductForm}
        options={{
          name: "name",
          label: "Name",
          placeholder: "Name of the product...",
        }}
      />
    </div>
  )
}
