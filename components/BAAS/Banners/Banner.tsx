import { Separator } from "@/components/ui/separator"

interface Banner {
  Title: string
  Subtitle: string
  Tagline?: string
  children?: any
}

export default function Banner(props: Banner) {
  return (
    <div className=" mb-4 flex  h-full w-full items-center border bg-white p-4 shadow-md">
      <div className="container mx-auto w-full">
        <h2 className="text-md block font-light text-primary">
          {props.Subtitle}
        </h2>
        <h1 className="text-dark mx-auto text-left  text-xl font-light uppercase ">
          {props.Title}
        </h1>
        <p>{props.Tagline}</p>
      </div>

      <div className="w-full">
        <div className="float-right">{props.children}</div>
      </div>
    </div>
  )
}
