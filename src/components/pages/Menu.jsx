// --- Menu.jsx ---
import { useEffect, useState } from "react";
import { client } from "../../sanityClient";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [openAddOns, setOpenAddOns] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const location = useLocation();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "menuCategory"]{
          category,
          sortOrder,
          items[]{
            name,
            description,
            "imageUrl": image.asset->url,
            sizes[]{ label, price },
            addons[]{ name, price },
            available
          }
        } | order(sortOrder asc)`
      )
      .then((data) => setMenu(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [location.hash, menu]);

  const toggleAddOns = (itemKey, e) => {
    e.preventDefault();
    setOpenAddOns((prev) => ({ ...prev, [itemKey]: !prev[itemKey] }));
  };

  const toggleDescription = (itemKey, e) => {
    e.preventDefault();
    setExpandedDescriptions((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  const slugify = (str) =>
    str
      .toLowerCase()
      .replace(/\s*-\s*/g, "-")
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/-+/g, "-")
      .trim();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 space-y-16">
      <div className="flex flex-col sm:flex-row gap-8">
        {/* Sidebar */}
        <aside className="hidden sm:block sm:w-1/4 sticky top-32 self-start mt-16">
          <h3 className="font-bold text-[#906249] mb-4 text-lg">Filter by Category</h3>
          <button
            onClick={() => setActiveCategory(null)}
            className={`block w-full text-left mb-2 font-medium ${
              activeCategory === null
                ? "text-[#F28B8B]"
                : "text-gray-700 hover:text-[#7eb5a3]"
            }`}
          >
            All
          </button>
          {menu.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveCategory(null);
                const id = slugify(cat.category);
                const el = document.getElementById(id);
                if (el) {
                  setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 100);
                }
              }}
              className={`block w-full text-left mb-2 text-sm ${
                activeCategory === cat.category
                  ? "text-[#F28B8B] font-semibold"
                  : "text-gray-700 hover:text-[#7eb5a3]"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </aside>

        {/* Main content */}
        <main className="w-full sm:w-3/4">
          <div className="block sm:hidden mb-6">
            <label className="block text-[#906249] font-bold mb-2">
              Filter by Category
            </label>
            <select
              onChange={(e) =>
                setActiveCategory(
                  e.target.value === "All" ? null : e.target.value
                )
              }
              value={activeCategory || "All"}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option>All</option>
              {menu.map((cat, idx) => (
                <option key={idx} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>
          </div>

          {/* Menu Sections */}
          <div id="all" className="scroll-mt-32" />
          {menu
            .filter((cat) => !activeCategory || cat.category === activeCategory)
            .map((cat, i) => {
              const categoryId = slugify(cat.category);
              return (
                <motion.div
                  key={i}
                  id={categoryId}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-20 scroll-mt-32"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-[#91C3B0] mb-6 mt-4">
                    {cat.category}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cat.items.map((item, j) => {
                      const itemKey = `${cat.category}-${j}`;
                      const isExpanded = expandedDescriptions[itemKey];
                      const words = item.description?.split(" ") || [];
                      const shortDescription = words.slice(0, 7).join(" ") + (words.length > 7 ? "..." : "");
                      const isLong = words.length > 7;

                      return (
                        <Link
                          to={`/drink/${encodeURIComponent(item.name)}`}
                          key={j}
                          className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 block relative"
                        >
                          {item.imageUrl && (
                            <img
                              src={`${item.imageUrl}?w=400`}
                              alt={item.name}
                              className="w-full h-80 object-cover rounded"
                              loading="lazy"
                            />
                          )}

                          {item.addons?.length > 0 && (
                            <button
                              onClick={(e) => toggleAddOns(itemKey, e)}
                              className="absolute bottom-2 right-2 bg-[#F28B8B]/70 text-white text-xs px-3 py-1 rounded-full hover:bg-[#F28B8B] transition shadow"
                            >
                              {openAddOns[itemKey] ? "−" : "+"}
                            </button>
                          )}

                          <h3 className="text-lg font-bold text-[#906249] mt-3">
                            {item.name}
                          </h3>

                          <div className="text-sm text-gray-500 mt-2">
                          <p className="inline text-sm text-gray-500 mt-2">
  {isExpanded ? (
    <>
      {item.description}{" "}
      <button
        type="button"
        onClick={(e) => toggleDescription(itemKey, e)}
        className="ml-1 text-[#F28B8B] font-semibold hover:underline text-xs inline"
      >
        ▲
      </button>
    </>
  ) : (
    <>
      {shortDescription}{" "}
      {isLong && (
        <button
          type="button"
          onClick={(e) => toggleDescription(itemKey, e)}
          className="ml-1 text-[#F28B8B] font-semibold hover:underline text-xs inline"
        >
          ▼
        </button>
      )}
    </>
  )}
</p>

                          </div>

                          {item.sizes?.length > 0 && (
                            <div className="mt-2 text-[#F28B8B] font-semibold text-sm">
                              {item.sizes.map((s, k) => (
                                <div key={k}>{s.label}</div>
                              ))}
                            </div>
                          )}

                          {openAddOns[itemKey] && (
                            <ul className="list-disc list-inside text-sm text-gray-500 mt-3">
                              {item.addons.map((addon, idx) => (
                                <li key={idx}>
                                  {addon.name} – ${Number(addon.price).toFixed(2)}
                                </li>
                              ))}
                            </ul>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
        </main>
      </div>
    </div>
  );
}
