"use client"

import SelectInput from "@/components/BAAS/Forms/Inputs/Select"
import SwitchInput from "@/components/BAAS/Forms/Inputs/Switch"

export default function Status({
  form,
  options,
}: {
  form
  options: {
    name: string
  }
}) {
  return (
    <div className=" rounded-xl w-full space-y-2">
      <SwitchInput
        form={form}
        options={{
          name: options.name,
          description: "Allow this to be publicly viewable",
          label: "Publish?",
        }}
      />
    </div>
  )
}
