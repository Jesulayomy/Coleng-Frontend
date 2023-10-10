import React from "react";
import EventCard from "./EventCard";

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
    <div className="p-xPadding">
      <h2 className="text-3xl font-bold">NUESA Events</h2>
      <div className="flex gap-20 items-center overflow-x-auto pt-10 pb-3 w-full mb-5 min-w-full">
        {/* <EventCard /> */}
        {events.map((eventitems, i) => {
          return <EventCard key={i} {...eventitems} />;
        })}
      </div>
      <a href="/information" className="text-lg cursor-pointer font-semibold">Read More</a>
    </div>
  );
};

export default Event;
