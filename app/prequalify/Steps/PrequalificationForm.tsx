"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import "swiper/css"
import { useRouter } from "next/navigation"
import { Swiper, SwiperSlide } from "swiper/react"

import { toast } from "@/components/ui/use-toast"
import BACKEND from "@/app/API"

import QuestionNext from "./QuestionNext"
import Step1Form from "./Step1Form"
import Step2Form from "./Step2Form"
import Step3Form from "./Step3Form"

const api = new BACKEND()
export default function PrequalificationForm() {
  const [localState, setLocalState] = useState({
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
    console.log(step, data)
    let state = localState
    switch (step) {
      case 1:
        state.Team = data
        setLocalState(state)
        break
      case 2:
        state.Enabled = data.Enabled
        state.Address = data.Address
        state.Price = data.Price
        setLocalState(state)
        break
      case 3:
        state.Borrowers = data.Borrowers
        setLocalState(state)
        break
      default:
        break
    }
    console.log(state)
  }

  async function FinalSubmit() {
    await api.CREATE({
      Route: "forms",
      Body: JSON.stringify({
        SubmissionData: JSON.stringify(localState),
        Type: "prequalification",
      }),
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
  }
  return (
    <div>
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
