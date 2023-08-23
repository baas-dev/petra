"use client"

import SelectInput from "@/components/BAAS/Forms/Inputs/Select"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"

export default function ProductDetails({ ProductForm }) {
  return (
    <div className="container flex space-x-2 bg-white rounded-xl w-full py-4 mb-8">
      <div className="w-full">
        <TextInput
          form={ProductForm}
          options={{
            name: "name",
            label: "Name",
            placeholder: "Name of the product...",
          }}
        />
        <SelectInput
          form={ProductForm}
          options={{
            name: "category",
            label: "Category",
            description: "Categorization of this product",
            placeholder: "Choose a product category",
            items: [
              {
                label: "Test",
                value: "value",
              },
            ],
          }}
        />
      </div>
      {/* Category */}
      {/* Description */}
    </div>
  )
}
