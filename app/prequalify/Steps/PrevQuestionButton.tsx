import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function PreviousQuestionButton(props: {
  action: any
  isDisabled: boolean
}) {
  return (
    <div
      onClick={props.action}
      className=" mb-4 flex w-full border-2 flex-row items-center mx-auto hover:scale-110 transform transition md:w-1/2 text-center hover:cursor-pointer rounded-xl bg-white p-4  "
    >
      <div className="w-full">
        <Label className="text-2xl text-primary underline ">
          Previous Question
        </Label>
      </div>
    </div>
  )
}
