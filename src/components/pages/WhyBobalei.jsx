import { CupSoda, Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyBobalei() {
	return (
		<section className="bg-white py-24 px-4">
			{" "}
			{/* Reasonable top/bottom padding, side padding for mobile */}
			<div className="max-w-5xl mx-auto text-center mb-12">
				<h2 className="text-4xl md:text-5xl font-bold text-[#F28B8B]">
					Why Bobalei?
				</h2>

      {/* fades in*/}
			</div>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto text-center text-[#906249]">
					<div className="transition-transform transform hover:scale-110">
						<CupSoda className="w-12 h-12 mx-auto mb-2" />
						<h3 className="font-semibold text-lg">Fresh Ingredients</h3>
						<p className="text-sm text-gray-500 mt-2">
							We use real tea and natural flavors.
						</p>
					</div>
					<div className="transition-transform transform hover:scale-110">
						<Truck className="w-12 h-12 mx-auto mb-2" />
						<h3 className="font-semibold text-lg">Quick Pickup</h3>
						<p className="text-sm text-gray-500 mt-2">
							Order online & pick up in minutes.
						</p>
					</div>
					<div className="transition-transform transform hover:scale-110">
						<img
							src="/hawaiian-islands.webp"
							alt="Hawaiian Islands"
							className="h-12 mx-auto mb-2"
						/>
						<h3 className="font-semibold text-lg">Hawaii-Made</h3>
						<p className="text-sm text-gray-500 mt-2">
							Locally owned & community loved.
						</p>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
