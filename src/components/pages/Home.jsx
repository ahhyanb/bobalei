import Hero from "./Hero";
import WhyBobalei from "./WhyBobalei";
import FanFavorites from "./FanFavorites";  // ✅ new import
import ProductSelector from "./ProductSelector";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fffdfc] text-[#333] font-comfortaa">
     

      <main className="flex-grow">
        <Hero />
        <WhyBobalei />
        <ProductSelector />
        <FanFavorites />  
      </main>
  
    
    </div>
  );
}
