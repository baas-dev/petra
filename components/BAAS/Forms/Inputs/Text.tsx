"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface TextOptions {
  name: string
  placeholder?: string
  label?: string
  description?: string
  defaultValue?: string
  value?: string
  isDisabled?: boolean
}

export default function TextInput(props: { form: any; options: TextOptions }) {
  return (
    <FormField
      control={props.form.control}
      name={props.options.name}
      render={({ field }) => (
        <FormItem className=" w-full">
          <FormLabel>{props.options.label}</FormLabel>
          <FormControl className="bg-white">
            <Input
              {...field}
              value={props.options.value ? props.options.value : field.value}
              defaultValue={props.options.defaultValue}
              placeholder={props.options.placeholder}
              disabled={props.options.isDisabled}
            />
          </FormControl>
          <FormDescription>{props.options.description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
