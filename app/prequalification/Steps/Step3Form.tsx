"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Plus, Trash } from "lucide-react"
import CurrencyInput from "react-currency-input-field"
import { useForm } from "react-hook-form"
import { boolean, z } from "zod"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Form, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import DateOfBirth from "@/components/BAAS/Forms/Inputs/DateOfBirth"
import SelectInput from "@/components/BAAS/Forms/Inputs/Select"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import BACKEND from "@/app/API"

import { Borrower, usePreqFormContext } from "../components/formContext"
import QuestionHeader from "../components/questionHeader"
import PreviousQuestionButton from "./PrevQuestionButton"

const MortgagePieChart = dynamic(() => import("@/components/Chart/piechart"), {
  ssr: false,
})

const api = new BACKEND()

export const Step3FormSchema = z.object({
  Borrowers: z.array(
    z.object({
      FirstName: z.string().min(2, "Required "),
      LastName: z.string().min(2, "Required "),
      DOB: z.object({
        Month: z.string().min(1, "Required "),
        Day: z.string().min(1, "Required "),
        Year: z.string().min(1, "Required "),
      }),
      MaritalStatus: z.string().min(1, "Required "),
      AnnualIncome: z.string().min(4, "Required "),
      CreditScore: z.string().min(1, "Required "),
      Expenses: z.array(
        z.object({
          key: z.string(),
          amount: z.string(),
        })
      ),
    })
  ),
})

const defaultObj = {
  AnnualIncome: "",
  CreditScore: "",
  DOB: {
    Day: "1",
    Month: "0",
    Year: "2023",
  },
  Expenses: [],
  FirstName: "",
  LastName: "",
  MaritalStatus: "",
}

interface BorrowerState {
  status: "invalid" | "valid"
  index: number
}

