export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold text-[#F28B8B] tracking-wide">
          bobalei
        </div>

        {/* Navigation */}
        <nav className="hidden sm:flex space-x-6 text-sm font-medium">
          <a href="#" className="text-gray-600 hover:text-[#F28B8B] transition">Home</a>
          <a href="#" className="text-gray-600 hover:text-[#F28B8B] transition">Menu</a>
          <a href="#" className="text-gray-600 hover:text-[#F28B8B] transition">Contact</a>
        </nav>

        {/* CTA / Login / Order button */}
        <a
          href="#"
          className="bg-[#91C3B0] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#7eb5a3] transition"
        >
          Order Now
        </a>
      </div>
    </header>
  );
}
