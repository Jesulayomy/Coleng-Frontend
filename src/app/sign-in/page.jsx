"use client"
import { signIn } from '@/utils/requests';
import React, { useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast';

const page = () => {
    
    const [matricNumber, setMatric] = useState();
    const [password, setPassword] = useState();


    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }

    const handlMatric = (e)=>{
        setMatric(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        let data = {
            matricNumber, password
        }

        console.log(data)
        signIn(data)
    }

  return (
    <div className='flex flex-col items-center justify-center my-auto mt-[10vh] px-xPadding'>
        <div className='fixed top-10 left-xPadding'>
            <a href="/" className='no-underline'>
                <FaChevronLeft />
            </a>
        </div>

        <div className='my-5 flex flex-col gap-3 items-center text-center'>
        <img src="./logo.png" alt="" />
        <h2 className='font-bold text-[2em]'>Sign In</h2>
        <p>Continue your journey here</p>
        </div>

        <form action="" className='flex flex-col gap-5 w-full'>
            <input type="number" name="" id="" placeholder='matric number' onChange={handlMatric}/>
            <input type="password" name="" id="" placeholder='password' onChange={handlePassword}/>

            <button className='bg-primary1 text-white font-bold py-3 rounded-lg' onClick={handleSubmit}>
                Login
            </button>

            <p className='text-center'>
                I don't have an acount yet? <a href="/sign-up" className='underline text-primary1'>Create Account</a>
            </p>
        </form>
        {/* <Toaster /> */}
    </div>
  )
}

export default page