import React from 'react'

const Banner = () => {
    const achievements = [
        {
            value: 5,
            title: "Department"
        },
        {
            value: "2000+",
            title: "Graduates"
        },
        {
            value: "50+",
            title: "Awards"
        }
    ]
  return (
    <div className='grid grid-cols-2 gap-10 px-xPadding items-center'>
        <div>
            <p className='font-[700] text-gray-700'>
                Learn. Innovate. Build.
            </p>
            <h2 className='text-[3em] font-[700] w-[80%] leading-none'>
                NUESA FUNAAB CHAPTER.
            </h2>
            <p className='text-[0.8em] text-gray-500 py-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore esse ea sapiente ullam assumenda dolores voluptate porro quas, nemo ratione.
            </p>

            <button className='bg-primary1  text-black rounded-md py-3 px-6 text-[0.8em] font-[700]'>
                Know More
            </button>

            <div className="grid grid-cols-3 pt-10 w-2/3">
                {
                    achievements.map((item, i)=>{
                        return(
                            <div key={i} className="flex flex-col items-center justify-center leading-none">
                                <h2 className='font-[700] text-[2em]'>{item.value}</h2>
                                <p className='text-[0.8em] text-gray-400 font-[700]'>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <img src="./engineer.png" alt="engineer" className=''/>
    </div>
  )
}

export default Banner