import { BodyRenderer } from "@/components/BAAS/Forms/Render"
import BACKEND from "@/app/API"

interface EditPage {
  Functions: {
    Update: boolean
    Delete: boolean
  }
  Form: {
    name: string
  }
  Routes: {
    Client: string
    API: string
  }
}

export default function ItemPage(Config: EditPage) {
  return (
    <>
      <div>
        {/* <BodyRenderer ComponentName={Config.Form.name} data={res} /> */}
      </div>
    </>
  )
}
