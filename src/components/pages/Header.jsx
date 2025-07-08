import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

// Centralized submenu config
const menuLinks = [
  { name: "See all", href: "/menu#all" },
  { name: "Matcha & Horjicha", href: "/menu#matcha-horjicha" },
  { name: "Milk Teas", href: "/menu#milk-teas" },
  { name: "Coffee", href: "/menu#coffee" },
  { name: "Frappe", href: "/menu#frappe" },
  { name: "Specialty Blend", href: "/menu#specialty-blend" },
  { name: "Refreshers", href: "/menu#refreshers" },
  { name: "Fizz", href: "/menu#fizz" },
];

const aboutLinks = [
  { name: "Our Story", href: "/about" },
  { name: "Location", href: "/location" },
  { name: "Support", href: "/support" },
];

const orderLink =
  "https://order.online/store/bobalei-wailuku-30956807/?hideModal=true&pickup=true&rwg_token=ACgRB3fu7JRiqHebuSoEMiP4dfIA4vd8Zx7g0SBwI1zDaSG8bsNtvulDM3yB513nu7mtn1qnwUnlNmwA5ZNE2hhkhLZuQH4uzQ==&utm_source=gfo";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submenu, setSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false); // close on route change
  }, [location]);

  const navClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
    scrolled || submenu ? "bg-white/80 py-2 shadow" : "bg-white/20 py-4"
  }`;

  return (
    <header className={navClass} onMouseLeave={() => setSubmenu(null)}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col">
        <div className="relative flex justify-center items-center">
          {/* Desktop Nav */}
          <nav className="hidden sm:flex space-x-6 text-sm font-medium absolute left-0 text-[#7eb5a3]">
            <Link to="/" onMouseEnter={() => setSubmenu(null)}>Home</Link>
            <span onMouseEnter={() => setSubmenu("menu")} className="cursor-pointer hover:text-[#F28B8B]">Menu</span>
            <span onMouseEnter={() => setSubmenu("about")} className="cursor-pointer hover:text-[#F28B8B]">About Us</span>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden absolute left-4"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="w-6 h-6 text-[#F28B8B]" />
            ) : (
              <MenuIcon className="w-6 h-6 text-[#F28B8B]" />
            )}
          </button>

          {/* Center logo */}
          <Link to="/">
            <img src="/logo.png" alt="Bobalei logo" className="h-20" />
          </Link>

          {/* Desktop "Order Now" */}
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block absolute right-0 px-4 py-2 rounded-full bg-[#F28B8B]/70 text-white text-sm hover:bg-[#7eb5a3] transition"
          >
            Order Now
          </a>
        </div>

        {/* Desktop submenu */}
        {submenu && (
          <div className="hidden sm:flex mt-2 mb-6">
            <div className="flex flex-col">
              {(submenu === "menu" ? menuLinks : aboutLinks).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-gray-700 py-1 hover:text-[#F28B8B]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="flex flex-col items-center text-center text-sm font-medium text-[#7eb5a3] space-y-2 mt-4">
            <Link to="/">Home</Link>

            {/* Mobile Menu Dropdown */}
            <details className="w-full">
              <summary className="cursor-pointer py-2 font-semibold">Menu</summary>
              {menuLinks.map((link) => (
                <Link key={link.href} to={link.href} className="block py-1 text-gray-500">
                  {link.name}
                </Link>
              ))}
            </details>

            {/* Mobile About Dropdown */}
            <details className="w-full">
              <summary className="cursor-pointer py-2 font-semibold">About Us</summary>
              {aboutLinks.map((link) => (
                <Link key={link.href} to={link.href} className="block py-1 text-gray-500">
                  {link.name}
                </Link>
              ))}
            </details>

            {/* Mobile Order Now */}
            <a
              href={orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[90%] max-w-xs bg-[#F28B8B]/70 text-white text-center rounded-full px-4 py-3 mt-4"
            >
              Order Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
