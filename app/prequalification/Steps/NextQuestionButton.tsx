import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"

export default function NextQuestionButton(props: {
  action: any
  isDisabled: boolean
}) {
  return (
    <Button
      type="submit"
      onClick={() => {
        props.action()
      }}
      disabled={props.isDisabled}
    >
      <CardTitle className="text-2xl">Continue!</CardTitle>
      <CardDescription className="ml-4 text-xl text-white">
        Go To Next Question
      </CardDescription>
    </Button>
  )
}
