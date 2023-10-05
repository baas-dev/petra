import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function FormHeader(props: {
  title: string
  description: string
}) {
  return (
    <Card className="">
      <CardHeader className="">
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
