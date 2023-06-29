"use client"

import { useRef } from "react"
import Image from "next/image"
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Banner from "@/components/BAAS/Banners/Banner"
import CoreValues from "@/components/Sections/About/CoreValues"
import TeamGallery from "@/components/Sections/About/TeamGallery"

import HorizontalParallax from "./horizontalParallax"

// Little helpers ...
const helpurl = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`

export default function AboutUsParallax() {
  const parallax = useRef<IParallax>(null!)
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "black" }}>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={2}
          speed={0.1}
          style={{
            backgroundSize: "100%",
            backgroundPosition: "contain",
            // backgroundImage: helpurl("clients", true),
          }}
          // className="bg-gray-300"
        >
          <Image
            src={"/images/mountains.png"}
            fill
            alt={""}
            className="h-screen w-screen object-contain"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={2}
          // className="bg-primary"
          style={{
            backgroundImage: helpurl("stars", true),
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={helpurl("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={helpurl("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.25} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={helpurl("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={helpurl("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.35} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={helpurl("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={helpurl("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={helpurl("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={helpurl("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={helpurl("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={helpurl("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={helpurl("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1}>
          {/* <Banner
            Title="About Petra"
            Subtitle="We are proud to serve our Texas neighbors, and invite you to learn more about us"
          /> */}

          <div className="grid grid-cols-2  md:grid-cols-6 mx-auto gap-2  my-64 px-4">
            <TeamCard />
            <TeamCard />
            <TeamCard /> <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
          {/* <Reviews /> */}
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

const TeamCard = () => {
  return (
    <div
      className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
      style={{ backgroundImage: "url('...')", height: "400px" }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="flex h-full justify-center">
          <div className="text-white align-bottom absolute bottom-0 py-8 px-4">
            <h2 className="mb-4 text-4xl font-semibold pt-4">Heading</h2>
            <h4 className="mb-6 text-xl font-semibold">This is the subtext</h4>
            <button
              type="button"
              className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Call to action
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const CoreHero = () => {
  return (
    <div className="h-screen w-screen container grid   grid-cols-1 md:grid-cols-2">
      <div className="h-96 w-full my-auto bg-gray-200 rounded-xl"></div>

      <div className="h-96 w-full my-auto bg-gray-200 rounded-xl">
        <TeamCard />
      </div>
    </div>
  )
}
