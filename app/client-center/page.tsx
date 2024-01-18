import { CheckCircle, Home, Keyboard, Stamp } from "lucide-react"

import TitleWithIconCard from "@/components/Cards/TitleWithIconCard"
import IntroSection from "@/components/Sections/General/IntroSection"

export default async function ClientCenterPage() {
  return (
    <>
      <IntroSection ImageURL={"/site/cc/bg.png"} />
      <h1 className="text-center text-4xl">{`Let's Get Started!`}</h1>
      <div className="container mb-16 mt-8 flex max-w-4xl flex-col gap-4 md:flex-row">
        <TitleWithIconCard
          icon={
            <div className="bottom-0 flex">
              <CheckCircle className="mt-16 h-20 w-20" />
              <Stamp className="h-20 w-20 rotate-45 " />
            </div>
          }
          title={"Get Prequalified"}
          link={"/prequalification"}
        />
        <TitleWithIconCard
          icon={
            <div className="flex p-4 ">
              <Keyboard className="h-32 w-32" />
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
