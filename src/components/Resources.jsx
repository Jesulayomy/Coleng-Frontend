import Footer from '@/atomic_components/Footer'
import Nav from '@/atomic_components/Nav'
import NewsLetter from '@/atomic_components/NewsLetter'
import NoContent from '@/atomic_components/NoContent'
import React from 'react'

const Resources = () => {
  const categories = [
    "100", "200", "300", "400", "500"
  ]
  return (
    <>
    <Nav active={4}/>
    <div className="banner text-center px-xPadding flex flex-col items-center justify-center w-[100%] m-auto py-10">
        <h2 className='text-[2.5em] font-[600]'>Resources</h2>
        <p className='text-[0.8em] text-gray-500'>Easily, you can get your course materials here!</p>
    </div>

    <div className='px-xPadding py-10'>
    <h2 className='text-[1.5em] font-[500] sm:text-center'>Select Level:</h2>

      <div className="categories">
      {
        categories.map((level, i)=>{
          return(
            <div className="cat" key={i}>
              {level}
            </div>
          )
        })
      }
    </div>

    <NoContent text={"resources"} />
    </div>
    
    <NewsLetter />
    <Footer/>
    </>
  )
}

export default Resources