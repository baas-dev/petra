"use client"

import Image from "next/image"
import { FacebookIcon, MailCheck, PhoneCall } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import ServiceCard from "@/components/BAAS/Cards/ServiceCard"
import MainNav from "@/components/main-nav"

export default function ContactUsPage() {
  return (
    <>
      <div className="bg-primary  min-h-screen pb-16 ">
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
      </div>
    </>
  )
}
