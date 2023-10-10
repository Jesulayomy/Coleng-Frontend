import React from "react";
import { FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const EventCard = ({ img, title, label, text, date }) => {
  return (
    <div className="min-w-[300px] rounded-lg shadow-2xl border-gray-100 border-2">
      <div className="p-1 bg-primary1 rounded-lg object-contain w-[100%] h-[200px]">
        <img src={img} alt={title} className="rounded-lg h-[100%] w-[100%] object-cover" />
      </div>
      <div className="p-[1rem]">
        <span className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          {/* <p className="bg-black rounded-3xl text-sm text-white px-2 py-1">
            {label}
          </p> */}
        </span>
        <p className=" text-sm text-gray-700 line-clamp-2">{text}</p>
        <span className="flex flex-col py-2">
          <p className=" font-normal text-sm flex items-center gap-1"> <FaCalendarAlt /> {date}</p>
          <p className=" font-normal text-sm flex items-center gap-1"> <HiLocationMarker /> Coleng Auditorium</p>
          <a className="w-full p-3 rounded-md bg-primary1 text-center text-white mt-2" href="/information">Details</a>
        </span>
      </div>
    </div>
  );
};

export default EventCard;
