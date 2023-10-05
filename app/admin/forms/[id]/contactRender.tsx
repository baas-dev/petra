interface DataReceived {
  name: string
  email: string
  message: string
}

export default function ContactRender(props: { Data: string }) {
  let data: DataReceived = JSON.parse(props.Data)
  console.log(data)
  return (
    <>
      <div></div>
    </>
  )
}
