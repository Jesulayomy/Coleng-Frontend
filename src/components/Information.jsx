import Footer from '@/atomic_components/Footer';
import Nav from '@/atomic_components/Nav';
import React from 'react';

const eventData = [
  {
    title: "Amtes Symposium / Title",
    text: "lorem",
    day: 16,
    month: "FEB",
    year: "2023",
  },
  {
    title: "Amtes Symposium / Title",
    text: "lorem",
    day: 16,
    month: "FEB",
    year: "2023",
  },
  {
    title: "Amtes Symposium / Title",
    text: "lorem",
    day: 16,
    month: "FEB",
    year: "2023",
  },
]

const Information = () => {
  return (
    <>
      <Nav active={3} />
      <div className="flex gap-10 flex-row p-xPadding items-center">
        <div className='flex gap-3 flex-col'>
          <h2 className='text-[2.5em] font-[700]' >Get Informed.</h2>
          <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quo hic, culpa beatae minus iste vitae odit vero illum, inventore sint itaque aperiam illo eos obcaecati facilis. Optio, voluptas rerum?</p>
          <button className='bg-primary1 text-white px-5 py-2 rounded-md w-fit'>
            Continue
        </button>
        </div>

        <div>
          <img src="./smiling.png" alt="" />
        </div>
      </div>

      {/* UPDATES */}
      <h2 className="font-[500] text-[2rem] text-center">Updates</h2>
      <p className="text-center">Stay updated with the latest information about our college</p>
      <div></div>

      {/* UPCOMING EVENTS */}
      <div className="p-xPadding">
        <h2 className="font-[500] text-[2rem] text-center">Upcoming Events</h2>
        {eventData.map((event) => {
          return <>
            <div className="flex flex-row items-center justify-center gap-[5rem] py-[2rem] border-b-[1px]">
              <div className="bg-black py-[1rem] px-[2rem] flex flex-col items-center">
                <span className="text-[2rem] block">{event.day}</span>
                <br /> FEB
             <br /> 2023
            </div>
              <div>
                <h3 className="text-gray mb-[1rem]">{event.title}</h3>
                <p className="text-[0.8rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At natus saepe odio porro non fugit?</p>
              </div>
              <button className="btn px-5 py-2 rounded-md border-[2px]">Learn More</button>
            </div>
          </>
        })}
      </div>
      <Footer />
    </>
  )
}

export default Information