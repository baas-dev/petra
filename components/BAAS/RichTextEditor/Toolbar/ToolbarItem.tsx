import { Button } from "@/components/ui/button"

type MenuBarItem = {
  Component: JSX.Element
  onClick?: () => void
  disabled?: boolean
  Classes?: string
}

export default function ToolbarItem(props: { config: MenuBarItem }) {
  let { Component, Classes, disabled, onClick } = props.config
  return (
    <div>
      <Button
        size={"sm"}
        type="button"
        {...props}
        onClick={onClick}
        className={`bg-white text-black ${Classes}`}
      >
        {Component}
      </Button>
    </div>
  )
}
