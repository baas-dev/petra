import { BodyRenderer } from "../Forms/Render"
import { CreateDialog } from "./CreateDialog"
import { SearchInput } from "./Search"

export interface TableActionOptions {
  apiPath: string
  formName: string
}

export default function TableActions(props: TableActionOptions) {
  return (
    <>
      <div className="flex pb-2  w-full">
        <SearchInput />
        <div className=" w-full flex justify-end gap-2">
          <CreateDialog
            Form={<BodyRenderer ComponentName={props.formName} data={null} />}
          />
        </div>
      </div>
    </>
  )
}
