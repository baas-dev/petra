import Image from "next/image"
import { Mail, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

interface Teammate {
  name?: string
  image?: string
  jobTitle?: string
  rmloNumber?: string
}
export default function TeamSection() {
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
  return (
    <section className="min-h-screen px-4 text-center container">
      <span className="mb-2 text-xs font-bold tracking-widest text-primary uppercase">
        Team Merits
      </span>
      <h1 className="text-4xl font-bold mb-4 leading-none tracking-tighter text-neutral-600">
        Our Achievements
      </h1>
      <div className="flex flex-wrap w-full">
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
    </section>
  )
}

const TeamCard = (props: {
  title?: string
  description?: string
  image?: string
  rmloNumber?: string
}) => {
  return (
    <div className="w-full md:w-1/3 p-2">
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
