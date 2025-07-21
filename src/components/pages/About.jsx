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
    <section className="bg-[#FFF7F4] py-24 px-6 md:px-12">
      {/* Title */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16 max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#F28B8B] to-[#91C3B0] text-transparent bg-clip-text mb-2 text-left">
          Our Story
        </h2>
        <div className="w-16 h-1 bg-[#F28B8B] rounded-full" />
      </motion.div>

      {/* Main Content Layout */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center"
      >
        {/* Text Section */}
        <div className="md:w-1/2 text-[#3A2E2E] text-base md:text-lg leading-loose text-center md:text-left md:flex md:items-center">
          <div className="space-y-6 max-w-md mx-auto">
            <p>
              Bobalei started with a sanded-down horse trailer and a vision: to serve{" "}
              <span className="text-[#F28B8B] font-semibold">our community through boba</span>. 
              From the beginning, we were more than just drinks. Crafting açai bowls, blending real fruit smoothies, 
              and building a menu that felt as fun and fresh as Maui itself.
            </p>
            <p>
              Over time, the ideas kept coming. New flavors. New textures. Our own spin on the classics. 
              We’re still serving handcrafted milk teas and açai bowls but now we’re also making bao buns, 
              spam musubis, and savory snacks that hit just right.
            </p>
            <p>
              Every item on the menu starts the same way: something we’re genuinely excited to eat. 
              We use organic matcha, island-grown fruit, and build each recipe with care no shortcuts, no templates.
            </p>
            <p>
              Today, we’re based in <span className="font-medium">Wailuku</span>, serving from a bigger truck 
              with more space to create, connect, and keep experimenting.
            </p>
            <p>
              The setup may look different from the early days, but the purpose is the same: <br />
              <span className="text-[#F28B8B] font-medium">
                Our community through boba. One cup, one bowl, one bite at a time.
              </span>
            </p>
          </div>
        </div>

        {/* Clean Modern Collage */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4 relative">
          <div className="rounded-xl overflow-hidden transform translate-y-2 hover:scale-105 transition duration-300">
            <img src="/sandingTruck.webp" alt="Sanding" className="w-full h-auto object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden transform -translate-y-4 hover:scale-105 transition duration-300">
            <img src="/pinkTruck.webp" alt="Pink Truck" className="w-full h-auto object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden transform -translate-y-1 hover:scale-105 transition duration-300">
            <img src="/serving-smiles.jpg" alt="Smiles" className="w-full h-auto object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden transform translate-y-1 md:translate-y-4 hover:scale-105 transition duration-300">
            <img src="/foodTruckNow.webp" alt="New Truck" className="w-full h-auto object-cover" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
