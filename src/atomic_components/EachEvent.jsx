import React, { useState } from 'react'
import Nav from './Nav'
import { events } from '@/utils/events'
import { FaCalendarAlt } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import Footer from './Footer'
import NewsLetter from './NewsLetter'
import EventCard from './EventCard'
import parse from 'html-react-parser';

const EachEvent = () => {
    const [ev, setEv] = useState(events)
    const [event, setEvent] = useState(ev[0])
    const [otherEvent, setOtherEvent] = useState(ev.splice(1,2))

  return (
    <>
        <Nav active={3}/>

            <div className='flex flex-col items-center justify-center px-xPadding py-10'>
                <div>
                <p className='font-semibold text-2xl'>{event?.title}</p>
            </div>

            <div className='py-5 flex gap-32'>
                <div className='w-4/5 sm:w-full'>
                    <img src={event.img} alt="" className='w-full'/>
                    
                    <div className='py-3 flex flex-col gap-3'>
                    <div>
                        {event.text.map((text, i)=>{
                            return(
                                <p className='py-2'>{parse(text)}</p>
                            )
                        })}    
                    </div>  
                    <p className=" font-normal flex items-center gap-1"> <FaCalendarAlt /> {event.date}</p>
                    <p className=" font-normal flex items-center gap-1"> <HiLocationMarker />{event.location}</p>
                    </div>
                </div>

                <div className='w-1/5 sm:hidden'>
                     <p className='font-semibold text-lg'>Other Events</p>

                     <div className="grid grid-cols-none gap-10 items-center pt-6 pb-3 w-full mb-5 min-w-full">
                        {otherEvent?.map((eventitems, i) => {
                        return (
                            <>
                            <EventCard key={i} {...eventitems} />
                            </>
                        )
                        })}
                     </div>

                     <a href="/information" className="text-lg cursor-pointer font-semibold underline">Read More</a>
                     
                </div>        
            </div>
        </div>
        <NewsLetter />
        <Footer />
    </>
  )
}

export default EachEvent