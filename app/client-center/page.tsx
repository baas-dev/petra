import { CheckCircle, Home, Keyboard, Stamp } from "lucide-react"

import TitleWithIconCard from "@/components/Cards/TitleWithIconCard"
import IntroSection from "@/components/Sections/General/IntroSection"

export default async function ClientCenterPage() {
  return (
    <>
      <IntroSection ImageURL={"/site/cc/bg.png"} />
      <h1 className="text-4xl text-center">{`Let's Get Started!`}</h1>
      <div className="flex gap-4 max-w-4xl container mt-8 mb-16">
        <TitleWithIconCard
          icon={
            <div className="flex bottom-0">
              <CheckCircle className="w-20 h-20 mt-16" />
              <Stamp className="w-20 h-20 rotate-45 " />
            </div>
          }
          title={"Get Prequalified"}
          link={"/prequalification"}
        />
        <TitleWithIconCard
          icon={
            <div className="flex p-4 ">
              <Keyboard className="w-32 h-32" />
            </div>
          }
          title={"Apply Now"}
          link={"/apply"}
          delay={0.2}
        />
      </div>
    </>
  )
}
