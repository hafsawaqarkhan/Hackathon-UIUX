import React from 'react'
import Image from 'next/image'
function Menu() {
  return (
    <div>
      <div>
        <h1 className='text-orange text-center text-[36px] mt-10 sm:mt-24 md:mt-10 sm:mb-8 '>Fr<span
        className='text-white'>om Our Menu</span></h1>
        <div className='flex justify-center items-center lg:space-x-28 md:space-x-28 sm:space-x-8 sm:mx-6'>
            <a href='' className='text-orange'>Breakfast</a>
            <a href='' className='text-white'>Lunch</a>
            <a href='' className='text-white'>Dinner</a>
            <a href='' className='text-white'>Desserts</a>
            <a href='' className='text-white'>Drinks</a>
            <a href='' className='text-white'>Soups</a></div>
  <div className='sm:block md:hidden lg:hidden ml-6 mt-6'>
    {/* For sm */}
    <Image src ="/image/menu.png" alt=' ' width={366} height={362} className='ml-6'/>
<Image src ="/image/m1.png" alt=' ' width={376} height={79} className='ml-6 mt-6'/>
<Image src ="/image/m2.png" alt=' ' width={376} height={79} className='ml-6 mt-6'/>
<Image src ="/image/m3.png" alt=' ' width={376} height={79} className='ml-6 mt-6'/>
<Image src ="/image/m4.png" alt=' ' width={376} height={79} className='ml-6 mt-6'/>
<Image src ="/image/m5.png" alt=' ' width={376} height={79} className='ml-6 mt-6'/>
<Image src ="/image/m6.png" alt=' ' width={376} height={79} className='ml-6 mt-6'/>
<Image src ="/image/m7.png" alt=' ' width={376} height={79} className='ml-6 mt-6'/>
<Image src ="/image/m8.png" alt=' ' width={376} height={79} className='ml-6 mt-6'/>
</div>
{/* for md and lg */}
<div className='sm:hidden md:block lg:block'>
    <div className='flex justify-center'><Image src ="/image/menu.png" alt=' ' width={366} height={362} className='ml-6'/></div>
    <div className='grid grid-cols-2'>
<Image src ="/image/m1.png" alt=' ' width={376} height={79} className='ml-6 mt-6'/>
<Image src ="/image/m2.png" alt=' ' width={376} height={79} className='ml-6 mt-6'/>
<Image src ="/image/m3.png" alt=' ' width={376} height={79} className='ml-6 mt-6'/>
<Image src ="/image/m4.png" alt=' ' width={376} height={79} className='ml-6 mt-6'/>
<Image src ="/image/m5.png" alt=' ' width={376} height={79} className='ml-6 mt-6'/>
<Image src ="/image/m6.png" alt=' ' width={376} height={79} className='ml-6 mt-6'/>
<Image src ="/image/m7.png" alt=' ' width={376} height={79} className='ml-6 mt-6'/>
<Image src ="/image/m8.png" alt=' ' width={376} height={79} className='ml-6 mt-6'/>
</div></div>
      </div>
    </div>
  )
}

export default Menu
