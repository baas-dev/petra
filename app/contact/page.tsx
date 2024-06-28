import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Locate, Mail, PhoneCall } from "lucide-react"
import { Slide } from "react-awesome-reveal"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import MailAddress from "@/components/Sections/Contact/MailAddress"
import PhoneAddress from "@/components/Sections/Contact/PhoneAddress"

import ContactForm from "./form"

const ContactUsBody = () => {
  return (
    <>
      <section className="flex h-full min-h-screen items-center justify-center bg-secondary pb-8">
        <div className="max-w-4xl w-full">
          <div className="-mx-4 flex flex-wrap pt-4 md:pt-0 lg:justify-between">
            <div className="w-full px-2 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="block text-base font-semibold text-primary"></span>
                <h1 className="mb-2 text-4xl uppercase  text-primary ">
                  Get In Touch With Us
                </h1>

                <div className="mb-8 flex w-full max-w-[370px] items-center">
                  <div className="mr-6 flex h-12 w-16 items-center justify-center overflow-hidden rounded bg-primary bg-opacity/20 text-primary">
                    <PhoneCall className="h-6 w-6 text-white" />
                  </div>
                  <PhoneAddress />
                </div>
                <div className="mb-8 flex w-full max-w-[370px] items-center">
                  <div className="mr-6 flex h-12 w-16 items-center justify-center overflow-hidden rounded bg-primary bg-opacity/20 text-primary">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <MailAddress />
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
