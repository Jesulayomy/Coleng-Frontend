import React from 'react'

const NoContent = ({text}) => {
  return (
    <div className='flex items-center justify-center my-5'>
          <p className='bg-primary1 bg-opacity-20 text-primary1 p-3 rounded-md'>
            There are no {text} for now.
          </p>
        </div>
  )
}

export default NoContent