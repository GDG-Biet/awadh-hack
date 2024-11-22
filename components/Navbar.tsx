import Image from "next/image"
import logo from "@/Assets/logo.png"
import Link from "next/link"
export default function Navbar(){
    return (
        <div className="w-full flex md:flex-row flex-col">
            <Logo></Logo>
            <div className="md:w-2/4 w-full bg-slate-500
             bg-opacity-5 md:static fixed bottom-0 backdrop-blur-md rounded-full m-auto flex justify-center items-center p-5">
                <Menu></Menu>
            </div>
        </div>
    );
}

function Logo() {
  return (
    <div className=" text-white h-auto w-auto rounded-3xl pl-5">
      <Image
        className="object-contain rounded-3xl"
        height={150}
        width={150}
        src={logo}
        alt=""
      ></Image>
    </div>
  );
}

function Menu(){
    return<div>
        <ul className="flex justify-center md:gap-10 gap-4 text-white">
            <li className="font-semibold"><a href="/">Home</a></li>
            <li className="font-semibold"><a href="#about">About</a></li>
            <li className="font-semibold"><a href="#">Prizes</a></li>
            <li className="font-semibold"><a href="#theme">Theme</a></li>
            <li className="font-semibold"><a href="#crew">Crew</a></li>
            <li className="font-semibold"><a href="#sponsor">Sponsor</a></li>
        </ul>
    </div>
}
