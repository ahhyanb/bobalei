import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductSelector() {
  const productImages = {
    "Specialty Blend": ["/smoothie.jpeg"],
    "Milk Teas": ["/boba.jpeg"],
    "Bowls": ["/acai.jpg", "/matcha.jpg"],
    "Daily Grindz": ["/food.jpeg"],
  };

  const categories = Object.keys(productImages);
  const [hovered, setHovered] = useState(categories[0] || "");
  const [imgIndex, setImgIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setImgIndex(0);
    let timer;
    const images = productImages[hovered] || [];

    if (images.length > 1) {
      timer = setInterval(() => {
        setImgIndex((prev) => (prev + 1) % images.length);
      }, 1500);
    }

    return () => clearInterval(timer);
  }, [hovered]);

  // Slugify function to match Menu section IDs
  const slugify = (str) =>
    str
      .toLowerCase()
      .replace(/\s*-\s*/g, "-")
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/-+/g, "-")
      .trim();

  return (
    <>
    
    <section className="flex flex-col sm:flex-row items-start gap-8 max-w-6xl mx-auto p-8">
      {/* LEFT SELECTION */}
      <div className="flex flex-col space-y-4 text-3xl font-bold text-[#906249] flex-shrink-0">
        {categories.map((item) => (
          <div
            key={item}
            onMouseEnter={() => setHovered(item)}
            onClick={() => navigate(`/menu#${slugify(item)}`)}
            className={`cursor-pointer transition ${
              hovered === item ? "text-[#F28B8B] underline decoration-2" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* RIGHT IMAGE BOX */}
      <div className="w-full flex justify-center sm:justify-end">
        <div className="w-full max-w-[450px] h-[300px] sm:h-[600px] mx-auto sm:mx-0 bg-[#906249] overflow-hidden relative rounded-lg shadow transition-transform duration-300 hover:scale-105">
          {(productImages[hovered] || []).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${hovered} ${idx + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                idx === imgIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
