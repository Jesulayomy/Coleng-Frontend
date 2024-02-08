import Footer from '@/atomic_components/Footer';
import Nav from '@/atomic_components/Nav';
import NewsLetter from '@/atomic_components/NewsLetter';
import React from 'react';
import ResourceContent from '@/atomic_components/ResourceContent';
import ResourceTables from '@/atomic_components/ResourceTables';

const Resources = ({book}) => {
  return (
    <>
    <Nav active={3}/>
    <div className="banner text-center px-xPadding flex flex-col items-center justify-center w-[100%] m-auto py-5">
        <h2 className='text-[2.5em] font-[600]'>Resources</h2>
        <p className='text-[0.8em] text-gray-500'>You can get course materials, textbooks and past questions here!</p>
    </div>

    <div className='px-xPadding py-1'>
      {
        book ? (
        <div>
          <ResourceContent book={book}/>
        </div>
        ) : (
          <div className="books">
            <ResourceTables />
          </div>
        )
      }
    </div>

    <NewsLetter />
    <Footer/>
    </>
  )
}

export default Resources;