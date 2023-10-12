"use client";
import React, { useState } from "react";
import EventCard from "./EventCard";
import {motion} from "framer-motion"
import { events } from "@/utils/events";

const Event = ({few = false}) => {
  const [ev, setEv] = useState(events)
  return (
    <motion.div
    viewport={{once: false}}
    initial={{opacity: 0, y: 100}}
    whileInView={{opacity:1, y: 0}}
    transition = {{type: "easein", duration: .45, delay: .45, type: "spring", stiffness: "100"}}
    className="px-xPadding">
      {
        !few && <h2 className="text-3xl font-bold">NUESA Events</h2>
      }
      <div className="grid grid-cols-3 sm:grid-cols-none gap-20 items-center pt-6 pb-3 w-full mb-5 min-w-full">
        {/* <EventCard /> */}
        {
        
          few ?
          ev?.map((eventitems, i) => {
            return <EventCard key={i} {...eventitems} />;
          })
          :
          ev?.slice(0, 3)?.map((eventitems, i) => {
            return <EventCard key={i} {...eventitems} />;
          })
        
        }
      </div>
      {
        !few && <a href="/information" className="text-lg cursor-pointer font-semibold underline">Read More</a>
      }
    </motion.div>
  );
};

export default Event;
