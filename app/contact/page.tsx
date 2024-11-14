export default function Events(){
    return(
        <>
        {/* Hero Section */}
      <div className="h-[30vh]"></div>
       <div className=" flex justify-center w-[90%] bg-blue-500 m-auto p-4 dark:bg-gray-900 dark:bg-opacity-50 backdrop-blur-lg rounded-xl relative">
        <Form></Form>
       </div>
       <div className="w-5/6 m-auto mt-20">
        <h2 className="cursor-pointer text-5xl font-bold text-slate-300 hover:text-slate-800 w-auto hover:border-b-4 duration-300">Want to collab?</h2>
        <div className=" cursor-pointer p-20 flex justify-center items-center text-purple-600 hover:text-purple-400 bg-purple-400 hover:bg-purple-600 rounded-full my-10 duration-300">
            <p className="text-5xl font-extrabold"><a href="mailto:bietgdsc2023@gmail.com">Send us a Mail</a></p>
            </div>
       </div>
       </>
    )
}

function Form(){
    return (
        <div className='flex justify-center flex-col dark:bg-gray-900 bg-opacity-40 bg-white w-11/12 m-8 rounded-xl p-3'>
          <h1 className='dark:bg-blue-500 text-white font-bold text-5xl bg-black w-full text-center rounded-xl p-10  bg-opacity-75 m-auto drop-shadow-xl'>Get in Touch</h1>
        <form className=" md:gap-2 lg:w-2/3 md:grid md:w-4/5 md:m-auto md:grid-cols-3 md:grid-rows-6 items-center w-full m-2 p-2 flex flex-col">
          
            <label className='dark:text-blue-400 font-bold text-xl text-right' htmlFor="frm-email">Email : </label>
            <input className='dark:bg-blue-600 md:col-span-2 border-2  dark:bg-transparent  dark:border-gray-800 text-xl bg-opacity-70 rounded-lg m-2 p-1 text-black dark:text-white'
              id="frm-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder='Enter your Email'
    
    
              required
            />
          
          
            <label className='text-right dark:text-blue-400 font-bold text-xl' htmlFor="frm-phone">Phone : </label>
            <input
            className='border-2 md:col-span-2  dark:bg-transparent dark:text-white  dark:border-gray-800 text-xl dark:bg-blue-500 bg-white bg-opacity-70 rounded-lg m-2 p-1 text-black'
              id="frm-phone"
              type="number"
              name="phone"
              placeholder='Enter your Phone Number'
              autoComplete="tel"
              required
            />
          
              <label className='text-right dark:text-blue-400 font-bold text-xl' htmlFor="frm-first">First Name : </label>
              <input
              className='border-2 dark:bg-transparent dark:text-white  dark:border-gray-800 text-xl md:col-span-2 bg-white bg-opacity-70 rounded-lg m-2 p-1 text-black'
                id="frm-first"
                type="text"
                name="first"
                autoComplete="given-name"
                placeholder='Enter your First Name'
                required
              />
            
            
              <label className='text-right dark:text-blue-400 font-bold text-xl' htmlFor="frm-last">Last Name : </label>
              <input
              className='text-xl border-2 dark:bg-transparent dark:text-white  dark:border-gray-800 md:col-span-2 bg-white bg-opacity-70 rounded-lg m-2 p-1 text-black'
                id="frm-last"
                type="text"
                name="last"
                placeholder='Enter your Last Name'
                autoComplete="family-name"
                required
              />
            
          
          
            <label className='md:items-start text-right dark:text-blue-400 font-bold text-xl' htmlFor="frm-message">Suggetions : </label>
            <textarea className=' dark:bg-transparent dark:text-white  dark:border-gray-800 text-xl md:h-20 border-2 md:col-span-2 md:row-span-2 bg-white bg-opacity-70 rounded-lg m-2 p-1 text-black' id="frm-message" rows={6} name="message" placeholder='Enter your Suggetions/Complaints'></textarea>
          
          <div className="w-full flex justify-center
           button">
          </div>
        </form>
            
          {/* <button type="submit" className='border-2 md:row-start-8 border-slate-900 md:col-start-2 text-white bg-blue-400 rounded-md p-2 hover:border-white'>Submit</button> */}
    
          <button
              type="submit"
              className="border-2 border-black mb-4 -mt-2 m-auto group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-blue-500 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-blue-400 active:scale-125"
            >
              Submit
            </button>
    
        </div>
      );
}
