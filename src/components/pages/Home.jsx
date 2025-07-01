import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import WhyBobalei from "./WhyBobalei";
import FanFavorites from "./FanFavorites";  // ✅ new import

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fffdfc] text-[#333] font-comfortaa">
      <Header />

      <main className="flex-grow">
        <Hero />
        <WhyBobalei />
        <FanFavorites />  {/* ✅ clean and modular */}
      </main>

      <Footer />
    </div>
  );
}
