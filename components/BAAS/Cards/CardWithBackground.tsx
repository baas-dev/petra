import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react"

export default function CardWithBackground() {
  return (
    <Card
      shadow={false}
      className="relative grid h-32 md:h-64  transition-all hover:scale-110 w-full  items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full rounded-xl bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <h2
          // variant="h2"
          color="white"
          className="text-xl text-white mb-6 font-medium leading-[1.5]"
        >
          How we design and code open-source projects?
        </h2>
        <Typography variant="h5" className="mb-4 text-gray-400">
          III
        </Typography>
      </CardBody>
    </Card>
  )
}
