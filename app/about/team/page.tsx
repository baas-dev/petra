import TeamSection from "@/components/Sections/Team/TeamSection"
import BACKEND from "@/app/api"

const api = new BACKEND()

export default async function TeamPage() {
  let res = await api.GET({
    Route: "team",
  })

  return <TeamSection data={res.data ? res.data : []} />
  // return <></>
}
