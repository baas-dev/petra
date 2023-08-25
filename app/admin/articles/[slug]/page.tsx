"use client"

import { useState } from "react"
import { Metadata } from "next"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@material-tailwind/react"
import { Label } from "@radix-ui/react-menubar"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import SwitchInput from "@/components/BAAS/Forms/Inputs/Switch"

import StatusSelect from "../Components/Admin/BlogDetail/statusSelect"
import { ArticleFormSchema } from "../form"
import ArticleFullForm from "./form"

export default function BlogEditor() {
  const [isOpen, setIsOpen] = useState(false)
  const ArticleFormCXT = useForm<z.infer<typeof ArticleFormSchema>>({
    resolver: zodResolver(ArticleFormSchema),
    defaultValues: {},
  })
  return (
    <>
      <section>
        <ArticleFullForm />
      </section>
      {/* <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h3 className="text-xl pl-4">Article Details</h3>
          </AccordionTrigger>
          <AccordionContent className="bg-secondary">
            <BlogEditorHeader />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <h3 className="text-xl pl-4">Content</h3>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <h3 className="text-xl pl-4">SEO</h3>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}

      {/* <div className="flex flex-wrap">
        <div className="w-full bg-secondary">
          <Label className="text-2xl p-4 font-bold">Article Details</Label>
        </div>
        <BlogEditorHeader />
        <div className="w-full bg-secondary">
          <Label className="text-2xl p-4 font-bold">SEO</Label>
        </div>

        <div className="w-full bg-secondary">
          <Label className="text-2xl p-4 font-bold">Content</Label>
        </div>
        <div className="bg-black w-full h-96"></div>
      </div> */}
    </>
  )
}

function BlogEditorHeader() {
  return (
    <>
      <div className="px-4 w-full mb-4  ">
        <Label className="text-lg font-light">Article Header</Label>
        <Input className="bg-white text-xl" />
      </div>
      <div className="w-full px-4 flex">
        <StatusSelect />

        {/* <AdminDateSelect /> */}
        <div></div>
      </div>
    </>
  )
}
