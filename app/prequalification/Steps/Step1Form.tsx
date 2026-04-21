"use client"

import { useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form } from "@/components/ui/form"
import { RevealAnimation } from "@/components/Animations/InViewAnimationWrapper"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import { TeamCard } from "@/components/Sections/Team/TeamCard"
import TeamMember from "@/components/interfaces/TeamMember.interface"
import BACKEND from "@/app/api"

import QuestionHeader from "../components/questionHeader"
import QuestionNext from "./QuestionNext"

const api = new BACKEND()

export const Step1FormSchema = z.object({
  Email: z.string().email("Please enter a valid email address"),
  Phone: z.string().min(10, "Please enter your phone number"),
  TeamMembers: z.array(z.string()),
})

export default function Step1Form(props: { HandleNext: any; UpdateState }) {
  const Step1FormCXT = useForm<z.infer<typeof Step1FormSchema>>({
    resolver: zodResolver(Step1FormSchema),
    defaultValues: {
      Email: "",
      Phone: "",
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

  function HandleSelected(ID: string) {
    // console.log(ID)
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
    <div className="mt-8 w-full">
      <Form {...Step1FormCXT}>
        <form onSubmit={(e) => e.preventDefault()} className="w-full space-y-6">
          <QuestionHeader
            title="Question 1"
            text="What is the best email and phone number to reach you, and was there a team member you are working with today?"
          />
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            <TextInput
              form={Step1FormCXT}
              options={{
                name: "Email",
                label: "Email Address",
                placeholder: "name@example.com",
              }}
            />
            <TextInput
              form={Step1FormCXT}
              options={{
                name: "Phone",
                label: "Phone Number",
                placeholder: "(555) 555-5555",
              }}
            />
          </div>
          <div className="max-w-4xl mx-auto">
            {teamMembers.length > 0 ? (
              <>
                <div
                  className={`flex flex-col md:flex-row max-w-4xl mx-auto items-center justify-center`}
                >
                  {teamMembers.slice(0, 2).map((item, i) => {
                    return (
                      <RevealAnimation
                        key={i} // Don't forget to add a unique key when mapping
                        options={{
                          delay: 0.2 * (i + 1),
                        }}
                      >
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
                      </RevealAnimation>
                    )
                  })}
                </div>
                <div
                  className={`flex flex-col md:flex-row max-w-4xl mx-auto items-center justify-center`}
                >
                  {teamMembers.slice(2, 5).map((item, i) => {
                    return (
                      <RevealAnimation
                        key={i} // Don't forget to add a unique key when mapping
                        options={{
                          delay: 0.2 * (i + 1),
                        }}
                      >
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
                      </RevealAnimation>
                    )
                  })}
                </div>

                <QuestionNext
                  action={Step1FormCXT.handleSubmit((data) => {
                    props.UpdateState(1, {
                      Email: data.Email,
                      Phone: data.Phone,
                      Team: data.TeamMembers,
                    })
                    props.HandleNext()
                  })}
                />
              </>
            ) : (
              <></>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}
