"use client"
import Image from "next/image"
import lucknow from "@/Assets/lucknow.png"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import Stars from "./ui/stars"

export default function Header(){
    return <Parallax speed={-10}>
    <div className="w-full h-[100vh] items-center relative">
      <Stars />
    <div className="h-full w-full text-center flex justify-center items-center flex-col ">
      <h1 className="text-yellow-200 text-9xl font-extrabold ">Awadh-Hack</h1>
      
      <div className="w-1/3 flex gap-5 mt-24 z-20">
      <div className="w-1/2 bg-amber-500 px-20 py-3 text-center  rounded-lg border-b-4 border-black"><h3 className="text-black font-semibold ">Register</h3></div>
        <div className="w-1/2 bg-black px-20 py-3 text-center  rounded-lg border-b-4 border-amber-500"><h3 className="text-amber-500 font-semibold ">Discord</h3></div>
      </div>
    4
      <div className="absolute bottom-0 opacity-80"><Image src={lucknow} alt=""></Image></div>
      
      </div>
     
  </div>
  </Parallax>
}

