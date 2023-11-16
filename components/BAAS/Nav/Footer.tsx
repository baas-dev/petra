import Image from "next/image"
import Link from "next/link"
import { Facebook, Home, Mail, Phone } from "lucide-react"
import moment from "moment"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className=" mx-auto w-full relative text-center bg-secondary border-t-4-blue-300 text-primary">
      <div className=" text-left p-4">
        <MiddleSection />
        <Separator className="border-2 mb-4" />
        <Bottom />
      </div>
    </footer>
  )
}

function Bottom() {
  return (
    <>
      <div className="w-full text-center mt-4">
        <p className="text-base ">© {moment().year()} Petra Lending</p>
      </div>
    </>
  )
}

function MiddleSection() {
  return (
    <div className="flex flex-col text-center mt-4 md:flex-row w-full justify-between container items-center">
      <div className="w-full flex justify-between items-center">
        <div className="w-full flex flex-wrap justify-between container">
          {/* <SocialBar /> */}

          <nav className="flex flex-wrap w-full text-center mx-auto justify-center text-lg font-medium">
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
          </nav>
        </div>
      </div>

      <div className="my-auto mt-4 md:text-left flex flex-col w-full items-center h-full">
        <div className="mb-2">
          <Link target="_blank" href="https://m.me/petralending">
            <Button className=" hover:cursor-pointer border-2 p-4 bg-primary text-white">
              <Facebook className="mr-2 h-4 w-4" />
              <span className="text-sm lg:text-lg">Message Us on Facebook</span>
            </Button>
          </Link>
        </div>
        <div className="mb-2    mx-auto flex  text-center">
          <Home className="mr-2" />

          <a
            href="https://maps.app.goo.gl/JA62akvuZnDwxN5CA"
            className="hover:cursor-pointer hover:underline"
          >
            3939 Belt Line Rd #150, Addison, TX 75001
          </a>
        </div>
        <div className="mb-2 mx-auto  flex  text-center">
          <a
            href="mailto:“contact-us@petralending.com”"
            className="flex hover:underline"
          >
            <Mail className="mr-2" />
            contact-us@petralending.com
          </a>
        </div>
        <div className="mb-2 mx-auto  flex  text-center">
          <a href="tel:214-432-0443" className="flex hover:underline">
            <Phone className="mr-2" />
            +1 (214) 432-0443
          </a>
        </div>
        <div className="mb-2 mx-auto  flex  text-center">
          NMLS#: <b className="ml-2">211515</b>
        </div>
      </div>
      <div className="w-full flex  items-center mb-8 justify-end">
        <Image
          src={"/images/eh.png"}
          alt=""
          width={500}
          height={500}
          className="w-16 h-16 md:w-28 md:h-28 mx-auto md:float-right "
        />
      </div>
    </div>
  )
}
