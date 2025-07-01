const featuredDrinks = [
	{
		name: "Brown Sugar Milk Tea",
		price: "$5.50",
		image: "https://picsum.photos/300/300?random=1",
	},
	{
		name: "Taro Smoothie",
		price: "$6.00",
		image: "https://picsum.photos/300/300?random=2",
	},
	{
		name: "Strawberry Matcha Latte",
		price: "$6.50",
		image: "https://picsum.photos/300/300?random=3",
	},
	{
		name: "Mango Slush",
		price: "$6.00",
		image: "https://picsum.photos/300/300?random=4",
	},
	{
		name: "Lychee Green Tea",
		price: "$5.75",
		image: "https://picsum.photos/300/300?random=5",
	},
	{
		name: "Honeydew Milk Tea",
		price: "$5.50",
		image: "https://picsum.photos/300/300?random=6",
	},
	{
		name: "Brown Sugar Milk Tea",
		price: "$5.50",
		image: "https://picsum.photos/300/300?random=1",
	},
	{
		name: "Taro Smoothie",
		price: "$6.00",
		image: "https://picsum.photos/300/300?random=2",
	},
	{
		name: "Strawberry Matcha Latte",
		price: "$6.50",
		image: "https://picsum.photos/300/300?random=3",
	},
	{
		name: "Mango Slush",
		price: "$6.00",
		image: "https://picsum.photos/300/300?random=4",
	},
	{
		name: "Lychee Green Tea",
		price: "$5.75",
		image: "https://picsum.photos/300/300?random=5",
	},
	{
		name: "Honeydew Milk Tea",
		price: "$5.50",
		image: "https://picsum.photos/300/300?random=6",
	},
];

export default function FanFavorites() {
	return (
		<section className="py-16 bg-[#fefefe]">
			<h2 className="text-3xl font-bold text-center text-[#91C3B0] mb-10">
				Fan Favorites
			</h2>
			<div className="overflow-x-auto scroll-smooth scrollbar-hide">
				<div className="flex gap-4 min-w-max px-4">
					{featuredDrinks.map((drink, index) => (
						<div
							key={index}
							className="w-60 flex-shrink-0 bg-white rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
						>
							<div className="relative">
								<img
									src={drink.image}
									alt={drink.name}
									className="w-full h-64 object-cover"
									loading="lazy"
								/>
								<button
									onClick={() => alert(`Added ${drink.name} to cart`)}
									className="absolute top-4 right-4 bg-transparent border border-white text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold hover:bg-[#F28B8B] hover:text-white transition"
								>
									+
								</button>
							</div>
							<div className="p-3 text-left">
								<h3 className="text-sm font-bold text-[#906249]">
									{drink.name}
								</h3>
								<p className="text-[#F28B8B] font-semibold mt-1">
									{drink.price}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
