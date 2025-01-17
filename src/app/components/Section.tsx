import React from 'react'
import Image from 'next/image'
function Section() {
  return (
    <div className='bg-black'>
      <div className="relative">
 
 <div className="flex justify-center items-center space-x-14 sm:space-x-4  top-2 absolute w-full">
   <Image src="/image/Chef.png" alt="" width={218} height={247} className="lg:mr-10 mt-4" />
   <Image src="/image/Itemfood.png" alt="" width={162} height={247} className="lg:mr-10" />
   <Image src="/image/Experienced.png" alt="" width={218} height={247} className="lg:mr-10" />
   <Image src="/image/Happycustomers.png" alt="" width={206} height={247} className="lg:mr-10" />
 </div>
 <Image src ="/image/bg.png" alt ="" width={1800} height={469} className='opacity-[25%] mt-6 '/>
</div>


</div>
   
  )
}

export default Section
