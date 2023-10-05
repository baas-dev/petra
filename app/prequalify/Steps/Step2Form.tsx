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
import BACKEND from "@/app/API"

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
    <div className="w-full pt-8 pb-8 text-center ">
      <div className="flex w-full gap-2 bg-none mb-4">
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

            <AddressQuestion
              form={Step2FormCXT}
              showForm={showForm}
              handleSetShowForm={handleSetShowForm}
            />
            {/* <NextQuestionButton action={props.HandleNext} isDisabled={false} /> */}
            <div className="flex gap-2 justify-between">
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
                className=" mb-4 flex hover:bg-green-300 h-full w-full flex-row items-center border-2 bg-green-200 mx-auto hover:scale-110 transform transition md:w-1/2 text-center hover:cursor-pointer rounded-xl  p-4  "
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
          <AddressPlaceholder />
          <div className="w-full flex justify-between gap-2">
            <PreviousQuestionButton
              action={props.HandlePrev}
              isDisabled={false}
            />
            <QuestionNext action={props.HandleNext} />
          </div>
        </>
      )}
    </div>
  )
}

function AddressPlaceholder() {
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
