'use client'
import { useGSAP } from "@gsap/react";
import { Navbar } from "./components";
import gsap from "gsap";
import { useRef } from "react";


export default function Home() {
  const boxRef = useRef<any>()
  gsap
  useGSAP(() => {
    gsap.from(boxRef.current,{
      x:800,
      y:300,
      rotate: 360,
      delay: 1,
      duration: 1
    })
  })

  return (
    <div className="w-full h-full flex tac">
    <div ref={boxRef}  className="">
      <Navbar />
    </div>
    </div>
  )
}
