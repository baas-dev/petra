import { Fade } from "react-awesome-reveal"

import CardWithBackground from "@/components/BAAS/Cards/CardWithBackground"

export default function CoreValuesSection() {
  return (
    <>
      <section className="relative pt-16 my-32 container">
        <div className="pb-16">
          <span className="mb-2 text-xs font-bold tracking-widest text-blue-600 uppercase">
            Our Achievements
          </span>

          <h1 className="text-4xl font-bold leading-none tracking-tighter text-neutral-600">
            Proudly Serving Our Community
          </h1>
        </div>
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-5 gap-2">
          <Fade cascade triggerOnce damping={0.1} direction="left">
            <CardWithBackground />
            <CardWithBackground />
            <CardWithBackground />
            <CardWithBackground />
            <CardWithBackground />
          </Fade>
        </div>
      </section>
    </>
  )
}
