import Image from "next/image"
import logo from "@/Assets/logo.png"
export default function Navbar(){
    return<div className="w-full flex">
        <Logo></Logo>
        <div className="w-1/3 bg-white bg-opacity-5 backdrop-blur-md rounded-full m-auto flex justify-center items-center p-5">
        <Menu></Menu>
        </div>
    </div>
}

function Logo(){
    return<div className=" text-white h-auto w-auto rounded-3xl pl-5"><Image className="object-contain rounded-3xl" height={150} width={150} src={logo} alt=""></Image></div>
}

function Menu(){
    return<div>
        <ul className="flex justify-center gap-5 text-white">
            <li className="font-semibold">Home</li>
            <li className="font-semibold">Partner</li>
            <li className="font-semibold">Team</li>
            <li className="font-semibold">Contact us</li>
        </ul>
    </div>
}