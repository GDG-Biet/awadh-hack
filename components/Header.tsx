

export default function Header(){
    return <div className="w-full bg-gray-600 h-[100vh] items-center">
    <div className="h-full w-full text-center flex justify-center items-center flex-col">
      <h1 className="text-yellow-200 text-8xl font-extrabold">Awadh-Hack</h1>
      <div className="w-1/3 flex gap-5 mt-5">
        <div className="w-1/2 bg-amber-500 px-20 py-3 text-center  rounded-lg border-b-4 border-black"><h3 className="text-black font-semibold ">Register</h3></div>
        <div className="w-1/2 bg-black px-20 py-3 text-center  rounded-lg border-b-4 border-amber-500"><h3 className="text-amber-500 font-semibold ">Discord</h3></div>
      </div>
      </div>
  </div>
}