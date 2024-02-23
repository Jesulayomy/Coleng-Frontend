"use client";

import Footer from '@/atomic_components/Footer';
import Link from 'next/link';
import Nav from '@/atomic_components/Nav';
import React, { useState } from 'react';


const page = () => {
  const [rrr, setRRR] = useState();

  const handleRRR = (e) => {
    setRRR(e.target.value);
  };

  function redirectToPage(url) {
    window.location.href = url;
  };

  const getReceipt = () => {
    if (rrr) {
      redirectToPage(`/receipt/${rrr}`);
    }
  };


  return (
    <>
      <Nav />
        <div className='flex flex-col items-center justify-center mx-xPadding h-[50vh] gap-3'>
          <h2 className='text-[40px]'>Get Receipt</h2>
          <input className='w-2/3 md:w-full' type="text" placeholder='Enter Reference code' value={rrr} onChange={handleRRR} />
          <button onClick={()=> getReceipt()} className='w-fit py-3 px-6 rounded-lg md:w-full bg-primary1 text-white text-center'>Generate Receipt</button>
        </div>
      <Footer />
    </>
  );
};

export default page;
