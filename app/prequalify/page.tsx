"use client"

import PrequalificationForm from "@/components/Sections/Forms/PrequalificationForm"

export default function IndexPage() {
  return (
    <div className="w-full h-full bg-primary min-h-screen pb-16">
      <section className="container grid gap-6 pb-8 pt-6 md:py-10">
        <h1 className="text-4xl text-center font-bold text-secondary">
          Get Prequalified Now
        </h1>

        <PrequalificationForm />
      </section>
    </div>
  )
}
