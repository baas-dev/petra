"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import ImageMultiUploadInput from "@/components/BAAS/Forms/Inputs/ImageMultiUpload"
import NumberInput from "@/components/BAAS/Forms/Inputs/NumberInput"
import SelectInput from "@/components/BAAS/Forms/Inputs/Select"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import RichTextEditor from "@/components/BAAS/RichTextEditor"

import ProductSEO from "./ProductSEO"
import Status from "./Status"

export const ArticleFormSchema = z.object({
  ID: z.string(),
  Title: z.string().nonempty("Requirement for article generation"),
  Description: z.string(),
  Visible: z.boolean(),
  Content: z.string(),
})
export default function VariantTable(props: { data: any }) {
  const [showDialog, setShowDialog] = useState(false)
  const [dialogData, setDialogData] = useState()
  function HandleDialog() {
    setShowDialog(true)
  }

  const VariantFormCTX = useForm<z.infer<typeof ArticleFormSchema>>({
    resolver: zodResolver(ArticleFormSchema),
    defaultValues: {
      ID: props.data?.ID ? props.data.ID : "",
      Title: props.data?.Title ? props.data.Title : "",
      Description: props.data?.Description ? props.data.Description : "",
      Visible: props.data?.Visible ? props.data.Visible : false,
      Content: props.data?.Content ? props.data.Content : false,
    },
  })
  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <EditVariantDialog form={VariantFormCTX} />
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Inventory Count</TableHead>

            <TableHead className="">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            className="hover:cursor-pointer"
            onClick={() => HandleDialog()}
          >
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell className="">$250.00</TableCell>
            <TableCell>0</TableCell>
            <TableCell>Credit Card</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Dialog>
  )
}

function EditVariantDialog({ form }) {
  return (
    <div>
      <DialogContent className="md:min-w-3/4">
        <div className="px-8">
          <DialogHeader>
            <DialogTitle>Editing Variant</DialogTitle>
            <DialogDescription>Edit your item and save</DialogDescription>
          </DialogHeader>
          <ScrollArea>
            <VariantEditorBody form={form} />
          </ScrollArea>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </div>
  )
}

function VariantEditorBody({ form }) {
  return (
    <>
      <Status form={form} />
      <div className="w-full gap-2">
        {/* <ImageMultiUploadInput form={form} options={{}} /> */}
        <TextInput
          form={form}
          options={{ name: "Inventory", label: "Inventory Count" }}
        />
        <NumberInput form={form} options={{ name: "Price", label: "Price" }} />
      </div>
    </>
  )
}
