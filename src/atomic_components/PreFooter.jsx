import React from "react";
import Image from "next/image";

const PreFooter = () => {
  const nav = [
    {
      header: "Secret Tips to Studying",
      title: "Secretary",
      image: "./amtesSwe.png",
      link: "https://clogistical.com/wp-content/uploads/2021/05/engie1.jpg",
    },
    {
      header: "Secret Tips to Studying",
      title: "Secretary",
      image: "./amtesAi.png",
      link: "https://clogistical.com/wp-content/uploads/2021/05/engie1.jpg",
    },
    {
      header: "Secret Tips to Studying",
      title: "Secretary",
      image: "./smiling.png",
      link: "https://clogistical.com/wp-content/uploads/2021/05/engie1.jpg",
    },
  ];

  return (
    <div className="p-xPadding bg-slate-600 bg-[url('./engineer.png)] bg-gradient-to-r from-sky-500 to-fuchsia-500">
      <h2 className="text-[2em] text-center font-[700]">Knowledge Center</h2>
      <p className="text-center pb-10">
        Some Important tips to help you succeed
      </p>
      <div className="flex justify-between">
        {nav.map((item) => {
          return (
            <>
              <div className="bg-white w-[30%]">
                <img
                  className="w-[100%] h-[300px] object-cover"
                  src={item.image}
                />
                <span className="p-10 text-center">
                  <p className="font-semibold text-center text-[1.5em]">{item.header}</p>
                  <p>{item.title}</p>
                  <p className="font-semibold cursor-pointer">Read More</p>
                </span>
              </div>
            </>
          );
        })}
      </div>
      <span className="flex items-center">
        <button className="my-10 mx-auto bg-primary3 text-white rounded-md py-3 px-6 text-[0.8em] font-[700]">
          See More Tips
        </button>
      </span>
    </div>
  );
};

export default PreFooter;
