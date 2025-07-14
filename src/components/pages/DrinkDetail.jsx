import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { client, urlFor } from "../../sanityClient";

export default function DrinkDetail() {
  const { drinkName } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [drink, setDrink] = useState(state?.drink || null);

  useEffect(() => {
    if (!drink) {
      const query = `
        *[_type == "menuCategory"]{
          items[] {
            name,
            description,
            image,
            "imageUrl": image.asset->url,
            sizes[]{ label },
            addons[]{ name }
          }
        }
      `;

      client.fetch(query).then((categories) => {
        for (let cat of categories) {
          const found = cat.items.find((i) => i.name === drinkName);
          if (found) {
            setDrink(found);
            break;
          }
        }
      });
    }
  }, [drinkName, drink]);

  if (!drink) {
    return <div className="text-center py-20 text-[#906249]">Loading...</div>;
  }

  return (
    <section className="max-w-4xl mx-auto p-6 mt-20">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-[#906249] hover:text-[#F28B8B] mb-8 text-sm flex items-center"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <img
          src={
            drink.imageUrl
              ? drink.imageUrl + "?w=600"
              : drink.image
              ? urlFor(drink.image).width(600).url()
              : ""
          }
          alt={drink.name}
          className="w-full h-[400px] object-cover rounded shadow"
        />

        {/* Info */}
        <div>
          <h1 className="text-4xl font-bold text-[#91C3B0] mb-2">{drink.name}</h1>
          <p className="text-gray-600 mb-4">{drink.description}</p>

          {drink.sizes?.length > 0 && (
            <div className="text-[#F28B8B] font-semibold space-y-1 mb-4">
              {drink.sizes.map((s, i) => (
                <div key={i}>{s.label}</div>
              ))}
            </div>
          )}

          {drink.addons?.length > 0 && (
            <div className="text-sm text-gray-500">
              <p className="font-semibold mb-1">Available Add-ons:</p>
              <ul className="list-disc list-inside">
                {drink.addons.map((a, i) => (
                  <li key={i}>{a.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
