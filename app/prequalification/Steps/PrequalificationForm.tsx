"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import "swiper/css"
import { useRouter } from "next/navigation"
import { Swiper, SwiperSlide } from "swiper/react"

import { submitPetraFormClient } from "@/lib/petra-client"
import { toast } from "@/components/ui/use-toast"

import QuestionNext from "./QuestionNext"
import Step1Form from "./Step1Form"
import Step2Form from "./Step2Form"
import Step3Form from "./Step3Form"

export default function PrequalificationForm() {
  const [localState, setLocalState] = useState({
    Email: "",
    Phone: "",
    Team: [],
    Address: {},
    Price: "",
    Enabled: false,
    Borrowers: [],
  })
  const sliderRef = useRef<any>()
  const r = useRouter()
  useEffect(() => {}, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  const handlePrevious = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  function UpdateState(step: number, data: any) {
    setLocalState((state) => {
      switch (step) {
        case 1:
          return {
            ...state,
            Email: data.Email,
            Phone: data.Phone,
            Team: data.Team,
          }
        case 2:
          return {
            ...state,
            Enabled: data.Enabled,
            Address: data.Address,
            Price: data.Price,
          }
        case 3:
          return { ...state, Borrowers: data.Borrowers }
        default:
          return state
      }
    })
  }

  async function FinalSubmit(finalStep: { Borrowers: any[] }) {
    try {
      await submitPetraFormClient("prequalification", {
        ...localState,
        ...finalStep,
      })
      toast({
        title: "Your Submission Was Successful!",
        description: (
          <div>
            <h2>Thank you!</h2>
            <p>A team member will reach out to you.</p>
          </div>
        ),
      })
      r.push("/success")
    } catch (error) {
      toast({
        variant: "destructive",
        title: "We could not submit your prequalification",
        description:
          error instanceof Error
            ? error.message
            : "Please try again in a moment.",
      })
    }
  }
  return (
    <div className="delay-0">
      <Swiper
        allowTouchMove={false}
        slidesPerView={1}
        ref={sliderRef}
        className="mb-4"
      >
        <SwiperSlide key={0}>
          <Step1Form HandleNext={handleNext} UpdateState={UpdateState} />
        </SwiperSlide>
        <SwiperSlide key={1}>
          <Step2Form
            HandleNext={handleNext}
            HandlePrev={handlePrevious}
            UpdateState={UpdateState}
          />
        </SwiperSlide>
        <SwiperSlide key={2}>
          <Step3Form
            HandleNext={FinalSubmit}
            HandlePrev={handlePrevious}
            UpdateState={UpdateState}
          />
        </SwiperSlide>
      </Swiper>
      {/* <QuestionNext action={FinalSubmit} /> */}
    </div>
  )
}
