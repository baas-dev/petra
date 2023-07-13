import Image from "next/image"
import { Fade } from "react-awesome-reveal"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const data = [
  {
    title: "",
    icon: "",
    tagline: "",
  },
]

export default function Services() {
  return (
    <section className="container z-20 text-center mb-32  text-secondary">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
        <Fade
          fraction={0.4}
          damping={0.1}
          cascade
          triggerOnce
          direction="up"
          className="mt-8 md:-mt-20"
        >
          <Card
            style={{ contain: "layout" }}
            className="bg-primary bg-opacity-20"
          >
            <Image
              src={"/images/background.svg"}
              alt=""
              height={50}
              width={50}
              className="w-full h-full absolute -z-10 opacity-30 "
            />
            <CardHeader>
              <Image
                src={"/images/purchase.svg"}
                height={120}
                width={120}
                alt={""}
                className="mb-2 mx-auto "
              />
              <CardTitle className="text-2xl font-semibold text-secondary">
                Purchase a Home
              </CardTitle>
              <CardDescription className="text-secondary">
                Tired of renting? Ready to invest in your dream home?
              </CardDescription>
            </CardHeader>
            {/* <CardContent>
            <div>
              <p>Create Project</p>
            </div>
          </CardContent> */}
            <CardFooter className="flex w-full mx-auto text-center">
              <label className="mx-auto text-secondary">{`Learn More >`}</label>
              {/* <Button>Deploy</Button> */}
            </CardFooter>
          </Card>
          <Card style={{ contain: "layout" }} className="bg-primary">
            <Image
              src={"/images/background.svg"}
              alt=""
              height={50}
              width={50}
              className="w-full h-full absolute -z-10 opacity-30 "
            />
            <CardHeader>
              <Image
                src={"/images/refinance.svg"}
                height={120}
                width={120}
                alt={""}
                className="mb-2 mx-auto"
              />
              <CardTitle className="text-2xl font-semibold z-10 text-secondary">
                Refinance Your Home
              </CardTitle>
              <CardDescription className="text-secondary">
                Need cash for a home improvement or something else?
              </CardDescription>
            </CardHeader>
            {/* <CardContent>
            <div>
              <p>Create Project</p>
            </div>
          </CardContent> */}
            <CardFooter className="flex w-full mx-auto text-center text-secondary">
              <label className="mx-auto ">{`Learn More >`}</label>
              {/* <Button>Deploy</Button> */}
            </CardFooter>
          </Card>
          <Card style={{ contain: "layout" }} className="bg-primary">
            <Image
              src={"/images/background.svg"}
              alt=""
              height={50}
              width={50}
              className="w-full h-full absolute -z-10 opacity-30 "
            />
            <CardHeader>
              <Image
                src={"/images/renovate.svg"}
                height={120}
                width={120}
                alt={""}
                className="mb-2 mx-auto"
              />
              <CardTitle className="text-2xl font-semibold text-secondary">
                Renovate Your Home
              </CardTitle>
              <CardDescription className="text-secondary">
                Increase your buying power and get noticed by sellers.
              </CardDescription>
            </CardHeader>
            {/* <CardContent>
            <div>
              <p> Project</p>
            </div>
          </CardContent> */}
            <CardFooter className="flex w-full mx-auto text-center">
              <label className="mx-auto text-secondary">{`Learn More >`}</label>
              {/* <Button>Deploy</Button> */}
            </CardFooter>
          </Card>
        </Fade>
      </div>
    </section>
  )
}
