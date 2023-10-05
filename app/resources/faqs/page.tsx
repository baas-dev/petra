import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import BACKEND from "@/app/API"

const api = new BACKEND()

const GetData = async (route: string) => {
  let val = await api.GET({
    Route: route,
  })

  return val.data
}

interface FAQ {
  Question: string
  Answer: string
  Published: string
}
export default async function FAQ() {
  let res = await GetData(`faq`)
    .then((val) => val)
    .catch((err) => [])

  return (
    <>
      <div className="min-h-screen">
        <div className="container  pt-24   ">
          <div className="  w-full mb-8">
            <h1 className="text-md block  font-semibold text-primary">
              An easy mortgage payment cost-estimate tool
            </h1>
            <h2 className="text-dark mx-auto text-left  text-2xl  font-medium uppercase ">
              Frequently Asked Questions
            </h2>
            <p className="max-w-lg   font-light">
              Resources that the Petra Home Lending Team has pooled together in
              order to provide the most helpful and accurate home buying
              information
            </p>
          </div>
          <section className=" grid ">
            <FAQAccordion data={res ? res : []} />
          </section>
        </div>
      </div>
    </>
  )
}

function FAQAccordion(props: { data: FAQ[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {props.data && props.data.length > 0
        ? props.data.map((item, i) => (
            <AccordionItem value={`item-${i}}`} key={i}>
              <AccordionTrigger>{item.Question}</AccordionTrigger>
              <AccordionContent>{item.Answer}</AccordionContent>
            </AccordionItem>
          ))
        : null}
    </Accordion>
  )
}
