"use client"

import React from "react"
import Image from "next/image"
import { Locate, Mail, PhoneCall } from "lucide-react"
import { Slide } from "react-awesome-reveal"

import { Form } from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"

import ContactForm from "./form"

const ContactUsBody = () => {
  return (
    <>
      <section className="bg-secondary min-h-screen h-full pb-8 flex justify-center items-center">
        <div className="container">
          <div className="-mx-4 flex flex-wrap lg:justify-between pt-4 md:pt-0">
            <div className="w-full px-2 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="block text-base font-semibold text-primary"></span>
                <h2 className="text-4xl mb-2 text-primary  uppercase ">
                  Get In Touch With Us
                </h2>
                <p className="text-body-color  font-light leading-relaxed">
                  Have questions about your mortgage options or need assistance
                  with your home financing? Our dedicated team is here to help.
                  Fill out the contact form below, and {`we'll`} be in touch
                  shortly to provide you with personalized guidance for your
                  unique needs.
                </p>
                <Separator className="my-4" />
                <div className="mb-8 flex w-full max-w-[370px] items-center">
                  <div className="mr-6 flex h-12 w-16 items-center justify-center overflow-hidden rounded bg-primary bg-opacity-20 text-primary">
                    <Locate className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-dark   text-lg">Our Location</h4>
                    <a
                      href="https://maps.app.goo.gl/JA62akvuZnDwxN5CA"
                      className="text-body-color text-md font-light hover:underline"
                    >
                      3939 Belt Line Rd #150, Addison, TX 75001
                    </a>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px] items-center">
                  <div className="mr-6 flex h-12 w-16 items-center justify-center overflow-hidden rounded bg-primary bg-opacity-20 text-primary">
                    <PhoneCall className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-dark   text-lg"> Phone Number</h4>
                    <p className="text-body-color text-md font-light">
                      <a
                        href="tel:214-432-0443"
                        className="flex hover:underline"
                      >
                        (+1) 214 432-0443
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px] items-center">
                  <div className="mr-6 flex h-12 w-16 items-center justify-center overflow-hidden rounded bg-primary bg-opacity-20 text-primary">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-dark   text-lg"> Email Address</h4>
                    <p className="text-body-color text-md font-light">
                      <a
                        href="mailto:“contact-us@petralending.com”"
                        className="flex hover:underline"
                      >
                        info@petralending.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full  lg:w-1/2 xl:w-5/12">
              {/* <Slide direction="right"> */}
              <div className="rounded-lg bg-white p-8 shadow-lg sm:p-12">
                <ContactForm />
              </div>
              {/* </Slide> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="text-body-color w-full resize-none rounded border border-[f0f0f0] px-[14px] py-3 text-base outline-none focus:border-primary focus-visible:shadow-none"
          defaultValue={defaultValue}
        />
      </div>
    </>
  )
}

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="text-body-color w-full rounded border border-[f0f0f0] px-[14px] py-3 text-base outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
    </>
  )
}

export default function ContactUsPage() {
  return (
    <>
      <ContactUsBody />
    </>
  )
}
