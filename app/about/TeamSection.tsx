import Image from "next/image"
import Link from "next/link"
import { BookOpen, Pen, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

import { Teammate } from "./page"

export default function TeamSection({ data }: { data: Teammate[] }) {
  return (
    <section className="h-full px-4 text-center container  md:py-16">
      <h1 className="text-4xl block font-bold relative text-transparent bg-clip-text bg-gradient-to-r  from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
        Welcome
        <span className="sm:mx-auto font-light w-full text-4xl text-blue-900 text-center pl-2   lg:w-auto lg:text-left  dark:text-white">
          To the Family
        </span>
      </h1>
      <div className="flex flex-wrap w-full">
        {data &&
          data.length > 0 &&
          data.map((item, i) => (
            <>
              {item.Published ? (
                <TeamCard
                  key={i}
                  title={item.Name}
                  image={item.Image}
                  rmloNumber={item.RNumber}
                  position={item.Title}
                  bio={item.Biography}
                />
              ) : null}
            </>
          ))}
      </div>
    </section>
  )
}

const PhoneButton = ({ phoneNumber }) => {
  return (
    <Link
      href={`tel:${phoneNumber}`}
      className="flex items-center p-2 bg-primary/70 w-full mx-auto text-white text-center rounded-sm hover:bg-primary focus:outline-none focus:ring focus:ring-blue-300"
    >
      <div className="mx-auto flex">
        <Phone className="w-5 h-5 mr-2" />
        Call
      </div>
    </Link>
  )
}
const EmailButton = ({ email }) => {
  return (
    <Link
      href={`mailto:${email}`}
      className="flex items-center p-2 bg-accent/70 w-full text-white rounded-sm hover:bg-accent focus:outline-none focus:ring focus:ring-blue-300"
    >
      <div className="mx-auto flex">
        <Phone className="w-5 h-5 mr-2" />
        Email
      </div>
    </Link>
  )
}
const TeamCard = (props: {
  title?: string
  description?: string
  image?: string
  rmloNumber?: string
  phoneNumber?: string
  email?: string
  position?: string
  bio?: string
}) => {
  return (
    <div className="w-full md:w-1/3 rounded-xl gap-2 mb-2 px-1">
      <div className="mx-auto mb-10 w-full h-full  flex shadow-md rounded-xl">
        <div className="w-2/5">
          <Image
            src={props.image ? props.image : ""}
            height={500}
            width={500}
            alt=""
            className="w-full h-full object-cover border-2  "
          />
        </div>
        <div className="relative flex w-3/5 flex-col md:flex-col border-b-2 border-x-2 text-left  justify-between p-2 overflow-hidden bg-white">
          <div className="mb-2">
            <h3 className="text-base font-semibold  text-dark">
              {props.title}
            </h3>
            <p className="text-sm text-body-color ">{props.position}</p>
            <p className="text-xs font-light mb-2">RMLO#: {props.rmloNumber}</p>

            <Separator className="border-2" />
          </div>
          <div className="w-full">
            <div className=" gap-1 w-full mt-2">
              <div className="flex gap-2">
                <PhoneButton phoneNumber={props.phoneNumber} />
                <EmailButton email={props.email} />
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                {/* <BioButton /> */}

                <Button variant={"secondary"} className="mt-2 w-full">
                  <div className="mx-auto flex ">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Read Bio
                  </div>
                </Button>
              </DialogTrigger>
              <TeamBioDialog
                bio={props.bio ? props.bio : ""}
                image={props.image ? props.image : ""}
                name={props.title ? props.title : ""}
                position={props.position ? props.position : ""}
              />
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  )
}

function TeamBioDialog(props: {
  bio: string
  image: string
  name: string
  position: string
}) {
  return (
    <>
      <DialogContent className="max-w-4xl ">
        <DialogHeader>
          <DialogTitle>{props.name}</DialogTitle>
          <DialogDescription>{props.position}</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 overflow-y-scroll max-h-[700px]">
          <Image
            src={props.image ? props.image : ""}
            height={500}
            width={500}
            alt=""
            className="w-full h-full object-cover border-2  "
          />
          <div
            className="bg-white  w-full ProseMirror  max-h-96 h-full "
            dangerouslySetInnerHTML={{ __html: props.bio }}
          />
        </div>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </>
  )
}
