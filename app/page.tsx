'use client'
import { useGSAP } from "@gsap/react";
import { Navbar } from "./components";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Box, BoxGradient } from "./utils/g-home";
import Image from "next/image";


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
  const [circle1, setCircle] = useState(0)
  const [circle2, setCircle2] = useState(0)
  
  const random = gsap.utils.random(-500, 300, 10) // (x, y, z) x,y = range and z = the number divisible by z
  const randomy = gsap.utils.random(-50, 300, 10) 

  useGSAP(() => {
    gsap.to(".circle", {
      x: circle1,
      y: circle2,
      duration: 1,
    })
  }, [circle1])

  return (
    <>
      {/* <div className="w-full h-full flex justify-center ">
        <div ref={boxRef} className="h-fit">
          <Navbar />
        </div>
        <div id="box-gradient" className=" w-80 h-80 border bg-gradient-to-bl from-white to-red-600">
          asd
        </div>
        <div id="box" className=" w-80 h-80 border bg-gradient-to-bl from-blue-300 to-green-600">
          asd
        </div>
      </div> */}
      <div className="flex justify-center">

        {/* <button className="px-8 py-4 text-xl bg-red-800 " >
          Animate
        </button> */}
        {/* <div className="circle h-32 w-32 rounded-full bg-yellow-300 "></div> */}
        <Image
        onClick={() => {
          setCircle(random)
          setCircle2(randomy)
        }}
        height={0}
        width={0}
        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG4WhIk3C8ybxl-BzYd_NnSrQuh6c4GbUHeA&s"}
        alt="img"
        className="w-20 h-20 circle"
         />
      </div>

    </>

  )
}
