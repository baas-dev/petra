import * as React from "react"

import { TeamCard } from "@/components/BAAS/Cards/TeamCard"

export default async function OurTeam() {
  return (
    <div className="container mx-auto mb-28 w-full">
      <div className="grid grid-cols-4 ">
        <TeamCard />
        <TeamCard />

        <TeamCard />

        <TeamCard />
      </div>
    </div>
  )
}
