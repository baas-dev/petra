"use client"

// import PrequalificationForm from "@/components/Sections/Forms/PrequalificationFormv1"
import { AlertTriangle, Plus, Send } from "lucide-react"
import CurrencyInput from "react-currency-input-field"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import PrequalificationInformationPopUpForm from "@/components/BAAS/Dialogs/Prequalification"

import PrequalificationFormProvider, {
  usePreqFormContext,
} from "./components/formContext"

export default function IndexPage() {
  return (
    <>
      <PrequalificationFormProvider>
        <div className="container mt-24 flex w-full max-w-6xl flex-col">
          <div className="flex h-full w-full flex-wrap items-baseline rounded-xl px-4">
            <div className=" h-full w-full ">
              <span className="text-md block  font-semibold text-primary">
                Borrower Snapshot
              </span>
              <h2 className="text-dark mx-auto text-left  text-2xl  font-medium uppercase ">
                Prequalification
              </h2>
            </div>
            <div className="h-full w-full max-w-md font-light ">
              <p>
                This form helps our team determine the best options for your
                lending
              </p>
            </div>
          </div>
          <div className="mb-16 w-full rounded-xl">
            <FormPage />
          </div>
        </div>
      </PrequalificationFormProvider>
    </>
  )
}

function FormPage() {
  const { data, setFormData } = usePreqFormContext()

  return (
    <div className="w-full pt-4 text-center ">
      <div className=" mb-4 flex w-full flex-row items-center rounded-xl bg-secondary p-4 text-left  ">
        <div className="w-full">
          <Label className="text-md text-primary underline ">Question 1</Label>
          <br />
          <Label className="text-xl font-light">
            Do you already have a property you were looking to purchase?
          </Label>
        </div>

        <div className="w-1/8 flex">
          <Switch className="" id="address" />
        </div>
      </div>

      <div className="w-full px-4 text-left">
        <Label className="text-md text-left text-primary underline ">
          Location Information
        </Label>
      </div>

      <div className="w-full px-4  text-left">
        <div className="mt-4 flex w-full gap-2">
          <div className="flex w-full flex-wrap">
            <Label htmlFor="username" className="mb-2  w-full ">
              Street Address
            </Label>
            <Input
              id="username"
              placeholder="123 Example St."
              className="w-full rounded-md bg-white"
            />
          </div>
          <div className="flex w-full flex-wrap">
            <Label htmlFor="username" className="mb-2 text-right">
              Suite/Apt #
            </Label>
            <Input
              id="username"
              placeholder="#123"
              className="col-span-3 rounded-md bg-white"
            />
          </div>
        </div>
      </div>
      <div className="flex  w-full gap-2 p-4">
        <div className="flex w-full flex-wrap">
          <Label htmlFor="username" className="mb-2 w-full text-left ">
            City
          </Label>
          <Input
            id="username"
            value="123 Example St."
            className="w-full rounded-md bg-white"
          />
        </div>
        <div className="flex w-full flex-wrap">
          <Label htmlFor="username" className="mb-2 text-right">
            State (optional)
          </Label>
          <Input
            id="username"
            value="@peduarte"
            className="col-span-3 rounded-md bg-white"
          />
        </div>
        <div className="flex w-full flex-wrap">
          <Label htmlFor="username" className="mb-2 text-right">
            Zip (optional)
          </Label>
          <Input
            id="username"
            placeholder="00000"
            // value="00000"
            className="col-span-3 rounded-md bg-white"
          />
        </div>
      </div>
      <div className="flex w-full flex-col px-4 text-left">
        <Label className="text-md mb-2 text-left text-primary underline">
          Estimated Value of Desired Property
        </Label>
        <CurrencyInput
          id="input-example"
          name="input-name"
          placeholder="Please enter a number"
          defaultValue={"0"}
          decimalsLimit={2}
          className="w-full max-w-sm border border-gray-400 border-opacity-25"
          prefix="$"
          onValueChange={(value, name) => {
            console.log(value)
          }}
        />
      </div>
      <div className=" mb-4 mt-8 flex w-full  flex-wrap justify-between rounded-xl bg-secondary p-4 text-left  ">
        <div className="w-1/2">
          <Label className="text-md text-primary underline">Question 2</Label>
          <br />
          <Label className="text-xl font-light">
            Can you tell us a little about the borrowers?
          </Label>
        </div>
        <div className="w-1/3">
          {data.Borrowers.length < 4 ? <AddCoborrower /> : <MaxCoborrower />}
        </div>
      </div>
      <BorrowerQuizTrigger />
    </div>
  )
}

function AddCoborrower() {
  const { data, setFormData } = usePreqFormContext()

  const AddCoborrowerToCXT = () => {
    let borrowers = data.Borrowers
    let len = borrowers.length
    borrowers.push({
      AnnualIncome: 0,
      CreditScore: "500-600",
      DOB: "",
      Expenses: [],
      FirstName: "Co-Borrower",
      LastName: len.toString(),
      MaritalStatus: "single",
    })
    setFormData({ ...data, Borrowers: borrowers })
  }
  return (
    <Button
      variant={"outline"}
      className="h-full w-full border border-black bg-green-200 shadow-md"
      onClick={AddCoborrowerToCXT}
    >
      <div
        // onClick={handleStepChange}
        className="flex h-8 w-full flex-row flex-wrap items-center justify-center  rounded-xl  hover:cursor-pointer "
      >
        <div>
          <Plus className="h-4 w-full" />
        </div>
        <div className="">
          <h4 className="text-md mx-auto font-light ">Add Co-Borrower</h4>
        </div>
      </div>
    </Button>
  )
}

function SubmitForm() {
  return (
    <Button
      variant={"outline"}
      className="h-full w-full border border-black bg-green-200 shadow-md"
    >
      <div
        // onClick={handleStepChange}
        className="flex w-full items-center  justify-center  rounded-xl  hover:cursor-pointer "
      >
        <div className="w-1/8">
          <Send className="mr-2" />
        </div>
        <div className="w-7/8">
          <h4 className="mx-auto text-xl font-light ">Submit!</h4>
        </div>
      </div>
    </Button>
  )
}

function MaxCoborrower() {
  return (
    <div className="mb-2 flex h-full w-full items-center justify-center rounded-xl border-2 border-dashed border-black border-opacity-25 bg-gray-200 px-4 text-center">
      <div
        // onClick={handleStepChange}
        className="flex  w-full  items-center  rounded-xl  hover:cursor-pointer "
      >
        <AlertTriangle className="h-4 " />

        <h4 className="text-md mx-auto w-full  font-light">
          Maximum Coborrowers
        </h4>
      </div>
    </div>
  )
}

function BorrowerQuizTrigger() {
  const { data, setFormData } = usePreqFormContext()

  return (
    <>
      <div className="mb-8 flex  w-full  gap-1 ">
        {data.Borrowers.map((item, i) => {
          return (
            <div className="w-full">
              <PrequalificationInformationPopUpForm
                key={i}
                Borrower={item}
                index={i}
              />
            </div>
          )
        })}
      </div>
      <div className="flex ">
        <div className="mx-auto w-full md:w-1/3">
          <SubmitForm />
        </div>
      </div>
    </>
  )
}
