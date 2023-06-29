"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { Calendar as CalendarIcon, DollarSign } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { FormItemConfig, FormItemType } from "./FormInterfaces"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
})

export default function PrequalificationForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className=" max-w-4xl bg-white w-full mx-auto p-4 rounded-xl ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <h2 className="text-4xl font-bold text-center">Step 1</h2>
          <div className="flex flex-wrap ">
            {/* First Row */}
            <div className="w-full sm:w-1/3 p-4">
              <CustomFormField
                control={form.control}
                type={FormItemType.Text}
                name="FirstName"
                label="First Name"
                description=""
                placeholder="Joesph"
              />
            </div>
            <div className="w-full sm:w-1/3  p-4">
              <CustomFormField
                control={form.control}
                type={FormItemType.Text}
                name="LastName"
                label="Last Name"
                description=""
                placeholder="Whittsworth"
              />
            </div>
            <div className="w-1/3  p-4">
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="mb-2">Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
            </div>
            {/* Second Row */}
            <div className="w-full sm:w-1/2 p-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Marital Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a marital status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">Single</SelectItem>
                        <SelectItem value="m@google.com">Married</SelectItem>
                        <SelectItem value="m@support.com">Divorced</SelectItem>
                      </SelectContent>
                    </Select>
                    {/* <FormDescription>
                      You can manage email addresses in your
                      <Link href="/examples/forms">email settings</Link>.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full sm:w-1/2  p-4">
              <CustomFormField
                control={form.control}
                type={FormItemType.Text}
                name="LastName"
                label="Phone"
                description=""
                placeholder="(972)555-3210"
              />
            </div>
            <div className="w-full sm:w-1/2 p-4">
              <CustomFormField
                control={form.control}
                type={FormItemType.Text}
                name="LastName"
                label="Email"
                description=""
                placeholder="example@email.com"
              />
            </div>
            <div className="w-full sm:w-1/2 p-4">
              <CustomFormField
                control={form.control}
                type={FormItemType.Text}
                name="LastName"
                label="Email"
                description=""
                placeholder="example@email.com"
              />
            </div>
            {/* Third Row */}

            {/* Fourth Row */}
            <div className="w-full sm:w-3/4 flex-2 p-4">
              <CustomFormField
                control={form.control}
                type={FormItemType.Text}
                name="address"
                label="Street Address"
                description=""
                placeholder="123 Bluebonnet Street"
              />
            </div>
            <div className="w-full sm:w-1/4 p-4">
              <CustomFormField
                control={form.control}
                type={FormItemType.Text}
                name="Address2"
                label="Apartment/Suite #"
                description=""
                placeholder="#155"
              />
            </div>
            <div className="w-full sm:w-1/3 p-4">
              <CustomFormField
                control={form.control}
                type={FormItemType.Text}
                name="City"
                label="City"
                description=""
                placeholder="Newtown"
              />{" "}
            </div>
            <div className="w-full sm:w-1/3 p-4">
              {" "}
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">AL</SelectItem>
                        <SelectItem value="m@google.com">AK</SelectItem>
                        <SelectItem value="m@support.com">TX</SelectItem>
                      </SelectContent>
                    </Select>
                    {/* <FormDescription>
                      You can manage email addresses in your{" "}
                      <Link href="/examples/forms">email settings</Link>.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full sm:w-1/3 p-4">
              <CustomFormField
                control={form.control}
                type={FormItemType.Text}
                name="Zip"
                label="Zip"
                description=""
                placeholder="Texas"
              />
            </div>

            <div className="w-full sm:w-1/2 p-4">
              <FormField
                control={form.control}
                name={"MinimumCreditCardMonthly"}
                render={({ field }) => (
                  <>
                    <FormItem>
                      <FormLabel>{"Minimum Credit Card Monthly"}</FormLabel>
                      <div className="flex">
                        <div className="pt-2 pr-2">
                          <DollarSign />
                        </div>
                        <FormControl>
                          <Input
                            className="w-5/6"
                            id="phone"
                            type="tel"
                            pattern="(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?"
                          />
                        </FormControl>
                      </div>
                      <FormDescription>{""}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />{" "}
            </div>

            {/* Second Row */}
            <div className="w-full sm:w-1/2 p-4">
              <FormField
                control={form.control}
                name={"MinimumCreditCardMonthly"}
                render={({ field }) => (
                  <>
                    <FormItem>
                      <FormLabel>{"Co-borrower Annual Income"}</FormLabel>
                      <div className="flex">
                        <div className="pt-2 pr-2">
                          <DollarSign />
                        </div>
                        <FormControl>
                          <Input
                            className="w-5/6"
                            id="phone"
                            type="tel"
                            pattern="(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?"
                          />
                        </FormControl>
                      </div>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
            </div>
            <div className="w-full sm:w-1/3 p-4">
              <FormField
                control={form.control}
                name={"MinimumCreditCardMonthly"}
                render={({ field }) => (
                  <>
                    <FormItem>
                      <FormLabel>{"Car payment"}</FormLabel>
                      <div className="flex">
                        <div className="pt-2 pr-2">
                          <DollarSign />
                        </div>
                        <FormControl>
                          <Input
                            className="w-5/6"
                            id="phone"
                            type="tel"
                            pattern="(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?"
                          />
                        </FormControl>
                      </div>
                      <FormDescription>{""}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
            </div>
            <div className="w-full sm:w-1/3 p-4">
              <FormField
                control={form.control}
                name={"MinimumCreditCardMonthly"}
                render={({ field }) => (
                  <>
                    <FormItem>
                      <FormLabel>{"Current Mortgage Payment"}</FormLabel>
                      <div className="flex">
                        <div className="pt-2 pr-2">
                          <DollarSign />
                        </div>
                        <FormControl>
                          <Input
                            className="w-5/6"
                            id="phone"
                            type="tel"
                            pattern="(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?"
                          />
                        </FormControl>
                      </div>
                      <FormDescription>{""}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
            </div>

            {/* Fifth Row */}
            <div className="w-full sm:w-1/3 p-4">
              <FormField
                control={form.control}
                name={"MinimumCreditCardMonthly"}
                render={({ field }) => (
                  <>
                    <FormItem>
                      <FormLabel>{"Minimum Credit Card Monthly"}</FormLabel>
                      <div className="flex">
                        <div className="pt-2 pr-2">
                          <DollarSign />
                        </div>
                        <FormControl>
                          <Input
                            className="w-full"
                            id="phone"
                            type="tel"
                            pattern="(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?"
                          />
                        </FormControl>
                      </div>
                      <FormDescription>{""}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />{" "}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant={"ghost"}
              className="text-2xl  block float-right"
              type="submit"
            >
              Cancel
            </Button>
            <Button
              variant={"default"}
              className="text-2xl bg-black block float-right"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

// requirements
// 1. Control
// 2. Name
// 3. Label
// 4. Placeholder?
// 5. Description?

const CustomFormField = (config: FormItemConfig) => {
  let { control, type, name, placeholder, label, description } = config
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <>
          {console.log(field)}
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                placeholder={placeholder}
                {...field}
                className="border-4"
              />
            </FormControl>
            <FormDescription>{description}</FormDescription>
            <FormMessage />
          </FormItem>
        </>
      )}
    />
  )
}
