import React from 'react'

const BlogCard = () => {
  return (
    <div className='w-1/3 shadow-lg rounded-md p-2'>
        <img src="/amtesSwe.png" alt="" className='w-full h-[150px] object-cover rounded-md'/>
        <p className=''>Explore the world of Engineering</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non consequuntur blanditiis a commodi, labore velit mollitia dolorum optio ab molestiae fugiat nemo id ipsa! Placeat non iusto ad error eligendi!</p>
        <button>Read More</button>
    </div>
  )
}

export default BlogCard