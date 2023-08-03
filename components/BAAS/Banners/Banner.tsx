import { Separator } from "@/components/ui/separator"

interface Banner {
  Title: string
  Subtitle: string
}

export default function Banner(props: Banner) {
  return (
    <section className="container  max-w-6xl mx-auto text-center ">
      <div className="gap-2 mb-8">
        <h1 className="text-4xl font-semibold  leading-tight tracking-tighter ">
          {props.Title}
          {/* <br className="hidden sm:inline" /> */}
          {/* and We Are Proud To Serve You */}
        </h1>
        <p className=" mx-auto text-lg text-muted-foreground">
          {props.Subtitle}
        </p>
      </div>
      <Separator />
    </section>
  )
}
