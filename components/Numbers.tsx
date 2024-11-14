"use client"
import { Parallax } from "react-scroll-parallax";


export default function Numbers(){
    return <div className="w-full h-[60vh] flex justify-evenly items-center">
      <Parallax speed={5}>
    <div className="w-60 h-60 p-5 flex justify-center items-center border-4 border-amber-700">
      <div className="felx flex-col justify-center hover:border-b-8 hover:border-amber-400 text-6xl font-extrabold duration-200">
        <p className="text-center">12+</p>
        <p className="text-center">Theme</p>
        
      </div>
    </div>
    </Parallax>
    <Parallax speed={-5}>
    <div className="w-60 h-60 p-5 flex justify-center items-center border-4 border-amber-700">
      <div className="felx flex-col justify-center hover:border-b-8 hover:border-amber-400 text-6xl font-extrabold duration-300">
        <p className="text-center">24+</p>
        <p className="text-center">Hours</p>
  
      </div>
    </div>
    </Parallax>
    <Parallax speed={5}>
    <div className="w-60 h-60 p-5 flex justify-center items-center border-4 border-amber-700">
      <div className="felx flex-col justify-center hover:border-b-8 hover:border-amber-400 text-6xl font-extrabold duration-200">
        <p className="text-center">150+</p>
        <p className="text-center">Projects</p>
        
      </div>
    </div>
    </Parallax>
  </div>
}