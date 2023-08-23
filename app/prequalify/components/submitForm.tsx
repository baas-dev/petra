"use cl"

import { useRouter } from "next/navigation"
import { Check, Send } from "lucide-react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { CreateNewFormSubmission } from "@/app/API/FORMS"

import { usePreqFormContext } from "./formContext"

export default function SubmitForm() {
  const { data, setFormData } = usePreqFormContext()
  let r = useRouter()
  const formSchema = z.object({
    FirstName: z.string().min(2, "Please complete first name"),
    LastName: z.string().min(2, "Please complete second name"),
    DOB: z.object({
      month: z.string().min(1, "Required"),
      day: z.string().min(1, "Required"),
      // year: z.string().min(2, "Required"),
    }),
    MaritalStatus: z.string().min(1, "Last name is required"),
    // AnnualIncome: z.number().min(4, "Required"),
    CreditScore: z.string(),
    // Expenses: z.array(
    //   z.object({
    //     key: z.string(),
    //     amount: z.number(),
    //   })
    // ),
  })

  function HandleSubmit() {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    let failures: any = []
    data.Borrowers.forEach(async (item, i) => {
      let result = formSchema.safeParse(item)
      if (!result.success) {
        failures.push(item)
        console.log(result.error.errors)
        // Handle the validation errors
      } else {
        await CreateNewFormSubmission(data)
        toast({
          title: "Your Submission Was Successful!",
          description: (
            <div>
              <h2>Thank you!</h2>
              <p>A team member will reach out to you.</p>
            </div>
          ),
        })
        r.push("/success")
        // Use the validated data
      }
    })

    console.log(failures)
  }
  return (
    <Button
      variant={"outline"}
      type="button"
      className="h-full w-full border border-black bg-green-200 shadow-md"
      onClick={HandleSubmit}
    >
      <div
        // onClick={handleStepChange}
        className="flex w-full items-center  justify-center  rounded-xl  hover:cursor-pointer "
      >
        <div className="w-1/8">
          <Check className="mr-2" />
        </div>
        <div className="w-7/8">
          <h4 className="mx-auto text-xl font-light ">Submit!</h4>
        </div>
      </div>
    </Button>
  )
}
