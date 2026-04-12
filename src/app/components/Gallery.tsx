import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import drinks   from "../img-webp/drinks1.webp";
import drinks2  from "../img-webp/drinks4.webp";
import drinks5  from "../img-webp/drinks5.webp";
import food     from "../img-webp/foodmomo.webp";
import food2    from "../img-webp/food1.webp";
import food3    from "../img-webp/food3.webp";
import food4    from "../img-webp/food2.webp";
import food5    from "../img-webp/foodmain.webp";
import food6    from "../img-webp/food1.webp";

import pool1 from "../img-webp/pool3.webp";

import gaming1 from "../img-webp/ps4.webp";
import gaming2 from "../img-webp/ps1.webp";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const galleryItems = [
    { title: "Pool Tables", category: "Gaming", image: pool1 },
    { title: "Burger", category: "Food", image: food },
    { title: "Cocktails", category: "Drinks", image: drinks },
    { title: "Gaming Night", category: "Gaming", image: gaming1 },
    { title: "Pizza", category: "Food", image: food2 },
    { title: "Mocktails", category: "Drinks", image: drinks2 },

    { title: "Snacks", category: "Food", image: food3 },
    { title: "Snacks", category: "Food", image: food6 },
    { title: "Snacks", category: "Food", image: food5 },
    { title: "Snacks", category: "Food", image: food4 },

    { title: "PS Gaming", category: "Gaming", image: gaming2 },
    { title: "Cafe Drinks", category: "Drinks", image: drinks5 },
  ];

  const categories = ["All", "Food", "Gaming", "Drinks"];

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

        {/* CATEGORY BUTTONS */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`px-5 py-2 rounded-full border transition ${
                activeCategory === cat
                  ? "bg-primary text-black"
                  : "border-primary text-primary hover:bg-primary hover:text-black"
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
              key={index}
              layout
              whileHover={{ y: -10 }}
              onClick={() => {
                setActiveCategory(item.category);
                setShowAll(true);
              }}
              className="relative cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                loading={index < 3 ? "eager" : "lazy"}   // first images fast
                decoding="async"
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
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

        {/* VIEW MORE BUTTON */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 bg-primary text-black rounded-full font-bold hover:scale-105 transition"
          >
            {showAll
              ? "VIEW LESS"
              : `VIEW MORE ${
                  activeCategory !== "All" ? activeCategory : ""
                } PHOTOS`}
          </button>
        </div>

      </div>
    </section>
  );
}