import React from 'react'

const page = () => {
  return (
    <div className='p-6'>
        <div className="header flex items-center justify-between">
            <div className='flex items-center justify-center gap-2'>
                <img src="./logo.png" alt="" className='w-[30px] h-[30px] object-fit'/>
                <p className='md:text-[0.8em]'>NUESA FUNAAB</p>
            </div>

            <div className='text-end md:text-[0.8em]'>
                <p>College Due</p>
                <p>0904334102, 08058632339</p>
                <p>support@nuesadue.vercel.web</p>
            </div>
        </div>

        <div className="line my-2 bg-primary1"></div>

        <div className='py-6'>
            <p>PAYEE</p>
            <p>Sodipe Taiwo Oluwatimileyin</p>
            <p>20173633</p>
            <p>COLENG</p>
            <p>Mechanical Engineering</p>
        </div>

        <div className="line bg-black"></div>

        <div className='bg-gray-200 my-2'>
            <div className="grid grid-cols-3 items-center justify-center text-center py-2">
                <p>Description</p>
                <p>Student Type</p>
                <p>Total</p>
            </div>

            <div className='grid grid-cols-3 items-center justify-center text-center py-6'>
                <p>Payment for college due</p>

                <p>Fresher/DE</p>

                <p>3000</p>
            </div>
        </div>

        <div className='bg-gray-300'>
            <div className='grid grid-cols-2 items-center justify-center text-center py-2'>
                <p>Transaction Date</p>

                <p>Payment Reference</p>
            </div>

            <div className='grid grid-cols-2 items-center justify-center text-center py-2'>
                <p>
                    12-12-2014
                </p>

                <p>
                    sieweu239823
                </p>
            </div>


        </div>

        <div className='my-6'>
            <p>NOTICE:</p>
            <p>Any Alteration on this receipt will be rendered invalid Contact Us via WhatsApp on 09035870554</p>
        </div>
    </div>
  )
}

export default page