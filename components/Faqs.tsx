"use client"
import { useState } from 'react'
import Image from 'next/image'
import heart from '@/assets/heart.svg'
import data from "@/Data/faqdata.json"
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'

type Props = {
    question: string,
    answer: string | string[],
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    idx: number
}
export default function Home() {
  const [active, setActive] = useState([false, false, false, false, false]);
  return (
    <div className='w-full p-10 m-10'>
      <div className='grid place-items-center w-5/6 m-auto bg-slate-600 px-10 py-2 bg-opacity-20 rounded-2xl'>
      {data.map((que)=>{
        return (
            <div className='w-full' key={que.idx}>
                <Accordion question={que.question} answer={que.answer} turn={active} setTurn={setActive} idx={que.idx}/>
            </div>)
      })}
    </div>
    </div>
  )
}

const Accordion = ({question, answer, turn, setTurn, idx}: Props) => {

  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(()=>{
      if(contentRef.current){
          contentRef.current.style.maxHeight = turn![idx] ? `${contentRef.current.scrollHeight}px`:"0px"
      }
  },[contentRef, turn, idx])

  const handler = () => {
      const newTurn = [...turn!]
      newTurn[idx] = !newTurn[idx]
      setTurn!(newTurn)
  }
return (
  <div className='flex flex-col items-center justify-center w-full px-2 text-lg lg:text-base'>
    <button onClick={handler} className={`m-2 border-2 border-slate-600 rounded-lg px-5 shadow cursor-pointer w-full h-full ${turn![idx]}`}>
      <div className='py-2'>
         <div className='flex items-center justify-between h-14 text-left'>
            <span className='ml-2 font-light lg:text-lg text-sm text-amber-400'>{question}</span>
            {/* <div>
             {turn![idx] ? <Image src={heart} alt="" width={20} height={20}/> :
              <Image src={heart} alt="" width={20} height={20}/>}
            </div> */}
         </div>
         <div ref={contentRef} className='mx-4 overflow-hidden text-left transition-all duration-500 h-full'>
            <p className='py-1 font-normal leading-normal text-justify whitespace-pre-line text-xs lg:text-lg'>{answer}</p>
         </div>
      </div>
    </button>
  </div>
)
}
