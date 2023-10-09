import React from 'react'
import { FaLock } from 'react-icons/fa'

const NewsLetter = () => {
  return (
    <div className='bg-primary1 text-white mx-xPadding rounded-md my-20 p-5  py-10 flex flex-col items-center justify-center sm:py-6 sm:my-10'>
        <p className='text-[2em] font-[600]'>Subscribe to our newsletter</p>
        <form action="" className='flex w-1/2 sm:w-full'>
            <input type="text" className='border-none rounded-none' placeholder='emmydoe@mail.com'/>
            <button className='bg-black px-5 flex gap-2 items-center'> 
                Join
                <FaLock />
            </button>
        </form>
    </div>
  )
}

export default NewsLetter