import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center my-auto mt-[20vh] px-xPadding'>
        <div className='fixed top-10 left-xPadding'>
            <a href="/" className='no-underline'>
                <FaChevronLeft />
            </a>
        </div>

        <h2 className='font-bold text-[2em]'>Sign In</h2>
        <p>Comtinue your journey here</p>

        <form action="" className='flex flex-col gap-5 w-full'>
            <input type="tel" name="" id="" placeholder='matric number'/>
            <input type="password" name="" id="" placeholder='password'/>

            <button className='bg-primary1 text-white font-bold py-3 rounded-lg'>
                Login
            </button>

            <p >
                I don't have an acount yet? <a href="/sign-up">Create Account</a>
            </p>
        </form>

    </div>
  )
}

export default page