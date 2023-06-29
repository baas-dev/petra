import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TeamCard } from "@/components/BAAS/Cards/TeamCard"

export default function OurTeam() {
  return (
    <div className="container mx-auto w-full mb-28">
      <div className="grid grid-cols-4 ">
        <TeamCard />
        <TeamCard />

        <TeamCard />

        <TeamCard />
      </div>
    </div>
  )
}
