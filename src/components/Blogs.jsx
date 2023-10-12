import Nav from '@/atomic_components/Nav'
import React from 'react'

const Blogs = () => {
  return (
    <>
        <Nav active={5}/>
        <div className="banner text-center px-xPadding flex flex-col items-center justify-center w-[100%] m-auto py-10">
            <h2 className='text-[2.5em] font-[600]'>Blogs</h2>
            <p className='text-[0.8em] text-gray-500'>Easily, you can get your course materials here!</p>
        </div>

        
    </>
  )
}

export default Blogs