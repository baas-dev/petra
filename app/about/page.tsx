"use client"

import React, { CSSProperties, useEffect, useState } from "react"
import Image from "next/image"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import {
  AnimatedProps,
  animated,
  useSpringRef,
  useTransition,
} from "@react-spring/web"
import { Mail, MessageCircle, Phone, Smartphone, User } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import CoreValueCard from "@/components/BAAS/Cards/CoreValueCard"
import ServiceCard from "@/components/BAAS/Cards/ServiceCard"

import styles from "./styles.module.css"

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
          <CoreHero />
          <div className="grid grid-cols-1 md:grid-cols-3  md:mt-16 mb-32">
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

          <Reviews />
        </div>
        <div className="hidden md:block">
          <Parallax pages={2.0}>
            <ParallaxLayer offset={1.0} speed={0}>
              <Image
                src={"/images/mountains.png"}
                alt=""
                fill
                className="opacity-25"
              />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1.7}>
              <div className="">
                <CoreHero />
                <div className="grid grid-cols-1 md:grid-cols-3  md:mt-16 mb-32">
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
                <div className=" w-screen pt-32">
                  <Reviews />
                </div>
              </div>
            </ParallaxLayer>
          </Parallax>
        </div>
      </div>
      {/* <AboutUsParallax /> */}
    </>
  )
}

const CoreHero = () => {
  return (
    <>
      <div className="flex  w-full flex-wrap w-full md:pr-16">
        <AboutHeroText />
        <div className=" w-full h-full m-auto my-16 container">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full h-1/3  ">
            <CoreValueCard
              title="Called"
              subtext="Passion + Purpose + Expertise = Results. It is our mission to use our knowledge to serve and help others with their lending needs."
            />
            <CoreValueCard
              title="Centered"
              subtext="Centered on the best rates and the best service. Centered on you. We strive to be balanced, fair, and responsible with home financing and financial plans for our customers."
            />
            <CoreValueCard
              title="Committed"
              subtext="Wholehearted dedication to our clients, our employees, and our partners. After all, that’s our family. 
"
            />
          </div>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 w-full h-1/3">
            <CoreValueCard
              title="Consultative"
              subtext="Every client deserves the information, insight, and knowledge to make the best financing decision possible. 
"
            />
            <CoreValueCard
              title="Collaborative"
              subtext="It takes a team. Partnerships matter. Working together in unison as a team is the key to success. We’re better together. 
"
            />
          </div>
        </div>
      </div>
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
    <div className="w-full px-4 py-2">
      <div
        className="rounded-lg shadow-lg bg-gray-600  flex flex-row flex-wrap p-4 antialiased w-full"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
          backgroundRepeat: "no-repat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="md:w-1/3 w-full">
          <Image
            className="mx-auto"
            src={props.image ? props.image : ""}
            height={300}
            width={200}
            alt=""
          />
        </div>
        <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
          <div className="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
            <div className="text-2xl text-white leading-tight">
              {props.title}
            </div>
            <div className="text-normal text-gray-300 hover:text-gray-400 cursor-pointer">
              <span className="border-b border-dashed border-gray-500 pb-1">
                {props.description}
              </span>
            </div>
            <div className="mt-4 flexflex-wrap float-right">
              <div>
                <Button>
                  <Mail />
                </Button>
                <Button className="bg-orange-500 ml-2">
                  <MessageCircle />
                </Button>
              </div>
              <div className="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">
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
    <div className="flex flex-wrap text-center w-full md:mb-16 px-8">
      <div className="m-auto mt-32">
        <Badge className="bg-accent mx-auto">
          Your #1 Choice for Texas Home Lending
        </Badge>
        <h1 className="text-6xl font-bold">Petra Home Lending</h1>

        <div className="w-full z-10 my-auto text-center ">
          <h2 className=" text-4xl  ">
            Your <span className="font-bold">Home</span>, Our
            <span className="font-bold"> Calling</span>
          </h2>
          <Image
            height={20}
            width={50}
            alt={""}
            className="block -mt-4 rounded-md w-1/2 mx-auto -z-10 "
            src={"/images/underline.svg"}
          />
        </div>
      </div>
      <div className="m-auto mt-24 bg-primary p-8 rounded-lg">
        <span className="uppercase text-secondary text-2xl">
          Our Mission Statement
        </span>

        <p className=" text-md font-light text-secondary md:text-lg max-w-xl">
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

const quotes = [
  {
    id: 1,
    name: "John Doe",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!",
    image:
      "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  },
  // Add more quotes here...
]

const Reviews = () => {
  return (
    <div className="m-auto  px-4 max-w-2xl mt-16">
      <div className="w-full mx-auto my-auto py-4 px-4  bg-white shadow-lg rounded-lg ">
        <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          />
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">Design Tools</h2>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <a href="#" className="text-xl font-medium text-indigo-500">
            John Doe
          </a>
        </div>
      </div>
    </div>
  )
}
