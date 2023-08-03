"use client"

import React from "react"
import Image from "next/image"
import {
  FacebookIcon,
  Locate,
  MailCheck,
  MailIcon,
  PhoneCall,
} from "lucide-react"
import { Slide } from "react-awesome-reveal"

import { Separator } from "@/components/ui/separator"

const ContactUsBody = () => {
  return (
    <>
      <section className="relative z-10   bg-secondary h-screen flex justify-center items-center">
        <div className="container">
          <div className="-mx-4 flex flex-wrap lg:justify-between pt-96">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="block text-base font-semibold text-primary">
                  Contact Us
                </span>
                <h2 className="text-dark text-[32px] font-bold uppercase ">
                  GET IN TOUCH WITH US
                </h2>
                <p className="text-body-color  font-light leading-relaxed">
                  Get in Touch with Us Today! Have questions about your mortgage
                  options or need assistance with your home financing? Our
                  dedicated team is here to help. Fill out the contact form
                  below, and we&#39ll be in touch shortly to provide you with
                  personalized guidance for your unique needs.
                </p>
                <Separator className="my-4" />
                <div className="mb-8 flex w-full max-w-[370px] items-center">
                  <div className="mr-6 flex h-12 w-16 items-center justify-center overflow-hidden rounded bg-primary bg-opacity-20 text-primary">
                    <Locate className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-dark   text-lg">Our Location</h4>
                    <p className="text-body-color text-md font-light">
                      3939 Belt Line Rd #150, Addison, TX 75001
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px] items-center">
                  <div className="mr-6 flex h-12 w-16 items-center justify-center overflow-hidden rounded bg-primary bg-opacity-20 text-primary">
                    <PhoneCall className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-dark   text-lg"> Phone Number</h4>
                    <p className="text-body-color text-md font-light">
                      (+1) 214 432-0443
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px] items-center">
                  <div className="mr-6 flex h-12 w-16 items-center justify-center overflow-hidden rounded bg-primary bg-opacity-20 text-primary">
                    <MailIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-dark   text-lg"> Email Address</h4>
                    <p className="text-body-color text-md font-light">
                      info@petralending.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <Slide direction="right">
                <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                  <form>
                    <ContactInputBox
                      type="text"
                      name="name"
                      placeholder="Your Name"
                    />
                    <ContactInputBox
                      type="text"
                      name="email"
                      placeholder="Your Email"
                    />
                    <ContactInputBox
                      type="text"
                      name="phone"
                      placeholder="Your Phone"
                    />
                    <ContactTextArea
                      row="6"
                      placeholder="Your Message"
                      name="details"
                      defaultValue=""
                    />
                    <div>
                      <button
                        type="submit"
                        className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </Slide>
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
      {/* <div className="bg-primary  min-h-screen pb-16 ">
        <section className="px-2  grid gap-6 pb-8 pt-6 md:py-10">
          <h1 className="text-4xl font-semibold text-center text-secondary">
            We Are Here to Help
          </h1>
        </section>
        <section className="grid w-full max-w-2xl grid-cols-1 md:grid-cols-3 gap-2 px-2 mx-auto ">
          <ServiceCard
            icon={<MailCheck />}
            title="Email Us"
            actionText="Start an Email"
          />
          <ServiceCard
            icon={<PhoneCall />}
            title="Call Us"
            actionText="214-432-0443"
          />

          <ServiceCard
            icon={<FacebookIcon />}
            title="Message Us on Facebook"
            actionText="Messenger"
          />
        </section>
        <div className="px-2 pt-8 mx-auto mb-16 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl ">Get In Touch</CardTitle>
              <CardDescription>What can we help you with?</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="I need help with..." />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Please include all information relevant to your issue."
                />
              </div>
            </CardContent>
            <CardFooter className="justify-between space-x-2">
              <div className="grid grid-cols-2 gap-2 w-full">
                <Button
                  variant={"ghost"}
                  className="text-2xl  block float-right"
                  type="submit"
                >
                  Cancel
                </Button>
                <Button
                  variant={"default"}
                  className="text-2xl bg-black block float-right"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div> */}
    </>
  )
}
