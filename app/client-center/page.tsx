import { CheckCircle, Home, Keyboard, Stamp } from "lucide-react"

import TitleWithIconCard from "@/components/Cards/TitleWithIconCard"
import IntroSection from "@/components/Sections/General/IntroSection"

export default async function ClientCenterPage() {
  return (
    <>
      <IntroSection ImageURL={"/site/cc/bg.png"} />
      <h1 className="text-center text-4xl">{`Let's Get Started!`}</h1>
      <div className="container mb-16 mt-8 flex max-w-4xl flex-col gap-8 md:flex-row justify-center items-center">
        <TitleWithIconCard
          icon={
            <div className="bottom-0 flex">
              <CheckCircle className="mt-12 h-14 w-14" />
              <Stamp className="h-14 w-14 rotate-45 " />
            </div>
          }
          width="w-full"
          height="h-48"
          title={"Get Prequalified"}
          link={"/prequalification"}
        />
        <TitleWithIconCard
          icon={
            <div className="flex p-4 ">
              <Keyboard className="h-24 w-32" />
            </div>
          }
          height="h-48"
          width="w-full"
          title={"Apply Now"}
          link={"/apply"}
          delay={0.2}
        />
      </div>
    </>
  )
}
