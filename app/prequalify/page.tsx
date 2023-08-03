"use client"

// import PrequalificationForm from "@/components/Sections/Forms/PrequalificationFormv1"
import {
  AlertCircle,
  AlertTriangle,
  Check,
  ChevronRight,
  Droplets,
  Maximize,
  MoreHorizontal,
  PersonStanding,
  Plane,
  Plus,
  SendIcon,
  User,
  UserPlus,
  UserX,
  Users,
} from "lucide-react"
import CurrencyInput from "react-currency-input-field"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import PrequalificationInformationPopUpForm from "@/components/BAAS/Dialogs/Prequalification"

import PrequalificationFormProvider, { usePreqFormContext } from "./formContext"

export default function IndexPage() {
  return (
    <>
      <PrequalificationFormProvider>
        <div className="mt-24 flex flex-col w-full container max-w-6xl">
          <div className="w-full items-baseline h-full flex flex-wrap px-4 rounded-xl">
            <div className=" w-full h-full ">
              <span className="block text-md  font-semibold text-primary">
                Borrower Snapshot
              </span>
              <h2 className="text-dark text-left text-2xl  mx-auto  font-medium uppercase ">
                Prequalification
              </h2>
            </div>
            <div className="font-light h-full w-full max-w-md ">
              <p>
                This form helps our team determine the best options for your
                lending
              </p>
            </div>
          </div>
          <div className="w-full rounded-xl mb-16">
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
    <div className="w-full text-center pt-4 ">
      <div className=" w-full flex flex-row py-4 items-center mb-4 px-4 text-left bg-secondary rounded-xl  ">
        <div className="w-full">
          <Label className="text-primary underline text-md ">Question 1</Label>
          <br />
          <Label className="text-xl font-light">
            Do you already have a property you were looking to purchase?
          </Label>
        </div>

        <div className="flex w-1/8">
          <Switch className="" id="address" />
        </div>
      </div>

      <div className="w-full text-left px-4">
        <Label className="text-primary text-left underline text-md ">
          Location Information
        </Label>
      </div>

      <div className="w-full text-left  px-4">
        <div className="w-full mt-4 flex gap-2">
          <div className="flex flex-wrap w-full">
            <Label htmlFor="username" className="w-full  mb-2 ">
              Street Address
            </Label>
            <Input
              id="username"
              placeholder="123 Example St."
              className="w-full bg-white rounded-md"
            />
          </div>
          <div className="flex flex-wrap w-full">
            <Label htmlFor="username" className="text-right mb-2">
              Suite/Apt #
            </Label>
            <Input
              id="username"
              placeholder="#123"
              className="col-span-3 bg-white rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="w-full  flex gap-2 p-4">
        <div className="flex flex-wrap w-full">
          <Label htmlFor="username" className="w-full text-left mb-2 ">
            City
          </Label>
          <Input
            id="username"
            value="123 Example St."
            className="w-full bg-white rounded-md"
          />
        </div>
        <div className="flex flex-wrap w-full">
          <Label htmlFor="username" className="text-right mb-2">
            State (optional)
          </Label>
          <Input
            id="username"
            value="@peduarte"
            className="col-span-3 bg-white rounded-md"
          />
        </div>
        <div className="flex flex-wrap w-full">
          <Label htmlFor="username" className="text-right mb-2">
            Zip (optional)
          </Label>
          <Input
            id="username"
            placeholder="00000"
            // value="00000"
            className="col-span-3 bg-white rounded-md"
          />
        </div>
      </div>
      <div className="w-full text-left flex flex-col px-4">
        <Label className="text-primary text-left underline text-md mb-2">
          Estimated Value of Desired Property
        </Label>
        <CurrencyInput
          id="input-example"
          name="input-name"
          placeholder="Please enter a number"
          defaultValue={0}
          decimalsLimit={2}
          className="w-full max-w-sm border border-gray-400 border-opacity-25"
          prefix="$"
          onValueChange={(value, name) => {
            console.log(value)
          }}
        />
      </div>
      <div className=" w-full flex flex-wrap py-4  mt-8 justify-between mb-4 px-4 text-left bg-secondary rounded-xl  ">
        <div className="w-1/2">
          <Label className="text-primary text-md underline">Question 2</Label>
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

function QuizBodyLayout() {
  interface Status {
    color: string
    icon: JSX.Element
    text: string
  }

  let Statuses: Status[] = [
    {
      color: "orange",
      icon: <MoreHorizontal />,
      text: "Not Started",
    },
    {
      color: "red",
      icon: <AlertCircle />,
      text: "Needs Attention",
    },
    {
      color: "green",
      icon: <Check />,
      text: "Complete!",
    },
  ]

  return (
    <>
      <BorrowerQuizTrigger />
    </>
  )
}

function QuizFooterLayout() {
  return (
    <div className="flex h-full w-full items-center justify-center px-4">
      <div className="text-center">
        <Button className="bg-gray-400 hover:bg-gray-400 shadow-lg transition-all  ">
          Next <ChevronRight />
        </Button>
      </div>
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
      className="h-full w-full bg-green-200 shadow-md border border-black"
      onClick={AddCoborrowerToCXT}
    >
      <div
        // onClick={handleStepChange}
        className="flex flex-row justify-center h-8 w-full flex-wrap items-center  rounded-xl  hover:cursor-pointer "
      >
        <div>
          <Plus className="h-4 w-full" />
        </div>
        <div className="">
          <h4 className="mx-auto text-md font-light ">Add Co-Borrower</h4>
        </div>
      </div>
    </Button>
  )
}

function SubmitForm() {
  return (
    <Button
      variant={"outline"}
      className="h-full w-full bg-green-200 shadow-md border border-black"
    >
      <div
        // onClick={handleStepChange}
        className="flex justify-center w-full  items-center  rounded-xl  hover:cursor-pointer "
      >
        <div className="w-1/8">
          <SendIcon className="mr-2" />
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
    <div className="h-full w-full bg-gray-200 border-2 border-dashed justify-center items-center text-center border-black rounded-xl mb-2 px-4 border-opacity-25 flex justify-center items-center">
      <div
        // onClick={handleStepChange}
        className="flex  w-full  items-center  rounded-xl  hover:cursor-pointer "
      >
        <AlertTriangle className="h-4 " />

        <h4 className="mx-auto w-full text-md  font-light">
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
      <div className="w-full flex  gap-1  mb-8 ">
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
        <div className="w-full md:w-1/3 mx-auto">
          <SubmitForm />
        </div>
      </div>
    </>
  )
}
