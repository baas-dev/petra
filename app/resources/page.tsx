import Link from "next/link"

import { siteConfig } from "@/config/site"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { buttonVariants } from "@/components/ui/button"

export default function FAQ() {
  return (
    <>
      {/* <div className="container">
        <h2 className="text-4xl font-semibold mb-2 text-center">
          Resource Links
        </h2>
      </div> */}
      <div className="container mb-8 grid grid-cols-1 gap-2 md:grid-cols-3">
        <ResourceCard title="Home Loan Mortgage Checklist" type="PDF" />
        <ResourceCard title="Charm Booklet " type="PDF" />
        <ResourceCard title="Your Home Loan Toolkit" type="PDF" />
        <ResourceCard title="NMLS Consumer Access" type="Link" />
        <ResourceCard title="Texas Mortgage Company Disclosure" type="Link" />
        <ResourceCard title="Texas Recovery Fund Notice" type="Link" />
      </div>
      <div className="container ">
        <h2 className="mb-2 text-center text-4xl font-semibold">FAQ</h2>
      </div>
      <section className="container grid max-w-[800px] items-center gap-6 pb-8 pt-6 md:py-10">
        <AccordionDemo />
      </section>
    </>
  )
}

function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&#39; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&#39;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

const ResourceCard = (props: { title: string; type: string }) => {
  return (
    <div className="w-full">
      <div className="mb-4 max-h-64 transform cursor-pointer overflow-hidden rounded-xl bg-white shadow-xl duration-500 hover:scale-105 hover:shadow-2xl">
        <div className="p-4">
          <span className="cursor-pointer rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white">
            {props.type}
          </span>
          <h1 className="mt-4 cursor-pointer text-3xl font-bold hover:underline">
            {props.title}
          </h1>
          {/* <p className="mt-2 font-sans text-gray-700">by Diseño Constructivo</p> */}
        </div>
        <div className="relative">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
          />
          <p className="absolute -translate-y-24 translate-x-20 transform cursor-pointer rounded-full bg-blue-600 px-6 py-3 text-lg text-white duration-500 hover:scale-105">
            Download
          </p>
        </div>
      </div>
    </div>
  )
}
