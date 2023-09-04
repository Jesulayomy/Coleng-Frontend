import Link from 'next/link'
import React from 'react'

const Nav = ({active = 0}) => {
    const nav= [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "About",
            link: "/about"
        },
        {
            title: "Information",
            link: "/information"
        },
        {
            title: "Resources",
            link: "/resources"
        }
    ]

  return (
    <div className='flex px-xPadding py-2 justify-between border-b-2 border-gray-100'>
        <div className='text-[2em] font-[1000] text-primary1'>NUESA</div>

        <div className='flex w-2/5 items-center gap-10 justify-end'>
            <div className='flex justify-between gap-2 text-[0.8em] font-[500] text-gray-800'>
            {
                nav.map((item, i)=>{
                    return(
                        <Link href={item.link} className={`${active === i && "bg-gray-200"} py-2 px-5 rounded-md`} key={i}>
                            {item.title}
                        </Link>
                    )
                })
            }
        </div>

        <div className='bg-primary3 text-white rounded-md py-2 px-6 text-[0.8em] font-[700]'>
            Login
        </div>
        </div>
        
    </div>
  )
}

export default Nav