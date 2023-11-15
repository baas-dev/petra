"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimationOptions {
  delay?: number
}

export function RevealAnimation({
  children,
  options,
}: {
  children
  options?: AnimationOptions
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])
  return (
    <motion.div
      ref={ref}
      className="box z-10 w-full"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
        type: "tween",

        delay: options?.delay ? options.delay : 0,
      }}
    >
      {children}
    </motion.div>
  )
}

export function FadeInAnimation({
  children,
  options,
}: {
  children
  options?: AnimationOptions
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])
  return (
    <motion.div
      ref={ref}
      className="box z-10 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        type: "tween",

        delay: options?.delay ? options.delay : 0,
      }}
    >
      {children}
    </motion.div>
  )
}

export function SlideInAnimation({
  children,
  options,
}: {
  children
  options?: AnimationOptions
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])
  return (
    <motion.div
      ref={ref}
      className="box z-10 w-full"
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        type: "tween",

        delay: options?.delay ? options.delay : 0,
      }}
    >
      {children}
    </motion.div>
  )
}
