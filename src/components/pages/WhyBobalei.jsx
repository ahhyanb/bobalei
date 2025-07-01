import { CupSoda, Truck, PalmTree } from 'lucide-react';

export default function WhyBobalei() {
  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-[#F28B8B] mb-10">
        Why Bobalei?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
        <div>
          <CupSoda className="w-12 h-12 text-black mx-auto mb-2" />
          <h3 className="font-semibold text-lg">Fresh Ingredients</h3>
          <p className="text-sm text-gray-500 mt-2">We use real tea and natural flavors.</p>
        </div>
        <div>
          <Truck className="w-12 h-12 text-black mx-auto mb-2" />
          <h3 className="font-semibold text-lg">Quick Pickup</h3>
          <p className="text-sm text-gray-500 mt-2">Order online & pick up in minutes.</p>
        </div>
        <div>
          <PalmTree className="w-12 h-12 text-black mx-auto mb-2" />
          <h3 className="font-semibold text-lg">Hawaii-Made</h3>
          <p className="text-sm text-gray-500 mt-2">Locally owned & community loved.</p>
        </div>
      </div>
    </section>
  );
}
