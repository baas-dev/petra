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
      <div className="  mx-auto w-full text-center">
        <Image
          src={"/images/background.svg"}
          alt=""
          height={50}
          width={50}
          className="absolute -z-10 h-full w-full opacity-30 "
        />
        <CardHeader>
          {props.icon}
          <CardTitle className="z-10  text-2xl font-light text-secondary">
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
        <CardFooter className="mx-auto flex w-full text-center align-bottom text-secondary">
          <Button variant={"ghost"} className="bottom-0 mx-auto  ">
            {props.actionText}
          </Button>
          {/* <Button>Deploy</Button> */}
        </CardFooter>
      </div>
    </Card>
  )
}
