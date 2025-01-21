import Image from "next/image";
import React from "react";

const BlogList = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 lg:px-16 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
       
        <div className="lg:col-span-3 space-y-10">
      
          {[
            {
              title: "10 Reasons To Do A Spicy Sauce Challenge",
              date: "Dec 21, 2024",
              image: "/image/b1.png",
              excerpt:
              "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
            },
            {
              title: "Traditional Soft Pretzels with Sweet Beer Cheese",
              date: "Dec 20, 2024",
              image: "/image/b2.png",
              excerpt:
                "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
            },
            {
              title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
              date: "Dec 19, 2024",
              image: "/image/b3.png",
              excerpt:
                "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
            },
            {
              title: "My Favorite Easy Black Pizza Toast Recipe",
              date: "Dec 18, 2024",
              image: "/image/b4.png",
              excerpt:
                "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
            },
          ].map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-700 mb-6">{post.excerpt}</p>
                <button className="border border-orange text-orange font-semibold w-[172px] h-[52px]">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>


        <aside className="space-y-8">
    
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Image
              src="/image/b5.png"
              alt="Author"
              className="w-24 h-24 mx-auto rounded-full "
            />
            <h3 className="text-xl font-bold mt-4">Prince Miyako</h3>
            <p className="text-gray-500 mt-4"> Blogger/Photographer</p>
            <p className="text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur
adipisicing elit.Veritatis distinctio, odio
eligendi suscipit reprehenderit atque</p>
            <div className="flex justify-center items-center gap-1 mt-2 text-yellow-500">
              {"★".repeat(5)}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <Image
                  src="/image/b6.png"
                  alt="Recent Post"
                  className="w-16 h-16 rounded-lg"/>
                <p className="text-gray-600">Lorem ipsum dolor sit cing
                elit, sed do.</p>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/image/b7.png"
                  alt="Recent Post"
                  className="w-16 h-16 rounded-lg"
                />   
                <p className="text-gray-600">Lorem ipsum dolor sit cing
                elit, sed do.</p>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/image/b8.png"
                  alt="Recent Post"
                  className="w-16 h-16 rounded-lg"
                />
            
                <p className="text-gray-600">Lorem ipsum dolor sit cing
                elit, sed do.</p>
              </li>
              <li className="flex items-center space-x-4">
                <Image
                  src="/image/b9.png"
                  alt="Recent Post"
                  className="w-16 h-16 rounded-lg"
                />
                <p className="text-gray-600">Lorem ipsum dolor sit cing
                elit, sed do.</p>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-4">Filter By Menu</h3>
            <ul className="space-y-2">
              <li className="flex justify-between items-center ">
                <Image src="/image/filter1.png" alt="" className="h-[62px] w-[67px]"/>
                <span className="text-black font-semibold">Chicken Fry</span>
                <span className=" px-2 py-1 rounded"> 15</span>
              </li>
              <li className="flex justify-between items-center ">
              <Image src="/image/filter2.png" alt="" className="h-[62px] w-[67px]"/>
                <span className="font-semibold">Burger Food</span>
                <span className=" px-2 py-1 rounded"> 12 </span>
              </li>
              <li className="flex justify-between items-center ">
              <Image src="/image/fiter3.png" alt =""className="h-[62px] w-[67px]"/>
                <span className="font-semibold">Pizza</span>
                <span className=" px-2 py-1 rounded"> 16</span>
              </li>
              <li className="flex justify-between items-center ">
              <Image src="/image/filter4.png"  alt="" className="h-[62px] w-[67px]"/>
                <span className="font-semibold">Fresh fruits</span>
                <span className=" px-2 py-1 rounded"> 36 </span>
              </li>
              <li className="flex justify-between items-center ">
              <Image src="/image/filter5.png" alt="" className="h-[62px] w-[67px]"/>
                <span className="font-semibold">Vegetables</span>
                <span className=" px-2 py-1 rounded"> 16 </span>
              </li>
             
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              <span className="border border-[#4F4F4F] text-[#4F4F4F] py-1 px-3 hover:cursor-pointer text-sm">
              Sandwich
              </span>
              <span className="border border-[#4F4F4F] text-[#4F4F4F] py-1 px-3  hover:cursor-pointer text-sm">
                Tikka
              </span>
              <span className="border border-[#4F4F4F] text-[#4F4F4F] py-1 px-3  hover:cursor-pointer text-sm">
                Bbq
              </span>
              <span className="border border-[#4F4F4F] text-[#4F4F4F] py-1 px-3  hover:cursor-pointer text-sm">
            Restaurant
              </span>
              <span className="border border-[#4F4F4F] text-[#4F4F4F] py-1 px-3  hover:cursor-pointer text-sm">
                Chicken Shawarma
              </span>
              <span className="border border-[#4F4F4F] text-[#4F4F4F] py-1 px-3  hover:cursor-pointer text-sm">
             Health
              </span>
              <span className="border border-[#4F4F4F] text-[#4F4F4F] py-1 px-3  hover:cursor-pointer text-sm">
                Fastfood
              </span>
            
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-4">Photo Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
            <Image src="/image/p1.png"  alt ="" className="h-[70px] w-[150px]"/>
            <Image src="/image/p2.png" alt =""className="h-[70px] w-[150px]"/>
            <Image src="/image/p3.png" alt ="" className="h-[70px] w-[150px]"/>
            <Image src="/image/p4.png"   alt =""className="h-[70px] w-[150px]"/>
            <Image src="/image/p5.png" alt ="" className="h-[70px] w-[150px]"/>
            <Image src="/image/p6.png" alt ="" className="h-[70px] w-[150px]"/>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogList;
