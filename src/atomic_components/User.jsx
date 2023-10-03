import React from 'react'
import { FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'

const User = ({img, name, title, twitterLink = "/", whatsappLink = "/"}) => {
  return (
    <div className='lg:min-w-[250px] sm:min-w-full flex flex-col items-center justify-center'>
        <img src={img} alt={name} className='rounded-full border-[16px] border-primary1 shadow-md w-[250px] h-[250px] object-cover my-3'/>
        <p className='font-[700] text-[1.2em] leading-none'>{name}</p>
        <p className='text-gray-500 text-[1em]'>{title}</p>
        <div className='flex gap-2'>
            <a href={twitterLink}>
                <FaTwitter size={20}/>
            </a>

            <a href={whatsappLink}>
                <FaWhatsapp size={20}/>
            </a>
        </div>
    </div>
  )
}

export default User