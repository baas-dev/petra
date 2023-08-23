"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import NumberInput from "@/components/BAAS/Forms/Inputs/NumberInput"
import SelectInput from "@/components/BAAS/Forms/Inputs/Select"
import { CreateNewFormSubmission } from "@/app/API/FORMS"
import { ContactFormSchema } from "@/app/contact/form"

export const ShopItemForm = z.object({
  Quantity: z.string().nonempty("Requirement for article generation"),
})
export default function ProductPageForm() {
  const r = useRouter()
  const ProductFormCXT = useForm<z.infer<typeof ShopItemForm>>({
    resolver: zodResolver(ShopItemForm),
    defaultValues: {},
  })

  async function onSubmit(data: z.infer<typeof ShopItemForm>) {
    const result = ShopItemForm.safeParse(data)

    if (!result.success) {
      // Handle the validation errors

      toast({
        title: "Errors Detected:",
        description: (
          <p>Please fix errors!</p>
          // <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          //   <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          // </pre>
        ),
      })
    }

    if (result.success) {
      let id = await CreateNewFormSubmission(data)
      toast({
        title: "Your Submission Was Successful!",
        description: (
          <div>
            <h2>Thank you!</h2>
            <p>A team member will reach out to you.</p>
          </div>
        ),
      })
      r.push("/success")
    }
  }
  return (
    <Form {...ProductFormCXT}>
      <form
        onSubmit={ProductFormCXT.handleSubmit(onSubmit)}
        className="w-full space-y-6"
      >
        <SelectInput
          form={ProductFormCXT}
          options={{
            name: "Size",
            items: [],
            label: "Size",
            placeholder: "Pick A Size",
          }}
        />
        <SelectInput
          form={ProductFormCXT}
          options={{
            name: "Color",
            items: [],
            label: "Color",
            placeholder: "Pick A Color",
          }}
        />
        <NumberInput
          form={ProductFormCXT}
          options={{
            name: "Quantity",
            label: "Quantity",
            placeholder: "0",
          }}
        />
      </form>
    </Form>
  )
}
