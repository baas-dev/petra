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
import { Textarea } from "@/components/ui/textarea"

interface TextOptions {
  name: string
  placeholder?: string
  label?: string
  description?: string
}

export default function TextAreaInput(props: {
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
            <Textarea placeholder={props.options.placeholder} {...field} />
          </FormControl>
          <FormDescription>{props.options.description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
