import CurrencyInput from "react-currency-input-field"
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
              <Label htmlFor="username" className="mb-2  w-full ">
                Street Address
              </Label>
              <Input
                id="username"
                placeholder="123 Example St."
                className="w-full rounded-md bg-white"
              />
            </div>
            <div className="flex w-full flex-wrap">
              <Label htmlFor="username" className="mb-2 text-right">
                Suite/Apt #
              </Label>
              <Input
                id="username"
                placeholder="#123"
                className="col-span-3 rounded-md bg-white"
              />
            </div>
          </div>
        </div>
        <div className="flex  w-full gap-2 p-4">
          <div className="flex w-full flex-wrap">
            <Label htmlFor="username" className="mb-2 w-full text-left ">
              City
            </Label>
            <Input
              id="username"
              placeholder="Murphysburg"
              className="w-full rounded-md bg-white"
            />
          </div>
          <div className="flex w-full flex-wrap">
            <Label htmlFor="username" className="mb-2 text-right">
              State
            </Label>
            <Select>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="State" />
              </SelectTrigger>
              <SelectContent>
                {/* {states.states.map((item, i) => (
                  <SelectItem key={i} value={item}>
                    {item}
                  </SelectItem>
                ))} */}
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-full flex-wrap">
            <Label htmlFor="username" className="mb-2 text-right">
              Zip (optional)
            </Label>
            <Input
              id="username"
              placeholder="00000"
              // value="00000"
              className="col-span-3 rounded-md bg-white"
            />
          </div>
        </div>
      </div>
    </>
  )
}
