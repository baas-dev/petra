import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
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
            <p className="max-w-md   font-light">
              Resources that the Petra Home Lending Team has pooled together in
              order to provide the most helpful and accurate home buying
              information
            </p>
          </div>
          <section className=" grid ">
            <AccordionDemo />
          </section>
        </div>
      </div>
    </>
  )
}

function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&#39; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&#39;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
