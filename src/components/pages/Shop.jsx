import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Shop() {
	return (
		<div className="max-w-4xl mx-auto px-4 py-20 mt-10 text-center">
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-5xl font-extrabold bg-gradient-to-r from-[#F28B8B] to-[#7eb5a3] text-transparent bg-clip-text"
			>
				🛍️ Merch Drop Coming Soon!
			</motion.h1>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.5 }}
				className="mt-6 text-lg text-gray-600"
			>
				We’re cooking up fresh new threads – shirts, hoodies, totes & more.
			</motion.p>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				className="mt-4 text-gray-600"
			>
				In the meantime, why not grab a drink?
			</motion.p>

			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.7, duration: 0.4 }}
				className="mt-8"
			>
				<Link
					to="/menu"
					className="inline-block bg-[#7eb5a3] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#69a192] transition-all"
				>
					View Our Menu
				</Link>
			</motion.div>
		</div>
	);
}
