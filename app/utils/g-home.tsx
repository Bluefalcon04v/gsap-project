'use client'
import gsap from "gsap";
import {useGSAP} from '@gsap/react'

export default function Nav_gsap(){
    gsap
    useGSAP(()=>{
        gsap.from('#navbar', {
            x:200, y:400,
            duration: 1,
            delay: 1,
        })
    })
}