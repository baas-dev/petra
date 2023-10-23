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
  return (
    <div
      className={`w-full h-full z-10 animate hover:cursor-pointer hover:animate-pulse transition delay-0`}
      onClick={() => props.action(props.name)}
    >
      <div className="mx-auto mb-4 w-full ">
        <div className=" overflow-hidden rounded-lg">
          <Image
            src={props.image ? props.image : ""}
            alt=""
            width={1000}
            height={1000}
            className="w-full object-contain"
          />
          <div className=" left-0 w-full text-center bottom-5">
            <div
              className={`py-4 overflow-hidden  rounded-b-lg ${
                props.isSelected(props.name)
                  ? "border-2 bg-green-300"
                  : "bg-white"
              }`}
            >
              <h3 className="text-base font-semibold text-dark">
                {props.title}
              </h3>
              <p className="text-sm text-body-color">
                RLMO #:{props.rmloNumber}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
