import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero"; // new import
import WhyBobalei from "./WhyBobalei";

const featuredDrinks = [
  {
    name: "Brown Sugar Milk Tea",
    price: "$5.50",
    image: "https://picsum.photos/300/200?random=1",
  },
  {
    name: "Taro Smoothie",
    price: "$6.00",
    image: "https://picsum.photos/300/200?random=2",
  },
  {
    name: "Strawberry Matcha Latte",
    price: "$6.50",
    image: "https://picsum.photos/300/200?random=3",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fffdfc] text-[#333] font-comfortaa">
      <Header />

      <main className="flex-grow">
        <Hero />

        {/* Why Choose Us */}
        <WhyBobalei />

        {/* Featured Drinks */}
        <section className="py-16 px-4 bg-[#fefefe]">
          <h2 className="text-3xl font-bold text-center text-[#91C3B0] mb-10">
            Fan Favorites
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredDrinks.map((drink, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-[#F28B8B]">{drink.name}</h3>
                  <p className="text-gray-600 mt-1">{drink.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
