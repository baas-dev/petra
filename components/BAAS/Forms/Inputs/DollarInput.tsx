import { Input } from "@material-tailwind/react"
import { FormControl, FormLabel } from "@mui/material"
import { DollarSign } from "lucide-react"

import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import MoneyInput from "@/components/MoneyInput"
import form from "@/app/contact/form"

interface TextOptions {
  name: string
  placeholder?: string
  label?: string
  description?: string
}

export default function DollarInput(props: {
  form: any
  options: TextOptions
}) {
  return (
    <FormField
      control={props.form.control}
      name={props.options.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.options.label}</FormLabel>
          <div className="flex">
            <DollarSign className="my-auto h-4" />
            <FormControl className="bg-white">
              <Input
                crossOrigin={undefined}
                {...field}
                onChange={(e) => {
                  console.log(e.target.value)
                  field.onChange(e.target.value)
                }}
                value={field.value}
              />
            </FormControl>
          </div>
          <FormDescription>{props.options.description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
