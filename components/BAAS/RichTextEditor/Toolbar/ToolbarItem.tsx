import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

type MenuBarItem = {
  Component: JSX.Element
  onClick?: () => void
  disabled?: boolean
  Classes?: string
  Title?: string
  Desc?: string
}

export default function ToolbarItem(props: { config: MenuBarItem }) {
  let { Component, Classes, disabled, onClick, Title, Desc } = props.config
  return (
    <div>
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger asChild>
          <Button
            size={"sm"}
            type="button"
            variant={"outline"}
            {...props}
            onClick={onClick}
            className={`bg-white shadow-xl text-black border-2 ${Classes}`}
          >
            {Component}
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <CardTitle>{Title}</CardTitle>
          <CardDescription>{Desc}</CardDescription>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
