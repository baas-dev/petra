import Image from "next/image"

import Services from "@/components/Sections/Services/Services"

import "./styles.module.css"

export default function Hero1() {
  return (
    <HeroContainer>
      <div className="w-full  justify-center  flex flex-wrap h-full">
        <div className="flex w-full h-96 items-center justify-center">
          <Image
            width={1000}
            height={700}
            alt={""}
            className="  w-full  max-w-xl  rounded-md  h-full object-contain z-10 "
            src={"/images/plogo.png"}
          />
          <Image
            width={1000}
            height={350}
            alt={""}
            className=" rounded-md w-full max-w-xl h-full object-contain  float-right z-10  "
            src={"/images/tag.png"}
          />
        </div>
        <div className="w-full max-w-4xl h-full">
          <Services />
        </div>
      </div>
    </HeroContainer>
    // <div className=" ">
    //   <div className="flex h-screen flex-col items-center justify-center -mb-32">
    //     <div className="w-full h-full">
    //       <Image
    //         fill
    //         alt={""}
    //         style={{ objectFit: "cover" }}
    //         className="block absolute rounded-md float-right z-0 mt-12 opacity-40 bg-black"
    //         src={"/site/home/main.jpg"}
    //       />
    //     </div>
    //     <div className="flex container relative max-w-4xl px-4 sm:px-6 mb-16 ">
    //       <Image
    //         height={1000}
    //         width={1500}
    //         alt={""}
    //         className="  rounded-md w-full h-full object-contain float-right z-10 "
    //         src={"/images/plogo.png"}
    //       />
    //       <Image
    //         height={1000}
    //         width={2000}
    //         alt={""}
    //         className=" relative rounded-md w-full h-full object-contain float-right z-10 "
    //         src={"/images/tag.png"}
    //       />
    //       <div className=" max-w-6xl mt-8">
    //         <Services />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

function HeroContainer({ children }) {
  return (
    <>
      <div className={"heroWrapper h-full  bg-blue-100"}>
        <div className={"imageWrapper"}>
          <Image
            priority
            src={"/site/home/main.jpg"}
            fill
            className="min-h-screen opacity-80 object-center mt-4  h-full w-full object-cover"
            alt="hero image example"
          />
        </div>
        <div className={"heroContent pb-16"}>{children}</div>
      </div>
    </>
  )
}
