import React from "react";
import EventCard from "./EventCard";
import {motion} from "framer-motion"

const Event = () => {
  const events = [
    {
      label: "Event",
      title: "Nuesa Week",
      img: "/smiling.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia consequuntur ducimus suscipit porro vel ratione quibusdam sapiente enim quod",
      date: "6th Sept 2023",
    },
    {
      label: "Competition",
      title: "Spelling Bee",
      img: "/architect.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia consequuntur ducimus suscipit porro vel ratione quibusdam sapiente enim quod",
      date: "6th Sept 2023",
    },
    {
      label: "event",
      title: "NUESA Tech week",
      img: "/smiling.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia consequuntur ducimus suscipit porro vel ratione quibusdam sapiente enim quod",
      date: "6th Sept 2023",
    },
    {
      label: "event",
      title: "NUESA Tech week",
      img: "/architect.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia consequuntur ducimus suscipit porro vel ratione quibusdam sapiente enim quod",
      date: "6th Sept 2023",
    },
    {
      label: "event",
      title: "NUESA Tech week",
      img: "/smiling.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia consequuntur ducimus suscipit porro vel ratione quibusdam sapiente enim quod",
      date: "6th Sept 2023",
    },
    {
      label: "event",
      title: "NUESA Tech week",
      img: "/architect.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia consequuntur ducimus suscipit porro vel ratione quibusdam sapiente enim quod",
      date: "6th Sept 2023",
    },
  ];

  return (
    <motion.div
    viewport={{once: false}}
    initial={{opacity: 0, y: 100}}
    whileInView={{opacity:1, y: 0}}
    transition = {{type: "easein", duration: .45, delay: .45, type: "spring", stiffness: "100"}}
    className="p-xPadding">

      <h2 className="text-3xl font-bold">NUESA Events</h2>
      <div className="grid grid-cols-3 sm:grid-cols-none gap-20 items-center pt-6 pb-3 w-full mb-5 min-w-full">
        {/* <EventCard /> */}
        {events.splice(0, 3).map((eventitems, i) => {
          return <EventCard key={i} {...eventitems} />;
        })}
      </div>
      <a href="/information" className="text-lg cursor-pointer font-semibold underline">Read More</a>
    </motion.div>
  );
};

export default Event;
