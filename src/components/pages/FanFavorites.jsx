import { useEffect, useState } from "react";
import { client, urlFor } from "../../sanityClient";
import { Link } from "react-router-dom";

export default function FanFavorites() {
	const [drinks, setDrinks] = useState([]);

	useEffect(() => {
		const fetchDrinks = async () => {
			const data = await client.fetch(`
        *[_type == "menuCategory"]{
          items[featured == true]{
            name,
            image,
            description,
            sizes[]{ label, price },
            addons[]{ name, price },
            featuredOrder
          }
        }
      `);

			const allItems = data.flatMap((cat) => cat.items);
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
							className="w-52 md:w-56 flex-shrink-0 bg-white overflow-hidden transform transition duration-300 hover:scale-105 rounded-lg "
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

								{drink.description && (
									<div className="absolute bottom-0 left-0 right-0 bg-[#fefefe]/90 backdrop-blur-sm p-3 text-sm text-[#555] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										{drink.description}
									</div>
								)}
							</div>

							<div className="p-4 text-left space-y-1">
								<h3 className="text-sm font-bold text-[#906249]">{drink.name}</h3>
								<p className="text-[#F28B8B] font-semibold">
									{Array.isArray(drink.sizes) && drink.sizes.length > 0
										? `$${Number(drink.sizes[0].price).toFixed(2)}`
										: "—"}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
