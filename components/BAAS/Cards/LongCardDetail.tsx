export default function LongCardDetail(props: { title: string }) {
  let { title } = props
  return (
    <div className="max-w-full flex bg-black rounded-l-lg rounded-r-lg  border-.5 border-opacity-25 mb-4 border-gray-400">
      <div
        className="h-48  lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://imagedelivery.net/6zvbH8ejfUWPqBF2dDyuGg/cd58cd74-e016-4833-624a-5a66b4013800/public')",
        }}
        title="Cnbc logo"
      ></div>
      <div className="  bg-white rounded-b lg:rounded-b-none  p-4 flex flex-col justify-between leading-normal w-full ">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            From CNBC Mortgage Stories
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Jonathan Reinink</p>
            <p className="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
  )
}
