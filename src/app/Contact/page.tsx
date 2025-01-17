import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div>
    <div>
                 <Image src ="/image/menu.header.png" alt ="" width={1960} height={410}/>
                 <header className="text-center py-8">
             <p className= ' mt-2' >Home {'>'} <span className='text-orange'>Contact</span></p>
           </header></div>
  <div className="col-span-2 bg-white shadow-lg p-6 rounded">
    <h3 className="text-xl font-medium mb-6">Send Us a Message</h3>
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Your Name *"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange"/>
        <input
          type="email"
          placeholder="Your Email *"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange"/>
        <input
          type="text"
          placeholder="Your Phone *"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange"/>
      </div>
      <textarea
        placeholder="Your Message" rows={6}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange"></textarea>
      <button 
        type="submit"
        className="bg-orange text-white px-6 py-2 rounded hover:bg-yellow-500"
      >
        Send Message</button>
    </form>
  </div>
</div>


    
  )
}

export default page
