import MultiSelectInput from "@/components/BAAS/Forms/Inputs/MultiSelect"
import BACKEND from "@/app/API"
import {
  Attribute,
  AttributeChoices,
} from "@/app/admin/shop/products/[ID]/page"

interface AttributeEditing {
  Attributes: Attribute[]
  formCxt: any
}

export default function AttributeEditing(props: AttributeEditing) {
  props.formCxt.watch()

  function AttributeClass(): Array<{ id: string; label: string }> {
    let options: any = []

    if (props.Attributes && props.Attributes.length > 0) {
      props.Attributes.forEach((item, i) => {
        options.push({
          id: item.ID,
          label: item.Name,
        })
      })
    }

    return options
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-xl p-4 flex">
        <div className="w-full">
          <MultiSelectInput
            form={props.formCxt}
            options={{
              name: "AttributesChosen",
              label: "Product Attributes Enabled",
              description:
                "These will determine what is needed for the base product and variants",
              placeholder: "Choose a product category",
              items: AttributeClass(),
            }}
          />

          {AttributeClass().length == 0 ? (
            <>No Attributes Have Been Created Yet.</>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  )
}
