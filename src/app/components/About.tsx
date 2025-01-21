import Image from "next/image";
export default function AboutUs() {
    return (
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-orange text-lg font-bold mb-2">About Us</h3>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              We Create the Best <br /> Foody Product
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisque
              diam pellentesque bibendum non dui vulputate fringilla fringilla
              dictumst.
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>Lorem ipsum dolor sit amet consectetur adipiscing elit.</li>
              <li>
                Duisque diam pellentesque bibendum non dui vulputate fringilla.
              </li>
            </ul>
            <button className="bg-orange text-black px-6 py-3 mt-6 rounded-lg">
              Read More
            </button>
          </div>
  
          <div className="grid sm:grid-cols-1 sm:grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-2
           lg:grid-rows-2 gap-4">
 
  <Image
    src="/image/aboutimg1.png"
    alt=""
    className=" md:col-span-2 lg:col-span-1"
  />
  <Image
    src="/image/aboutimg2.png"
    alt=""
    className="sm:row-span-2 md:row-span-1 "
  />
  <Image
    src="/image/aboutimg3.png"
    alt=""
    className="sm:row-span-3 md:row-span-1 sm:mt-0"
  />
</div>


        </div>
      </section>
    );
  }
  