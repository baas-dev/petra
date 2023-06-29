import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardExtra(props: {
  icon: JSX.Element
  title: string
  actionText: string
  description?: string
}) {
  return (
    <Card style={{ contain: "layout" }} className="bg-primary">
      <div className="  text-center mx-auto w-full">
        <Image
          src={"/images/background.svg"}
          alt=""
          height={50}
          width={50}
          className="w-full h-full absolute -z-10 opacity-30 "
        />
        <CardHeader>
          {props.icon}
          <CardTitle className="text-2xl  z-10 text-secondary font-light">
            {props.title}
          </CardTitle>
          <CardDescription className="text-secondary">
            {props.description}
          </CardDescription>
        </CardHeader>
        {/* <CardContent>
            <div>
              <p>Create Project</p>
            </div>
          </CardContent> */}
        <CardFooter className="flex w-full align-bottom mx-auto text-center text-secondary">
          <Button variant={"ghost"} className="mx-auto bottom-0  ">
            {props.actionText}
          </Button>
          {/* <Button>Deploy</Button> */}
        </CardFooter>
      </div>
    </Card>
  )
}
