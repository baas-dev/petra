// import PrequalificationForm from "@/components/Sections/Forms/PrequalificationFormv1"

export default function IndexPage() {
  return (
    <div className="w-full h-full bg-primary min-h-screen pb-16">
      <section className="container grid gap-6 pb-8 pt-6 md:py-10">
        <h1 className="text-4xl text-center font-bold text-secondary">
          Get Prequalified Now
        </h1>
        <span className="block mb-4 text-base font-semibold text-primary">
          Contact Us
        </span>
        <h2 className="mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
          GET IN TOUCH WITH US
        </h2>
        <p className="text-base leading-relaxed mb-9 text-body-color">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          tempor incididunt ut labore e dolore magna aliqua. Ut enim adiqua
          minim veniam quis nostrud exercitation ullamco
        </p>
        {/* <PrequalificationForm /> */}
      </section>
    </div>
  )
}
