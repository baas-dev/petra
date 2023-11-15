import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RevealAnimation } from "@/components/Animations/InViewAnimationWrapper"
import HoverCard from "@/components/BAAS/Cards/HoverCard"

export default function Services() {
  return (
    <div className="w-full relative  h-full ">
      <section className=" z-20 flex flex-col  md:flex-row  pb-2   text-secondary">
        <RevealAnimation
          options={{
            delay: 0.2,
          }}
        >
          <HoverCard
            image={"/site/home/purchase.png"}
            title={"Purchase a Home"}
            desc=" Need cash for a home improvement or something else?"
          />
        </RevealAnimation>
        <RevealAnimation
          options={{
            delay: 0.4,
          }}
        >
          <HoverCard
            image={"/site/home/refinance.png"}
            title={"Refinance Your Home"}
            desc={"Need cash for a home improvement or something else?"}
          />
        </RevealAnimation>
      </section>
    </div>
  )
}
