import Image from "next/image"

export const TeamCard = (props: {
  ID: string
  title?: string
  description?: string
  image?: string
  name: string
  rmloNumber?: string
  action: (name: string) => void
  isSelected: (Name) => boolean
}) => {
  let image = props.image ? props.image : "/404.png"
  return (
    <div
      className={`animate z-10 h-full w-full transition delay-0 hover:animate-pulse hover:cursor-pointer`}
      onClick={() => props.action(props.name)}
    >
      <div className="mx-auto mb-4 w-full h-full ">
        <div className=" overflow-hidden rounded-lg">
          <Image
            src={image}
            alt=""
            width={1000}
            height={1000}
            className="h-64 w-full  object-contain"
          />
          <div className=" bottom-5 left-0 w-full text-center">
            <div
              className={`overflow-hidden rounded-b-lg  py-4 ${
                props.isSelected(props.name)
                  ? "border-2 bg-green-300"
                  : "bg-white"
              }`}
            >
              <h3 className="text-dark text-base font-semibold">
                {props.title}
              </h3>
              <p className="text-body-color text-sm">
                RLMO #:{props.rmloNumber}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
