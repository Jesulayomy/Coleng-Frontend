import React from "react";

const AboutBox = ({ props, title, text }) => {
  return (
    <div className="px-10 flex justify-center gap-3 flex-col minW-[25%] h-64 border-solid border-[1px] border-black">
      <span>{props}</span>
      <h2 className="text-[1.3em] font-semibold">{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default AboutBox;
