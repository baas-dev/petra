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
    <div className="w-full mb-8 h-full">
      <Carousel
        autoPlay={true}
        interval={3000}
        className=" justify-center items-center max-w-xl"
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
    <div className="rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800">
      <div className="w-full mb-10">
        <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
          “
        </div>
        <p className="text-sm py-8 text-gray-600 text-center px-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
          obcaecati laudantium recusandae, debitis eum voluptatem ad, illo
          voluptatibus temporibus odio provident.
        </p>
        <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
          ”
        </div>
      </div>
      <div className="w-full">
        <p className="text-md text-indigo-500 font-bold text-center">
          {props.name}
        </p>
        <p className="text-xs text-gray-500 text-center">@scott.windon</p>
      </div>
    </div>
  )
}
