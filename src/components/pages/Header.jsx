// --- Header.jsx ---
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

const menuLinks = [
  { name: "See all", href: "/menu#all" },
  { name: "Milk Tea", href: "/menu#milk-teas" },
  { name: "Matcha & Hojicha", href: "/menu#matcha-hojicha" },
  { name: "Refresher - Fruit Tea", href: "/menu#refreshers-fruit-teas" },
  { name: "Smoothie", href: "/menu#smoothie" },
  { name: "Protein Smoothie", href: "/menu#protein-smoothie" },
  { name: "Coffee", href: "/menu#coffee" },
  { name: "Bowls", href: "/menu#bowls" },
  { name: "Daily Grindz", href: "/menu#daily-grindz" },
];

const aboutLinks = [
  { name: "Our Story", href: "/about" },
  { name: "Location", href: "/location" },
  { name: "Support", href: "/support" },
];

const shopLinks = [
  { name: "Bobalei Merch", href: "/shop#bobalei-merch" },
  { name: "T-shirts", href: "/shop#tshirt" },
  { name: "Hoodies", href: "/shop#hoodies" },
  { name: "Accessories", href: "/shop#accesories" },
];

const orderLink =
  "https://order.online/store/bobalei-wailuku-30956807/?hideModal=true&pickup=true";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submenu, setSubmenu] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setSubmenu(null);
  }, [location]);

  const handleMenuLinkClick = (href) => {
    const isMenuPage = location.pathname === "/menu";
    const [path, hash] = href.split("#");

    if (isMenuPage && hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setSubmenu(null);
    } else {
      navigate(href);
      setSubmenu(null);
    }
  };

  const submenuLinks =
    submenu === "menu"
      ? menuLinks
      : submenu === "about"
      ? aboutLinks
      : submenu === "merchandise"
      ? shopLinks
      : [];

  return (
    <header
    className={`fixed top-0 left-0 w-full z-40 backdrop-blur-md transition-all duration-300 ${
  scrolled ? "bg-white/60 shadow-md" : "bg-white/40"
}`}

      onMouseLeave={() => setSubmenu(null)}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col pt-4">
        {/* Top Row */}
        <div className="relative flex justify-center items-center pt-4 pb-6 sm:pb-8">
          {/* Desktop Nav */}
          <nav className="hidden sm:flex space-x-6 text-sm font-medium absolute left-0 text-[#7eb5a3]">
            <Link
              to="/"
              className="hover:text-[#F28B8B]"
              onMouseEnter={() => setSubmenu(null)}
            >
              Home
            </Link>

            <button
              className="hover:text-[#F28B8B]"
              onMouseEnter={() => setSubmenu("menu")}
              onClick={() => handleMenuLinkClick("/menu#all")}
            >
              Menu
            </button>

            <Link
              to="/about#our-story"
              className="hover:text-[#F28B8B]"
              onMouseEnter={() => setSubmenu("about")}
            >
              About Us
            </Link>

            <Link
              to="/merchandise"
              className="hover:text-[#F28B8B]"
              onMouseEnter={() => setSubmenu("merchandise")}
            >
              Shop
            </Link>
          </nav>

          {/* Mobile Hamburger */}
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

          {/* Center Logo */}
          <Link to="/">
            <img
              src="/logo.png"
              alt="Bobalei logo"
              className="h-20 transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Order Now Button */}
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block absolute right-0 px-4 py-2 rounded-full bg-[#F28B8B]/70 text-white text-sm hover:bg-[#7eb5a3] transition"
          >
            Order Now
          </a>
        </div>

        {/* Desktop Submenu with slide-fade animation */}
        <div
          className={`hidden sm:block transition-all duration-300 ease-in-out ${
            submenu ? "opacity-100 max-h-[600px] scale-y-100" : "opacity-0 max-h-0 scale-y-95"
          } origin-top overflow-hidden`}
        >
          <div className="flex flex-col mt-2 mb-4 transition-opacity duration-300">
            {submenuLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleMenuLinkClick(link.href)}
                className="text-left text-sm text-gray-700 py-1 hover:text-[#F28B8B]"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden mt-4 space-y-4 text-sm font-medium text-[#7eb5a3]">
            <Link to="/">Home</Link>

            <details className="w-full">
              <summary className="cursor-pointer py-2 font-semibold">Menu</summary>
              {menuLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleMenuLinkClick(link.href)}
                  className="block py-1 text-gray-500 w-full text-left"
                >
                  {link.name}
                </button>
              ))}
            </details>

            <details className="w-full">
              <summary className="cursor-pointer py-2 font-semibold">About Us</summary>
              {aboutLinks.map((link) => (
                <Link key={link.href} to={link.href} className="block py-1 text-gray-500">
                  {link.name}
                </Link>
              ))}
            </details>

            <details className="w-full">
              <summary className="cursor-pointer py-2 font-semibold">Shop</summary>
              {shopLinks.map((link) => (
                <Link key={link.href} to={link.href} className="block py-1 text-gray-500">
                  {link.name}
                </Link>
              ))}
            </details>

            <a
              href={orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#F28B8B]/70 text-white rounded-full px-4 py-3 w-full text-center mt-4"
            >
              Order Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
