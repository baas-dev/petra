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
import { Form } from "@/components/ui/form"
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
import SubmitButton from "@/components/BAAS/Forms/Buttons/submit"
import ImageMultiUploadInput from "@/components/BAAS/Forms/Inputs/ImageMultiUpload"
import ImageSingleUpload from "@/components/BAAS/Forms/Inputs/ImageSingleUpload"
import NumberInput from "@/components/BAAS/Forms/Inputs/NumberInput"
import SelectInput from "@/components/BAAS/Forms/Inputs/Select"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import RichTextEditor from "@/components/BAAS/RichTextEditor"

import AttributeSelecting from "./AttributeSelecting"
import Status from "./Status"

export default function VariantEditor(props: {
  attributeOptions: any
  form: any
}) {
  return (
    <>
      <VariantEditorBody form={props.form} data={props.attributeOptions} />
    </>
  )
}

function VariantEditorBody({ form, data }) {
  return (
    <>
      <div className="flex">
        <div className="w-full">
          <ImageSingleUpload
            form={form}
            options={{
              Name: "Image",
            }}
          />
        </div>

        <div className="w-full">
          <NumberInput
            form={form}
            options={{ name: "Inventory", label: "Inventory Count" }}
          />

          <NumberInput
            form={form}
            options={{ name: "Price", label: "Price" }}
          />
          <AttributeSelecting Attributes={data} />
        </div>
      </div>
      {/* <SubmitButton loading={false} /> */}
    </>
  )
}
