import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

import { IProduct } from "../Types"

export default function CartItem(props: { data: IProduct }) {
  return (
    <Card className="p-0">
      <CardHeader>
        <CardContent>
          <div className="flex">
            <Image
              alt=""
              src={props.data.Image}
              height={500}
              width={500}
              className="bg-gray h-16 w-16"
            />
            <div className="flex w-full justify-between px-2">
              <div className="">
                <Label className="font-bold">{props.data.Name}</Label>
                <p>Size: XL</p>

                <p>Color: white</p>
              </div>
              <div>
                <p className="font-bold">${props.data.Price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  )
}
