import BACKEND from "@/app/api"

import TeamSection from "../TeamSection"

const api = new BACKEND()

export default async function TeamPage() {
  let res = await api.GET({
    Route: "team",
  })

  return <TeamSection data={res.data ? res.data : []} />
}
