import { useState } from "react"
import moment from "moment"

import { Label } from "@/components/ui/label"

import SelectInput from "./Select"

export default function DateOfBirth({ form, index, selectedMonth }) {
  form.watch()

  const months = () => {
    let m = moment.months()
    let values: {
      label: string
      value: string
    }[] = []

    m.forEach((item, i) => {
      values.push({
        label: item,
        value: i.toString(),
      })
    })

    return values
  }

  let days = () => {
    let d = moment().month(selectedMonth).daysInMonth()
    let values: {
      label: string
      value: string
    }[] = []

    for (var i = 1; i <= d; i++) {
      values.push({
        label: i.toString(),
        value: i.toString(),
      })
    }
    return values
  }

  let years = () => {
    let values: {
      label: string
      value: string
    }[] = []
    for (var i = 1900; i <= moment().year(); i++) {
      values.push({
        label: i.toString(),
        value: i.toString(),
      })
    }
    return values.reverse()
  }
  return (
    <div className="w-full flex flex-wrap text-left">
      <Label className="w-full">Date of Birth</Label>

      <div className="w-1/3 px-1">
        <SelectInput
          form={form}
          options={{
            name: `Borrowers[${index}].DOB.Month`,
            description: "Month",
            items: months(),
          }}
        />
      </div>
      <div className="w-1/3 px-1">
        <SelectInput
          form={form}
          options={{
            name: `Borrowers[${index}].DOB.Day`,
            description: "Day",
            items: days(),
          }}
        />
      </div>
      <div className="w-1/3 px-1">
        <SelectInput
          form={form}
          options={{
            name: `Borrowers[${index}].DOB.Year`,
            description: "Year",
            items: years(),
          }}
        />
      </div>
    </div>
  )
}
