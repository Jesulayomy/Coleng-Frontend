import React from "react";

const EventCard = ({ img, title, label, text, date }) => {
  return (
    <div className="min-w-[300px] rounded-lg shadow-lg bg-blue-100">
      <div className="p-[1rem] bg-primary1 rounded-lg object-contain w-[100%] h-[200px]">
        <img src={img} alt={title} className="rounded-lg h-[100%] w-[100%]" />
      </div>
      <div className="p-[1rem]">
        <span className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="bg-black rounded-3xl text-sm text-white px-2 py-1">
            {label}
          </p>
        </span>
        <p className="py-5 text-sm">{text}</p>
        <span className="flex justify-between items-center">
          <p className=" font-medium">{date}</p>
          <a className="underline">Details</a>
        </span>
      </div>
    </div>
  );
};

export default EventCard;
