import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
	{
		title: "Summer Bowl",
		subtitle: "Fresh & Fruity",
		description:
			"Acai base, almond milk, granola, and seasonal fruits in a dreamy blend.",
		image: "/main-image.png",
	},
	{
		title: "Coconut Mocha Protein Smoothie",
		subtitle: "Fuel Your Day",
		description:
			"Coconut and chocolate blended with 25 grams of vanilla protein to keep you energized.",
		image: "/coconutMocha.webp",
	},
	{
		title: "Bao Buns w/ Fries",
		subtitle: "Warm & Fluffy",
		description:
			"Soft steamed buns filled with savory tocino, bacon, and portuguese sausage.",
		image: "/baoBuns.webp",
	},
];

export default function Hero() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});

	const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
	const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

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
			className="relative h-[110vh] overflow-hidden bg-gradient-to-br from-[#91C3B0]/50 via-[#F28B8B]/30 to-[#fffdfc]"
		>
			{/* Arrows */}
			<div
				onClick={() =>
					setIndex((prev) => (prev - 1 + slides.length) % slides.length)
				}
				className="absolute top-0 left-0 h-full w-12 z-30 cursor-pointer group flex items-center justify-center"
			>
				<div className="w-full h-full group-hover:bg-black/10 transition-all duration-300" />
				<span className="absolute text-2xl text-[#906249] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					&#60;
				</span>
			</div>

			<div
				onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
				className="absolute top-0 right-0 h-full w-12 z-30 cursor-pointer group flex items-center justify-center"
			>
				<div className="w-full h-full group-hover:bg-black/10 transition-all duration-300" />
				<span className="absolute text-2xl text-[#906249] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					&#62;
				</span>
			</div>

			{/* Glow behind image (desktop only) */}
			<div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#F28B8B]/30 blur-3xl z-0 pointer-events-none" />

			{/* Content */}
			<div className="sticky top-0 h-screen flex items-center px-4 mt-11 pointer-events-none">
				<div className="relative z-10 w-full mx-auto flex flex-col md:flex-row items-center justify-between pointer-events-auto max-w-6xl">
					{/* Text */}
					<motion.div
						key={index}
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						className="w-full md:w-1/2 px-4 relative z-20 text-left"
					>
						<h1 className="text-3xl md:text-4xl font-bold text-[#906249] mt-6 md:mt-0">
							{slides[index].title}
							<br />
							<span className="text-[#F28B8B]">{slides[index].subtitle}</span>
						</h1>
						<p className="mt-4 text-sm md:text-base text-gray-700 max-w-md">
							{slides[index].description}
						</p>

						<div className="mt-6 flex flex-wrap gap-3">
							{/* Filled Button → DoorDash */}
							<a
								href="https://order.online/store/bobalei-wailuku-30956807/?hideModal=true&pickup=true"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-[#F28B8B] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-[#e17878] transition"
							>
								Order Now
							</a>

							{/* Outlined Button → Menu Page */}
							<Link
								to="/menu"
								className="border-2 border-[#F28B8B] text-[#F28B8B] text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#F28B8B]/10 transition"
							>
								View Menu
							</Link>
						</div>

						{/* Mobile Image */}
						<motion.div
							key={`mobile-${index}`}
							style={{ scale: imageScale, y: imageY }}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="block md:hidden mt-10 mb-10"
						>
							<motion.img
								src={slides[index].image}
								alt={slides[index].title}
								className="w-full h-auto object-cover"
							/>
						</motion.div>
					</motion.div>
				</div>

				{/* Desktop Image */}
				<motion.div
					style={{ scale: imageScale, y: imageY }}
					className="hidden md:block absolute top-0 right-0 h-full w-full md:w-auto z-10"
				>
					<motion.img
						key={`desktop-${index}`}
						src={slides[index].image}
						alt={slides[index].title}
						className="h-full w-full object-cover md:w-auto md:mask-image-fade-left"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.9 }}
					/>
				</motion.div>
			</div>

			{/* Dot indicators */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
				{slides.map((_, i) => (
					<button
						key={i}
						onClick={() => setIndex(i)}
						className={`w-3 h-3 rounded-full border ${
							i === index
								? "bg-[#906249] border-[#906249]"
								: "bg-transparent border-gray-400"
						} transition-all duration-300`}
						aria-label={`Go to slide ${i + 1}`}
					/>
				))}
			</div>
		</section>
	);
}
