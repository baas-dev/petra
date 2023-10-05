import { useState } from "react"
import dynamic from "next/dynamic"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, DollarSign, Plus, Trash2, User } from "lucide-react"
import CurrencyInput from "react-currency-input-field"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import MoneyInput from "@/components/MoneyInput"
import {
  Borrower,
  usePreqFormContext,
} from "@/app/prequalify/components/formContext"

import DateOfBirth from "../Forms/Inputs/DateOfBirth"
import SelectInput from "../Forms/Inputs/Select"

// import MortgagePieChart from "@/app/resources/mortgage-calculator/components/piechart"

const MortgagePieChart = dynamic(() => import("@/components/Chart/piechart"), {
  ssr: false,
})
export default function PrequalificationInformationPopUpForm(props: {
  Borrower: Borrower
  index: number
}) {
  const { data, setFormData } = usePreqFormContext()
  const { toast } = useToast()

  const [valid, setValid] = useState<boolean>(false)
  function HandleExpenseChange(index, value) {
    let b = data.Borrowers

    b[props.index].Expenses[index].amount = value

    setFormData({ ...data, Borrowers: b })
  }

  function HandleExpenseKeyChange(index, value) {
    let b = data.Borrowers

    b[props.index].Expenses[index].key = value

    setFormData({ ...data, Borrowers: b })
  }

  const formSchema = z.object({
    FirstName: z.string().min(2, "Please complete first name"),
    LastName: z.string().min(2, "Please complete second name"),
    DOB: z.object({
      month: z.string().min(1, "Required"),
      day: z.string().min(1, "Required"),
      year: z.string().min(2, "Required"),
    }),
    MaritalStatus: z.string().min(1, "Last name is required"),
    AnnualIncome: z.string().min(4, "Required"),
    CreditScore: z.string(),
    Expenses: z.array(
      z.object({
        key: z.string(),
        amount: z.number(),
      })
    ),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      FirstName: "",
      LastName: "",
      DOB: {
        day: "",
        month: "",
        year: "",
      },
      AnnualIncome: "",
      MaritalStatus: "",
      CreditScore: "",
      Expenses: [
        {
          amount: 0,
          key: "",
        },
      ],
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const result = formSchema.safeParse(values)

    if (!result.success) {
      // Handle the validation errors
      setValid(false)
      let b = data.Borrowers
      b[props.index] = values
      setFormData({ Borrowers: b })
    } else {
      // Use the validated data
      setValid(true)
      toast({
        className: "bg-green-500 text-white",
        title: "Success! ",
        description: "Friday, February 10, 2023 at 5:57 PM",
        action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      })
    }
  }

  function HandleDelete(index: number) {
    let d = data

    d.Borrowers.splice(index, 1)

    setFormData({ ...d })
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className={`mb-2 h-full w-full max-w-[500px] border-2 border-dashed border-black border-opacity/25 ${
            valid ? "bg-green-300" : "bg-red-200"
          }`}
        >
          <div
            // onClick={handleStepChange}
            className="flex h-40 w-full flex-wrap  items-center  rounded-xl hover:cursor-pointer "
          >
            <div className="w-1/3"></div>
            <div className="w-1/3">
              <ValidityBadges valid={valid} />
            </div>
            {props.index > 0 ? (
              <div className="w-1/3">
                <Button
                  onClick={() => {
                    HandleDelete(props.index)
                  }}
                  className="float-right"
                >
                  <Trash2 />
                </Button>
              </div>
            ) : (
              <></>
            )}
            <User className="h-24 w-full" />

            <h4 className="mx-auto text-xl font-light">
              {props.Borrower.FirstName} {props.Borrower.LastName}
            </h4>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-6xl bg-secondary">
        <DialogHeader className="text-left">
          <DialogTitle>Borrower Information</DialogTitle>
          <DialogDescription className="max-w-lg">
            <span className="font-bold uppercase">
              This is not an actual prequalification process.
            </span>
            <br className="mb-2 text-primary" /> Make changes to individual
            {` borrower's`} information here.
            <br /> Click the
            <span className="font-bold uppercase"> save</span> button at the
            bottom when {`you're`} done.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[500px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex w-full gap-2">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="FirstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Robert"
                            {...field}
                            className="bg-white"
                          />
                        </FormControl>
                        <FormDescription>First Legal Name</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="LastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Smith"
                            {...field}
                            className="bg-white"
                          />
                        </FormControl>
                        <FormDescription>Last Legal Name</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div>
                <div className="flex w-full gap-2">
                  <DateOfBirth form={form} index={index} />
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="MaritalStatus"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel> Marital Status</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-white">
                                <SelectValue placeholder="Select a marriage status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Single">Single</SelectItem>
                              <SelectItem value="Married">Married</SelectItem>
                              <SelectItem value="Divorced">Divorced</SelectItem>
                              <SelectItem value="Widowed">Widowed</SelectItem>
                              <SelectItem value="Seperated">
                                Seperated
                              </SelectItem>
                              <SelectItem value="Legal Partnership">
                                Legal Partnership
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription></FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full gap-2">
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="AnnualIncome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Income</FormLabel>
                        <div className="flex">
                          <DollarSign className="my-auto h-4" />
                          <FormControl className="bg-white">
                            <Input
                              {...field}
                              onChange={(e) => {
                                console.log(e.target.value)
                                field.onChange(e.target.value)
                              }}
                              value={MoneyInput(field.value)}
                            />
                          </FormControl>
                        </div>
                        <FormDescription>
                          How much money you make in a year?
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="CreditScore"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Credit Score</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white">
                              <SelectValue placeholder="Your Credit Score " />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Below620">{`Less Than 620`}</SelectItem>
                            <SelectItem value="620690">{`620 - 699`}</SelectItem>
                            <SelectItem value="700780">{`700 - 780`}</SelectItem>
                            <SelectItem value="Above720">{`Greater than 720`}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Give your best estimation of your most recent score
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-wrap ">
                <div className="w-full">
                  <div className="mb-4 flex   w-full">
                    <Label htmlFor="name" className="mb-2 w-full border-none ">
                      What are items that you pay for monthly,
                      <br /> that affect your credit?
                    </Label>
                    <AddMonthlyItems index={props.index} />
                  </div>
                  <div className="h-48 w-full overflow-y-scroll rounded-xl border-2 border-dashed bg-white">
                    {props.Borrower.Expenses.map((item, i) => {
                      return (
                        <>
                          <div className="flex w-full">
                            <div key={i} className="w-full">
                              <Input
                                defaultValue={item.key}
                                className="rounded-none border"
                                onChange={(e) => {
                                  HandleExpenseKeyChange(i, e.target.value)
                                }}
                              />
                            </div>
                            <div className="w-full">
                              <CurrencyInput
                                id="input-example"
                                name="input-name"
                                placeholder="Please enter a number"
                                defaultValue={0}
                                decimalsLimit={2}
                                className="w-full border border-gray-400 border-opacity-25"
                                prefix="$"
                                onValueChange={(value, name) => {
                                  HandleExpenseChange(i, value)
                                }}
                              />
                            </div>
                          </div>
                        </>
                      )
                    })}
                  </div>
                  <FinancialPieChart borrower={props.Borrower} />
                </div>
              </div>

              <Button
                className="w-full bg-primary text-lg shadow-xl"
                type="submit"
              >
                Save Information
              </Button>
            </form>
          </Form>
        </ScrollArea>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}

function ValidityBadges(props: { valid: boolean }) {
  console.log(props.valid)
  let { valid } = props
  return (
    <>
      {valid == false ? (
        <Badge className="mx-auto" variant={"destructive"}>
          Needs Completion
        </Badge>
      ) : (
        <></>
      )}
      {valid == true ? (
        <Badge className="mx-auto bg-green-500">Complete!</Badge>
      ) : (
        <></>
      )}
    </>
  )
}

function FinancialPieChart(props: { borrower: Borrower }) {
  let ExpenseData = props.borrower.Expenses
  let PieChartData: { id: string; label: string; value: number }[] = []
  ExpenseData.forEach((item, i) => {
    return PieChartData.push({
      id: item.key,
      label: item.key,
      value: item.amount,
    })
  })

  return (
    <div className="relative h-56 w-full pt-4">
      {PieChartData.length <= 0 ? (
        <div className="flex h-full w-full items-center justify-center rounded-xl border-2 border-dashed bg-gray-100 text-center  ">
          <p>Enter your monthly expenses above to see a cost breakdown</p>
        </div>
      ) : (
        <MortgagePieChart data={PieChartData} />
      )}
    </div>
  )
}

function AddMonthlyItems(props: { index: number }) {
  const { data, setFormData } = usePreqFormContext()
  function HandleClick(item: string) {
    // props and state
    let b: Borrower[] = data.Borrowers

    // push to the copy of props
    b[props.index].Expenses.push({
      key: item,
      amount: 0,
    })

    setFormData({ ...data, Borrowers: b })
  }

  let defaultOptions = [
    "Home Payment (Rent/Mortgage)",
    "Car Loan",
    "Student Loan",
    "Credit Card Payments",
    "Utilities",
    "Other",
  ]
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"default"}
          className=" w-1/2 bg-accent hover:bg-accent/50 "
        >
          <Plus className="mr-2" /> Add Items
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">
              Choose Recurring Charges
            </h4>
            <p className="text-sm text-muted-foreground">
              Choose bills you have every month
            </p>
          </div>
          <div className="grid gap-2">
            {defaultOptions.map((item: string, i) => (
              <>
                <div className="grid grid-cols-3  items-center ">
                  <Label htmlFor="maxHeight border-none">{item}</Label>
                  <div></div>
                  <Button onClick={() => HandleClick(item)}>
                    <Plus />
                  </Button>
                </div>
              </>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
