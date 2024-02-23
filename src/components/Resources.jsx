"use client";

import Footer from '@/atomic_components/Footer';
import Nav from '@/atomic_components/Nav';
import NewsLetter from '@/atomic_components/NewsLetter';
import ResourceContent from '@/atomic_components/ResourceContent';
import ResourceTables from '@/atomic_components/ResourceTables';
import toast from 'react-hot-toast';
import Uploader from '@/atomic_components/Uploader';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';


const Resources = ({ book }) => {
  const [showUpload, setShowUpload] = useState(false);

  return (
    <>
      <Nav active={3}/>
      <div className="banner text-center px-xPadding flex flex-col items-center justify-center w-[100%] m-auto py-5">
        <h2 className='text-[2.5em] font-[600]'>Resources</h2>
        <p className='text-[0.8em] text-gray-500'>You can get course materials, textbooks and past questions here!</p>
      </div>
      <div className='px-xPadding py-1'>
        {book ? (
          <div>
            <ResourceContent book={book}/>
          </div>
        ) : (
          <div className="books">
            <ResourceTables />
          </div>
        )}
      </div>
      <div>
        <button
          type="button"
          onClick={() => setShowUpload(!showUpload)}
          className={`text-white rounded-full p-6 md:p-3 text-5xl md:text-2xl fixed bottom-10 right-10 z-40 focus:outline-none transition-all duration-300 ease-in-out${showUpload ? ' bg-red-500' : ' bg-green-500'}`}
        >
          {showUpload ? (
            <FaPlus className="transform rotate-45 transition-all duration-300 ease-in-out" />
          ) : (
            <FaPlus className="transform transition-all duration-300 ease-in-out" />
          )}
        </button>
      </div>
      {showUpload && (
        <div className='modal'>
          <Uploader close={() => setShowUpload(false)} />
        </div>
      )}
      <NewsLetter />
      <Footer/>
    </>
  );
};

export default Resources;
