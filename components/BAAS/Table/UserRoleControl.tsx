import { useSession } from "next-auth/react"

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import BACKEND from "@/app/api"

const api = new BACKEND()
const HandleUpdate = async (userId: string, newVal: string) => {
  await api.UPDATE({
    Route: `users/${userId}/access`,
    Body: JSON.stringify({
      Role: newVal,
    }),
  })
}

const CheckLevelPoints = (myRole) => {
  return [
    {
      label: "Editor",
      value: "editor",
    },
    {
      label: "Admin",
      value: "admin",
    },
  ]
}

interface User {
  ID: string

  Role: string
}

export default function UserRoleControl({ TargetUser }: { TargetUser: User }) {
  let session = useSession()

  let interactions = new UserInteraction()

  return (
    <>
      <div>
        {session.data && session.data.user && session.data.user.role ? (
          <>
            {interactions.CanEdit(TargetUser.Role, session.data.user.role) ? (
              <>
                <Select
                  defaultValue={TargetUser.Role}
                  onValueChange={(val) => {
                    HandleUpdate(TargetUser.ID, val)
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Choose User's Role.." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Roles</SelectLabel>
                      {CheckLevelPoints(session.data?.user?.role)?.map(
                        (item, i) => {
                          return (
                            <SelectItem value={item.value} key={i}>
                              {item.label}
                            </SelectItem>
                          )
                        }
                      )}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </>
            ) : (
              <>
                <Label>{TargetUser.Role}</Label>
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export class UserInteraction {
  CanEdit(TargetUserRole: string, EditingUserRole: string): boolean {
    if (TargetUserRole === "superadmin") {
      return false
    }

    return true
  }

  CanDelete(TargetUserRole: string) {
    if (TargetUserRole === "superadmin") {
      return {
        TableName: "Users",
      }

      return undefined
    }
  }
}
