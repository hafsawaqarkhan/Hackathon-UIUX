import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <div>
              <Image src ="/image/menu.header.png" alt ="" width={1960} height={410}/>
          <header className="text-center py-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className= ' mt-2' >Home {'>'} <span className='text-orange'>About</span></p></header></div>
    <div className=' sm:hidden lg:block md:block'>
      <div className='flex justify items-center space-x-28'>
      <Image src = "/image/A5.png" alt='' width={600} height={700} className='ml-16 mb-4'/> 
      <Image src = "/image/A4.png" alt='' width={400} height={250} className='mr-6'/> 
     </div>
    </div>
    <div className=' sm:block lg:hidden md:hidden'>
      <div className=''>
      <Image src = "/image/A5.png" alt='' width={600} height={700} className='ml-12 mb-4 mr-4'/> 
      <Image src = "/image/A4.png" alt='' width={400} height={250} className='mr-6 ml-16 mb-4'/> 
     </div>
    </div>
    <div>
      <h1 className='text-center justify-center font-semibold text-2xl mb-2 mt-8 text-[#333333]'> Why Choose us</h1>
      <p className='text-center justify-center font-medium text-[#4F4F4F] mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque diam<br/> pellentesque bibendum non dui volutpat fringilla bibendum. </p>
    </div><Image src= "/image/choose.png" alt='' width={1320} height={386} className='p-6'/>
    <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:mt-4 md:mb-4 sm:ml-4'>
        <Image src ="/image/C1.png" alt='' width={325} height={229} className='sm:mb-4'/>
        <Image src ="/image/C2.png" alt='' width={325} height={229} className='sm:mt-4 sm:mb-6'/>
        <Image src ="/image/C3.png" alt='' width={325} height={229} className='sm:mt-4 sm:mb-4'/>
    </div>
    </div>
  )
}

export default page
