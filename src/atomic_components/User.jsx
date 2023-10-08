import React from 'react'
import { FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'

const User = ({img, name, title, twitterLink = "/", number}) => {
  return (
    <div className='lg:min-w-[200px] sm:min-w-full flex flex-col items-center justify-center'>
        <img src={img} alt={name} className='rounded-full border-[10px] border-primary1 w-[200px] h-[200px] object-cover my-3 shadow-lg'/>
        <p className='font-[700] text-[1.2em] leading-none text-center'>{name}</p>
        <p className='text-gray-500 text-[1em] text-center'>{title}</p>
        <div className='flex gap-2'>
            <a href={twitterLink}>
                <FaTwitter size={20}/>
            </a>

            <a href={`https://wa.me/${"+234" + number}?text=Hi%20${name}`}>
                <FaWhatsapp size={20}/>
            </a>
        </div>
    </div>
  )
}

export default User