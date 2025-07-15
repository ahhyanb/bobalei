import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Location() {
  return (
    <section className="bg-[#fdfcfb] px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        {/* LEFT: Info */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#91C3B0]">Location</h1>

          <div className="flex items-start gap-3 text-[#7E5C49]">
            <FaMapMarkerAlt className="mt-1" />
            <div>
              <h2 className="text-xl font-semibold">Wailuku Food Trucks</h2>
              <p className="leading-relaxed">
                1960 Main St.<br />
                Wailuku, HI 96793
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[#7E5C49]">
            <FaPhoneAlt />
            <p className="text-sm">(808) 318-3107</p>
          </div>

          <div className="flex items-center gap-3 text-[#7E5C49]">
            <FaEnvelope />
            <a
              href="mailto:hello@bobalei.com"
              className="text-sm text-[#91C3B0] underline hover:text-[#7eb5a3]"
            >
              inquir@bobaleillc.com
            </a>
          </div>

          <div className="mt-6">
            <h3 className="text-md font-semibold text-[#7E5C49] mb-2">Hours of Operation</h3>
            <ul className="text-sm text-[#7E5C49] leading-6">
              <li>Monday – Saturday: 10:00am – 6:00pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <a
            href="https://www.google.com/maps/place/Wailuku+Food+Trucks/@20.8883021,-156.5000491,20z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#91C3B0] text-[#91C3B0] px-6 py-2 rounded-full text-sm hover:bg-[#91C3B0] hover:text-white transition mt-8"
          >
            Open in Google Maps
          </a>
        </div>

        {/* RIGHT: Static Map Image */}
        <div className="w-full overflow-hidden rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105">
          <img
            src="/bobalei-location.png"
            alt="Map showing Wailuku Food Trucks location"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-24">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#7E5C49]">
          We can’t wait to serve you!
        </h2>
      </div>
    </section>
  );
}
