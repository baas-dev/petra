import Hero1 from "@/components/BAAS/Heros/Hero1"

export default function IndexPage() {
  return (
    <>
      <div className="h-full  w-full bg-secondary  ">
        <Hero1 />
      </div>
    </>
  )
}

// function Awards() {
//   return (
//     <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-between gap-2 mb-4">
//       <StatCard
//         title={"D Magazine"}
//         description={"7x Recognized"}
//         image={`/images/dmag.png`}
//       />
//       <StatCard
//         title={"Texas Five Star"}
//         description={"2013-2023"}
//         image={`/images/fs.png`}
//       />
//       <StatCard
//         title={"Texas Five Star LEGENDS"}
//         description={"2022"}
//         image={`/images/fsl.png`}
//       />
//     </div>
//   )
// }
// function ContactWidget({ testimonials }) {
//   return (
//     <section className="bg-white dark:bg-gray-900">
//       <div className="grid grid-cols-1 md:grid-cols-2 container py-8 h-full">
//         <div className="w-full">
//           <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
//             We Are Here To Help
//           </h1>
//           <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
//             Our team is standing by, knowledgeable and ready to help you.
//             <br />
//             Fill Out our form to get started now.
//           </p>
//           <div className="max-w-lg">
//             <TestimonialSwiper data={testimonials} />
//           </div>
//         </div>
//         <div className=" border rounded bg-blue-100 p-4 shadow-md flex flex-wrap items-center">
//           <h3 className="text-light text-2xl underline">Send us a message!</h3>
//           <ContactForm />
//         </div>
//       </div>
//     </section>
//   )
// }

// function Graphs() {
//   return (
//     <div className="  h-full  flex flex-col md:flex-row w-full justify-center pb-8 items-center">
//       <div
//         className="w-full object-contain "
//         style={{ scrollSnapAlign: "end" }}
//       >
//         <iframe
//           src="https://d3fy651gv2fhd3.cloudfront.net/embed/?s=usa3ymr&v=202309281616V20230410&w=200&h=200&d1=20131007&type=trend=2&h=200&w=600"
//           height="350"
//           width="100%"
//           className="object-contain  "
//         ></iframe>
//       </div>
//       <div className=" overflow-x-hidden w-full md:w-1/2">
//         <iframe
//           className="h-72 mt-2 mx-auto bg-white w-full"
//           src="//www.mortgagecalculator.org/rates-widgets/mortgages/text-widget.php?advanced&amp;data=30yr_fr|15yr_fr"
//         />
//       </div>
//     </div>
//   )
// }

// function LatestArticle(props: { article: any }) {
//   return (
//     <div className=" w-full  ">
//       {props.article ? (
//         <LongCardDetail
//           Title={props.article.Title}
//           Description={props.article.description}
//           Key={0}
//           MainImage={props.article.ImageURL}
//           CreatedAt={props.article.CreatedAt}
//           UpdatedAt={props.article.UpdatedAt}
//         />
//       ) : null}
//     </div>
//   )
// }

// function BigCards() {
//   let InfoArray = [
//     {
//       Title: "Articles",
//       Description: "",
//       Button: true,
//       btnText: "",
//       bg: "bg-primary",
//       bgHover: "bg-primary/60",
//       link: "/articles",
//       image: "",
//     },
//     {
//       Title: "About Us",
//       Description: "",
//       Button: true,
//       btnText: "",
//       bg: "bg-primary",
//       bgHover: "bg-primary/60",
//       link: "/about",
//       image: "",
//     },
//     {
//       Title: "Contact Us",
//       Description: "",
//       Button: true,
//       btnText: "",
//       bg: "bg-primary",
//       bgHover: "bg-primary/60",
//       link: "/contact",
//       image: "",
//     },
//     {
//       Title: " Mortgage Calculator",
//       Description: "",
//       Button: true,
//       btnText: "",
//       bg: "bg-primary",
//       bgHover: "bg-primary/60",
//       link: "/resources/mortgage-calculator",
//       image: "",
//     },
//     {
//       Title: "FAQs",
//       Description: "",
//       Button: true,
//       btnText: "",
//       bg: "bg-primary",
//       bgHover: "bg-primary/60",
//       link: "/resources/faqs",
//       image: "",
//     },
//     {
//       Title: "Downloads & Links",
//       Description: "",
//       Button: true,
//       btnText: "",
//       bg: "bg-primary",
//       bgHover: "bg-primary/60",
//       link: "/resources/faqs",
//       image: "",
//     },

// {
//   Title: "Downloads & Tools",
//   Description: "Viewable documents that help you purchase your home",
//   Button: true,
//   btnText: "Go Now",
//   bg: "bg-primary/60",
//   bgHover: "bg-primary",
//   link: "/resources/",
//   image: "",
// },
// {
//   Title: "Easy Mortgage Payment Calculator",
//   Description: "",
//   Button: true,
//   btnText: "Start figuring it out!",
//   bg: "bg-primary/60",
//   bgHover: "bg-primary",
//   link: "/resources/mortgage-calculator",
//   image: "",
// },
//   ]

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4 mt-1">
//       {InfoArray.map((item, i) => (
//         <>
//           <BigCard
//             key={i}
//             Title={item.Title}
//             Description={item.Description}
//             btn={item.Button}
//             btnText={item.btnText}
//             bg={item.bg}
//             bgHover={item.bgHover}
//             image={item.image}
//             link={item.link}
//             action={() => {}}
//           />
//         </>
//       ))}
//     </div>
//   )
// }
