import Image from "next/image"
import { DollarSign, Home } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Hero1 from "@/components/BAAS/Heros/Hero1"
import TitleWithIconCard from "@/components/Cards/TitleWithIconCard"
import IntroSection from "@/components/Sections/General/IntroSection"

export default function IndexPage() {
  return (
    <>
      <IntroSection ImageURL="/site/home/bg.png" Title="" />
      <div className="container mb-16 flex max-w-4xl flex-col gap-4 md:flex-row">
        <Dialog>
          <DialogTrigger className="w-full">
            <TitleWithIconCard
              icon={<Home className="h-32 w-32" />}
              title={"Purchase"}
            />
          </DialogTrigger>
          <DialogContent className=" flex max-w-4xl flex-wrap">
            <Image
              src={"/site/home/purbg.png"}
              fill
              className="!relative w-full  object-contain"
              alt="finance image"
            />
            <DialogDescription className="text-center">
              Ready to purchase a home? Maybe your family is growing, or you are
              ready to downsize your empty nest. There are many reasons you may
              be ready to shop, and many factors that need to be considered. No
              matter if it’s your first time or you are a seasoned real estate
              investor, we are here to help by finding you the perfect loan for
              your needs.
            </DialogDescription>
            <DialogFooter style={{ justifyContent: "center" }}>
              <p>Welcome to the Family!</p>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="w-full">
            <TitleWithIconCard
              delay={0.2}
              icon={<DollarSign className="h-32 w-32" />}
              title={"Refinance"}
            />
          </DialogTrigger>
          <DialogContent className=" flex max-w-4xl flex-wrap">
            <Image
              src={"/site/home/refbg.png"}
              fill
              className="!relative h-48 w-full object-contain"
              alt="finance image"
            />
            <DialogDescription className="text-center">
              Ready to refinance your home? Maybe you need cash for home
              improvements, or something else. There are many reasons to
              refinance, and many factors that need to be considered. No matter
              if you are beginning a new season of life, or just want a new
              kitchen, we are here to help by finding you the perfect loan for
              your needs.
            </DialogDescription>
            <DialogFooter style={{ justifyContent: "center" }}>
              <p>Welcome to the Family!</p>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
