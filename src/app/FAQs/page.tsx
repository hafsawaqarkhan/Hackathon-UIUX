import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div>
        <Image src ="/image/menu.header.png" alt ="" width={1960} height={410}/>
    <header className="text-center py-8">
    <h1 className="text-4xl font-bold ">FAQ Page</h1>
    <p className= ' mt-2' >Home {'>'} <span className='text-orange'>FAQs</span></p>
    <h1 className='text-4xl font-bold mt-8'>Question Looks Here</h1>
    <p className='text-[#4F4F4F] mb-6 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
        </header></div>
        <div className='sm:block md:hidden lg:hidden'>
      <div className='grid sm:grid-cols-2'>
        <Image src= "/image/card1.png" alt='' height={648} width={170} className='sm:mb-4 sm:ml-4 '/>   
        <Image src= "/image/card2.png" alt='' height={648} width={170}  className='sm:mb-4 sm:mr-4'/>   
        <Image src= "/image/card3.png" alt='' height={648} width={170}  className='sm:mb-4  sm:ml-4'/>   
        <Image src= "/image/card4.png" alt='' height={648} width={170}  className='sm:mb-4 sm:mr-4 '/>   
        <Image src= "/image/card5.png" alt='' height={648} width={170}  className='sm:mb-4  sm:ml-4'/>   
        <Image src= "/image/card6.png" alt='' height={648} width={170}  className='sm:mb-4 sm:mr-4'/>   
        </div></div>
        <div className='sm:hidden md;block lg:block'>
        <div className='grid md:grid-cols-2 '>
        <Image src= "/image/card1.png" alt='' height={1000} width={470} className='md:ml-16 md:mb-4'/>   
        <Image src= "/image/card2.png" alt='' height={1000} width={470} className=' md:mb-4'/>   
        <Image src= "/image/card3.png" alt='' height={1000} width={470} className='md:ml-16  md:mb-4'/>   
        <Image src= "/image/card4.png" alt='' height={1000} width={470} className=' md:mb-4'/>   
        <Image src= "/image/card5.png" alt='' height={1000} width={470} className='md:ml-16  md:mb-4'/>   
        <Image src= "/image/card6.png" alt='' height={1000} width={470} className=' md:mb-4'/>   
    </div> </div></div>
  )
}

export default page
