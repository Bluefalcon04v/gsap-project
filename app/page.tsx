'use client'
import { useGSAP } from "@gsap/react";
import { Navbar } from "./components";
import gsap from "gsap";
import { useRef } from "react";
import { Box, BoxGradient } from "./utils/g-home";


export default function Home() {
  const boxRef = useRef<any>()
  BoxGradient()
  Box()
  gsap
  useGSAP(() => {
    gsap.from(boxRef.current, {
      x: 800,
      y: 300,
      rotate: 360,
      delay: 1,
      duration: 1
    })
  })

  return (
    <div className="w-full h-full flex tac">
      <div ref={boxRef} className="h-fit">
        <Navbar />
      </div>
      <div id="box-gradient" className=" w-80 h-80 border bg-gradient-to-bl from-white to-red-600">
        asd
      </div>
      <div id="box" className=" w-80 h-80 border bg-gradient-to-bl from-blue-300 to-green-600">
        asd
      </div>
    </div>
  )
}
