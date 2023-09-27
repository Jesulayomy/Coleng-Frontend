import Footer from '@/atomic_components/Footer'
import Nav from '@/atomic_components/Nav'
import React from 'react'

const Resources = () => {
  const categories = [
    "100", "200", "300", "400", "500"
  ]
  return (
    <>
    <Nav active={4}/>
    <div className="banner text-center px-xPadding py-[150px] w-[70%] m-auto">
        <h2 className='text-[2.5em] font-[600]'>Resources</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deserunt cumque illum unde temporibus ipsum eos alias sequi animi ut non nemo voluptates cupiditate, dolor laboriosam, consequuntur necessitatibus? Praesentium, fugiat!</p>
    </div>

    <div className='px-xPadding py-20'>
    <h2 className='text-[2em] font-[700]'>Select Level.</h2>

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
    </div>
    
    <Footer/>
    </>
  )
}

export default Resources