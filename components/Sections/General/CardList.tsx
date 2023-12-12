import { ReactNode } from "react"
import { CheckCircle } from "lucide-react"

import TitleWithIconCard from "@/components/Cards/TitleWithIconCard"

export default function CardList(props: {
  items: {
    Title: string
    Link: string

    Icon: ReactNode
  }[]
}) {
  return (
    <>
      {props.items &&
        props.items.length > 0 &&
        props.items.map((item, i) => {
          return (
            <>
              <TitleWithIconCard key={i} icon={item.Icon} title={item.Title} />
            </>
          )
        })}
    </>
  )
}
