import React from "react";

const ImgAndText = ({props, text, title}) => {
  return (
    <div className="grid grid-cols-2 gap-10 px-xPadding py-20 items-center">
      <img
        src={props}
        alt=""
        className="w-[100%] rounded-3xl"
      />

      <div className="">
        <h2 className="text-[2em] font-[700]">{title}</h2>
        <p className="py-2 text-gray-700">{text} </p>

        <p className="py-2 text-gray-700">{text} </p>

        <p className="py-2 text-gray-700">{text} </p>
      </div>
    </div>
  );
};

export default ImgAndText;
