"use client"

import { useEffect } from "react"
import Image from "next/image"
import {
  Card,
  CardBody,
  CardHeader,
  Carousel,
  Typography,
} from "@material-tailwind/react"
import { Avatar } from "@radix-ui/react-avatar"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { Mail, MessageCircle, Phone, Smartphone, User } from "lucide-react"
import { initTE } from "tw-elements"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import QuoteHero from "@/components/Sections/About/QuoteHero"

import CoreValuesSection from "./CoreValuesSection"
import MainHeroSection from "./MainHeroSection"
import Quotes from "./Quotes"
import TeamSection from "./TeamSection"

export default function IndexPage() {
  return (
    <>
      <div className="min-h-screen bg-secondary">
        <div className="md:hidden">
          <MainHeroSection />
          <CoreValuesSection />
          <TeamSection />
          <Merits />
        </div>
        <div className="hidden md:block">
          <Parallax pages={2.7}>
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
              <Merits />
            </ParallaxLayer>
          </Parallax>
        </div>
      </div>
      {/* <AboutUsParallax /> */}
    </>
  )
}

const TeamCard = (props: {
  title?: string
  description?: string
  image?: string
  rmloNumber?: string
}) => {
  return (
    <div className="w-full p-2">
      <div
        className="flex w-full flex-row  flex-wrap rounded-lg bg-gray-600 p-4 antialiased shadow-lg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
          backgroundRepeat: "no-repat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="w-1/2">
          <Image
            className="mx-auto rounded-xl"
            src={props.image ? props.image : ""}
            height={400}
            width={400}
            alt=""
          />
        </div>
        <div className="flex w-1/2 flex-row flex-wrap px-3">
          <div className="relative w-full pt-3 text-right font-semibold text-gray-700 md:pt-0">
            <div className="text-xl font-light leading-tight text-white">
              {props.title}
            </div>
            <div className="text-normal cursor-pointer text-gray-300 hover:text-gray-400">
              <span className="border-b border-dashed border-gray-500 pb-1">
                {props.description}
              </span>
            </div>
            <div className="flexflex-wrap float-right mt-4">
              <div>
                <Button>
                  <Mail />
                </Button>
                <Button className="ml-2 bg-orange-500">
                  <MessageCircle />
                </Button>
              </div>
              <div className="bottom-0 right-0 cursor-pointer pt-3 text-sm text-gray-300 hover:text-gray-400 md:absolute md:pt-0">
                RMLO#: {props.rmloNumber}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const AboutHeroText = () => {
  return (
    <div className="flex w-full flex-wrap px-8 text-center md:mb-16">
      <div className="m-auto mt-32">
        <Badge className="mx-auto bg-accent">
          Your #1 Choice for Texas Home Lending
        </Badge>
        <h1 className="text-6xl font-bold">Petra Home Lending</h1>

        <div className="z-10 my-auto w-full text-center ">
          <h2 className=" text-4xl  ">
            Your <span className="font-bold">Home</span>, Our
            <span className="font-bold"> Calling</span>
          </h2>
          <Image
            height={20}
            width={50}
            alt={""}
            className="-z-10 mx-auto -mt-4 block w-1/2 rounded-md "
            src={"/images/underline.svg"}
          />
        </div>
      </div>
      <div className="m-auto mt-24 rounded-lg bg-primary p-8">
        <span className="text-2xl uppercase text-secondary">
          Our Mission Statement
        </span>

        <p className=" text-md max-w-xl font-light text-secondary md:text-lg">
          Our name comes from the Greek, meaning rock. We chose it because a
          rock-solid foundation undergirds all that we believe in and everything
          we do. We’re a small home mortgage lender, and that’s on purpose. So,
          whether you’re buying your first home, need a larger home for your
          growing family, or are ready to downsize, our purpose is to provide
          that same rock-solid certainty with your mortgage. We are called to
          help you move into the home that’s right for you, right where you find
          yourself in life’s journey. Welcome to the family.
        </p>
      </div>
    </div>
  )
}

const LeftSide = () => {
  interface ImageData {
    path: string
  }

  let data: ImageData[] = [
    {
      path: "2016.jpg",
    },
    {
      path: "2018.png",
    },
    {
      path: "2019.jpg",
    },
    {
      path: "2020.png",
    },
    {
      path: "2021.jpg",
    },
    {
      path: "2022.png",
    },
    {
      path: "2023.jpg",
    },
  ]

  return (
    <div className="w-full flex flex-wrap px-4 h-full text-center py-16">
      <div className="w-full mb-8 relative ">
        <span className="mb-2 text-xs font-bold tracking-widest text-primary uppercase">
          Team Merits
        </span>
        <h1 className="text-4xl font-bold mb-4 leading-none tracking-tighter text-neutral-600">
          Our Achievements
        </h1>
        <Separator />
      </div>
      <div className="h-1/4 w-full mb-8 flex justify-between gap-2 container">
        {data.map((item, i) => {
          return (
            <div key={i}>
              <Image
                src={`/images/${item.path}`}
                height={100}
                width={100}
                alt=""
              />
            </div>
          )
        })}
      </div>
      <div className="w-full flex">
        <div className="mt-4 w-full md:w-1/2 h-full">
          <Image
            src={`/images/10.png`}
            height={1920}
            width={1080}
            alt=""
            className="h-1/4 md:h-full  rounded-lg"
          />
        </div>
        <div className="w-full md:1/4 px-4 max-w-lg  mt-8">
          <span className="mb-2 text-md font-bold tracking-widest text-primary uppercase">
            What the Families we serve have been saying
          </span>

          <Quotes />
        </div>
        <div className="mt-4 w-1/4 md:w-1/4 h-full">
          <Image
            src={`/images/bbb.png`}
            height={1920}
            width={1080}
            alt=""
            className="h-1/4 md:h-full  rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

const RightSide = () => {
  return <Quotes />
}

const Merits = () => {
  return (
    <>
      <div className=" mx-auto h-screen w-full flex justify-center items-center gap-2 px-4  ">
        <LeftSide />
        {/* <RightSide /> */}
      </div>
    </>
  )
}

const CardWithBackground = () => {
  return (
    <Card
      shadow={false}
      className="relative grid h-[32rem] w-full  items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full rounded-xl bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative px-6 py-14 md:px-12">
        <h2
          // variant="h2"
          color="white"
          className="mb-6 text-xl font-medium leading-[1.5] text-white"
        >
          How we design and code open-source projects?
        </h2>
        <Typography variant="h5" className="mb-4 text-gray-400">
          Tania Andrew
        </Typography>
        <Avatar
          // size="xl"
          // variant="circular"
          // alt="tania andrew"
          className="border-2 border-white"
          // src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
      </CardBody>
    </Card>
  )
}

const Achievements = () => {
  return (
    <div className="mt-16 flex  w-full bg-white">
      <div className="flex w-full items-center px-8 text-center md:px-12 lg:text-left">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
            We are here for <span className="text-accent">You</span>
          </h2>
          <p className="mt-2 max-w-md text-sm text-gray-500 md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            commodi cum cupiditate ducimus, fugit harum id necessitatibus odio
            quam quasi, quibusdam rem tempora voluptates. Cumque debitis
            dignissimos id quam vel!
          </p>
          <div className="mt-6 flex justify-center lg:justify-start">
            <a
              className="rounded bg-gray-900 px-4 py-3 text-xs font-semibold text-gray-200 hover:bg-gray-800"
              href="#"
            >
              Get Started
            </a>
            <a
              className="mx-4 rounded bg-gray-300 px-4 py-3 text-xs font-semibold text-gray-900 hover:bg-gray-400"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
