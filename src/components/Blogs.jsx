"use client";

import Footer from '@/atomic_components/Footer';
import Nav from '@/atomic_components/Nav';
import NewsLetter from '@/atomic_components/NewsLetter';
import NoContent from '@/atomic_components/NoContent';
import React from 'react';


const Blogs = () => {
  return (
    <>
      <Nav active={5}/>
      <div className="banner text-center px-xPadding flex flex-col items-center justify-center w-[100%] m-auto py-10">
        <h2 className='text-[2.5em] md:text-[2em] font-[600]'>Blogs</h2>
        <p className='text-[0.8em] md:text-[0.7em] text-gray-500'>You can get interesting writeups and blog-posts here!</p>
      </div>
      <NoContent text={"blogs"} />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Blogs;
