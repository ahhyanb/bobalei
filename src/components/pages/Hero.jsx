import React, { useEffect, useState } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation when component mounts
    setLoaded(true);
  }, []);

  const orderLink =
    "https://order.online/store/bobalei-wailuku-30956807/?hideModal=true&pickup=true&rwg_token=ACgRB3fu7JRiqHebuSoEMiP4dfIA4vd8Zx7g0SBwI1zDaSG8bsNtvulDM3yB513nu7mtn1qnwUnlNmwA5ZNE2hhkhLZuQH4uzQ==&utm_source=gfo";

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#91C3B0]/50 via-[#F28B8B]/30 to-[#fffdfc]">
      {/* Main content */}
      <div
        className={`relative z-10 max-w-6xl mx-auto h-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-4 transition-all duration-1000 ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-comfortaa leading-tight drop-shadow-lg">
            Summer Bowl
            <br />
            <span className="text-[#F28B8B]">Fresh, Fruity, $15</span>
          </h1>
          <p className="mt-4 text-white/90 max-w-md mx-auto md:mx-0 drop-shadow">
            Acai base, almond milk, granola, and seasonal fruits in a dreamy blend.
          </p>
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-[#F28B8B] text-white px-6 py-3 rounded-full hover:bg-[#e07171] transition font-medium shadow-lg"
          >
            Order Now
          </a>
        </div>

        <img
          src="/main-image.png"
          alt="Summer Bowl"
          className="w-[400px] md:w-[620px] object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
