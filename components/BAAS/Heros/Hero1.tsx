import Image from "next/image"

import Services from "@/components/Sections/Services/Services"

import "./styles.module.css"
import {
  RevealAnimation,
  SlideInAnimation,
} from "@/components/Animations/InViewAnimationWrapper"

export default function Hero1() {
  return (
    <HeroContainer>
      <div className="container mt-48 flex h-full w-full flex-col items-center justify-center md:flex-row">
        <RevealAnimation
          options={{
            delay: 0.1,
          }}
        >
          <Image
            width={1000}
            height={700}
            alt={""}
            className="  z-10  h-full  w-full  max-w-xl rounded-md object-contain "
            src={"/images/plogo.png"}
          />
        </RevealAnimation>
        <SlideInAnimation
          options={{
            delay: 0.3,
          }}
        >
          <Image
            width={1000}
            height={350}
            alt={""}
            className=" z-10  float-right h-full w-full max-w-xl  rounded-md object-contain  "
            src={"/images/tag.png"}
          />
        </SlideInAnimation>
      </div>
      <div className="mx-auto h-full w-full max-w-4xl md:my-16">
        <Services />
      </div>
    </HeroContainer>
  )
}

function HeroContainer({ children }) {
  return (
    <>
      <div className={"heroWrapper h-full"}>
        <div className={"imageWrapper"}>
          <Image
            priority
            src={"/site/home/main.jpg"}
            fill
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%)",
            }}
            className="mt-12 h-full min-h-screen w-full object-cover  object-center opacity-80 shadow-md"
            alt="hero image example"
          />
        </div>
        <div className={"heroContent"}>{children}</div>
      </div>
    </>
  )
}
