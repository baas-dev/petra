import { getPetraTeam } from "@/lib/petra-public-api"
import TeamSection from "@/components/Sections/Team/TeamSection"

export default async function TeamPage() {
  const team = await getPetraTeam().catch(() => [])
  return <TeamSection data={team} />
}
