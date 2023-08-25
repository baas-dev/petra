import Banner from "@/components/BAAS/Banners/Banner"
import BigCard from "@/components/BAAS/Cards/BigCard"

export default function Success() {
  return (
    <>
      <div className="items-center h-screen w-screen bg-secondary">
        <div className="w-full container max-w-4xl pt-24">
          <Banner
            Title="Thank you!"
            Subtitle="Our team has been notified, and will be in touch soon."
          />
        </div>
        <div className="container  max-w-4xl  flex bg-secondary gap-2">
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
    </>
  )
}
