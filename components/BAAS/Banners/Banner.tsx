interface Banner {
  Title: string
  Subtitle: string
}

export default function Banner(props: Banner) {
  return (
    <section className="container mx-auto grid gap-6 pb-8 pt-6 text-center md:py-10">
      <div className=" gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {props.Title}
          {/* <br className="hidden sm:inline" /> */}
          {/* and We Are Proud To Serve You */}
        </h1>
        <p className="max-w-[400px] mx-auto text-lg text-muted-foreground">
          {props.Subtitle}
        </p>
      </div>
      {/* <div className="mx-auto flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div> */}
    </section>
  )
}
