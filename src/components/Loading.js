import React from 'react'

export const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-[5rem]'>
        <div className='spinner'></div>
        <p className='text-white'>Loading...</p>
    </div>
  )
}
