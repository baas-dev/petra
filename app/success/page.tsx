import BigCard from "@/components/BAAS/Cards/BigCard"

export default function Success() {
  return (
    <>
      <div className="items-center h-screen w-screen bg-secondary">
        <div className="w-full h-24 pt-8 md:pt-48 text-center">
          <h1 className="w-full text-2xl">Thank you for your submission!</h1>
          <p className="text-lg">Our Team will Get In Touch With You Shortly</p>
          <div className="container  flex bg-secondary gap-2">
            <BigCard
              Title={"About Us"}
              Description={"Find Out More About Who We Are"}
              btn={true}
              btnText={"Go Now"}
              bg={"bg-primary"}
              bgHover={"bg-primary/20"}
              image={undefined}
              link={"/about"}
            />
            <BigCard
              Title={"Contact Us"}
              Description={"Get In Touch With Our Team"}
              btn={true}
              btnText={"Go Now"}
              bg={"bg-primary"}
              bgHover={"bg-primary/20"}
              image={undefined}
              link={"/contact"}
            />
          </div>
        </div>
      </div>
    </>
  )
}
