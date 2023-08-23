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
}

export default function NumberInput(props: {
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
          <FormControl className="bg-white">
            <Input
              placeholder={props.options.placeholder}
              type="number"
              {...field}
              onChange={(event) => field.onChange(+event.target.value)}
            />
          </FormControl>
          <FormDescription>{props.options.description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
