"use client";
import Image from "next/image";
import lucknow from "@/Assets/lucknow.png";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Stars from "./ui/stars";
import Link from "next/link";

export default function Header() {
  return (
    <Parallax speed={-10}>
      <div className="w-full md:h-[100vh] h-[90vh] items-center relative">
        <Stars />
        <div className="h-full w-full text-center flex justify-center items-center flex-col ">
          <h1 className="text-yellow-200 md:text-9xl text-6xl font-extrabold ">
            Awadh-Hack
          </h1>

          <div className="md:w-1/3 w-2/3 flex md:flex-row flex-col gap-5 mt-24 z-20">
            <button
              className="md:w-1/2 bg-amber-500 px-20 md:py-3 py-5 text-center border-b-4 border-black"
              style={{ borderRadius: "10px" }}
            >
              <h3 className="text-black font-semibold ">Register</h3>
            </button>

              <div
                className="md:w-1/2 bg-black px-20 md:py-3 py-5 text-center md:border-b-4 border-2 border-amber-500"
                style={{ borderRadius: "10px" }}
              >
               <Link href="https://discord.gg/fdNgdRE4"><h3 className="text-amber-500 font-semibold text-center ">Discord</h3></Link>
              </div>
            
          </div>

          <div className="absolute bottom-0 opacity-80">
            <Image src={lucknow} alt=""></Image>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
