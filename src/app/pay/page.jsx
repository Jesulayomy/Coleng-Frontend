import Footer from '@/atomic_components/Footer'
import Nav from '@/atomic_components/Nav'
import React from 'react'

const page = () => {
  return (
    <div>
        <Nav />

        <div className='px-xPadding my-[60px] flex flex-col items-center justify-center'>
            <p className='uppercase text-center md:text-[14px]'>Payment of college Due</p>
            <p className='text-[60px] text-center leading-[68px] w-2/3 m-auto md:text-[30px] md:w-full md:leading-[40px]'>Kindly provide necessary and accurate information</p>

            <form action="" className='grid grid-cols-2 md:grid-cols-none gap-[20px] mt-10 w-full'>
                <input type="text" placeholder='full name'/>
                <input type="email" placeholder='email'/>
                <input type="text" placeholder='matric number'/>
                <input type="tel" placeholder='Phone Number'/>
                <select name="" id="" placeholder="Select Department">
                    <option value="">Agricultural Engineering</option>
                    <option value="">Civil Engineering</option>
                    <option value="">Electrical Engineering</option>
                    <option value="">Mechatronics Engineering</option>
                    <option value="">Mechanical Engineering</option>
                </select>

                <select name="" id="" placeholder="Select Department">
                    <option value="">100L</option>
                    <option value="">200L</option>
                    <option value="">200L DE</option>
                    <option value="">300L</option>
                    <option value="">400L</option>
                    <option value="">500L</option>
                </select>
            </form>

            <button className='border-primary1 border-2 py-3 px-16 md:w-full rounded-md text-primary1 my-5 hover:bg-primary1 hover:text-white transition-all'>
                Continue to Payment
            </button>
        </div>

        <Footer />
    </div>
  )
}

export default page