import React from 'react'
import Image from 'next/image'
const page = () => {
    
  return (
    <div>
       <div>
              <Image src ="/image/menu.header.png" alt ="" width={1960} height={410}/>
              <header className="text-center py-8">
          <h1 className="text-4xl font-bold ">Our Shop</h1>
          <p className= ' mt-2' >Home {'>'} <span className='text-orange'>Shop</span></p>
        </header></div>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 sm:ml-20 sm:mb-4'>
            <Image src= "/image/shop1.png" alt='' width={312} height={330} className=' sm:mb-4'/>
            <Image src= "/image/shop2.png" alt='' width={312} height={330} className=' sm:mb-4'/>
            <Image src= "/image/shop3.png" alt='' width={312} height={330} className=' sm:mb-4'/>
            <Image src= "/image/shop4.png" alt='' width={312} height={330} className=' sm:mb-4'/>
            <Image src= "/image/shop5.png" alt='' width={312} height={330} className=' sm:mb-4'/>
            <Image src= "/image/shop6.png" alt='' width={312} height={330} className=' sm:mb-4'/>
            <Image src= "/image/shop7.png" alt='' width={312} height={330} className=' sm:mb-4'/>
            <Image src= "/image/shop8.png" alt='' width={312} height={330} className=' sm:mb-4' />
            <Image src= "/image/shop9.png" alt='' width={312} height={330} className=' sm:mb-4'/>
            <Image src= "/image/shop4.png" alt='' width={312} height={330} className=' sm:mb-4'/>
            <Image src= "/image/shop5.png" alt='' width={312} height={330} className=' sm:mb-4'/>
            <Image src= "/image/shop6.png" alt='' width={312} height={330} className=' sm:mb-4'/>
            <Image src= "/image/shop7.png" alt='' width={312} height={330} className=' sm:mb-4'/>
            <Image src= "/image/shop8.png" alt='' width={312} height={330} className=' sm:mb-4'/>
            <Image src= "/image/shop9.png" alt='' width={312} height={330} className=' sm:mb-4'/>
        </div>
        
    </div>
  )
}

export default page
