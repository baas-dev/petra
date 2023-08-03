"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Hero1 from "@/components/BAAS/Heros/Hero1"
import Services from "@/components/Sections/Services/Services"
import News from "@/components/Sections/Social/News"

export default function IndexPage() {
  const parallax = useRef<IParallax>(null!)

  return (
    <>
      <div className="">
        <Hero1 />
        <div className="bg-secondary">
          <Services />
          <News />
        </div>
      </div>
    </>
  )
}

const BackgroundLayer = () => {
  const helpurl = (name: string, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`
  return (
    <>
      <ParallaxLayer offset={0} speed={0.3} style={{ opacity: 0.75 }}>
        <Image
          src={"/images/dots.svg"}
          height={500}
          width={1000}
          alt={""}
          className="-z-10 "
          style={{ display: "block", marginLeft: "-35%" }}
        />
      </ParallaxLayer>

      {/* <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
        <img
          src={helpurl("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "5%" }}
        />
        <img
          src={helpurl("cloud")}
          style={{ display: "block", width: "15%", marginLeft: "75%" }}
        />
      </ParallaxLayer> */}
    </>
  )
}
