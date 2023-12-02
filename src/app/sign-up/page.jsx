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

        <h2 className='font-bold text-[2em]'>Sign Up</h2>
        <p>Welcome here</p>

        <form action="" className='flex flex-col gap-5 w-full'>
            <input type="tel" name="" id="" placeholder='matric number'/>
            <input type="email" name="" id="" placeholder='email'/>
            <input type="text" name="" id="" placeholder='full name'/>
            <input type="password" name="" id="" placeholder='password'/>

            <button className='bg-primary1 text-white font-bold py-3 rounded-lg'>
                Login
            </button>

            <p >
                I have an acount,<a href="/sign-up">Sign In</a>
            </p>
        </form>

    </div>
  )
}

export default page