import React from 'react'
import Image from './Banner.svg'
const First = () => {
  return (
    <div className=''>
      <div className=' flex justify-center absolute' >
        <div className='text-white text-center w-3/4  mt-36 z-10   ' >
      <h1 className='text-5xl  m-5 '>Discover Exciting Events Happening Near You-Stay Tuned For Updates! </h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
      </div>
      </div>

      <div className='realtive' >
      <img   className=" relative " src={Image}  alt="Loading"></img>
      </div>
      
    </div>
  )
}

export default First
