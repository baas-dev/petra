"use client"

import SelectInput from "@/components/BAAS/Forms/Inputs/Select"
import SwitchInput from "@/components/BAAS/Forms/Inputs/Switch"

export default function Status({ form }) {
  return (
    <div className=" rounded-xl w-full space-y-2">
      {/* <SelectInput
        form={form}
        options={{
          name: "Status",
          description: "Show as a result publicly",
          label: "Status",
          placeholder: "Are you ready to publish?",
          items: [
            {
              label: "Draft",
              value: "draft",
            },
            {
              label: "Needs Review",
              value: "review",
            },
            {
              label: "Publish",
              value: "publish",
            },
          ],
        }}
      /> */}
      <SwitchInput
        form={form}
        options={{
          name: "Visible",
          description: "Allow this to be publicly viewable",
          label: "Visible?",
        }}
      />
    </div>
  )
}
