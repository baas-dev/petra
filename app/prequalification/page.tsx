import Banner from "@/components/BAAS/Banners/BannerSite"

import PrequalificationForm from "./Steps/PrequalificationForm"

export default function PrequalificationPage() {
  return (
    <div className="w-full   h-full">
      <Banner Title={"Prequalification"} Subtitle={"Borrower Snapshot"}>
        <></>
      </Banner>
      <div className="container flex w-full flex-col min-h-screen">
        <p className="w-full">
          Not ready to apply now? Give us some basic info so we can decide what
          type of loan might be the best fit for you. <br /> Don’t worry, we
          won’t be pulling your credit or making any hard inquiries with this
          step.
        </p>
        <PrequalificationForm />
      </div>
    </div>
  )
}

function PrequalificationHeader() {
  return (
    <div className="flex h-full w-full flex-wrap items-baseline rounded-xl px-4">
      <div className=" h-full w-full ">
        <span className="text-md block  font-semibold text-primary">
          Borrower Snapshot
        </span>
        <h2 className="text-dark mx-auto text-left  text-2xl  font-medium uppercase ">
          Prequalification
        </h2>
      </div>
      <div className="h-full w-full max-w-md font-light ">
        <p>
          Not ready to apply now? Give us some basic info so we can decide what
          type of loan might be the best fit for you. Don’t worry, we won’t be
          pulling your credit or making any hard inquiries with this step.
        </p>
      </div>
    </div>
  )
}
