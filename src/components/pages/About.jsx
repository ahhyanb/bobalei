import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function AboutUs() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-4xl mx-auto px-6 py-24 space-y-14"
    >
      {/* Heading */}
      <motion.div variants={fadeUp} className="scroll-mt-32" id="our-story">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#F28B8B] to-[#91C3B0] text-transparent bg-clip-text">
          Our Story
        </h1>
      </motion.div>

      {/* Intro Paragraph */}
      <motion.div variants={fadeUp} custom={1} className="space-y-4">
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          Bobalei was built on a vision to serve and connect{" "}
          <span className="text-[#F28B8B] font-semibold">
            our community through boba
          </span>. Every drink we craft is a small act of love — a reason for
          people to pause, smile, and share a moment together.
        </p>
      </motion.div>

      {/* Real Story Moments */}
      <motion.div variants={fadeUp} custom={2} className="space-y-4">
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          One of our favorite regulars is a local uncle who brings his grandkids
          every Sunday. They always order strawberry smoothies with lychee jelly
          and hang out by the window chatting about the surf. These rituals —
          the unspoken, the ordinary — are what make Bobalei feel like home.
        </p>
        <figure className="relative w-full rounded-xl overflow-hidden shadow-md">
          <div className="aspect-[4/3] w-full">
            <img
              src="/serving-smiles.jpg"
              alt="Smiling customers"
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="absolute bottom-2 left-3 text-white text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm font-handwritten">
            “Where the community meets.”
          </figcaption>
        </figure>
      </motion.div>

      {/* Backstory */}
      <motion.div variants={fadeUp} custom={3} className="space-y-4">
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          Bobalei started as a DIY project — a pink horse trailer, a couple of
          drills, and a dream to make boba more fun and accessible. We sanded
          it down by hand, piece by piece, turning a shell into a fully
          functioning kitchen on wheels.
        </p>
        <figure className="relative w-full rounded-xl overflow-hidden shadow-md">
          <div className="aspect-[4/3] w-full">
            <img
              src="/trailer-sanding.jpg"
              alt="Sanding the trailer"
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="absolute top-2 right-3 text-white text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm font-handwritten">
            “Boba with aloha.”
          </figcaption>
        </figure>
      </motion.div>

      {/* Opening in Kihei */}
      <motion.div variants={fadeUp} custom={4} className="space-y-4">
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          We debuted in Kihei, and the response was beyond anything we imagined.
          People lined up in slippers and swimsuits, drawn in by the bright pink
          trailer and the smell of jasmine tea and brown sugar. That first day,
          we sold out before the sun set.
        </p>
        <figure className="w-full rounded-xl overflow-hidden shadow-md">
          <div className="aspect-[4/3] w-full">
            <img
              src="/pink-trailer.jpg"
              alt="Finished pink trailer"
              className="w-full h-full object-cover"
            />
          </div>
        </figure>
      </motion.div>

      {/* The New Truck */}
      <motion.div variants={fadeUp} custom={5} className="space-y-4">
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          Today, we serve out of a fully upgraded food truck that reflects how far
          we’ve come — and how much more we’re dreaming. But no matter how we
          grow, the mission stays the same: to create joy through flavor, and
          community through every cup.
        </p>
        <figure className="w-full rounded-xl overflow-hidden shadow-md">
          <div className="aspect-[4/3] w-full">
            <img
              src="/new-food-truck.jpg"
              alt="New Bobalei food truck"
              className="w-full h-full object-cover"
            />
          </div>
        </figure>
      </motion.div>
    </motion.section>
  );
}
