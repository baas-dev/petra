"use client"

import { useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { boolean, z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import SelectInput from "@/components/BAAS/Forms/Inputs/Select"
import TeamMember from "@/components/interfaces/TeamMember.interface"
import BACKEND from "@/app/api"

import AddressQuestion from "../components/AddressQuestion"
import QuestionHeader from "../components/questionHeader"
import NextQuestionButton from "./NextQuestionButton"
import PreviousQuestionButton from "./PrevQuestionButton"
import QuestionNext from "./QuestionNext"

const api = new BACKEND()

export const Step2FormSchema = z.object({
  AddressInformation: z
    .object({
      Address: z.string(),
      SuiteNumber: z.string().optional(),
      City: z.string(),
      State: z.string(),
      Zip: z.string(),
    })
    .optional(),
  Price: z.string().optional(),
})

export default function Step2Form(props: {
  HandleNext: any
  HandlePrev: any
  UpdateState
}) {
  const [showForm, setShowForm] = useState(true)
  const [valid, setValidity] = useState(false)
  function handleSetShowForm(val: boolean) {
    if (val == true) {
      setShowForm(true)
      setValidity(false)
    }
    if (val == false) {
      setShowForm(false)
      setValidity(true)
    }
  }
  const Step2FormCXT = useForm<z.infer<typeof Step2FormSchema>>({
    resolver: zodResolver(Step2FormSchema),
    defaultValues: {
      Price: "0",
    },
  })

  async function onSubmit(data: z.infer<typeof Step2FormSchema>) {
    console.log(data)
    props.HandleNext()

    props.UpdateState(2, {
      Enabled: showForm,
      Address: Step2FormCXT.getValues("AddressInformation"),
      Price: Step2FormCXT.getValues("Price"),
    })
  }

  Step2FormCXT.watch()
  return (
    <div className="w-full py-8 text-center">
      {showForm ? (
        <Form {...Step2FormCXT}>
          <form
            onSubmit={Step2FormCXT.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <QuestionHeader
              title="Question 2"
              text="Do you have a property in mind?"
            />
            <div className="mb-4 flex w-full gap-2 bg-none">
              <Card
                className={`w-full hover:cursor-pointer  `}
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
                className={` w-full hover:cursor-pointer `}
              >
                <CardHeader
                  className={`bg-none py-4 ${
                    showForm ? "" : "bg-blue-300"
                  }  hover:bg-blue-200`}
                >
                  <CardTitle className="text-2xl">No, Not Yet!</CardTitle>
                  <CardDescription className="text-xl">
                    I am still looking for a place
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <AddressQuestion
              form={Step2FormCXT}
              showForm={showForm}
              handleSetShowForm={handleSetShowForm}
            />
            {/* <NextQuestionButton action={props.HandleNext} isDisabled={false} /> */}
            <div className="flex justify-between gap-2">
              <PreviousQuestionButton
                action={props.HandlePrev}
                isDisabled={false}
              />
              <Button
                type="submit"
                // onClick={() => {
                //   if (Step2FormCXT.formState.isValid) {
                //     props.UpdateState({
                //       Address: Step2FormCXT.getValues("AddressInformation"),
                //       Price: Step2FormCXT.getValues("Price"),
                //     })
                //     props.HandleNext()
                //   }
                // }}
                className=" mx-auto mb-4 flex h-full w-full flex-row items-center rounded-xl border-2 bg-green-200 p-4 text-center transition hover:animate-pulse hover:cursor-pointer hover:bg-green-300 md:w-1/2  "
                disabled={false}
              >
                <div className="w-full">
                  <Label className="text-2xl text-black underline ">
                    Next Question
                  </Label>
                </div>
              </Button>
            </div>
          </form>
        </Form>
      ) : (
        <>
          <div className="mb-4 flex w-full flex-wrap gap-2 bg-none">
            <QuestionHeader
              title="Question 2"
              text="Do you have a property in mind?"
            />
            <div className="flex w-full gap-2">
              <Card
                className={`w-full hover:cursor-pointer  `}
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
                className={` w-full hover:cursor-pointer `}
              >
                <CardHeader
                  className={`bg-none py-4 ${
                    showForm ? "" : "bg-blue-100"
                  }  hover:bg-blue-200`}
                >
                  <CardTitle className="text-2xl">No, Not Yet!</CardTitle>
                  <CardDescription className="text-xl">
                    I am still looking for a place
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          <AddressPlaceholder />
          <div className="flex w-full justify-between gap-2">
            <PreviousQuestionButton
              action={props.HandlePrev}
              isDisabled={false}
            />
            <Button
              type="button"
              onClick={props.HandleNext}
              className=" mx-auto mb-4 flex h-full w-full flex-row items-center rounded-xl border-2 bg-green-200 p-4 text-center transition hover:animate-pulse hover:cursor-pointer hover:bg-green-300 md:w-1/2  "
              disabled={false}
            >
              <div className="w-full">
                <Label className="text-2xl text-black underline ">
                  Next Question
                </Label>
              </div>
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

function AddressPlaceholder() {
  return (
    <div className="my-8 rounded-xl bg-white p-4 text-center">
      <p className="text-2xl font-semibold">
        You have selected that you are not currently interested in any
        properties at this time. <br /> We are so excited to help you start your
        home buying journey! 🏡
      </p>
    </div>
  )
}
