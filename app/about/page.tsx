"use client"

import Image from "next/image"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"

import CoreValuesSection from "./CoreValuesSection"
import MainHeroSection from "./MainHeroSection"
import TeamSection from "./TeamSection"
import Testimonial from "./Testimonials"

export default function IndexPage() {
  return (
    <>
      <div className="min-h-screen bg-secondary">
        <div className="md:hidden">
          <MainHeroSection />
          <CoreValuesSection />
          <TeamSection />
          <Testimonial />
        </div>
        <div className="hidden md:block">
          <Parallax pages={3.2}>
            <ParallaxLayer offset={1} speed={0.3}>
              <Image
                src={"/images/mountains.png"}
                alt=""
                fill
                className="opacity-25"
              />
            </ParallaxLayer>
            {/* Content Layer */}
            <ParallaxLayer offset={0} speed={1}>
              <MainHeroSection />
              <CoreValuesSection />
              <TeamSection />
              <Testimonial />
            </ParallaxLayer>
          </Parallax>
        </div>
      </div>
      {/* <AboutUsParallax /> */}
    </>
  )
}
