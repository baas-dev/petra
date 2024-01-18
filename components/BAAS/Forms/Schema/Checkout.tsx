import * as z from "zod"

const CheckoutFormSchema = z.object({
  ItemsList: z.array(z.number()),
  CouponCode: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  ShippingInformation: z.object({
    Address: z.string(),
    SuiteNumber: z.string().optional(),
    City: z.string(),
    State: z.string(),
    Zip: z.number(),
  }),
  BillingInformation: z.object({
    Address: z.string(),
    SuiteNumber: z.string().optional(),
    City: z.string(),
    State: z.string(),
    Zip: z.number(),
  }),
})

export default CheckoutFormSchema
