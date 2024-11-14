export default function Navbar(){
    return<div className="w-full flex">
        <Logo></Logo>
        <div className="w-1/3 bg-white bg-opacity-5 backdrop-blur-md rounded-full m-auto border-2 border-orange-500 flex justify-center items-center p-5">
        <Menu></Menu>
        </div>
    </div>
}

function Logo(){
    return<div className="ml-10 text-white w-auto h-auto p-5">LOGO</div>
}

function Menu(){
    return<div>
        <ul className="flex justify-center gap-5 text-white">
            <li className="font-semibold">Home</li>
            <li className="font-semibold">Partner</li>
            <li className="font-semibold">Team</li>
            <li className="font-semibold">Contcct us</li>
        </ul>
    </div>
}