import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const galleryItems = [
    { title: "Pool Tables", category: "Gaming", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800" },
    { title: "Burger", category: "Food", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800" },
    { title: "Cocktails", category: "Drinks", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800" },
    { title: "Gaming Night", category: "Gaming", image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800" },
    { title: "Pizza", category: "Food", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800" },
    { title: "Mocktails", category: "Drinks", image: "https://images.pexels.com/photos/36260433/pexels-photo-36260433.jpeg?_gl=1*odp83q*_ga*NjkxMTUzMzI5LjE3NzUyNTMyODU.*_ga_8JE65Q40S6*czE3NzUyNTMyODUkbzEkZzEkdDE3NzUyNTMzMTYkajI5JGwwJGgw" },

    // MORE
    { title: "Snacks", category: "Food", image: "https://images.unsplash.com/photo-1541589456737-dff1db0887e4?w=800" },
    { title: "PS5 Gaming", category: "Gaming", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800" },
    { title: "Cafe Drinks", category: "Drinks", image: "https://images.unsplash.com/photo-1527169402691-feff5539e52c?w=800" },
  ];

  const categories = ["All", "Food", "Gaming", "Drinks"];

  // FILTER LOGIC
  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section className="py-20 bg-black px-4">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl text-center text-primary font-bold mb-6">
          GALLERY
        </h2>

        {/* 🔥 CATEGORY TABS */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`px-5 py-2 rounded-full border ${
                activeCategory === cat
                  ? "bg-primary text-black"
                  : "border-primary text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div layout className="grid md:grid-cols-3 gap-6">

          {visibleItems.map((item, index) => (
            <motion.div
              key={item.title}
              layout
              whileHover={{ y: -10 }}
              onClick={() => {
                setActiveCategory(item.category); // 🔥 CLICK FILTER
                setShowAll(true);
              }}
              className="relative cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-end p-4 transition">
                <div>
                  <p className="text-primary text-sm">{item.category}</p>
                  <h3 className="text-white font-bold">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}

        </motion.div>

        {/* BUTTON */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 bg-primary text-black rounded-full font-bold"
          >
            {showAll ? "VIEW LESS" : `VIEW MORE ${activeCategory !== "All" ? activeCategory : ""} PHOTOS`}
          </button>
        </div>

      </div>
    </section>
  );
}