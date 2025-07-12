import { useEffect, useState } from "react";
import { client, urlFor } from "../../sanityClient";
import { Link } from "react-router-dom";

export default function FanFavorites() {
	const [drinks, setDrinks] = useState([]);

	useEffect(() => {
		const fetchDrinks = async () => {
			const data = await client.fetch(`
        *[_type == "menuCategory"]{
          category,
          items[featured == true]{
            name,
            image,
            description,
            featuredOrder
          }
        }
      `);

			// Flatten items and attach category name
			const allItems = data.flatMap((cat) =>
				cat.items.map((item) => ({
					...item,
					category: cat.category,
				}))
			);

			// Sort by featuredOrder
			const sorted = allItems.sort(
				(a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0)
			);

			setDrinks(sorted);
		};

		fetchDrinks();
	}, []);

	return (
		<section className="py-24 bg-[#fefefe]">
			<div className="max-w-6xl mx-auto px-6">
				<div className="mb-20">
					<h2 className="text-4xl md:text-5xl font-bold text-left text-[#91C3B0] mb-4">
						Fan Favorites
					</h2>
					<p className="text-gray-600 text-lg md:text-xl">
						These are some of our most-loved drinks, handpicked by our loyal customers.
					</p>
				</div>
			</div>

			<div className="overflow-x-auto scroll-smooth scrollbar-hide">
				<div className="flex gap-6 min-w-max px-6 pb-6">
					{drinks.map((drink, index) => (
						<Link
							to={`/drink/${encodeURIComponent(drink.name)}`}
							key={index}
							className="w-52 md:w-56 flex-shrink-0 bg-white overflow-hidden transform transition duration-300 hover:scale-105 rounded-lg"
						>
							<div className="relative w-full h-72 md:h-80">
								{drink.image ? (
									<img
										src={urlFor(drink.image).width(300).height(420).url()}
										alt={drink.name}
										className="w-full h-full object-cover"
										loading="lazy"
									/>
								) : (
									<div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
										No image
									</div>
								)}
							</div>

							<div className="p-4 text-left space-y-1">
								<h3 className="text-sm font-bold text-[#906249]">{drink.name}</h3>
								<p className="text-xs text-gray-500">{drink.category}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
