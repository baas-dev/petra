import Image from "next/image"
import Link from "next/link"
import { Facebook, Home, Mail, Phone } from "lucide-react"
import moment from "moment"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className=" border-t-4-blue-300 relative mx-auto w-full bg-secondary text-center text-primary">
      <div className=" p-4 text-left">
        <MiddleSection />
        <Separator className="mb-4 border-2" />
        <Bottom />
      </div>
    </footer>
  )
}

function Bottom() {
  return (
    <>
      <div className="mt-4 w-full text-center">
        <p className="text-base ">© {moment().year()} Petra Lending</p>
      </div>
    </>
  )
}

function MiddleSection() {
  return (
    <div className="container mt-4 flex w-full flex-col items-center justify-between text-center md:flex-row">
      <div className="flex w-full items-center justify-between">
        <div className="container flex w-full flex-wrap justify-between">
          {/* <SocialBar /> */}

          {/* <nav className="flex flex-wrap w-full text-center mx-auto justify-center text-lg font-medium">
            <div className="px-5 py-2 w-full ">
              <a href="https://www.sml.texas.gov/wp-content/uploads/2021/07/rmlo_80_200_b_recovery_fund_notice.pdf">
                Recovery Fund Notice
              </a>
            </div>

            <div className="px-5 py-2 w-full ">
              <a href="https://d1it9px5hinj36.cloudfront.net/Privacy%20Policy.pdf">
                Privacy
              </a>
            </div>
            <div className="px-5 py-2 w-full">
              <a href="https://d1it9px5hinj36.cloudfront.net/TermsOfService.pdf">
                Terms
              </a>
            </div>
          </nav> */}
        </div>
      </div>

      <div className="my-auto mt-4 flex h-full w-full flex-col items-center md:text-left">
        {/* <div className="mb-2">
          <Link target="_blank" href="https://m.me/petralending">
            <Button className=" hover:cursor-pointer border-2 p-4 bg-primary text-white">
              <Facebook className="mr-2 h-4 w-4" />
              <span className="text-sm lg:text-lg">Message Us on Facebook</span>
            </Button>
          </Link>
        </div> */}
        <div className="mx-auto    mb-2 flex  text-center">
          <Home className="mr-2" />

          <a
            href="https://maps.app.goo.gl/JA62akvuZnDwxN5CA"
            className="hover:cursor-pointer hover:underline"
          >
            4425 Plano Pkwy, Suite 802, Carrollton, TX 75010
          </a>
        </div>
        <div className="mx-auto mb-2  flex  text-center">
          <a
            href="mailto:“contact-us@petralending.com”"
            className="flex hover:underline"
          >
            <Mail className="mr-2" />
            contact-us@petralending.com
          </a>
        </div>
        <div className="mx-auto mb-2  flex  text-center">
          <a href="tel:214-432-0443" className="flex hover:underline">
            <Phone className="mr-2" />
            +1 (214) 432-0443
          </a>
        </div>
        <div className="mx-auto mb-2  flex  text-center">
          NMLS#: <b className="ml-2">211515</b>
        </div>
        <div>
          <Image
            src={"/images/tag.png"}
            alt="Your Home. Our Calling."
            width={1000}
            height={500}
            className="bottom-0 mx-auto w-full md:float-right md:h-24 "
          />
        </div>
      </div>

      <div className="mb-8 flex h-full  w-full items-baseline justify-end">
        <Image
          src={"/images/eh.png"}
          alt="Equal Housing Opportunity Provider"
          width={500}
          height={500}
          className="bottom-0 mx-auto h-16 w-16 md:float-right md:h-16 md:w-16 "
        />
      </div>
    </div>
  )
}
