"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import BigCard from "@/components/BAAS/Cards/BigCard"
import LongCardDetail from "@/components/BAAS/Cards/LongCardDetail"
import Hero1 from "@/components/BAAS/Heros/Hero1"
import Services from "@/components/Sections/Services/Services"
import News from "@/components/Sections/Social/News"

export default function IndexPage() {
  const parallax = useRef<IParallax>(null!)

  return (
    <>
      <Hero1 />
      <Services />
      <div className="grid grid-cols-1 md:grid-cols-3 container">
        <Graphs />
        <LatestArticle />
      </div>
    </>
  )
}

function Graphs() {
  return (
    <div className="container h-full w-full flex flex-wrap justify-center items-center">
      <div className=" overflow-x-hidden w-full">
        <iframe
          src="//www.mortgagecalculator.org/rates-widgets/mortgages/widget.php"
          className="h-96  w-96 overflow-hidden"
        />
        <iframe
          className="h-96 mt-2 w-full"
          src="//www.mortgagecalculator.org/rates-widgets/mortgages/text-widget.php?advanced&amp;data=30yr_fr|15yr_fr"
        />
      </div>
    </div>
  )
}

function LatestArticle() {
  return (
    <div className=" w-full col-span-2">
      <LongCardDetail
        Title={"No Articles Yet!"}
        Description="This site has not yet posted.  Please check back later."
      />
      <BigCards />
    </div>
  )
}

function BigCards() {
  let InfoArray = [
    {
      Title: "Easy Mortgage Payment Calculator",
      Description: "Calculate monthly payments on a loan",
      Button: true,
      btnText: "Try It Now",
      bg: "bg-primary/60",
      bgHover: "bg-primary",
      link: "/resources/mortgage-calculator",
      image: "",
    },
    {
      Title: "FAQs",
      Description: "Common Questions From Homebuyers",
      Button: true,
      btnText: "We Have Answers",
      bg: "bg-primary/60",
      bgHover: "bg-primary",
      link: "/resources/faqs",
      image: "",
    },
    {
      Title: "Downloads & Tools",
      Description: "Viewable documents that help you purchase your home",
      Button: true,
      btnText: "Go Now",
      bg: "bg-primary/60",
      bgHover: "bg-primary",
      link: "/resources/",
      image: "",
    },
    {
      Title: "Easy Mortgage Payment Calculator",
      Description: "",
      Button: true,
      btnText: "Start figuring it out!",
      bg: "bg-primary/60",
      bgHover: "bg-primary",
      link: "/resources/mortgage-calculator",
      image: "",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {InfoArray.map((item, i) => (
        <>
          <BigCard
            Title={item.Title}
            Description={item.Description}
            btn={item.Button}
            btnText={item.btnText}
            bg={item.bg}
            bgHover={item.bgHover}
            image={item.image}
            link={item.link}
          />
        </>
      ))}
    </div>
  )
}

function BottomHalf() {
  return (
    <>
      <div className=" container flex items-center justify-center gap-2 md:flex-row">
        <div className="flex h-80 md:w-1/3 items-center justify-center">
          <div className="mx-auto h-full w-full">
            <iframe
              src="//www.mortgagecalculator.org/rates-widgets/mortgages/widget.php"
              className="mr-0 h-full w-full pr-0"
            />
          </div>
        </div>
        {/* <div className="bg-gray-400 h-48 w-1/2 "></div> */}
        <div className=" w-full col-span-2">
          <LongCardDetail
            Title={"No Articles Yet!"}
            Description="This site has not yet posted. Please check back later."
          />
        </div>
      </div>
      <div className=" container mb-16 mt-4 flex items-center justify-center gap-2 md:flex-row">
        <div className=" h-96 w-full">
          <iframe
            scrolling="no"
            className="mr-0 h-full w-full pr-0"
            src="//www.mortgagecalculator.org/rates-widgets/mortgages/text-widget.php?advanced&amp;data=30yr_fr|15yr_fr"
          ></iframe>
          <br />
        </div>
        <div className=" h-96 w-full ">
          <Card
            style={{ contain: "layout" }}
            className="bg-primary bg-opacity-20"
          >
            <Image
              src={"/images/background.svg"}
              alt=""
              height={400}
              width={400}
              className="absolute -z-10 h-full w-full opacity-30 "
            />
            <CardHeader>
              <Image
                src={"/images/purchase.svg"}
                height={120}
                width={120}
                alt={""}
                className="mx-auto mb-2 "
              />
              <CardTitle className="text-2xl font-semibold text-secondary">
                Easy Mortgage Calculator!
              </CardTitle>
              <CardDescription className="text-secondary">
                Tired of renting? Ready to invest in your dream home?
              </CardDescription>
            </CardHeader>
            {/* <CardContent>
            <div>
              <p>Create Project</p>
            </div>
          </CardContent> */}
            <CardFooter className="mx-auto flex w-full text-center">
              <label className="mx-auto text-secondary">{`Learn More >`}</label>
              {/* <Button>Deploy</Button> */}
            </CardFooter>
          </Card>
        </div>
        <div className=" h-96 w-full ">
          <Card
            style={{ contain: "layout" }}
            className="bg-primary bg-opacity-20"
          >
            <Image
              src={"/images/background.svg"}
              alt=""
              height={400}
              width={400}
              className="absolute -z-10 h-full w-full opacity-30 "
            />
            <CardHeader>
              <Image
                src={"/images/purchase.svg"}
                height={120}
                width={120}
                alt={""}
                className="mx-auto mb-2 "
              />
              <CardTitle className="text-2xl font-semibold text-secondary">
                Helpful Homebuyer Tools
              </CardTitle>
              <CardDescription className="text-secondary">
                Tired of renting? Ready to invest in your dream home?
              </CardDescription>
            </CardHeader>
            {/* <CardContent>
            <div>
              <p>Create Project</p>
            </div>
          </CardContent> */}
            <CardFooter className="mx-auto flex w-full text-center">
              <label className="mx-auto text-secondary">{`Learn More >`}</label>
              {/* <Button>Deploy</Button> */}
            </CardFooter>
          </Card>
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
