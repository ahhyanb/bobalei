import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Location() {
  return (
    <section className="bg-[#FFF7F4] py-24 px-6 md:px-12">
      {/* Title */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#F28B8B] to-[#91C3B0] text-transparent bg-clip-text text-left mb-2">
          Visit Us
        </h2>
        <div className="w-16 h-1 bg-[#F28B8B] rounded-full" />
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT: Truck Image + Info */}
        <div className="space-y-8 text-[#3A2E2E] text-base md:text-lg leading-loose">
          {/* Smaller Truck Image */}
          <div className="w-full max-w-xs rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
            <img
              src="/wailukuFoodTruck.webp"
              alt="Bobalei food truck in Wailuku"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Location Info */}
          <div className="space-y-6 text-[#7E5C49]">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="mt-1 text-[#91C3B0]" />
              <div>
                <h3 className="text-[#7E5C49] text-xl font-semibold">Wailuku Food Trucks</h3>
                <p className="text-[#7E5C49]">
                  1960 Main St.<br />
                  Wailuku, HI 96793
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#91C3B0]" />
              <p className="text-sm">(808) 318-3107</p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#91C3B0]" />
              <a
                href="mailto:inquiry@bobaleillc.com"
                className="text-sm text-[#91C3B0] underline hover:text-[#7eb5a3]"
              >
                inquiry@bobaleillc.com
              </a>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-md font-semibold text-[#7E5C49] mb-2">Hours of Operation</h4>
              <ul className="text-sm text-[#7E5C49] leading-6">
                <li>Monday – Saturday: 9:00am – 4:00pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT: Static Map + Button */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-full rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
            <img
              src="/bobalei-location.png"
              alt="Map showing Bobalei's Wailuku location"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Google Maps Button UNDER the map now */}
          <a
            href="https://www.google.com/maps/place/Bobalei/@20.8882059,-156.5035449,17z/data=!3m1!4b1!4m6!3m5!1s0x7954d3d0a3bf98df:0x5255600bfee16333!8m2!3d20.8882059!4d-156.50097!16s%2Fg%2F11x0j5n6r9?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#91C3B0] text-[#91C3B0] px-6 py-2 rounded-full text-sm hover:bg-[#91C3B0] hover:text-white transition"
          >
            Open in Google Maps
          </a>
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
