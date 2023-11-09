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
      <CardDescription className="text-xl ml-4 text-white">
        Go To Next Question
      </CardDescription>
    </Button>
  )
}
