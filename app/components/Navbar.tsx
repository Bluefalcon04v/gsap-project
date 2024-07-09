import React from 'react'
import Nav_gsap from '../utils/g-home'

export const Navbar = () => {
  return (
    <>
      <div className='group uppercase text-white relative cursor-pointer overflow-hidden border px-2 w-fit rounded-full'> 
        <span className='inline-block p-1 transition duration-400 ease-out group-hover:-translate-y-[120%]'>Hello</span>
        <span className='inline-block p-1 transition duration-500 ease-out absolute left-0 translate-y-[120%] rotate-12 group-hover:translate-y-0 group-hover:rotate-0 px-2'>World</span>
      </div>
    </>
  )
}
