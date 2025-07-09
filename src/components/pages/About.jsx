import React from "react";

export default function AboutUs() {
  return (
    <section className="flex flex-col md:flex-row items-start gap-14 max-w-6xl mx-auto px-6 py-20">
      {/* LEFT TEXT */}
      <div className="md:w-1/2 space-y-8">
        <div id="our-story" className="scroll-mt-32">

        <h1 className="text-4xl md:text-5xl font-bold text-[#91C3B0]">
          Our Story
        </h1>
        </div>

        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          Bobalei was built on a simple vision — to serve and connect{" "}
          <span className="text-[#F28B8B] font-semibold">
            our community through boba
          </span>.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          OGs may remember the iconic{" "}
          <span className="font-medium">vibrant pink horse trailer</span> that
          started it all. Back then, we were just a small team working
          tirelessly to create a fully functioning mobile kitchen — something
          that felt just as fun as it was functional.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          We opened our first truck in <span className="font-medium">Kihei</span>,
          bringing handcrafted milk teas, smoothies, and good vibes to locals
          and visitors alike. The response was incredible.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          As demand grew, so did we. We expanded to a larger food truck to
          serve more guests and added delicious food options alongside our
          drinks. From those humble beginnings, Bobalei has continued to grow
          with our community — one cup, one bowl, one smile at a time.
        </p>
      </div>

      {/* RIGHT IMAGES */}
      <div className="md:w-1/2 flex flex-col gap-8">
        <img
          src="/truck-progress.jpg"
          alt="trailer sanding"
          className="rounded-xl shadow-md object-cover w-full h-[300px] md:h-[360px] transition-transform duration-300 hover:scale-105"
        />
        <img
          src="/serving-smiles.jpg"
          alt="girls serving acai bowl"
          className="rounded-xl shadow-md object-cover w-full h-[300px] md:h-[400px] transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
}
