import { Label } from "@/components/ui/label"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import { DataTable } from "@/components/BAAS/Table/DataTable"

export default function ProductPricing({ ProductForm }) {
  return (
    <div className="container bg-white rounded-xl w-full mb-8">
      <div>
        <div>
          <Label className="text-xl pb-2">Price Settings</Label>
          <TextInput
            form={ProductForm}
            options={{
              name: "basePrice",
              label: "Base Price",
              placeholder: "14.99",
            }}
          />
        </div>
        <div>
          <Label className=" pb-2">Sale Configuration:</Label>
        </div>
        <DataTable columns={[]} data={[]} routePath={""} />
      </div>
    </div>
  )
}
