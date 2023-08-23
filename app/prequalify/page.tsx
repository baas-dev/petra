"use client"

// import PrequalificationForm from "@/components/Sections/Forms/PrequalificationFormv1"
import { useCallback, useRef, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { CardHeader } from "@material-tailwind/react"
import { AlertTriangle, Plus, Send } from "lucide-react"
import CurrencyInput from "react-currency-input-field"
import { useForm } from "react-hook-form"
import { boolean, z } from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Form, FormControl } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ToastAction } from "@/components/ui/toast"
import { toast } from "@/components/ui/use-toast"
import PrequalificationInformationPopUpForm from "@/components/BAAS/Dialogs/Prequalification"
import LocationInput from "@/components/BAAS/Forms/Inputs/LocationInput"

import "swiper/css"
import { useRouter } from "next/navigation"
import { Swiper, SwiperSlide } from "swiper/react"

import { CreateNewFormSubmission } from "../API/FORMS"
import PrequalificationFormProvider, {
  usePreqFormContext,
} from "./components/formContext"
import states from "./components/states.json"
import SubmitForm from "./components/submitForm"

const PrequalFormSchema = z.object({
  ShippingInformation: z.object({
    Address: z.string(),
    SuiteNumber: z.string().optional(),
    City: z.string(),
    State: z.string(),
    Zip: z.string(),
  }),
})

export default function IndexPage() {
  const PrequalificationFormCXT = useForm<z.infer<typeof PrequalFormSchema>>({
    resolver: zodResolver(PrequalFormSchema),
  })

  return (
    <>
      <PrequalificationFormProvider>
        <div className="container pt-24 flex w-full flex-col min-h-screen">
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
            <FormPage form={PrequalificationFormCXT} />
          </div>
        </div>
      </PrequalificationFormProvider>
    </>
  )
}

function FormPage({ form }) {
  const [showForm, setShowForm] = useState(true)

  function handleSetShowForm(val: boolean) {
    setShowForm(val)
  }
  function onSubmit(data) {
    console.log(data)
    let results = PrequalFormSchema.safeParse(data)
    console.log(results)
    if (results.success) {
      handleNext()
    }
  }

  const sliderRef = useRef<any>()

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  return (
    <div className="w-full pt-8 pb-8 text-center ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-wrap gap-2"
        >
          <Swiper slidesPerView={1} loop ref={sliderRef} className="mb-4">
            <SwiperSlide key={0}>
              <Question1
                form={form}
                showForm={showForm}
                handleSetShowForm={handleSetShowForm}
              />
              <NextQuestion />
            </SwiperSlide>
            <SwiperSlide key={0}>
              <Question2 />
            </SwiperSlide>
          </Swiper>
        </form>
      </Form>
    </div>
  )
}

function NextQuestion() {
  return (
    <Button type="submit">
      <CardTitle className="text-2xl">Continue!</CardTitle>
      <CardDescription className="text-xl ml-4 text-white">
        Go To Next Question
      </CardDescription>
    </Button>
  )
}

function Question1({ form, showForm, handleSetShowForm }) {
  return (
    <>
      <div className=" mb-4 flex w-full flex-row items-center rounded-xl bg-white p-4 text-left  ">
        <div className="w-full">
          <Label className="text-md text-primary underline ">Question 1</Label>
          <br />
          <Label className="text-xl font-light">
            Do you already have a property you were looking to purchase?
          </Label>
        </div>
      </div>
      <div className="flex w-full gap-2">
        <Card
          className={`mb-8 w-full hover:cursor-pointer `}
          onClick={() => handleSetShowForm(true)}
        >
          <CardHeader
            className={`bg-none py-4 ${
              showForm ? "bg-green-300" : ""
            }  hover:bg-green-200`}
          >
            <CardTitle className="text-2xl">Yes!</CardTitle>
            <CardDescription className="text-xl">
              I have a home in mind
            </CardDescription>
          </CardHeader>
        </Card>
        <Card
          onClick={() => handleSetShowForm(false)}
          className={`mb-8 w-full hover:cursor-pointer `}
        >
          <CardHeader
            className={`bg-none py-4 ${
              showForm ? "" : "bg-green-300"
            }  hover:bg-green-200`}
          >
            <CardTitle className="text-2xl">No, Not Yet!</CardTitle>
            <CardDescription className="text-xl">
              I am still looking for a place
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="w-full px-4  text-left">
        {showForm ? <LocationInput form={form} /> : <Question1Placeholder />}
      </div>
      {showForm ? (
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
      ) : (
        <></>
      )}
    </>
  )
}

function Question1Placeholder() {
  return (
    <div className="text-center">
      <p className="text-xl mb-8">
        You have selected that you are not currently interested in any
        properties at this time. <br /> We are so excited to help you start your
        home buying journey. 🏡
      </p>
    </div>
  )
}

function Question2() {
  const { data, setFormData } = usePreqFormContext()

  return (
    <>
      <div className=" mb-4 mt-8 flex w-full  flex-wrap justify-between rounded-xl bg-white p-4 text-left  ">
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
    </>
  )
}

function AddCoborrower() {
  const { data, setFormData } = usePreqFormContext()

  const AddCoborrowerToCXT = () => {
    let borrowers = data.Borrowers
    let len = borrowers.length
    borrowers.push({
      AnnualIncome: "",
      CreditScore: "500-600",
      DOB: {
        day: "1",
        month: "January",
        year: "",
      },

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
      className="h-full w-full border border-green-300 text-green-500 hover:bg-green-500 shadow-md"
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
