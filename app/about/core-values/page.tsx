import { Fade } from "react-awesome-reveal"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { RevealAnimation } from "@/components/Animations/InViewAnimationWrapper"
import CardWithBackground from "@/components/BAAS/Cards/CardWithBackground"
import HoverCard from "@/components/BAAS/Cards/HoverCard"

export interface CoreValue {
  title: string
  desc: string
  image: string
}

let coreValueData: CoreValue[] = [
  {
    title: "1. Called",
    desc: "Passion + Purpose + Expertise = Results. It is our mission to use our knowledge to serve and help others with their lending needs.",
    image: "/site/about/called.png",
  },
  {
    title: "2. Centered",
    desc: "Centered on the best rates and the best service. Centered on you. We strive to be balanced, fair, and responsible with home financing and financial plans for our customers. ",
    image: "/site/about/centered.png",
  },
  {
    title: "3. Committed",
    desc: "Wholehearted dedication to our clients, our employees, and our partners. After all, that’s our family.",
    image: "/site/about/committed.png",
  },
  {
    title: "4. Consultative",
    desc: "Every client deserves the information, insight, and knowledge to make the best financing decision possible.",
    image: "/site/about/consultative.png",
  },
  {
    title: "5. Collaborative",
    desc: "It takes a team. Partnerships matter. Working together in unison as a team is the key to success. We’re better together. ",
    image: "/site/about/collaborative.png",
  },
]

