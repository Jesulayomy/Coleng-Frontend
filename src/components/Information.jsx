import Footer from '@/atomic_components/Footer';
import Nav from '@/atomic_components/Nav';
import React from 'react';

const Information = () => {
  return (
    <>
      <Nav />

      {/* <div classname="flex flex-row gap-10 px-xPadding py-20 sm:flex-col sm:p-sPadding">
        <div className='w-1/2'>
          <h2 className=''>Get know us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quo hic, culpa beatae minus iste vitae odit vero illum, inventore sint itaque aperiam illo eos obcaecati facilis. Optio, voluptas rerum?</p>
        </div>

        <div>
          <img src='/smiling.png' className='w-1/2 h-auto'/>
          </div>
      </div> */}

    <div className="flex gap-10 flex-row p-xPadding items-center">
      <div className='flex gap-3 flex-col'>
        <h2 className='text-[2.5em] font-[700]' >Get Informed.</h2>
        <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quo hic, culpa beatae minus iste vitae odit vero illum, inventore sint itaque aperiam illo eos obcaecati facilis. Optio, voluptas rerum?</p>
        <button className='bg-primary1 text-white px-5 py-2 rounded-md w-fit'>
          Continue
        </button>
      </div>
      
      <div>
        <img src="./smiling.png" alt="" />
      </div>
    </div>
      <Footer />
    </>
  )
}

export default Information