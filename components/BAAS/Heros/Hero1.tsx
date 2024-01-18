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
      <div className="container flex h-full flex-col mt-48 md:flex-row w-full items-center justify-center">
        <RevealAnimation
          options={{
            delay: 0.1,
          }}
        >
          <Image
            width={1000}
            height={700}
            alt={""}
            className="  w-full  max-w-xl  rounded-md  h-full object-contain z-10 "
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
            className=" rounded-md  w-full max-w-xl h-full object-contain  float-right z-10  "
            src={"/images/tag.png"}
          />
        </SlideInAnimation>
      </div>
      <div className="w-full mx-auto md:my-16 max-w-4xl h-full">
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
            className="min-h-screen shadow-md opacity-80 object-center mt-12  h-full w-full object-cover"
            alt="hero image example"
          />
        </div>
        <div className={"heroContent"}>{children}</div>
      </div>
    </>
  )
}
