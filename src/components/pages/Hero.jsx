import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Summer Bowl",
    subtitle: "Fresh & Fruity",
    description: "Acai base, almond milk, granola, and seasonal fruits in a dreamy blend.",
    image: "/main-image.png",
  },
  {
    title: "Weekly Specials",
    subtitle: "Call to Hear Today’s Menu!",
    description: "We offer rotating specials – unique and tasty, every week.",
    image: "/specials-image.png",
  },
  {
    title: "Try Our Smoothies",
    subtitle: "Cool & Creamy",
    description: "Blended fresh with real fruit and your choice of base.",
    image: "/smoothie-image.png",
  },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Only scale image; keep text stable
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1.6]);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="h-[110vh] bg-gradient-to-br from-[#91C3B0]/50 via-[#F28B8B]/30 to-[#fffdfc] relative overflow-hidden"
    >
      {/* LEFT ARROW */}
      <div
        onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute top-0 left-0 h-full w-12 z-30 cursor-pointer group flex items-center justify-center"
      >
        <div className="w-full h-full group-hover:bg-black/10 transition-all duration-300" />
        <span className="absolute text-2xl text-[#906249] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          &#60;
        </span>
      </div>

      {/* RIGHT ARROW */}
      <div
        onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
        className="absolute top-0 right-0 h-full w-12 z-30 cursor-pointer group flex items-center justify-center"
      >
        <div className="w-full h-full group-hover:bg-black/10 transition-all duration-300" />
        <span className="absolute text-2xl text-[#906249] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          &#62;
        </span>
      </div>

      {/* HERO CONTENT */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4 mt-11 pointer-events-none">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-6xl w-full pointer-events-auto px-4">
          {/* TEXT BLOCK */}
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 px-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#906249] text-center md:text-left mt-16">
              {slides[index].title}
              <br />
              <span className="text-[#F28B8B]">{slides[index].subtitle}</span>
            </h1>
            <p className="mt-4 text-sm md:text-base text-gray-700 max-w-md mx-auto md:mx-0 text-center md:text-left">
              {slides[index].description}
            </p>
          </motion.div>

          {/* IMAGE BLOCK */}
          <motion.div
            style={{ scale: imageScale }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <motion.img
              key={index}
              src={slides[index].image}
              alt={slides[index].title}
              className="object-cover max-w-[90%] max-h-[400px] md:max-w-[600px] md:max-h-[700px]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            />
          </motion.div>
        </div>

        {/* DOT INDICATORS */}
        <div className="flex gap-2 mt-6 justify-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full border ${
                i === index ? "bg-[#906249] border-[#906249]" : "bg-transparent border-gray-400"
              } transition-all duration-300`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