export default function CoreValuesPage() {
  return (
    <>
      <Dialog>
        <div className="min-h-screen w-full justify-center items-center h-full  hidden lg:flex">
          <h1 className="text-2xl text-white z-20 text-center uppercase font-bold">
            Core <br />
            Values
          </h1>

          <div
            id="big-circle"
            className="circle big !bg-primary mx-auto text-center"
          >
            <PopUpDialog
              trigger={
                <div className=" circle one opacity-80 content-center justify-center h-full w-full">
                  <div className="my-auto transition hover:scale-125 z-10 h-full flex justify-center items-center rounded-full bg-blue-200">
                    <p className="!opacity-100 text-black text-2xl">Called</p>
                  </div>
                </div>
              }
              text={`Passion + Purpose +
              Expertise = Results.
              It is our mission to use
              our knowledge to
              serve and help others
              with their lending
              needs.`}
            />

            <PopUpDialog
              trigger={
                <div className=" circle two opacity-80 content-center justify-center h-full w-full">
                  <div className="my-auto transition hover:scale-125 z-10 h-full flex justify-center items-center rounded-full bg-blue-300">
                    <p className="!opacity-100 text-black text-2xl">Centered</p>
                  </div>
                </div>
              }
              text={`Passion + Purpose +
              Expertise = Results.
              It is our mission to use
              our knowledge to
              serve and help others
              with their lending
              needs.`}
            />
            <PopUpDialog
              trigger={
                <div className=" circle three opacity-80 content-center justify-center h-full w-full">
                  <div className="my-auto transition hover:scale-125 z-10 h-full flex justify-center items-center rounded-full bg-teal-200">
                    <p className="!opacity-100 text-black text-2xl">
                      Committed
                    </p>
                  </div>
                </div>
              }
              text={`Wholehearted
              dedication to our
              clients, our employees,
              and our partners. After
              all, that’s our family.`}
            />

            <PopUpDialog
              trigger={
                <div className=" circle four opacity-80 content-center justify-center h-full w-full">
                  <div className="my-auto transition hover:scale-125 z-10 h-full flex justify-center items-center rounded-full bg-sky-500">
                    <p className="!opacity-100 text-black text-2xl">
                      Consultative
                    </p>
                  </div>
                </div>
              }
              text={`Every client deserves
              the information,
              insight, and
              knowledge to make
              the best financing
              decision possible.`}
            />
            <PopUpDialog
              trigger={
                <div className=" circle five opacity-80 content-center justify-center h-full w-full">
                  <div className="my-auto transition hover:scale-125 h-full flex justify-center items-center rounded-full bg-primary/30 z-20">
                    <p className="!opacity-100 text-black text-2xl">
                      Collaborative
                    </p>
                  </div>
                </div>
              }
              text={`It takes a team.
              Partnerships matter.
              Working together in
              unison as a team is the
              key to success. We’re
              better together.`}
            />

            <PopUpDialog
              trigger={
                <div className=" circle six opacity-80 content-center justify-center h-full w-full">
                  <div className="my-auto transition hover:scale-125 z-10 h-full flex justify-center items-center rounded-full bg-purple-300">
                    <p className="!opacity-100 text-black text-2xl">
                      Connected
                    </p>
                  </div>
                </div>
              }
              text={`Strong connections in our
              community network put
              extensive resources at your
              fingertips. But at the heart
              of our business we want to
              be connected to you, your
              desires, and goals.`}
            />
          </div>
        </div>
        <div className="min-h-screen  w-full justify-center items-center h-full flex lg:hidden">
          <h1 className="text-2xl  z-20 text-center uppercase font-bold">
            Core <br />
            Values
          </h1>
          <div
            id="big-circle"
            className="circlemobile bigmobile mx-auto text-center  bg-blue-500"
          >
            <PopUpDialog
              trigger={
                <div className="circlemobile onem opacity-80 content-center justify-center h-full w-full">
                  <div className="my-auto transition hover:scale-125 z-10 h-full flex justify-center items-center rounded-full bg-teal-200">
                    <p className="!opacity-100 text-black text-md">Called</p>
                  </div>
                </div>
              }
              text={`Centered on the best
              rates and the best
              service. Centered on
              you. We strive to be
              balanced, fair, and
              responsible with home
              financing and financial
              plans for our customers.`}
            />

            <PopUpDialog
              trigger={
                <div className="circlemobile twom opacity-80 content-center justify-center h-full w-full">
                  <div className="my-auto transition hover:scale-125 z-10 h-full flex justify-center items-center rounded-full bg-primary/60">
                    <p className="!opacity-100 text-black text-md">Centered</p>
                  </div>
                </div>
              }
              text={`Passion + Purpose +
              Expertise = Results.
              It is our mission to use
              our knowledge to
              serve and help others
              with their lending
              needs.`}
            />
            <PopUpDialog
              trigger={
                <div className=" circlemobile threem opacity-80 content-center justify-center h-full w-full">
                  <div className="my-auto transition hover:scale-125 z-10 h-full flex justify-center items-center rounded-full bg-cyan-200">
                    <p className="!opacity-100 text-black text-md">Committed</p>
                  </div>
                </div>
              }
              text={`Wholehearted
              dedication to our
              clients, our employees,
              and our partners. After
              all, that’s our family.`}
            />

            <PopUpDialog
              trigger={
                <div className=" circlemobile fourm opacity-80 content-center justify-center h-full w-full">
                  <div className="my-auto transition hover:scale-125 z-10 h-full flex justify-center items-center rounded-full bg-sky-600">
                    <p className="!opacity-100 text-black text-md">
                      Consultative
                    </p>
                  </div>
                </div>
              }
              text={`Every client deserves
              the information,
              insight, and
              knowledge to make
              the best financing
              decision possible.`}
            />
            <PopUpDialog
              trigger={
                <div className=" circlemobile fivem opacity-80 content-center justify-center h-full w-full">
                  <div className="my-auto transition bg-blue-300 hover:scale-125 z-10 h-full flex justify-center items-center rounded-full">
                    <p className="!opacity-100 text-black text-md">
                      Collaborative
                    </p>
                  </div>
                </div>
              }
              text={`It takes a team.
              Partnerships matter.
              Working together in
              unison as a team is the
              key to success. We’re
              better together.`}
            />

            <PopUpDialog
              trigger={
                <div className=" circlemobile sixm opacity-80 content-center justify-center h-full w-full">
                  <div className="my-auto transition hover:scale-125 z-10 h-full flex justify-center items-center rounded-full bg-teal-500">
                    <p className="!opacity-100 text-black text-md">Connected</p>
                  </div>
                </div>
              }
              text={`Strong connections in our
              community network put
              extensive resources at your
              fingertips. But at the heart
              of our business we want to
              be connected to you, your
              desires, and goals.`}
            />
          </div>
        </div>
      </Dialog>
    </>
  )
}

function PopUpDialog({ trigger, text }) {
  return (
    <>
      <Sheet>
        <SheetTrigger>{trigger}</SheetTrigger>
        <SheetContent
          side={"top"}
          className="h-full flex justify-center items-center"
        >
          <SheetHeader>
            {/* <SheetTitle>Are you sure absolutely sure?</SheetTitle> */}
            {/* <SheetDescription>{text}</SheetDescription> */}
          </SheetHeader>
          <div className="  opacity-80 h-96 w-96 content-center justify-center text-center ">
            <div className="my-auto transition hover:scale-125 z-10 h-full flex justify-center items-center rounded-full bg-sky-400">
              <p className="!opacity-100 text-black text-2xl p-4 font-semibold">
                {text}
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
