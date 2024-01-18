import CurrencyInput from "react-currency-input-field"
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import TextInput from "./Text"
import States from './states.json'
import SelectInput from "./Select"
import { Button } from "@/components/ui/button"


function states() {
  let res: {label:string,value:string}[] = []
  States.states.forEach((item,i) => {
    res.push({
      label: item,
      value: item
    })
  })

  return res
}

let stateChoices = states()


export default function BillingInput({ form, useSameLocationAsBilling }) {
 
  if(useSameLocationAsBilling && form.getValues("ShippingInformation") !== form.getValues("BillingInformation")){
    console.log("setting")
    form.setValue(
      "BillingInformation",
      form.getValues("ShippingInformation")
    )
  }
  return (
    <>
      <div className={`flex flex-wrap my-8 ${useSameLocationAsBilling ? "hidden":""} bg-white rounded-xl p-4 w-full`}>
        <div className="w-full px-4 text-left">
          <Label className="text-md text-left text-primary underline ">
            Location Information
          </Label>
        </div>
        <div className="w-full px-4  text-left">
          <div className="mt-4 flex w-full gap-2">
            <div className="flex w-full flex-wrap">
              <Label htmlFor="username" className="mb-2  w-full ">
                Street Address
              </Label>
              <TextInput form={...form} options={{
                name: "BillingInformation.Address",
                value:  useSameLocationAsBilling == true ? form.getValues("ShippingInformation.Address") : undefined
              }} />
            </div>
            <div className="flex w-full flex-wrap">
              <Label htmlFor="username" className="mb-2 text-right">
                Suite/Apt # (optional)
              </Label>
              <TextInput form={...form} options={{
                name: "BillingInformation.SuiteNumber",
                value:  useSameLocationAsBilling ? form.getValues("ShippingInformation.SuiteNumber"): undefined

              }} />
            </div>
          </div>
        </div>
        <div className="flex  w-full gap-2 p-4">
          <div className="flex w-full flex-wrap">
            <Label htmlFor="username" className="mb-2 w-full text-left ">
              City
            </Label>
            <TextInput form={...form} options={{
                name: "BillingInformation.City",
                value:  useSameLocationAsBilling ? form.getValues("ShippingInformation.City"): undefined

              }} />
          </div>
          <div className="flex w-full flex-wrap">
            <Label htmlFor="username" className="mb-2 text-right">
              State
            </Label>
           <SelectInput form={form} options={{
            name: "BillingInformation.State",
           
            items: [...stateChoices],
            value:  useSameLocationAsBilling ? form.getValues("ShippingInformation.State") : undefined

          }} />
          </div>
          <div className="flex w-full flex-wrap">
            <Label htmlFor="username" className="mb-2 text-right">
              Zip 
            </Label>
            <TextInput form={...form} options={{
                name: "BillingInformation.Zip",
                value:  useSameLocationAsBilling ? form.getValues("ShippingInformation.Zip"): undefined

              }} />
          </div>
        </div>
      </div>

    </>
  )
}
