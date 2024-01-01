"use client"
import Nav from '@/atomic_components/Nav'
import Link from 'next/link'
import React, { useState } from 'react'
import useLocalStorage from 'use-local-storage'

const page = () => {
    const [active, setActive] = useState(0)
    const tabs = [
        "Payments", "Saved"
    ]

    const [student, setStudent] = useLocalStorage("student", null);

  return (
    <>
    {/* {
        student && */}
        <>
        <Nav />

        <div className='px-xPadding'>
            <div className='flex items-center justify-center my-5 flex-col'>
                <img src={student?.profilePicture} alt="" className='w-[150px] h-[150px] rounded-full shadow-lg object-cover border-[5px] border-primary1'/>
                
                <div className="texts flex flex-col justify-center items-center my-3">
                    <h1 className='text-[1.5em] font-bold'>{student.fullName}</h1>
                    <p>{student.primaryEmail}</p>
                    <p>ELE - {student.matricNumber}</p>
                    
                </div>
            </div>

            <div className="line w-full bg-gray-200 h-[1px]" />

            <div className="tabs flex items-center py-2">
                {
                    tabs.map((tab, i)=>{
                        return(
                            <p
                                onClick={()=> setActive(i)}
                                className={`w-1/2 text-center py-2 ${active === i && "border-b-2 border-b-primary1"}`}
                                >
                            {tab}</p>
                        )
                    })
                }
            </div>

            <div className='border-primary1 border-2 my-3 rounded-lg p-3 text-black'>
                <h2 className='text-[1.5em] font-semibold'>College Due - 2020/2</h2>
                <p>Status: <span className='text-green-500 font-bold'>PAID</span> </p>
            </div>

            <div className='border-primary1 border-2 rounded-lg p-3 text-black'>
                <h2 className='text-[1.5em] font-semibold'>College Due</h2>
                <p>Status: <span className='text-red-500 font-bold'>PENDING</span> </p>
                <Link href={"/"} className='underline'>
                    Proceed to payment
                </Link>
            </div>
            
        </div>
        </>
    {/* } */}
    </>
  )
}

export default page