"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"

import BACKEND from "../API"
import Achievements from "./Achievements"
import CoreValuesSection from "./CoreValuesSection"
import MainHeroSection from "./MainHeroSection"
import TeamSection from "./TeamSection"
import { TestimonialSwiper } from "./Testimonials"

const api = new BACKEND()
export interface Teammate {
  Name?: string
  Image?: string
  RNumber?: string
  Biography?: string
  Title: string
  Phone?: string
  Email?: string
  Published?: string
}
export default function IndexPage() {
  const [testimonials, setTestimonials] = useState([])
  const [team, setTeam] = useState<any[]>([])

  let GetTestimonials = async () => {
    let res = await api.GET({
      Route: "quotes",
    })
    setTestimonials(res.data)
  }
  let GetTeam = async () => {
    let res = await api.GET({
      Route: "team",
    })
    setTeam(res.data)
  }
  useEffect(() => {
    GetTestimonials()
    GetTeam()
  }, [])

  return (
    <>
      <div className="min-h-screen bg-secondary overflow-x-hidden">
        <div className="md:hidden">
          <MainHeroSection />
          <TeamSection data={team} />
          <Achievements />
        </div>
        <div className="hidden md:block">
          <Parallax pages={3}>
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
              <TeamSection data={team} />

              <TestimonialSwiper data={testimonials} />
              <Achievements />
              <MainHeroSection />
              <CoreValuesSection />
            </ParallaxLayer>
          </Parallax>
        </div>
      </div>
    </>
  )
}
