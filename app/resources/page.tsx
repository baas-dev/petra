import Link from "next/link"

import { RevealAnimation } from "@/components/Animations/InViewAnimationWrapper"

export default async function Resoures() {
  return (
    <section className="py-12 min-h-screen items-center justify-center flex bg-secondary h-full sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Helpful Information & Resources
            </h2>
          </div>

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                // style={{
                //   background:
                //     "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                // }}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              <RevealAnimation>
                <Link href="/resources/downloads">
                  <div className="flex flex-col overflow-hidden shadow-xl text-center hover:scale-110 hover:cursor-pointer">
                    <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                      <h2 className="text-xl font-semibold">
                        Downloadable Resources
                      </h2>
                    </div>
                  </div>
                </Link>
              </RevealAnimation>
              <RevealAnimation
                options={{
                  delay: 0.2,
                }}
              >
                <Link href="/resources/faqs">
                  <div className="flex flex-col overflow-hidden shadow-xl text-center hover:scale-110 hover:cursor-pointer">
                    <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                      <h2 className="text-xl font-semibold">FAQs</h2>
                    </div>
                  </div>
                </Link>
              </RevealAnimation>
              <RevealAnimation
                options={{
                  delay: 0.4,
                }}
              >
                <Link href="/resources/mortgage-calculator">
                  <div className="flex flex-col overflow-hidden shadow-xl text-center hover:scale-110 hover:cursor-pointer">
                    <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                      <h2 className="text-xl font-semibold">
                        Mortgage Calculator
                      </h2>
                    </div>
                  </div>
                </Link>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}