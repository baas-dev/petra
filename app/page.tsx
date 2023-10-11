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

      <div className="bg-secondary ">
        <div className="grid md:grid-cols-12 grid-cols-1 pb-16   gap-4 container mx-auto">
          <div className="col-span-1 md:col-span-7">
            <Graphs />
          </div>
          <div className="col-span-1 md:col-span-5">
            <LatestArticle article={article} testimonials={testimonials} />
          </div>
        </div>
      </div>
    </>
  )
}

function Graphs() {
  return (
    <div className="  h-full  w-full justify-center items-center">
      <div
        className="w-full object-contain "
        style={{ scrollSnapAlign: "end" }}
      >
        <iframe
          src="https://d3fy651gv2fhd3.cloudfront.net/embed/?s=usa3ymr&v=202309281616V20230410&w=200&h=200&d1=20131007&type=trend=2&h=200&w=600"
          height="350"
          width="100%"
          className="object-contain  "
        ></iframe>
      </div>
      <div className=" overflow-x-hidden w-full">
        <iframe
          className="h-72 mt-2 mx-auto bg-white w-full"
          src="//www.mortgagecalculator.org/rates-widgets/mortgages/text-widget.php?advanced&amp;data=30yr_fr|15yr_fr"
        />
      </div>
    </div>
  )
}

function LatestArticle(props: { article: any; testimonials: any }) {
  console.log(props.article)
  return (
    <div className=" w-full  col-span-5">
      {/* {props.article ? (
        <LongCardDetail
          Title={props.article.Title}
          Description={props.article.description}
          Key={0}
          MainImage={props.article.ImageURL}
          CreatedAt={props.article.CreatedAt}
          UpdatedAt={props.article.UpdatedAt}
        />
      ) : null} */}

      <BigCards />
      <TestimonialSwiper data={props.testimonials} />
    </div>
  )
}

function BigCards() {
  let InfoArray = [
    {
      Title: "Articles",
      Description: "",
      Button: true,
      btnText: "",
      bg: "bg-primary/60",
      bgHover: "bg-primary",
      link: "/articles",
      image: "",
    },
    {
      Title: "About Us",
      Description: "",
      Button: true,
      btnText: "",
      bg: "bg-primary/60",
      bgHover: "bg-primary",
      link: "/about",
      image: "",
    },
    {
      Title: "Contact Us",
      Description: "",
      Button: true,
      btnText: "",
      bg: "bg-primary/60",
      bgHover: "bg-primary",
      link: "/contact",
      image: "",
    },
    {
      Title: " Mortgage Calculator",
      Description: "",
      Button: true,
      btnText: "",
      bg: "bg-primary/60",
      bgHover: "bg-primary",
      link: "/resources/mortgage-calculator",
      image: "",
    },
    {
      Title: "FAQs",
      Description: "",
      Button: true,
      btnText: "",
      bg: "bg-primary/60",
      bgHover: "bg-primary",
      link: "/resources/faqs",
      image: "",
    },
    {
      Title: "Downloads & Links",
      Description: "",
      Button: true,
      btnText: "",
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4 mt-1">
      {InfoArray.map((item, i) => (
        <>
          <BigCard
            key={i}
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
