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
  title?: string
  desc?: string
  image?: string
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
        <div className="hidden h-full min-h-screen w-full items-center  justify-center lg:flex">
          <h1 className="z-20 text-center text-2xl font-bold uppercase text-white">
            Core <br />
            Values
          </h1>

          <div
            id="big-circle"
            className="circle big mx-auto !bg-primary text-center"
          >
            <PopUpDialog
              trigger={
                <div className=" circle one h-full w-full content-center justify-center opacity-80">
                  <div className="z-10 my-auto flex h-full items-center justify-center rounded-full bg-blue-200 transition hover:scale-125">
                    <p className="text-2xl text-black !opacity-100">Called</p>
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
                <div className=" circle two h-full w-full content-center justify-center opacity-80">
                  <div className="z-10 my-auto flex h-full items-center justify-center rounded-full bg-blue-300 transition hover:scale-125">
                    <p className="text-2xl text-black !opacity-100">Centered</p>
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
                <div className=" circle three h-full w-full content-center justify-center opacity-80">
                  <div className="z-10 my-auto flex h-full items-center justify-center rounded-full bg-teal-200 transition hover:scale-125">
                    <p className="text-2xl text-black !opacity-100">
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
                <div className=" circle four h-full w-full content-center justify-center opacity-80">
                  <div className="z-10 my-auto flex h-full items-center justify-center rounded-full bg-sky-500 transition hover:scale-125">
                    <p className="text-2xl text-black !opacity-100">
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
                <div className=" circle five h-full w-full content-center justify-center opacity-80">
                  <div className="z-20 my-auto flex h-full items-center justify-center rounded-full bg-primary/30 transition hover:scale-125">
                    <p className="text-2xl text-black !opacity-100">
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
                <div className=" circle six h-full w-full content-center justify-center opacity-80">
                  <div className="z-10 my-auto flex h-full items-center justify-center rounded-full bg-purple-300 transition hover:scale-125">
                    <p className="text-2xl text-black !opacity-100">
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
        <div className="flex  h-full min-h-screen w-full items-center justify-center lg:hidden">
          <h1 className="z-20  text-center text-2xl font-bold uppercase">
            Core <br />
            Values
          </h1>
          <div
            id="big-circle"
            className="circlemobile bigmobile mx-auto bg-blue-500  text-center"
          >
            <PopUpDialog
              trigger={
                <div className="circlemobile onem h-full w-full content-center justify-center opacity-80">
                  <div className="z-10 my-auto flex h-full items-center justify-center rounded-full bg-teal-200 transition hover:scale-125">
                    <p className="text-md text-black !opacity-100">Called</p>
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
                <div className="circlemobile twom h-full w-full content-center justify-center opacity-80">
                  <div className="z-10 my-auto flex h-full items-center justify-center rounded-full bg-primary/60 transition hover:scale-125">
                    <p className="text-md text-black !opacity-100">Centered</p>
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
                <div className=" circlemobile threem h-full w-full content-center justify-center opacity-80">
                  <div className="z-10 my-auto flex h-full items-center justify-center rounded-full bg-cyan-200 transition hover:scale-125">
                    <p className="text-md text-black !opacity-100">Committed</p>
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
                <div className=" circlemobile fourm h-full w-full content-center justify-center opacity-80">
                  <div className="z-10 my-auto flex h-full items-center justify-center rounded-full bg-sky-600 transition hover:scale-125">
                    <p className="text-md text-black !opacity-100">
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
                <div className=" circlemobile fivem h-full w-full content-center justify-center opacity-80">
                  <div className="z-10 my-auto flex h-full items-center justify-center rounded-full bg-blue-300 transition hover:scale-125">
                    <p className="text-md text-black !opacity-100">
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
                <div className=" circlemobile sixm h-full w-full content-center justify-center opacity-80">
                  <div className="z-10 my-auto flex h-full items-center justify-center rounded-full bg-teal-500 transition hover:scale-125">
                    <p className="text-md text-black !opacity-100">Connected</p>
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
          className="flex h-full items-center justify-center"
        >
          <SheetHeader>
            {/* <SheetTitle>Are you sure absolutely sure?</SheetTitle> */}
            {/* <SheetDescription>{text}</SheetDescription> */}
          </SheetHeader>
          <div className="  h-96 w-96 content-center justify-center text-center opacity-80 ">
            <div className="z-10 my-auto flex h-full items-center justify-center rounded-full bg-sky-400 transition hover:scale-125">
              <p className="p-4 text-2xl font-semibold text-black !opacity-100">
                {text}
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
