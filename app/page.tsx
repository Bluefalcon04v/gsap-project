'use client'
import { useGSAP } from "@gsap/react";
import { Navbar } from "./components";
import Nav_gsap from "./utils/g-home";
import gsap from "gsap";


export default function Home() {
  gsap
  useGSAP(() => {
    gsap.from('#hello', {
      y: 400,
      duration: 1,
      delay: 1,
    })
  })
  return (
    <div id="hello" className="">
      <Navbar />
    </div>);
}
