"use client"

import React, { CSSProperties, useEffect, useState } from "react"
import Image from "next/image"
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react"
import { Avatar } from "@radix-ui/react-avatar"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { Mail, MessageCircle, Phone, Smartphone, User } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import QuoteHero from "@/components/Sections/About/QuoteHero"

import CoreValuesSection from "./CoreValuesSection"
import MainHeroSection from "./MainHeroSection"

interface Teammate {
  name?: string
  image?: string
  jobTitle?: string
  rmloNumber?: string
}

const teammates: Teammate[] = [
  {
    name: "Jason O'Quinn",
    jobTitle: "President",
    rmloNumber: "293991",
    image: "/images/jo.jpg",
  },
  {
    name: "Kyle Kisselburg",
    jobTitle: "Vice President",
    rmloNumber: "331515",
    image: "/images/kk.jpg",
  },
  {
    name: "Mary Russell",
    jobTitle: "Senior Loan Officer",
    rmloNumber: "1120374",
    image: "/images/mr.jpg",
  },
  {
    name: "Joshua Hernandez",
    jobTitle: "Senior Loan Officer",
    rmloNumber: "284694",
    image: "/images/jh.jpg",
  },
  {
    name: "Josh Faris",
    jobTitle: "Loan Officer",
    rmloNumber: "2052019",
    image: "/images/jf.jpg",
  },
  {
    name: "Kevin Russell",
    jobTitle: "Loan Officer",
    rmloNumber: "195604",
    image: "/images/kr.jpg",
  },
]
export default function IndexPage() {
  return (
    <>
      <div className="min-h-screen">
        <div className="md:hidden">
          <MainHeroSection />
          <CoreValuesSection />
          <div className="my-32 grid grid-cols-1 gap-2  md:grid-cols-3">
            {teammates.map((item, i) => (
              <TeamCard
                key={i}
                title={item.name}
                description={item.jobTitle}
                image={item.image}
                rmloNumber={item.rmloNumber}
              />
            ))}
          </div>
          <div className="pb-4 w-full text-center">
            <span className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">
              Our Achievements
            </span>

            <h1 className="text-4xl font-bold leading-none tracking-tighter text-neutral-600">
              Awards & Merits
            </h1>
          </div>
          <div className="mx-auto flex flex-wrap md:flex-nowrap h-full w-full">
            <Merits />
            <Achievements />
          </div>
        </div>
        <div className="hidden md:block">
          <Parallax pages={3}>
            <ParallaxLayer offset={0.6} speed={0.3}>
              <Image
                src={"/images/mountains.png"}
                alt=""
                fill
                className="opacity-25"
              />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1}>
              <div className="">
                <MainHeroSection />

                <CoreValuesSection />
                <div className="container mb-32 grid grid-cols-3 md:mt-16">
                  {teammates.map((item, i) => (
                    <TeamCard
                      key={i}
                      title={item.name}
                      description={item.jobTitle}
                      image={item.image}
                      rmloNumber={item.rmloNumber}
                    />
                  ))}
                </div>
                <section className="container mx-auto mb-32">
                  <div className="pb-4 w-full text-center">
                    <span className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">
                      Our Achievements
                    </span>

                    <h1 className="text-4xl font-bold leading-none tracking-tighter text-neutral-600">
                      Awards & Merits
                    </h1>
                  </div>
                  <div className="mx-auto  flex  h-full w-full">
                    <Merits />
                    <Achievements />
                  </div>
                  <div className="flex">
                    <div className="w-full"></div>
                    <div className="mt-2 grid  grid-cols-4 gap-2"></div>
                  </div>
                </section>
                <section className="container mx-auto">
                  <div className="pb-4 text-center">
                    <span className="mb-2 text-xs w-full text-center font-bold uppercase tracking-widest text-blue-600">
                      Our Achievements
                    </span>

                    <h1 className="text-4xl font-bold leading-none tracking-tighter text-neutral-600">
                      Proudly Serving Our Community
                    </h1>
                  </div>
                </section>
              </div>
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

const Merits = () => {
  return (
    <>
      <div className=" mx-auto h-full w-full bg-white">
        <div className="my-auto flex  w-full">
          {/* first half */}
          <div className="h-full w-full rounded-xl bg-black">
            <CardWithBackground />
          </div>
        </div>
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
