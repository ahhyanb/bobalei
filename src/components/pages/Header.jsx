import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

const menuLinks = [
	{ name: "See all", href: "/menu#all" },
	{ name: "Matcha & Hojicha", href: "/menu#matcha-hojicha" },
	{ name: "Milk Teas", href: "/menu#milk-teas" },
	{ name: "Specialty Blend", href: "/menu#specialty-blend" },
	{ name: "Coffee", href: "/menu#coffee" },
	{ name: "Frappe", href: "/menu#frappe" },
	{ name: "Refreshers - Fruit Teas", href: "/menu#refreshers-fruit-teas" },
	{ name: "Fizz - Lemonade", href: "/menu#fizz-lemonade" },
	{ name: "Bowls", href: "/menu#bowls" },
	{ name: "Daily Grindz", href: "/menu#daily-grindz" },
];

const aboutLinks = [
	{ name: "Our Story", href: "/about" },
	{ name: "Location", href: "/location" },
	{ name: "Support", href: "/support" },
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
	}, [location]);

	const navClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
		scrolled || submenu ? "bg-white/80 py-2 shadow" : "bg-white/20 py-4"
	}`;

	const handleMenuLinkClick = (href) => {
		const isMenuPage = location.pathname === "/menu";
		const hash = href.split("#")[1];

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

	return (
		<header className={navClass} onMouseLeave={() => setSubmenu(null)}>
			<div className="max-w-6xl mx-auto px-4 flex flex-col">
				<div className="relative flex justify-center items-center">
					{/* Desktop Nav */}
					<nav className="hidden sm:flex space-x-6 text-sm font-medium absolute left-0 text-[#7eb5a3]">
						<Link 
              to="/" 
              className="hover:text-[#F28B8B]"
              onMouseEnter={() => setSubmenu(null)}
              
              >
							Home
						</Link>

						<Link
							to="/menu#all"
							className="hover:text-[#F28B8B]"
							onMouseEnter={() => setSubmenu("menu")}
						>
							Menu
						</Link>

						<Link
							to="/about#our-story"
							className="hover:text-[#F28B8B]"
							onMouseEnter={() => setSubmenu("about")}
						>
							About Us
						</Link>
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
				)}

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="flex flex-col items-center text-center text-sm font-medium text-[#7eb5a3] space-y-2 mt-4">
						<Link to="/">Home</Link>

						<details className="w-full">
							<summary className="cursor-pointer py-2 font-semibold">
								Menu
							</summary>
							{menuLinks.map((link) => (
								<Link
									key={link.href}
									to={link.href}
									className="block py-1 text-gray-500"
								>
									{link.name}
								</Link>
							))}
						</details>

						<details className="w-full">
							<summary className="cursor-pointer py-2 font-semibold">
								About Us
							</summary>
							{aboutLinks.map((link) => (
								<Link
									key={link.href}
									to={link.href}
									className="block py-1 text-gray-500"
								>
									{link.name}
								</Link>
							))}
						</details>

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
