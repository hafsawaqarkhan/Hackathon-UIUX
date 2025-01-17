
export default function Hero() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
     
        <div>
          <h2 className="text-orange text-lg font-bold mb-2">
            So Quick & Amazing!
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            The Art of Speed <br /> Food Quality
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
          <button className="bg-orange-500 text-black px-6 py-3 rounded-lg hover:bg-orange-600">
            See Menu
          </button>
        </div>
        <div className="relative">
          <img
            src="/image/heroimage.png"
            alt=""
            className=" mx-auto object-cover shadow-lg"
          />
        
        </div>
      </div>
    </section>
  );
}

    