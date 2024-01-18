import { useState } from "react"
import CurrencyInput from "react-currency-input-field"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FormField, FormItem } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import LocationInput from "@/components/BAAS/Forms/Inputs/LocationInput"

export default function AddressQuestion(props: {
  form: any
  showForm
  handleSetShowForm
}) {
  return (
    <>
      <div className="w-full    text-left">
        <LocationInput form={props.form} Name={"AddressInformation"} />
      </div>
      <div className="flex w-full flex-col bg-white rounded-xl py-4 px-4 ">
        <Label className="text-md mb-2 text-left text-primary underline">
          Estimated Value of Desired Property
        </Label>
        <FormField
          control={props.form.control}
          name="Price"
          render={({ field }) => (
            <>
              <FormItem>
                <CurrencyInput
                  // id="input-example"
                  // name="input-name"
                  // placeholder="Please enter a number"
                  defaultValue={0}
                  name={field.name}
                  // value={parseInt(field.value)}
                  decimalsLimit={2}
                  className="w-full max-w-sm border float-left border-gray-400 border-opacity-25"
                  prefix="$"
                  value={field.value}
                  onValueChange={(value, name) => {
                    props.form.setValue("Price", value)
                  }}
                />
              </FormItem>
            </>
          )}
        />
      </div>
    </>
  )
}
