"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form } from "@/components/ui/form"
import TeamMember from "@/components/interfaces/TeamMember.interface"
import BACKEND from "@/app/API"

import QuestionHeader from "../components/questionHeader"
import QuestionNext from "./QuestionNext"

const api = new BACKEND()

export const Step1FormSchema = z.object({
  TeamMembers: z.array(z.string()),
})

export default function Step1Form(props: { HandleNext: any; UpdateState }) {
  const Step1FormCXT = useForm<z.infer<typeof Step1FormSchema>>({
    resolver: zodResolver(Step1FormSchema),
    defaultValues: {
      TeamMembers: [],
    },
  })

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])

  let LoadTeam = async () => {
    let res = await api
      .GET({
        Route: "team",
      })
      .then((val) => val.data)
      .catch((err) => [])

    setTeamMembers(res)
    return
  }

  function HandleTeamSelect(name: string) {
    let team = Step1FormCXT.getValues("TeamMembers")

    let index = team.findIndex((el) => el === name)

    if (index === -1) {
      team.push(name)
    }

    if (index !== -1) {
      team.splice(index, 1)
    }

    Step1FormCXT.setValue("TeamMembers", team)
  }

  useEffect(() => {
    LoadTeam()
  }, [])

  async function onSubmit(data: z.infer<typeof Step1FormSchema>) {
    console.log(data)
  }

  function HandleSelected(ID: string) {
    console.log(ID)
    let indexSel = Step1FormCXT.getValues("TeamMembers").findIndex(
      (el) => el === ID
    )

    if (indexSel >= 0) {
      return true
    }

    return false
  }
  Step1FormCXT.watch()
  return (
    <div className="w-full mt-8">
      <Form {...Step1FormCXT}>
        <form
          onSubmit={Step1FormCXT.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <QuestionHeader
            title="Question 1"
            text="Was there a team member you are working with today?"
          />
          <div className="grid grid-cols-3">
            {teamMembers.map((item, i) => {
              return (
                <TeamCard
                  key={i}
                  action={HandleTeamSelect}
                  ID={item.ID}
                  description={item.Biography}
                  title={item.Name}
                  name={item.Name}
                  rmloNumber={item.RNumber.toString()}
                  image={item.Image}
                  isSelected={HandleSelected}
                />
              )
            })}
          </div>

          <QuestionNext
            action={() => {
              props.UpdateState(1, Step1FormCXT.getValues("TeamMembers"))
              props.HandleNext()
            }}
          />
        </form>
      </Form>
    </div>
  )
}

const TeamCard = (props: {
  ID: string
  title?: string
  description?: string
  image?: string
  name: string
  rmloNumber?: string
  action: (name: string) => void
  isSelected: (Name) => boolean
}) => {
  return (
    <div
      className={`w-full px-4 h-full animate hover:cursor-pointer hover:scale-110 transition`}
      onClick={() => props.action(props.name)}
    >
      <div className="mx-auto mb-10 w-full ">
        <div className=" overflow-hidden rounded-lg">
          <Image
            src={props.image ? props.image : ""}
            alt=""
            width={500}
            height={500}
            className="w-full object-contain"
          />
          <div className=" left-0 w-full text-center bottom-5">
            <div
              className={`py-4 overflow-hidden  rounded-b-lg ${
                props.isSelected(props.name)
                  ? "border-2 bg-green-300"
                  : "bg-white"
              }`}
            >
              <h3 className="text-base font-semibold text-dark">
                {props.title}
              </h3>
              <p className="text-sm text-body-color">
                RLMO #:{props.rmloNumber}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
