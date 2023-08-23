import CurrencyInput from "react-currency-input-field"
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import TextInput from "./Text"
import States from './states.json'
import SelectInput from "./Select"


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

export default function LocationInput({ form }) {
  
  return (
    <>
      <div className="flex flex-wrap my-8 bg-white rounded-xl p-4 w-full">
        <div className="w-full px-4 text-left">
          <Label className="text-md text-left text-primary underline ">
            Location Information
          </Label>
        </div>
        <div className="w-full px-4  text-left">
          <div className="mt-4 flex w-full gap-2">
            <div className="flex w-full flex-wrap">
             
              <TextInput form={...form} options={{
                name: "ShippingInformation.Address",
                label: "Street Address"
              }} />
            </div>
            <div className="flex w-full flex-wrap">
          
              <TextInput form={...form} options={{
                name: "ShippingInformation.SuiteNumber",
                label: "Suite Number (Optional)"

              }} />
            </div>
          </div>
        </div>
        <div className="flex  w-full gap-2 p-4">
          <div className="flex w-full flex-wrap">
           
            <TextInput form={...form} options={{
                name: "ShippingInformation.City",
                label: "City"

              }} />
          </div>
          <div className="flex w-full flex-wrap">
          
           <SelectInput form={form} options={{
            name: "ShippingInformation.State",
            label: "State",
            items: [...stateChoices]
          }} />
          </div>
          <div className="flex w-full flex-wrap">
           
            <TextInput form={...form} options={{
                name: "ShippingInformation.Zip",
                label: "Zip",

              }} />
          </div>
        </div>
      </div>
    </>
  )
}
