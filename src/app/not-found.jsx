"use client";

import Footer from '@/atomic_components/Footer';
import Link from 'next/link';
import Nav from '@/atomic_components/Nav';
import NewsLetter from '@/atomic_components/NewsLetter';
import React from 'react';
import { RiArrowRightFill } from 'react-icons/ri';


const page = () => {
  return (
    <>
    <Nav />
    <div className='flex flex-col items-center justify-center gap-[10px] justify-self-center md:gap-[32px] my-[100px] md:my-[25vh] md:px-xPadding'>
      <p className='text-[100px] md:text-[60px]'>404</p>
      <p className='text-[40px] md:text-[24px] md:text-center'>Oops! We could not find the page you are looking for.</p>
      <Link href={"/"}>
        <button className='flex gap-2 items-center justify-center w-fit border-2 md:text-[14px] border-black p-5'>
          GO BACK TO HOME PAGE <RiArrowRightFill />
        </button>
      </Link>
    </div>
    <NewsLetter />
    <Footer />
    </>
  );
};

export default page;
