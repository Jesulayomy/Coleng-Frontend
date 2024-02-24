import React from 'react';


const Sections = () => {
  return (
    <div className='flex gap-3 flex-col px-xPadding py-10'>
      <div className="font-[700] text-[1.4em] flex items-center justify-between ">
        <div>
          <p>Payment of DUE</p>
        <div className='bg-primary1 w-[100px] h-2'/>
      </div>
        {/* <p className="hidden sm:block">
          <FaArrowRight />
        </p> */}
      </div>

      <p>To Make Payments for NUESA Due, Proceed by clicking the button below</p>

      <div className="bg-primary1 text-white rounded-md  w-fit px-6 py-3 text-center font-[600]">
        <a href="https://pay.nuesafunaab.com.ng/" target="_blank">
          Pay Due
        </a>
      </div>
    </div>
  );
};

export default Sections;
