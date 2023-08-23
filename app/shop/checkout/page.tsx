"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"
import BillingInput from "@/components/BAAS/Forms/Inputs/BillingInput"
import LocationInput from "@/components/BAAS/Forms/Inputs/LocationInput"
import SwitchInput from "@/components/BAAS/Forms/Inputs/Switch"
import PageHeader from "@/components/BAAS/Headings/PageHeader"
import { useCartContext } from "@/components/BAAS/Shop/Context/CartContext"
import CheckoutPT1 from "@/components/BAAS/Shop/components/Checkout/CheckoutPT1"

const CheckoutFormSchema = z.object({
  ItemsList: z.array(z.string()),
  CouponCode: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .optional(),
  ShippingInformation: z.object({
    Address: z.string(),
    SuiteNumber: z.string().optional(),
    City: z.string(),
    State: z.string(),
    Zip: z.string(),
  }),
  BillingInformation: z.object({
    Address: z.string().min(4),
    SuiteNumber: z.string().optional(),
    City: z.string().min(2),
    State: z.string().min(2),
    Zip: z.string().min(5, "Incorrect Zip"),
  }),
})

export default function CheckoutPage() {
  const [useSameLocationAsBilling, setSLAB] = useState(true)
  const { CartObject, setCartObject } = useCartContext()

  let ItemIds: string[] = []

  CartObject.items.map((item, i) => {
    ItemIds.push(item.ID)
  })

  const CheckoutForm = useForm<z.infer<typeof CheckoutFormSchema>>({
    resolver: zodResolver(CheckoutFormSchema),
    defaultValues: {
      ItemsList: ItemIds,
    },
  })

  function onSubmit(data: z.infer<typeof CheckoutFormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  function HandleSLAB() {
    let choice = !useSameLocationAsBilling

    console.log("action is now ", choice)

    if (choice) {
      CheckoutForm.setValue(
        "BillingInformation",
        CheckoutForm.getValues("ShippingInformation")
      )
    }

    if (!choice) {
      CheckoutForm.setValue("BillingInformation", {
        Address: "",
        City: "",
        State: "",
        Zip: "",
        SuiteNumber: "",
      })
    }

    setSLAB(!useSameLocationAsBilling)
  }

  return (
    <div className="container mt-8 h-full">
      <PageHeader
        title={"Checkout"}
        description={"We are grateful for your purchase"}
        tagline={"Purchase Your Items"}
      />

      <div className="flex h-full container pb-16">
        <Form {...CheckoutForm}>
          <form
            onSubmit={CheckoutForm.handleSubmit(onSubmit)}
            className="w-full flex flex-wrap gap-2"
          >
            <CheckoutPT1 form={CheckoutForm} />
            <LocationInput form={CheckoutForm} />
            <div className="w-full mb-8">
              <Switch
                checked={useSameLocationAsBilling}
                onCheckedChange={HandleSLAB}
              />
              <Label>Use the same address for billing?</Label>
            </div>
            <BillingInput
              form={CheckoutForm}
              useSameLocationAsBilling={useSameLocationAsBilling}
            />
            {CartObject.items.length < 1 ? (
              <Button
                type="submit"
                className="text-2xl bg-accent/60 hover:bg-accent"
              >
                PLACE ORDER
              </Button>
            ) : (
              <Button
                type="submit"
                disabled
                className="text-2xl bg-gray-500 hover:bg-accent"
              >
                Sorry, You need to add items to your cart in order to check out
              </Button>
            )}
          </form>
        </Form>
      </div>
    </div>
  )
}