export default function Step3Form(props: {
  HandleNext: any
  HandlePrev: any
  UpdateState
}) {
  const [borrowerState, setBorrowerState] = useState<BorrowerState[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const Step3FormCXT = useForm<z.infer<typeof Step3FormSchema>>({
    resolver: zodResolver(Step3FormSchema),
    defaultValues: {
      Borrowers: [defaultObj],
    },
  })
  Step3FormCXT.watch()

  function handleBorrowerState(errors) {
    let newState: BorrowerState[] = []
    if (Array.isArray(errors)) {
      errors.forEach((item, i) => {
        newState.push({
          status: "invalid",
          index: i,
        })
      })

      setBorrowerState([...newState])
    }

    if (!Array.isArray(errors)) {
      setBorrowerState([])
    }
  }

  async function SubmitFunc(e, errors) {
    e.preventDefault()
    setLoading(true)
    handleBorrowerState(errors)

    if (Step3FormCXT.formState.isValid) {
      props.UpdateState(3, {
        Borrowers: Step3FormCXT.getValues("Borrowers"),
      })

      props.HandleNext()
    }
    setLoading(false)
  }

  function handleAdd(e) {
    e.preventDefault()
    let data = Step3FormCXT.getValues("Borrowers")

    if (data.length < 5) {
      data.push(defaultObj)
    }

    Step3FormCXT.setValue("Borrowers", data)
  }

  function HandleAddCosts(index: number, item: string) {
    let data = Step3FormCXT.getValues("Borrowers")

    data[index].Expenses.push({
      key: item,
      amount: "0",
    })

    Step3FormCXT.setValue("Borrowers", data)
  }

  function AddMonthlyItems(props: { index: number }) {
    function HandleClick(item: string) {
      HandleAddCosts(props.index, item)
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
                    <Button type={"button"} onClick={() => HandleClick(item)}>
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
  function HandleRemove(i: number) {
    let data = Step3FormCXT.getValues("Borrowers")
    data.splice(i, 1)

    Step3FormCXT.setValue("Borrowers", data)
  }

  const triggerForm = async (e) => {
    SubmitFunc(e, Step3FormCXT.formState.errors.Borrowers)

    await Step3FormCXT.trigger("Borrowers")
      .then(() => {
        SubmitFunc(e, Step3FormCXT.formState.errors.Borrowers)
      })
      .catch((err) => {
        // console.log(err)
      })
  }

  useEffect(() => {}, [borrowerState])
  return (
    <div className="w-full py-8 text-center">
      <Form {...Step3FormCXT}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            triggerForm(e)
          }}
          // onSubmit={onSubmit}
          className="w-full space-y-6"
        >
          <QuestionHeader
            title="Question 3"
            text="Please Complete Borrower Information"
          />

          <BorrowerAccord
            vals={Step3FormCXT.getValues("Borrowers")}
            add={handleAdd}
            remove={HandleRemove}
            form={Step3FormCXT}
            badItems={borrowerState}
            AddMonthlyItems={AddMonthlyItems}
          />

          <div className="flex justify-between gap-2">
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                <PreviousQuestionButton
                  action={props.HandlePrev}
                  isDisabled={false}
                />
                <Button
                  type="submit"
                  className=" mx-auto mb-4 flex h-full w-full flex-row items-center rounded-xl border-2 bg-green-200 p-4 text-center text-2xl text-primary underline transition hover:animate-pulse hover:cursor-pointer hover:bg-green-200 md:w-1/2  "
                >
                  Save
                </Button>
              </>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}

function BorrowerAccord({
  vals,
  add,
  remove,
  form,
  badItems,
  AddMonthlyItems,
}: {
  vals
  add
  remove
  form
  badItems: BorrowerState[]
  AddMonthlyItems
}) {
  function GetStyle(loc) {
    let priority = badItems.find((item) => item.index === loc)

    if (priority !== undefined) {
      return "bg-red-300"
    }
    return ""
  }
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        {vals &&
          vals.length > 0 &&
          vals.map((item, i) => (
            <AccordionItem
              value={`item-${i}`}
              className={`border bg-white p-4 shadow-xl ${GetStyle(i)}`}
            >
              <AccordionTrigger className={`border-b-2 `}>
                <div className={`w-full text-left text-xl`}>
                  {i == 0 ? " Borrower" : `Borrower #${i + 1}`}
                  {i == 0 ? (
                    <></>
                  ) : (
                    <Button
                      className="float-right mr-2"
                      variant={"destructive"}
                      onClick={remove}
                    >
                      <Trash />
                    </Button>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <BorrowerInformationForm
                  AddMonthlyItems={AddMonthlyItems}
                  form={form}
                  index={i}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
      <Button className="bg-green-400/60 hover:bg-green-400" onClick={add}>
        <Plus className="mr-2" />
        Add Borrower
      </Button>
    </>
  )
}

function BorrowerInformationForm({ form, index, AddMonthlyItems }) {
  let maritalChoices = [
    "Single",
    "Married",
    "Divorced",
    "Windowed",
    "Seperated",
    "Legal Partnership",
  ]
  let creditChoices = [
    "Less Than 620",
    "620 - 699",
    "700 - 780",
    "Greater than 720",
  ]

  const MaritalOptions = () => {
    let res: { label: string; value: string }[] = []
    maritalChoices.forEach((item) => {
      res.push({
        label: item,
        value: item,
      })
    })
    return res
  }
  const CreditOptions = () => {
    let res: { label: string; value: string }[] = []
    creditChoices.forEach((item) => {
      res.push({
        label: item,
        value: item,
      })
    })
    return res
  }

  return (
    <>
      <div className="flex w-full gap-2 py-4 text-left">
        <div className="w-full">
          <TextInput
            form={form}
            options={{
              label: "First Name",
              placeholder: "John",
              name: `Borrowers[${index}].FirstName`,
            }}
          />
        </div>
        <div className="w-full">
          <TextInput
            form={form}
            options={{
              label: "Last Name",
              placeholder: "Doe",
              name: `Borrowers[${index}].LastName`,
            }}
          />
        </div>
      </div>
      <div>
        <div className="flex w-full gap-2">
          <DateOfBirth
            form={form}
            index={index}
            selectedMonth={form.getValues(`Borrowers`)[index].DOB.Month}
          />
          <div className="w-full text-left">
            <SelectInput
              form={form}
              options={{
                name: `Borrowers[${index}].MaritalStatus`,
                label: "Marital Status",

                items: MaritalOptions(),
              }}
            />
          </div>
        </div>
      </div>
      <div className="mt-4 flex w-full gap-2">
        <div className="w-full text-left">
          <FormField
            control={form.control}
            name={`Borrowers[${index}].AnnualIncome`}
            render={({ field }) => (
              <>
                <FormItem>
                  <Label
                    className={`${
                      form.getFieldState(`Borrowers[${index}].AnnualIncome`)
                        .invalid
                        ? "text-red-600"
                        : ""
                    }`}
                  >
                    Average Yearly Income
                  </Label>

                  <CurrencyInput
                    defaultValue={0}
                    name={field.name}
                    // value={parseInt(field.value)}
                    decimalsLimit={2}
                    className={`mt-2 w-full border border-gray-400/25 ${
                      form.getFieldState(field.name).invalid
                        ? "border border-red-500"
                        : ""
                    }`}
                    prefix="$"
                    value={field.value}
                    onValueChange={(value, name) => {
                      form.setValue(name, value)
                    }}
                  />
                  <Label
                    className={`${
                      form.getFieldState(field.name).invalid
                        ? " text-red-500"
                        : "hidden"
                    }`}
                  >
                    Required
                  </Label>
                </FormItem>
              </>
            )}
          />
        </div>
        <div className="w-full text-left">
          <SelectInput
            form={form}
            options={{
              name: `Borrowers[${index}].CreditScore`,
              label: "Credit Score",
              items: CreditOptions(),
            }}
          />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap text-left">
        <div className="w-full">
          <div className="mb-4 flex   w-full">
            <Label htmlFor="name" className="mb-2 w-full border-none ">
              What are items that you pay for monthly,
              <br /> that affect your credit?
            </Label>
            <AddMonthlyItems index={index} />
          </div>
          <div className="h-48 w-full overflow-y-scroll rounded-xl border-2 border-dashed bg-white">
            {form.getValues(`Borrowers`)[index].Expenses.map((item, i) => {
              return (
                <>
                  <div className="flex w-full">
                    <div key={i} className="w-full">
                      <Input
                        defaultValue={item.key}
                        className="w-full rounded-none "
                        onChange={(e) => {
                          // HandleExpenseKeyChange(i, e.target.value)
                        }}
                      />
                    </div>
                    <div className="w-full border">
                      <FormField
                        control={form.control}
                        name={`Borrowers[${index}].Expenses[${i}]`}
                        render={({ field }) => (
                          <>
                            <FormItem className=" ">
                              <CurrencyInput
                                defaultValue={0}
                                name={field.name}
                                // value={parseInt(field.value)}
                                decimalsLimit={2}
                                className="w-full border-none  "
                                prefix="$"
                                // value={field.value}
                                onValueChange={(value, name) => {
                                  form.setValue(name, {
                                    ...form.getValues(
                                      `Borrowers[${index}].Expenses[${i}]`
                                    ),
                                    amount: value,
                                  })
                                }}
                              />
                            </FormItem>
                          </>
                        )}
                      />
                    </div>
                  </div>
                </>
              )
            })}
          </div>
          <FinancialPieChart borrower={form.getValues(`Borrowers`)[index]} />
        </div>
      </div>
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
