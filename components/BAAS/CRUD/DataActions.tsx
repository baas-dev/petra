import { Button } from "@/components/ui/button"

interface DataActionOptions {
  showEdit?: boolean
  path: string
}

export function DeleteButton(props: DataActionOptions) {
  async function DeleteFunction() {
    await fetch(`http://localhost:4000/${props.path}`, {
      method: "DELETE",
    })
  }

  return (
    <div className="w-full flex gap-2 mt-4">
      <Button variant={"destructive"} className="w-full">
        Delete
      </Button>
    </div>
  )
}

export function UpdateButton(props: DataActionOptions) {
  async function SaveFunction() {
    await fetch(`http://localhost:4000${props.path}`, {
      method: "PUT",
    })
  }

  return (
    <>
      <div className="w-full mb-8 gap-2">
        <Button
          className=" text-lg w-full"
          // onClick={() => {
          //   SaveFunction()
          // }}
        >
          Save
        </Button>
      </div>
    </>
  )
}
