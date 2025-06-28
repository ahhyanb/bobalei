import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[#fffdfc] py-20 px-4 overflow-hidden">
      {/* Background abstract shapes */}
      <div className="absolute inset-0 z-0">
        {/* Mint green circle */}
        <div className="w-[400px] h-[400px] bg-[#91C3B0] rounded-full opacity-30 absolute -top-10 -left-20 blur-2xl"></div>

        {/* Coral pink ring */}
        <div className="w-[500px] h-[500px] border-[12px] border-[#F28B8B] rounded-full absolute -bottom-12 -right-10 opacity-40 blur-2xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F28B8B] font-comfortaa leading-tight">
            Summer Bowl
            <br />
            <span className="text-[#91C3B0]">Fresh, Fruity, $15</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-md">
            Acai base, almond milk, granola, and seasonal fruits in a dreamy blend.
          </p>
          <button className="mt-6 bg-[#91C3B0] text-white px-6 py-3 rounded-full hover:bg-[#7eb5a3] transition font-medium">
            Order Now
          </button>
        </div>

        {/* Image */}
        <img
          src="/main-image.png" // Place your PNG file in the /public folder
          alt="Summer Bowl"
          className="w-[350px] md:w-[420px] object-contain drop-shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
