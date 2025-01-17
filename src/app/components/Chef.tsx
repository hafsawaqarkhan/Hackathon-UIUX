import React from 'react'
import Image from 'next/image'
function Chef() {
  return (
    <div>
      <h1 className='text-orange text-center text-[36px] mt-10 sm:mt-24 md:mt-10 sm:mb-8 '>Me<span
       className='text-white'>et Our Chefs</span></h1>
    <div className='grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 sm:ml-24'>
<Image src="/image/Chef Card.png" alt ="" width = {312} height ={391} className='mb-6 md:mr-4'/>
<Image src="/image/Card 2.png" alt ="" width = {312} height ={391} className='mb-6'/>
<Image src="/image/Card 3.png" alt ="" width = {312} height ={391} className='mb-6'/>
<Image src="/image/Card 4.png" alt ="" width = {312} height ={391} className='mb-6 md:mr-4'/>
    </div><div className='flex justify-center'>
    <button className='  rounded-lg border border-orange text-center text-white w-[155px] h-[50px]'>See more</button>
    </div></div>
  )
}

export default Chef
