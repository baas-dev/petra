"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Checkbox } from "@/components/ui/checkbox"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface MultiSelectOptions {
  name: string
  placeholder?: string
  label?: string
  description?: string
  defaultValue?: string
  value?: string[]
  items: {
    id: string
    label: string
  }[]
}

export default function MultiSelectInput(props: {
  form: any
  options: MultiSelectOptions
}) {
  let { form, options } = props
  return (
    <FormField
      control={form.control}
      name={props.options.name}
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-base">{props.options.label}</FormLabel>
            <FormDescription>{props.options.description}</FormDescription>
          </div>
          {options.items.map((item) => (
            <FormField
              key={item.id}
              control={form.control}
              name={props.options.name}
              defaultValue={[]}
              render={({ field }) => {
                return (
                  <FormItem
                    key={item.id}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.id])
                            : field.onChange(
                                field.value?.filter(
                                  (value) => value !== item.id
                                )
                              )
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{item.label}</FormLabel>
                  </FormItem>
                )
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
