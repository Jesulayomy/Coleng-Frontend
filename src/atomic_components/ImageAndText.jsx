import React from 'react'

const ImageAndText = () => {
  return (
    <div className='grid grid-cols-2 gap-10 px-xPadding py-20 items-center'>
        <img src="https://clogistical.com/wp-content/uploads/2021/05/engie1.jpg" alt="" className='w-[90%] rounded-2xl border-[5px] border-primary1'/>

        <div className=''>
            <h2 className='text-[2em] font-[700]'>President's speech.</h2>
            <p className='py-2 text-gray-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis saepe, ea neque incidunt culpa voluptatem cumque quaerat exercitationem temporibus deserunt dolore qui ipsum officia eligendi, illo doloribus obcaecati atque sint.
            </p>

            <p className='py-2 text-gray-700'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea non consequuntur ullam culpa distinctio, consectetur dolores quod fugit asperiores quibusdam.
            </p>

            <p className='py-2 text-gray-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aspernatur, rem quisquam veniam minima aut sit officiis id autem cupiditate rerum saepe error ad, possimus, quos reiciendis ea vero facere!
            </p>

            <button className='bg-primary1  text-white rounded-md py-3 px-6 text-[0.8em] font-[700]'>
                Read More
            </button>
        </div>
    </div>
  )
}

export default ImageAndText