import Banner from "@/components/BAAS/Banners/Banner"
import BigCard from "@/components/BAAS/Cards/BigCard"

export default function Success() {
  return (
    <>
      <div className="h-screen w-screen items-center bg-secondary">
        <div className="container w-full max-w-4xl pt-24">
          <Banner
            Title="Thank you!"
            Subtitle="Our team has been notified, and will be in touch soon."
          />
        </div>
        <div className="container  flex  max-w-4xl gap-2 bg-secondary">
          <BigCard
            Title={"About Us"}
            Description={"Find Out More About Who We Are"}
            btn={true}
            btnText={"Go Now"}
            bg={"bg-primary"}
            bgHover={"bg-primary/20"}
            image={undefined}
            link={"/about"}
            action={undefined}
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
            action={undefined}
          />
        </div>
      </div>
    </>
  )
}
