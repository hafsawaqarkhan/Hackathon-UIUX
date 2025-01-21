import React from 'react'
import Image from 'next/image'
function Category() {
  return (
    <div className='bg-black text-white text-[32px]'> 
      <h1 className='text-center font-semibold text-orange'> Food Category</h1>
      <p className='text-orange text-center  size[28px] mt-2'>Cho<span
       className='text-white'>ose Food Item</span></p>
       <div className=' grid grid-cols-1 md:grid-cols-4 mt-4  sm:ml-32 lg:ml-2 lg:me-2'>
       <Image src="/image/fooditem1.png" alt='' width={305} height={328} className='sm:mb-4' />
       <Image src="/image/fooditem2.png" alt='' width={305} height={328} className='sm:mb-4'/>
       <Image src="/image/fooditem3.png" alt='' width={305} height={328} className='sm:mb-4'/>
       <Image src="/image/fooditem4.png" alt='' width={305} height={328} className='sm:mb-4'/>
       </div>
       <div className='flex justify-center lg:mt-24 md:mt-10 sm:ml-5 sm:hidden lg:block md:block '>
       <Image src ="/image/choose.1.png" alt=' ' height={716} width={500} />
       <Image src ="/image/choose2.png" alt=' ' height={600} width={500} /></div>
       <div className=' sm:ml-5 sm:block lg:hidden md:hidden  '>
       <Image src ="/image/choose2.png" alt=' ' height={600} width={500} className='mb-6 mt-6' />
       <Image src ="/image/choose.1.png" alt=' ' height={716} width={500} className=''/>
   </div>
   <div className='' >
<div>
   


</div>
   </div>
    </div>
  )
}

export default Category
