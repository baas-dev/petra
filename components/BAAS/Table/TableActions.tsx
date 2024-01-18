import { BodyRenderer } from "../Forms/Render"
import { CreateDialog } from "./CreateDialog"
import { SearchInput } from "./Search"

export interface TableActionOptions {
  apiPath: string
  formName: string
  data?: any[]
}

export default function TableActions(props: TableActionOptions) {
  return (
    <>
      <div className="flex w-full  pb-2">
        <SearchInput />
        <div className=" flex w-full justify-end gap-2">
          <CreateDialog
            Form={
              <BodyRenderer
                ComponentName={props.formName}
                data={props.data ? props.data : null}
              />
            }
          />
        </div>
      </div>
    </>
  )
}
