import React from "react";
import { FaInstagram, FaFacebookF, FaEnvelope, FaClock } from "react-icons/fa";

export default function Support() {
  return (
    <section className="bg-[#fdfcfb] py-24 px-6 text-[#333]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        {/* LEFT TEXT BLOCK */}
        <div className="md:w-1/2 space-y-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#91C3B0] mb-4">
              Support
            </h1>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Have a question, issue, or just want to say hi? We're here for you.
              Whether it’s feedback or a quick hello, don’t hesitate to reach out.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="flex items-center text-[#F28B8B] font-semibold text-lg mb-1">
                <FaEnvelope className="mr-2" />
                Email Us
              </h2>
              <p className="text-gray-700 text-sm">
                Reach out at{" "}
                <a
                  href="mailto:support@bobalei.com"
                  className="text-[#906249] underline"
                >
                  inquiry@bobaleillc.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="flex items-center text-[#F28B8B] font-semibold text-lg mb-1">
                <FaInstagram className="mr-2" />
                Instagram
              </h2>
              <p className="text-gray-700 text-sm">
                Follow or DM us at{" "}
                <a
                  href="https://instagram.com/bobalei.maui"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#906249] underline"
                >
                  @bobalei.maui
                </a>
              </p>
            </div>

            <div>
              <h2 className="flex items-center text-[#F28B8B] font-semibold text-lg mb-1">
                <FaFacebookF className="mr-2" />
                Facebook
              </h2>
              <p className="text-gray-700 text-sm">
                Message us on{" "}
                <a
                  href="https://facebook.com/bobalei.maui"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#906249] underline"
                >
                  @bobalei.maui
                </a>
              </p>
            </div>

            { /*<div>
              <h2 className="flex items-center text-[#F28B8B] font-semibold text-lg mb-1">
                <FaClock className="mr-2" />
                Response Time
              </h2>
              <p className="text-gray-700 text-sm">
                We typically respond within 24–48 hours during our business hours.
              </p>
            </div>
             */}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2">
          <img
            src="/bobalei-sign.webp"
            alt="bobalei signage"
            className="rounded-xl shadow-md w-full h-[480px] object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
