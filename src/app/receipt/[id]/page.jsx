"use client"
import Loader from '@/components/Loader';
import { getTransaction } from '@/utils/requests';
import  html2pdf  from 'html2pdf.js';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {

    let {id} = params;
    console.log(id)
    const [data, setData] = useState( {
        email: "eolaosebikan60@gmail.com",
        name: "Emmanuel Olaosebikan",
        amount: 2000,
        ref: "001",
        matricNumber: "20201821",
        department: "Electrical Electronics Engineering",
        studentType: "Fresher/DE",
        createdAt: "12-12-12"
    }  )

    // {
    //     email: "eolaosebikan60@gmail.com",
    //     name: "Emmanuel Olaosebikan",
    //     amount: 2000,
    //     ref: "001",
    //     matricNumber: "20201821",
    //     department: "Electrical Electronics Engineering",
    //     studentType: "Fresher/DE",
    //     createdAt: "12-12-12"
    // }    

    const fetchData = async ()=>{
        return await getTransaction(id)
    }

    useEffect(()=>{
        fetchData().then(resp => setData(resp))
        .catch()
    }, [id])

    const downloadPDF = () => {
        const element = document.getElementById('receipt-container');
        const options = {
            filename: 'receipt.pdf',
          };
      
          html2pdf(element, options);
    };

  return (
    <>
        {
            data ?
            <>
            <div className='p-3' id='receipt-container'>
                <div className="header flex items-center justify-between">
                    <div className='flex items-center justify-center gap-2'>
                        <Image src="/./logo.png" width={0} height={0} unoptimized alt="" className='w-[30px] h-[30px] object-fit'/>
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
                    <p>{data.name}</p>
                    <p>{data.matricNumber}</p>
                    <p>COLENG</p>
                    <p>{data.department}</p>
                </div>

                <div className="line bg-black"></div>

                <div className='bg-gray-200 my-2'>
                    <div className="grid grid-cols-3 items-center justify-center text-center tt py-2">
                        <p>Description</p>
                        <p>Student Type</p>
                        <p>Total</p>
                    </div>

                    <div className='grid grid-cols-3 items-center justify-center text-center tt mt-1'>
                        <p>Payment for college due</p>

                        <p className='bg-gray-300'>{data.studentType}</p>

                        <p className='bg-primary1 text-white'>{data.amount}</p>
                    </div>
                </div>

                <div className='bg-gray-200'>
                    <div className='grid grid-cols-2 items-center justify-center text-center tt'>
                        <p>Transaction Date</p>

                        <p>Payment Reference</p>
                    </div>

                    <div className='grid grid-cols-2 items-center justify-center text-center tt'>
                        <p className='bg-gray-300'>
                            {data.createdAt}
                        </p>

                        <p className='bg-primary1 text-white'>
                            {data.ref}
                        </p>
                    </div>


                </div>

                <div className='my-6'>
                    <p>NOTICE:</p>
                    <p>Any Alteration on this receipt will be rendered invalid Contact Us via WhatsApp on 09035870554</p>
                </div>
            </div>

            <button className='border-primary1 border-2 py-3 px-16 md:w-fit m-auto w-fit flex items-center justify-center rounded-md text-primary1 my-5 hover:bg-primary1 hover:text-white transition-all' onClick={downloadPDF}>Download PDF</button>
            </>
           

    :

    <div className='flex flex-col items-center justify-center mt-[40vh] gap-5'>
        <h2>Loading Receipt</h2>
        <Loader />
    </div>
        }
    </>
  )
}

export default page