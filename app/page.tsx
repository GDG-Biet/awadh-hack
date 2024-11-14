"use client"
import AboutHack from "@/components/AboutHack"
import AboutUs from "@/components/AboutUs"
import { Footer } from "@/components/footer"
import Header from "@/components/Header"
import Numbers from "@/components/Numbers"
import Sponsers from "@/components/Sponser"
import Theme from "@/components/Theme"
import Faqs from "@/components/Faqs"
import { Parallax } from "react-scroll-parallax"
export default function Home() {
  return <div className="bg-gray-950">
  <Header></Header>
  <div className="relative m-20">
    <h2 className="text-9xl text-center text-slate-800 capitalize">ABOUT US</h2>
    <h2 className="text-7xl text-white absolute bottom-0 left-[40%]">about us</h2>
    </div>
    <AboutUs></AboutUs>
    <div className="relative m-20">
    <h2 className="text-9xl text-center text-slate-800 capitalize sticky">Awadh-Hack</h2>
    <h2 className="text-7xl text-white absolute bottom-0 left-[20%]">What is Awadh-Hack?</h2>
    </div>
    <AboutHack></AboutHack>
    <Numbers></Numbers>
    <Parallax scale={[1,1.5]}>
    <div className="relative m-20">
    <h2 className="text-9xl text-center text-slate-800 capitalize sticky">THEME</h2>
    <h2 className="text-7xl text-white absolute bottom-0 left-[40%]">theme</h2>
    </div>
    </Parallax>
    <Theme></Theme>
    <div className="relative m-20">
    <h2 className="text-9xl text-center text-slate-800 capitalize sticky">SPONSORS</h2>
    <h2 className="text-7xl text-white absolute bottom-0 left-[40%]">sponsors</h2>
    </div>
    <Sponsers></Sponsers>
    <div className="relative m-20">
    <h2 className="text-9xl text-center text-slate-800 capitalize sticky">FAQs</h2>
    <h2 className="text-7xl text-white absolute bottom-0 left-[45%]">faqs</h2>
    </div>
    <Faqs></Faqs>
    <Footer></Footer>
  </div>
}
