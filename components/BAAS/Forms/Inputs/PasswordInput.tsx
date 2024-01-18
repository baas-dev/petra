"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

interface PasswordInputOptions {
  name: string
  label?: string
  placeholder?: string
  forReset?: boolean
}

export default function PasswordInput({
  form,
  options,
}: {
  form
  options: PasswordInputOptions
}) {
  const [showPassword, togglePasswordVisibility] = useState(false)
  return (
    <FormField
      control={form.control}
      name={options.name}
      render={({ field }) => (
        <FormItem>
          {options.forReset ? (
            <div className="mb-4 rounded border bg-secondary px-4">
              <Label>To Reset User&#39;s Password:</Label>
              <ul>
                <li>At least one uppercase letter.</li>
                <li>At least one lowercase letter.</li>
                <li>At least one digit.</li>
                <li>{`At least one special character (e.g. !@#$%^&*()).`}</li>
              </ul>
            </div>
          ) : null}
          <FormLabel>{options.label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder={options.placeholder}
                defaultValue={""}
                {...field}
              />
              <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-400">
                {showPassword ? (
                  <Button
                    variant={"ghost"}
                    onClick={(e) => {
                      e.preventDefault(),
                        togglePasswordVisibility(!showPassword)
                    }}
                  >
                    <Icons.eye className="h-6 w-6" />
                  </Button>
                ) : (
                  <Button
                    variant={"ghost"}
                    onClick={(e) => {
                      e.preventDefault(),
                        togglePasswordVisibility(!showPassword)
                    }}
                  >
                    <Icons.eyeOff className="h-6 w-6" />
                  </Button>
                )}
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
