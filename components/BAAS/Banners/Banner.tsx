import { Separator } from "@/components/ui/separator"

interface Banner {
  Title: string
  Subtitle: string
  Tagline?: string
}

export default function Banner(props: Banner) {
  return (
    <div className="flex h-full w-full flex-wrap items-baseline rounded-xl bg-white p-4 mb-4">
      <div className=" h-full w-full ">
        <span className="text-md block  font-semibold text-primary">
          {props.Title}
        </span>
        <h2 className="text-dark mx-auto text-left  text-2xl  font-medium uppercase ">
          {props.Subtitle}
        </h2>
      </div>
      <div className="h-full w-full max-w-md font-light ">
        <p>{props.Tagline}</p>
      </div>
    </div>
  )
}
