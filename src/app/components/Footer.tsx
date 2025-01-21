import Image from "next/image";
export default function Footer () {
    return (
    <footer className="">
      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-8">
            <h3 className=" text-xl font-bold"> Still You Need Our Support?
            </h3>
            <p className="text-gray-400 mt-2">
              Don't wait—make a smart & logical quote here. It's pretty easy.
            </p>
            <div className="flex justify-center mt-4">
              <input  type="email"
                placeholder="Enter Your Email"
                className="p-3 rounded-l-lg text-black w-80 md:w-96"/>
              <button className="bg-[#FF9F0D] text-black px-6 py-3 rounded-r-lg"> Subscribe Now</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-800 pt-8 sm:text-center">
            <div>
              <h4 className="text-white text-lg font-semibold">About Us</h4>
              <p className="text-gray-400 mt-4 text-sm">
                Corporate clients and leisure travelers rely on us for safe and
                professional chauffeur car services in major cities worldwide. </p>
              <p className="text-gray-400 text-sm mt-4">
                <span className="block font-bold">Opening Hours:</span>
                Mon-Sat: 8:00 - 6:00 <br />
                Sunday: Closed</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">Useful Links</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 text-sm"
                  > About</a>
                </li>
                <li>
                  <a href="#"
                    className="text-gray-400 text-sm" >
                    News</a> </li>
                <li>
                  <a href="#"
                    className="text-gray-400 text-sm">Partners </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 text-sm"> Team </a>
                </li> <li>
                  <a href="#" className="text-gray-400 text-sm" > Menu</a> </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold">Help?</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#"
                    className="text-gray-400 text-sm" >FAQ </a></li><li>
                  <a href="#" className="text-gray-400 text-sm" > Terms & Conditions</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 text-sm" > Reporting</a>
                </li>
                <li>
                  <a  href="#" className="text-gray-400 text-sm" > Documentation</a>
                </li>
                <li>
                  <a  href="#" className="text-gray-400  text-sm" > Privacy
                  </a></li>
              </ul>
            </div>
            <div className="">
              <h4 className="text-white text-lg font-semibold">Recent Post</h4>
              <ul className="mt-4 space-y-4">
             <div>
                <li className="flex items-center space-x-4 sm:flex  ">
                  <img
                    src="/image/f1.png"
                    alt="Post T"
                    className="w-12 h-12 rounded object-cover" />
                  <div className=""> 
                    <p className="text-gray-400 text-sm">20 Feb 2022</p>
                    <a href="#" className=" text-gray-400  text-sm"> Keep Your Business
                    </a>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <img
                    src="/image/f2.png"
                    alt="Post"
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div>
                    <p className="text-gray-400 text-sm">20 Feb 2022</p>
                    <a
                      href="#"
                      className="text-gray-400 text-sm"
                    > Keep Your Business
                    </a>
                  </div>

                </li>
                <li className="flex items-center space-x-4">
                  <img
                    src="/image/f3.png"
                    alt="Post"
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div>
                    <p className="text-gray-400 text-sm">20 Feb 2022</p>
                    <a
                      href="#"
                      className="text-gray-400 text-sm"
                    > Keep Your Business
                    </a>
                  </div>
                 
                </li></div>
              </ul>
            </div>
          </div>
       
          </div>
      </div>
      
      <div className=" border-t border-gray-800 pt-6 text-left bg-[#FF9F0D]">
      <p className="text-gray-800 text-sm ml-6">
        Copyright © 2024 by Ayeman. All Rights Reserved.
      </p>
      <div className="flex justify-end mt-4 space-x-4">
        <Image src="/image/socials.png" alt="" className="w-[240px] h-[34px] mb-4 mr-6"/> 
      </div>   </div>
      </footer>
    );
  }
