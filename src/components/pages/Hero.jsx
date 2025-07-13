import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);

  // Get scroll progress from 0 (start of hero) to 1 (end of hero)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // animations
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);



  return (
    <>
      {/* HERO SECTION (must be tall to enable scroll) */}
      <section
        ref={ref}
        className="h-[200vh] bg-gradient-to-br from-[#91C3B0]/50 via-[#F28B8B]/30 to-[#fffdfc] relative"
      >
        <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6">
          {/* TEXT BLOCK */}
          <motion.div style={{ y: textY, opacity: textOpacity }}>
            <h1 className="text-4xl font-bold text-[#906249] text-center md:text-left mt-8">
              Summer Bowl
              <br />
              <span className="text-[#F28B8B]">Fresh & Fruity</span>
            </h1>
            <p className="mt-4 text-gray-700 max-w-md text-center md:text-left">
              Acai base, almond milk, granola, and seasonal fruits in a dreamy blend.
            </p>
          </motion.div>

          {/* IMAGE BLOCK */}
          <motion.img
            src="/main-image.png"
            alt="Summer Bowl"
            className="object-cover w-[600px] h-[700px]"
            style={{ y: imageY, scale: imageScale}}
          />
        </div>
      </section>

      
    </>
  );
}
