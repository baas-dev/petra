"use client"

import { FormLabel } from "@/components/ui/form"
import SelectInput from "@/components/BAAS/Forms/Inputs/Select"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"

export default function ArticleDescriptionInput({ ProductForm }) {
  return (
    <>
      <div className="mb-4  w-full rounded-xl bg-white p-4">
        <FormLabel className="text-base">Information</FormLabel>

        <div className="mt-2 w-full">
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
    </>
  )
}
