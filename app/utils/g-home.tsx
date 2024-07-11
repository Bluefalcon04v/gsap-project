'use client'
import gsap from "gsap";
import {useGSAP} from '@gsap/react'
import { useRef } from "react";

export function BoxGradient(){
    gsap
    useGSAP(()=>{
        gsap.from('#box-gradient', {
            x:200, y:400,
            duration: 1,
            delay: 1,
        })
    })
}

export function Box(){
    gsap
    useGSAP(()=>{
        gsap.from('#box', {
            x:200, y:400,
            duration: 1,
            rotate: 340,
            delay: 2,
        })
    })
}
