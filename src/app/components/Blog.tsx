import React from 'react'
import Image from 'next/image'
function Blog() {
  return (
    <div>
      <div>
        <Image src="/image/Testimonials.png" alt='' width={1273} height={770} className='sm:mt-24 lg:ml-16'/>
        <Image src ="/image/bgg.png" alt="" width={1800} height={558} className='mb-10 mt-6 sm:mt-20'/>
        <h1 className='text-center text-orange lg:mt-6 md:mt-6 md:mr-6 lg:mr-6 text-[36px] sm:mt-20'>La<span className='text-white'>
            test News & Blog</span></h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:mt-20 ml-14'>
                <Image src ="/image/Blog1.png" alt='' width={424} height={569} className='sm:mt-8 lg:p-6 md:p-4'/>
                <Image src ="/image/Blog2.png" alt='' width={424} height={569} className='sm:mt-8 lg:p-6 md:p-4'/>
                <Image src ="/image/Blog3.png" alt='' width={424} height={569} className='sm:mt-8 lg:p-6 md:p-4 '/>
            </div>
      </div>
    </div>
  )
}

export default Blog
