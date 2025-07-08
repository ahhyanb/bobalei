import { useEffect, useState } from "react";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [active, setActive] = useState(null);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const orderLink =
		"https://order.online/store/bobalei-wailuku-30956807/?hideModal=true&pickup=true&rwg_token=ACgRB3fu7JRiqHebuSoEMiP4dfIA4vd8Zx7g0SBwI1zDaSG8bsNtvulDM3yB513nu7mtn1qnwUnlNmwA5ZNE2hhkhLZuQH4uzQ==&utm_source=gfo";

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
				scrolled || active ? "bg-white/80 shadow-sm py-2" : "bg-white/20 py-4"
			}`}
			onMouseLeave={() => setActive(null)}
		>
			<div className="max-w-6xl mx-auto px-4 flex flex-col">
				<div className="relative flex justify-center items-center">
					{/* DESKTOP NAV LEFT */}
					<nav
						className={`hidden sm:flex space-x-6 text-sm font-medium absolute left-0 ${
							scrolled ? "text-[#F28B8B]" : "text-[#7eb5a3]"
						}`}
					>
						<Link to="/" onMouseEnter={() => setActive(null)} className="hover:text-[#7eb5a3]">
							Home
						</Link>
						<Link
							to="/menu"
							onMouseEnter={() => setActive("menu")}
							className={`hover:text-[#7eb5a3] ${active === "menu" ? "border-b-2 border-[#F28B8B]" : ""}`}
						>
							Menu
						</Link>
						<Link
							to="/about"
							onMouseEnter={() => setActive("about")}
							className={`hover:text-[#7eb5a3] ${active === "about" ? "border-b-2 border-[#F28B8B]" : ""}`}
						>
							About Us
						</Link>
					</nav>

					{/* MOBILE HAMBURGER */}
					<button
						className="sm:hidden absolute left-4"
						onClick={() => setMobileOpen(!mobileOpen)}
					>
						{mobileOpen ? (
							<CloseIcon className="w-6 h-6 text-[#F28B8B]" />
						) : (
							<MenuIcon className="w-6 h-6 text-[#F28B8B]" />
						)}
					</button>

					{/* CENTER LOGO */}
					<Link to="/">
						<img src="/logo.png" alt="Bobalei logo" className="h-20 md:h-20" />
					</Link>

					{/* ORDER NOW (EXTERNAL LINK) */}
					<a
						href={orderLink}
						target="_blank"
						rel="noopener noreferrer"
						className={`absolute right-0 px-4 py-2 rounded-full text-sm font-medium transition ${
							scrolled
								? "bg-[#91C3B0] text-white hover:bg-[#7eb5a3]"
								: "bg-[#F28B8B]/70 text-white hover:bg-[#7eb5a3]"
						}`}
					>
						Order Now
					</a>
				</div>

				{/* DESKTOP SUBMENUS */}
				{active === "menu" && (
					<div className="hidden sm:flex justify-left mt-2 mb-6">
						<div className="flex flex-col">
							<Link to="/menu#all" className="text-sm text-gray-700 py-1 hover:text-[#F28B8B]">See all</Link>
							<Link to="/menu#matcha-horjicha" className="text-sm text-gray-700 py-1 hover:text-[#F28B8B]">Matcha & Horjicha</Link>
							<Link to="/menu#milk-teas" className="text-sm text-gray-700 py-1 hover:text-[#F28B8B]">Milk Teas</Link>
							<Link to="/menu#coffee" className="text-sm text-gray-700 py-1 hover:text-[#F28B8B]">Coffee</Link>
							<Link to="/menu#frappe" className="text-sm text-gray-700 py-1 hover:text-[#F28B8B]">Frappe</Link>
							<Link to="/menu#specialty-blend" className="text-sm text-gray-700 py-1 hover:text-[#F28B8B]">Specialty Blend</Link>
							<Link to="/menu#refreshers" className="text-sm text-gray-700 py-1 hover:text-[#F28B8B]">Refreshers</Link>
							<Link to="/menu#fizz" className="text-sm text-gray-700 py-1 hover:text-[#F28B8B]">Fizz</Link>
						</div>
					</div>
				)}

				{active === "about" && (
					<div className="hidden sm:flex justify-left mt-2 mb-6">
						<div className="flex flex-col">
							<Link to="/about" className="text-sm text-gray-700 py-1 hover:text-[#F28B8B]">Our Story</Link>
							<Link to="/location" className="text-sm text-gray-700 py-1 hover:text-[#F28B8B]">Location</Link>
							<Link to="/support" className="text-sm text-gray-700 py-1 hover:text-[#F28B8B]">Support</Link>
						</div>
					</div>
				)}

				{/* MOBILE MENU */}
				{mobileOpen && (
					<div className="flex flex-col space-y-2 mt-2 text-sm font-medium text-[#7eb5a3] items-center text-center">
						<Link to="/" onClick={() => setMobileOpen(false)} className="py-2">Home</Link>

						<button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="font-semibold py-2">Menu</button>
						<div className={`overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-40" : "max-h-0"}`}>
							<Link to="/menu#milk-tea" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-500">Milk Tea</Link>
							<Link to="/menu#smoothies" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-500">Smoothies</Link>
							<Link to="/menu#bowls" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-500">Bowls</Link>
						</div>

						<button onClick={() => setMobileAboutOpen(!mobileAboutOpen)} className="font-semibold py-2">About Us</button>
						<div className={`overflow-hidden transition-all duration-300 ${mobileAboutOpen ? "max-h-40" : "max-h-0"}`}>
							<Link to="/about" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-500">Our Story</Link>
							<Link to="/location" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-500">Location</Link>
							<Link to="/support" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-500">Support</Link>
						</div>

						<a
							href={orderLink}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-[#F28B8B]/70 text-white rounded-full px-4 py-3 mt-2"
						>
							Order Now
						</a>
					</div>
				)}
			</div>
		</header>
	);
}
