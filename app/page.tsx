"use client"

import { useEffect, useRef, useState } from "react"
import { Item } from "@radix-ui/react-navigation-menu"
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax"

import BigCard from "@/components/BAAS/Cards/BigCard"
import LongCardDetail from "@/components/BAAS/Cards/LongCardDetail"
import Hero1 from "@/components/BAAS/Heros/Hero1"
import Services from "@/components/Sections/Services/Services"

import BACKEND from "./API"
import Testimonial, { TestimonialSwiper } from "./about/Testimonials"

const api = new BACKEND()

export default function IndexPage() {
  const parallax = useRef<IParallax>(null!)
  const [article, setArticle] = useState()
  const [testimonials, setTestimonials] = useState([])

  let GetTestimonials = async () => {
    let res = await api.GET({
      Route: "quotes",
    })
    setTestimonials(res.data)
  }

  const getRecentArticle = async () => {
    let res = await api
      .GET({
        Route: "search?limit=1&scopes=articles",
      })
      .then((val) => {
        console.log(val)
        setArticle(val.data.results[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    GetTestimonials()

    getRecentArticle()
  }, [])

  return (
    <>
      <Hero1 />
      <Services />
      <div className="grid grid-cols-1 md:grid-cols-3 container">
        <Graphs />
        <LatestArticle article={article} testimonials={testimonials} />
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

function LatestArticle(props: { article: any; testimonials: any }) {
  console.log(props.article)
  return (
    <div className=" w-full col-span-2">
      {props.article ? (
        <LongCardDetail
          Title={props.article.Title}
          Description={props.article.description}
          Key={0}
          MainImage={props.article.ImageURL}
          CreatedAt={props.article.CreatedAt}
          UpdatedAt={props.article.UpdatedAt}
        />
      ) : null}
      <TestimonialSwiper data={props.testimonials} />

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
      Title: "Downloads & Links",
      Description: "Common Questions From Homebuyers",
      Button: true,
      btnText: "We Have Answers",
      bg: "bg-primary/60",
      bgHover: "bg-primary",
      link: "/resources/faqs",
      image: "",
    },
    // {
    //   Title: "Downloads & Tools",
    //   Description: "Viewable documents that help you purchase your home",
    //   Button: true,
    //   btnText: "Go Now",
    //   bg: "bg-primary/60",
    //   bgHover: "bg-primary",
    //   link: "/resources/",
    //   image: "",
    // },
    // {
    //   Title: "Easy Mortgage Payment Calculator",
    //   Description: "",
    //   Button: true,
    //   btnText: "Start figuring it out!",
    //   bg: "bg-primary/60",
    //   bgHover: "bg-primary",
    //   link: "/resources/mortgage-calculator",
    //   image: "",
    // },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
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
            action={() => {}}
          />
        </>
      ))}
    </div>
  )
}
