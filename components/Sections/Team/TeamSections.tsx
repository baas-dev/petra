import { useEffect, useRef } from "react"

import TeamMember from "@/components/interfaces/TeamMember.interface"
import BACKEND from "@/app/API"

import { TeamCard } from "./TeamCard"

export default function TeamSection() {
  const api = new BACKEND()
  const teamMemberRef = useRef<TeamMember[]>([])

  let LoadTeam = async () => {
    let res = await api
      .GET({
        Route: "team",
      })
      .then((val) => val.data)
      .catch((err) => [])

    teamMemberRef.current = res
  }

  useEffect(() => {
    LoadTeam()
  }, [teamMemberRef])

  function LoadLength() {
    let length = teamMemberRef.current.length.toString()
    return `grid-cols-${length}`
  }
  return (
    <>
      <div
        className={`grid grid-cols-2 gap-2 w-full z-50 justify-center md:${LoadLength()}`}
      >
        {teamMemberRef.current.length > 0 ? (
          teamMemberRef.current.map((item, i) => (
            <>
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
            </>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  )
}
