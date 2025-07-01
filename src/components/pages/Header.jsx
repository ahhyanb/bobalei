import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled || active ? "bg-white/80 shadow-sm py-2" : "bg-white/20 py-4"
      }`}
      onMouseLeave={() => setActive(null)}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col">
        {/* NAV ROW */}
        <div className="flex justify-between items-center">
          <a href="#">
            <img src="/logo.png" alt="Bobalei logo" className="h-10 md:h-12" />
          </a>
          <nav className={`hidden sm:flex space-x-6 text-sm font-medium ${
            scrolled ? "text-[#F28B8B]" : "text-[#7eb5a3]"
          }`}>
            <a
              href="#"
              onMouseEnter={() => setActive(null)}
              className="hover:text-[#7eb5a3]"
            >
              Home
            </a>
            <a
              href="#"
              onMouseEnter={() => setActive("menu")}
              className={`hover:text-[#7eb5a3] ${
                active === "menu" ? "border-b-2 border-[#F28B8B]" : ""
              }`}
            >
              Menu
            </a>
            <a
              href="#"
              onMouseEnter={() => setActive("contact")}
              className={`hover:text-[#7eb5a3] ${
                active === "contact" ? "border-b-2 border-[#F28B8B]" : ""
              }`}
            >
              Contact
            </a>
          </nav>
          <a href="#" className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            scrolled ? "bg-[#91C3B0] text-white hover:bg-[#7eb5a3]" : "bg-[#F28B8B]/70 text-white hover:bg-[#7eb5a3]"
          }`}>
            Order Now
          </a>
        </div>

        {/* INLINE SUBMENU */}
        {active === "menu" && (
          <div className="flex justify-center mt-2">
            <div className="flex flex-col">
              <a href="/milk-tea" className="text-sm text-gray-700 py-1 hover:text-[#F28B8B]">Milk Tea</a>
              <a href="/smoothies" className="text-sm text-gray-700 py-1 hover:text-[#F28B8B]">Smoothies</a>
              <a href="/bowls" className="text-sm text-gray-700 py-1 hover:text-[#F28B8B]">Bowls</a>
            </div>
          </div>
        )}

        {active === "contact" && (
          <div className="flex justify-center mt-2">
            <div className="flex flex-col">
              <a href="/locations" className="text-sm text-gray-700 py-1 hover:text-[#F28B8B]">Locations</a>
              <a href="/support" className="text-sm text-gray-700 py-1 hover:text-[#F28B8B]">Support</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
