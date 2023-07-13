import { Fade } from "react-awesome-reveal"

import { Badge } from "@/components/ui/badge"

// export default function MainHeroSection() {
//   return (
//     <>
//       <section className="bg-blue-200 relative">
//         <div className="min-h-screen-75 relative flex content-center items-center justify-center pb-32 pt-16">
//           <div className="container mx-auto flex flex-col items-center px-5 py-16 md:flex-row lg:px-28">
//             <div className="mb-16 flex flex-col  text-center  md:mb-0 md:w-1/2 md:pr-16 lg:flex-grow lg:pr-24">
//               <Badge className="bg-accent mx-auto">
//                 Your #1 Choice for Texas Home Lending
//               </Badge>
//               {/* <h1 className="text-4xl  font-light">Petra Home Lending</h1> */}

//               <p className="text-blueGray-600 mb-8  text-base leading-relaxed ">
//                 Deploy your mvp in minutes, not days. WT offers you a a wide
//                 selection swapable sections for your landing page.
//               </p>
//               <div className="flex flex-col justify-center lg:flex-row">
//                 <button className="focus:shadow-outline mt-auto flex transform items-center rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white ring-offset-2 ring-offset-current transition duration-500 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2">
//                   Show me
//                 </button>
//                 <p className="text-blueGray-600 mt-2 text-left text-sm md:ml-6 md:mt-0">
//                   It will take you to candy shop.
//                   <br className="hidden lg:block" />
//                   <a
//                     href="#"
//                     className="inline-flex items-center font-semibold text-blue-600 hover:text-black md:mb-2 lg:mb-0 "
//                     title="read more"
//                   >
//                     Read more about it »
//                   </a>
//                 </p>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 lg:w-1/3 lg:max-w-lg">
//               <img
//                 className="rounded-lg object-cover object-center "
//                 alt="hero"
//                 src="https://dummyimage.com/720x600/F3F4F7/8693ac"
//               />
//             </div>
//           </div>
//           <div
//             className="h-70-px pointer-events-none absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden"
//             style={{ transform: "translateZ(0px)" }}
//           >
//             <svg
//               className="absolute bottom-0 overflow-hidden"
//               xmlns="http://www.w3.org/2000/svg"
//               preserveAspectRatio="none"
//               version="1.1"
//               viewBox="0 0 2560 100"
//               x="0"
//               y="0"
//             >
//               <polygon
//                 className="text-blueGray-200 fill-current"
//                 points="2560 0 2560 100 0 100"
//               ></polygon>
//             </svg>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

export default function MainHeroSection() {
  return (
    <>
      <div
        className="w-full bg-center bg-cover h-screen"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100%  90%, 0% 100%)",

          backgroundImage:
            "url(https://images.pexels.com/photos/2707756/pexels-photo-2707756.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="mx-auto text-center">
                <Badge className="bg-accent mb-2 text-xl">
                  The #1 Choice for Texas Home Lending
                </Badge>
                <Fade cascade damping={0.3} direction="up" triggerOnce>
                  <h1 className="text-6xl text-white font-bold">
                    Petra Home Lending
                  </h1>

                  <p className="max-w-lg mx-auto mb-4 text-lg text-gray-300">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laborum sit cum iure qui, nostrum at sapiente ducimus.
                  </p>
                  <a
                    className="inline-block w-full md:w-auto mb-4 md:mr-6 py-2 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                    href="#"
                  >
                    start your free trial
                  </a>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
