import { useEffect, useRef, useState } from "react"

import TeamMember from "@/components/interfaces/TeamMember.interface"
import BACKEND from "@/app/API"

import { TeamCard } from "./TeamCard"

export default function TeamSection() {
  const api = new BACKEND()
  const [teamMember, setTeamMembers] = useState<TeamMember[]>([])

  let LoadTeam = async () => {
    let res = await api
      .GET({
        Route: "team",
      })
      .then((val) => val.data)
      .catch((err) => [])

    setTeamMembers(res)
  }

  useEffect(() => {
    LoadTeam()
  }, [])

  function LoadLength() {
    let length = teamMember.length.toString()
    return `grid-cols-${length}`
  }
  return (
    <>
      <div className={`flex flex-wrap   md:flex-nowrap`}>
        {teamMember.length > 0 ? (
          teamMember.map((item, i) => (
            <>
              <div className="w-1/2 px-2 md:w-full">
                <TeamCard
                  key={i}
                  action={() => null}
                  ID={item.ID}
                  description={item.Biography}
                  title={item.Name}
                  name={item.Name}
                  rmloNumber={item.RNumber.toString()}
                  image={item.Image}
                  isSelected={() => false}
                />
              </div>
            </>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  )
}
