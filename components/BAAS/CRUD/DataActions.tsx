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
    <div className="mt-4 flex w-full gap-2">
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
      <div className="mb-8 w-full gap-2">
        <Button
          className=" w-full text-lg"
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
