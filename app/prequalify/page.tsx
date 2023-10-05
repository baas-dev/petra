import PrequalificationForm from "./Steps/PrequalificationForm"
import Step1Form from "./Steps/Step1Form"

export default function PrequalificationPage() {
  return (
    <div className="container pt-24 flex w-full flex-col min-h-screen">
      <PrequalificationHeader />
      <PrequalificationForm />
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
          This form helps our team determine the best options for your lending
        </p>
      </div>
    </div>
  )
}
