"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { CheckCircle } from "lucide-react"

import TitleWithIconCard from "@/components/Cards/TitleWithIconCard"

import BACKEND from "../API"
import Achievements from "./Achievements"
// import CoreValuesSection from "./CoreValuesSection"
import MainHeroSection from "./MainHeroSection"
import TeamSection from "./TeamSection"
import { TestimonialSwiper } from "./Testimonials"
import Circles from "./circles"

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
  const [team, setTeam] = useState<[]>([])

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
    // GetTestimonials()
    // GetTeam()
  }, [])

  return (
    <>
      <IntroSection />
      {/* Core Values Section */}

      {/* <div className="min-h-screen bg-secondary overflow-x-hidden">
        <div className="md:hidden">
          <TeamSection data={team} />
          <TestimonialSwiper data={testimonials} />
          <Achievements />
          <MainHeroSection />
          <CoreValuesSection />
        </div>
        <div className="hidden md:block">
          <Parallax pages={2.8}>
            <ParallaxLayer offset={1} speed={0.3}>
              <Image
                src={"/images/mountains.png"}
                alt=""
                fill
                className="opacity-50"
              />
            </ParallaxLayer>
           
            <ParallaxLayer offset={0} speed={1}>
              <TeamSection data={team} />

              <TestimonialSwiper data={testimonials} />
              <Achievements />
              <MainHeroSection />
              <CoreValuesSection />
            </ParallaxLayer>
          </Parallax>
        </div>
      </div> */}
    </>
  )
}

function IntroSection() {
  return (
    <>
      <section>
        <Image
          src={"/site/about/bg.jpg"}
          height={2000}
          width={4000}
          alt=""
          className=" mx-auto  pb-4 mb-4 max-h-[500px] object-cover"
        />
        <h2 className="text-xl text-center max-w-4xl mx-auto">
          Our name comes from the Greek, meaning rock. We chose it because a
          rocksolid foundation undergirds all that we believe in and everything
          we do. We’re a small home mortgage lender, and that’s on purpose. So,
          whether you’re buying your first home, need a larger home for your
          growing family, or are ready to downsize, our purpose is to provide
          that same rock-solid certainty with your mortgage. We are called to
          help you move into the home that’s right for you, right where you find
          yourself in life’s journey. Welcome to the family.
        </h2>
        <div className="grid grid-cols-2 mt-8 md:grid-cols-3 space-x-4 px-4 container gap-2">
          <TitleWithIconCard
            icon={<CheckCircle className="text-white" />}
            title={"Home Loan Mortgage Checklist"}
          />
          <TitleWithIconCard
            icon={<CheckCircle className="text-white" />}
            title={"Home Loan Mortgage Checklist"}
          />
          <TitleWithIconCard
            icon={<CheckCircle className="text-white" />}
            title={"Home Loan Mortgage Checklist"}
          />
        </div>
      </section>
    </>
  )
}
