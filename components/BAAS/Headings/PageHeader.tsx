export default function PageHeader({ title, description, tagline }) {
  return (
    <div className="container pt-24 flex w-full flex-col ">
      <div className="flex h-full w-full flex-wrap items-baseline rounded-xl px-4">
        <div className=" h-full w-full ">
          <span className="text-md block  font-semibold text-primary">
            {tagline}
          </span>
          <h2 className="text-dark mx-auto text-left  text-2xl  font-medium uppercase ">
            {title}
          </h2>
        </div>
        <div className="h-full w-full max-w-md font-light ">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
