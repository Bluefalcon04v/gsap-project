'use client'
import gsap from "gsap";
import {useGSAP} from '@gsap/react'
import { Navbar } from "./components";

export default function Home() {
  gsap
  useGSAP(()=>{
    gsap.from('#navbar', {
      x:200, y:400,
      duration: 1,
      delay: 2,
    })
  })
  return (
    <div className="">
      <Navbar/>
    </div>);
}
