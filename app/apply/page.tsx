"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { z } from "zod"

import { getPetraTeamClient } from "@/lib/petra-client"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { RevealAnimation } from "@/components/Animations/InViewAnimationWrapper"
import { TeamCard } from "@/components/Sections/Team/TeamCard"
import TeamMember from "@/components/interfaces/TeamMember.interface"

import QuestionNext from "../prequalification/Steps/QuestionNext"
import QuestionHeader from "../prequalification/components/questionHeader"

export default function Step1Form(props: {}) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  function processString(inputString: string): string {
    // Remove non-alphabetic characters and convert to lowercase
    const processedString = inputString.replace(/[^a-zA-Z]/g, "").toLowerCase()
    return processedString
  }
  const [selected, setSelected] = useState<string | null>(null)
  let LoadTeam = async () => {
    const res = await getPetraTeamClient().catch(() => [])

    setTeamMembers(res)
    return
  }

  useEffect(() => {
    LoadTeam()
  }, [])

  function LoadLength() {
    let length = teamMembers.length.toString()
    return `grid-cols-${length}`
  }
  let classStr = LoadLength()
  let r = useRouter()
  return (
    <div className="container mt-8 size-full min-h-screen">
      <QuestionHeader
        title="Select Your Team Member"
        text="Which Petra Agent are you applying through?"
      />
      {teamMembers.length > 0 ? (
        <>
          <div
            className={`mx-auto flex max-w-4xl flex-col items-center justify-center md:flex-row`}
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
                    action={() => setSelected(item.Name)}
                    ID={item.ID}
                    description={item.Biography}
                    title={item.Name}
                    name={item.Name}
                    rmloNumber={item.RNumber.toString()}
                    image={item.Image}
                    isSelected={() => selected == item.Name}
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
                    action={() => setSelected(item.Name)}
                    ID={item.ID}
                    description={item.Biography}
                    title={item.Name}
                    name={item.Name}
                    rmloNumber={item.RNumber.toString()}
                    image={item.Image}
                    isSelected={() => selected == item.Name}
                  />
                </RevealAnimation>
              )
            })}
          </div>
          {selected != null ? (
            <Button
              onClick={() => {
                const teammate = teamMembers.find(
                  (member) => member.Name === selected
                )
                const fallback = `https://${processString(
                  teammate?.Name || ""
                )}.zipforhome.com`
                r.replace(teammate?.ApplicationURL || fallback)
                //   props.UpdateState(1, Step1FormCXT.getValues("TeamMembers"))
                //   props.HandleNext()
              }}
              className=" mx-auto mb-8 flex w-full flex-row items-center rounded-xl border-2 bg-green-200 p-4 text-center transition hover:animate-pulse hover:cursor-pointer md:w-1/2  "
            >
              <div className="w-full">
                <Label className="text-dark text-2xl underline hover:cursor-pointer">
                  Apply Now with{" "}
                  {teamMembers.find((member) => member.Name === selected)?.Name}
                </Label>
              </div>
            </Button>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
