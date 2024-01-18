import { useRef } from "react"
import { Button, Paper } from "@mui/material"
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax"
import Carousel from "react-material-ui-carousel"

interface PageProps {
  offset: number
  gradient: string
  onClick: () => void
}

const Page = ({ offset, gradient, onClick }: PageProps) => <></>

export default function Quotes() {
  return <Example />
}

function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ]

  return (
    <div className="mb-8 h-full w-full">
      <Carousel
        autoPlay={true}
        interval={3000}
        className=" max-w-xl items-center justify-center"
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  )
}

function Item(props) {
  return (
    <div className="rounded-lg bg-white px-5 pb-10 pt-5 text-gray-800 shadow-lg">
      <div className="mb-10 w-full">
        <div className="h-3 text-left text-3xl leading-tight text-indigo-500">
          “
        </div>
        <p className="px-5 py-8 text-center text-sm text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
          obcaecati laudantium recusandae, debitis eum voluptatem ad, illo
          voluptatibus temporibus odio provident.
        </p>
        <div className="-mt-3 h-3 text-right text-3xl leading-tight text-indigo-500">
          ”
        </div>
      </div>
      <div className="w-full">
        <p className="text-md text-center font-bold text-indigo-500">
          {props.name}
        </p>
        <p className="text-center text-xs text-gray-500">@scott.windon</p>
      </div>
    </div>
  )
}
