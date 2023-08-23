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
    <section className="min-h-screen px-4 text-center container py-16">
      <span className="mb-2 text-xs font-bold tracking-widest text-primary uppercase">
        Our Staff
      </span>
      <h1 className="text-4xl font-bold mb-4 leading-none tracking-tighter text-neutral-600">
        Our Team Members
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
    <div className="w-full px-4 md:w-1/3">
      <div className="mx-auto mb-10 w-full max-w-[370px]">
        <div className="relative overflow-hidden rounded-lg">
          <img src={props.image} alt="" className="w-full" />
          <div className="absolute left-0 w-full text-center bottom-5">
            <div className="relative px-3 py-5 mx-5 overflow-hidden bg-white rounded-lg">
              <h3 className="text-base font-semibold text-dark">
                {props.title}
              </h3>
              <p className="text-sm text-body-color">{props.rmloNumber}</p>
              <div>
                <span className="absolute bottom-0 left-0">
                  <svg
                    width={61}
                    height={30}
                    viewBox="0 0 61 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx={16}
                      cy={45}
                      r={45}
                      fill="#13C296"
                      fillOpacity="0.11"
                    />
                  </svg>
                </span>
                <span className="absolute top-0 right-0">
                  <svg
                    width={20}
                    height={25}
                    viewBox="0 0 20 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="0.706257"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 0.706257 24.3533)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="6.39669"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 6.39669 24.3533)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="12.0881"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 12.0881 24.3533)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="17.7785"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 17.7785 24.3533)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="0.706257"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 0.706257 18.6624)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="6.39669"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 6.39669 18.6624)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="12.0881"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 12.0881 18.6624)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="17.7785"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 17.7785 18.6624)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="0.706257"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 0.706257 12.9717)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="6.39669"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 6.39669 12.9717)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="12.0881"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 12.0881 12.9717)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="17.7785"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 17.7785 12.9717)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="0.706257"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 0.706257 7.28077)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="6.39669"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 6.39669 7.28077)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="12.0881"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 12.0881 7.28077)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="17.7785"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 17.7785 7.28077)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="0.706257"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 0.706257 1.58989)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="6.39669"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 6.39669 1.58989)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="12.0881"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 12.0881 1.58989)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="17.7785"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 17.7785 1.58989)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
