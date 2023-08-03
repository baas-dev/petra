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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import MoneyInput from "@/components/MoneyInput"
import { Borrower, usePreqFormContext } from "@/app/prequalify/formContext"
import MortgageCalculatorPage from "@/app/resources/mortgage-calculator/page"

const MortgagePieChart = dynamic(() => import("@/components/Chart/piechart"), {
  ssr: false,
})

// import MortgagePieChart from "./components/piechart"
let data = [
  {
    id: "java",
    label: "java",
    value: 254,
    color: "hsl(297, 70%, 50%)",
  },
  {
    id: "elixir",
    label: "elixir",
    value: 419,
    color: "hsl(355, 70%, 50%)",
  },
  {
    id: "javascript",
    label: "javascript",
    value: 505,
    color: "hsl(264, 70%, 50%)",
  },
  {
    id: "haskell",
    label: "haskell",
    value: 165,
    color: "hsl(332, 70%, 50%)",
  },
  {
    id: "rust",
    label: "rust",
    value: 125,
    color: "hsl(315, 70%, 50%)",
  },
]
export default function PrequalificationInformationPopUpForm(props: {
  Borrower: Borrower
  index: number
}) {
  const { data, setFormData } = usePreqFormContext()

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
    firstname: z.string().min(2, "Please complete first name"),
    lastname: z.string().min(2, "Please complete second name"),
    dateOfBirth: z.date({
      required_error: "A date of birth is required.",
    }),
    maritalStatus: z.string().min(1, "Last name is required"),
    annualIncome: z.string().min(0, "Annual income must be a positive number"),
    creditScoreRange: z.string(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      dateOfBirth: new Date(),
      annualIncome: "50000",
      maritalStatus: "Single",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="bg-gray-200 border-2 border-dashed border-black border-opacity-25 h-full w-full mb-2"
        >
          <div
            // onClick={handleStepChange}
            className="flex flex-wrap h-40 w-full  items-center  rounded-xl hover:cursor-pointer "
          >
            <div className="w-1/3"></div>
            <div className="w-1/3">
              <Badge className="mx-auto bg-gray-400" variant={"outline"}>
                Not Completed
              </Badge>
            </div>
            {props.index > 0 ? (
              <div className="w-1/3">
                <Button className="float-right">
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
      <DialogContent className="w-full max-w-4xl bg-secondary">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="w-full flex gap-2">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="w-full flex gap-2">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date of birth</FormLabel>
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
                      <FormDescription>
                        Your date of birth is used to calculate your age.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="maritalStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Marital Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a marriage status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Single">Single</SelectItem>
                          <SelectItem value="Married">Married</SelectItem>
                          <SelectItem value="Divorced">Divorced</SelectItem>
                          <SelectItem value="Widowed">Widowed</SelectItem>
                          <SelectItem value="Seperated">Seperated</SelectItem>
                          <SelectItem value="Legal Partnership">
                            Legal Partnership
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        You can manage email addresses in your{" "}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Separator />
            <div className="w-full flex gap-2">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="annualIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Annual Income</FormLabel>
                      <div className="flex">
                        <DollarSign className="h-4 my-auto" />
                        <FormControl>
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
                  name="creditScoreRange"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Credit Score</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Your Credit Score " />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Below620">{`< 620`}</SelectItem>
                          <SelectItem value="620690">{`620 - 699`}</SelectItem>
                          <SelectItem value="700780">{`700 - 780`}</SelectItem>
                          <SelectItem value="Above720">{`> 720`}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        You can manage email addresses in your{" "}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="flex w-full   mb-4">
                  <Label htmlFor="name" className="mb-2 w-full border-none ">
                    What are items that you pay for monthly,
                    <br /> that affect your credit?
                  </Label>
                  <AddMonthlyItems index={props.index} />
                </div>
                <Label></Label>
                <div className="h-48 rounded-xl overflow-y-scroll bg-white border-2 border-dashed w-full">
                  {props.Borrower.Expenses.map((item, i) => {
                    return (
                      <>
                        <div className="flex w-full">
                          <div key={i} className="w-full">
                            <Input
                              defaultValue={item.key}
                              className="border rounded-none"
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
              </div>
              <div className="w-full">
                <FinancialPieChart borrower={props.Borrower} />
              </div>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
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

  return <MortgagePieChart data={PieChartData} />
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
          className=" bg-accent hover:bg-accent/50 w-1/2 "
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
