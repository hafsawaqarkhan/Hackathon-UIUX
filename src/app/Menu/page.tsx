import Image from 'next/image'
import React from 'react'
import Section from '../components/Section'

const page = () => {
  return (
    <div>
    <div>
        <Image src ="/image/menu.header.png" alt ="" width={1960} height={410}/>
        <header className="text-center py-8">
    <h1 className="text-4xl font-bold ">Our Menu</h1>
    <p className= ' mt-2' >Home {'>'} <span className='text-orange'>Menu</span></p>
  </header>
  <main className="container mx-auto px-6 md:px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <section>
     
        <Image src="/image/menuhero1.png" alt="Starter Menu" height = {626} width ={448} className=" mb-4 md:ml-8 
        sm:mr-6 rounded-lg shadow-lg"/>
        <h2 className="text-2xl font-bold mb-4">Starter Menu</h2>
        <ul>
          <li className="flex justify-between  border-b border-gray-200 py-4">
            <div>
              <p className="font-semibold">Alder Grilled Chinook Salmon</p>
              <p className="text-gray-400 text-sm">Mixed fresh green salad, citrus, avocado</p>
            </div>
            <span className="font-bold text-orange">39$</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 py-4">
            <div>
              <p className="font-semibold text-orange">Berries and Cream Tart</p>
              <p className="text-gray-400 text-sm">Cranberries, mascarpone, biscoff</p>
            </div>
            <span className="font-bold text-orange ">48$</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 py-4">
            <div>
              <p className="font-semibold">Tomentoso Bush Pizza Pimatoge</p>
              <p className="text-gray-400 text-sm">Goat cheese, prosciutto, roasted tomato</p>
            </div>
            <span className="font-bold text-orange">14$</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 py-4">
            <div>
              <p className="font-semibold">Spicy Vegan Potato Curry</p>
              <p className="text-gray-400 text-sm">Fresh potatoes, red curry sauce</p>
            </div>
            <span className="font-bold text-orange">35$</span>
          </li>
        </ul>
      </section>
      

      <section>
      <div className="">
        <Image src="/image/menuhero2.png" alt="Main Course" height={626} width={448} className="rounded-lg
        sm:mb-6 shadow-lg"/>
      </div>
        <h2 className="text-2xl font-bold mb-4">Main Course</h2>
        <ul>
          <li className="flex justify-between border-b border-gray-200 py-4">
            <div>
              <p className="font-semibold">Optic Big Breakfast Combo Menu</p>
              <p className="text-gray-400 text-sm">Special French toast, waffles, eggs, cheese</p>
            </div>
            <span className="font-bold text-orange">39$</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 py-4">
            <div>
              <p className="font-semibold">Cashew Chicken with Stir-Fry</p>
              <p className="text-gray-400 text-sm">Papaya, onions, cashews</p>
            </div>
            <span className="font-bold text-orange">48$</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 py-4">
            <div>
              <p className="font-semibold">Vegetables & Green Salad</p>
              <p className="text-gray-400 text-sm">Lettuce, arugula, and spinach salad</p>
            </div>
            <span className="font-bold text-orange">14$</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 py-4">
            <div>
              <p className="font-semibold">Spicy Vegan Potato Curry</p>
              <p className="text-gray-400 text-sm">Fresh potatoes, red curry sauce</p>
            </div>
            <span className="font-bold text-orange">35$</span>
          </li>
        </ul>
        </section> </div>
  </main>
  <Section/>

 <main className="container mx-auto px-6 md:px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <section>
     
        <Image src="/image/menuhero3.png" alt="" height = {626} width ={448} className=" mb-4 md:ml-8 
        sm:mr-6 rounded-lg shadow-lg mt-6 p-4"/>
        <h2 className="text-2xl font-bold mb-4">Dessert</h2>
        <ul>
          <li className="flex justify-between  border-b border-gray-200 py-4">
            <div>
              <p className="font-semibold">Fig and Lemon cake</p>
              <p className="text-gray-400 text-sm">Toasted French bread topped with romano, cheddar</p>
              <p  className="text-gray-400 text-sm">560 CAL</p>
            </div>
            <span className="font-bold text-orange">32$</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 py-4">
            <div>
              <p className="font-semibold">Creamy mascarpone cake</p>
              <p className="text-gray-400 text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p  className="text-gray-400 text-sm">700 CAL</p>
            </div>
            <span className="font-bold text-orange ">48$</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 py-4">
            <div>
              <p className="font-semibold">Pastry, blueberries, lemon juice</p>
              <p className="text-gray-400 text-sm">Ground cumin, avocados, peeled and cubed</p>
              <p  className="text-gray-400 text-sm">1000 CAL</p>
            </div>
            <span className="font-bold text-orange">14$</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 py-4">
            <div>
              <p className="font-semibold">Pain au chocolat</p>
              <p className="text-gray-400 text-sm">Spreadable cream cheese, crumbled blue cheese</p>
              <p  className="text-gray-400 text-sm">560 CAL</p>
            </div>
            <span className="font-bold text-orange">35$</span>
          </li>
        </ul>
      </section>
      

      <section>
      <div className="">
        <Image src="/image/menuhero4.png" alt="Main Course" height={626} width={448} className="rounded-lg
        sm:mb-6 shadow-lg mt-6 p-4"/>
      </div>
        <h2 className="text-2xl font-bold mb-4">Drinks</h2>
        <ul>
          <li className="flex justify-between border-b border-gray-200 py-4">
            <div>
              <p className="font-semibold">Caffè macchiato</p>
              <p className="text-gray-400 text-sm">Toasted French bread topped with romano, cheddar</p>
              <p  className="text-gray-400 text-sm">560 CAL</p>
            </div>
            <span className="font-bold text-orange">32$</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 py-4">
            <div>
              <p className="font-semibold">Aperol Spritz Capacianno</p>
              <p className="text-gray-400 text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p  className="text-gray-400 text-sm">700 CAL</p>
            </div>
            <span className="font-bold text-orange">43$</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 py-4">
            <div>
              <p className="font-semibold">Caffe Latte Campuri</p>
              <p className="text-gray-400 text-sm">Ground cumin, avocados, peeled and cubed</p>
              <p  className="text-gray-400 text-sm">1000 CAL</p>
            </div>
            <span className="font-bold text-orange">14$</span>
          </li>
          <li className="flex justify-between border-b border-gray-200 py-4">
            <div>
              <p className="font-semibold">Tormentoso BushTea Pintoage</p>
              <p className="text-gray-400 text-sm">Spreadable cream cheese, crumbled blue cheese</p>
              <p  className="text-gray-400 text-sm">560 CAL</p>
            </div>
            <span className="font-bold text-orange">35$</span>
          </li>
        </ul>
        </section> </div>
  </main>
<div>
   <p className='text-gray-400 mb-2 mt-4 flex justify-center'>Partners & Clients</p>
    <h1 className='flex justify-center mb-4 text-[36px] leading-[56px]'>We work with the best pepole</h1>
</div>
  
    </div>
    <div className='grid md:grid-cols-6 sm:grid-cols-2 ml-4 mr-4'>
<Image src ="/image/menuf1.png" alt ="" height={129} width={240} className='sm:mb-4 sm:ml-2'/>
<Image src ="/image/menuf2.png" alt ="" height={128} width={166} className='sm:mb-4 sm:ml-2'/>
<Image src ="/image/menuf3.png" alt ="" height={127} width={143} className='sm:mb-4 sm:ml-2'/>
<Image src ="/image/menuf4.png" alt ="" height={129} width={130} className='sm:mb-4 sm:ml-2'/>
<Image src ="/image/menuf5.png" alt ="" height={129} width={170} className='sm:mb-4 sm:ml-2'/>
<Image src ="/image/menuf6.png" alt ="" height={129} width={113} className='sm:mb-4 sm:ml-2'/>
    </div>
    </div>
  )
} 

export default page
