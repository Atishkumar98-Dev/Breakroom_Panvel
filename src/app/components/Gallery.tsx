import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import drinks   from "../img-webp/drinks1.webp";
import drinks2  from "../img-webp/drinks4.webp";
import drinks5  from "../img-webp/drinks5.webp";
import food     from "../img-webp/foodmomo.webp";
import food2    from "../img-webp/food1.webp";
import food3    from "../img-webp/food3.webp";
import food4    from "../img-webp/food4.jpeg";
import food5    from "../img-webp/food2.jpeg";
import food6    from "../img-webp/food4.jpeg";
import Bao from "../img-webp/Bao.jpg"
import CheeseSticks from "../img-webp/CheeseSticks.jpg"
import pool1 from "../img-webp/pool3.webp";

import gaming1 from "../img-webp/ps4.webp";
import gaming2 from "../img-webp/ps1.webp";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { title: "Pool Tables", category: "Gaming", image: pool1 },
    { title: "Cheese Chilly Momos", category: "Food", image: food },
    { title: "Bluberry Lemonade", category: "Drinks", image: drinks },
    { title: "Gaming Night", category: "Gaming", image: gaming1 },
    { title: "Garlic Bread + Choco Lava + Drinks", category: "Food", image: food2 },
    { title: "Orange Coffee", category: "Drinks", image: drinks2 },
    { title: "Cheese Stuffed Garlic Bread", category: "Food", image: food3 },
    { title: "Dumplings", category: "Food", image: food4 },
    { title: "Veg Momos", category: "Food", image: food5 },
    { title: "Potatoe Wedges", category: "Food", image: food6 },
    { title: "Bao", category: "Food", image: Bao },
    { title: "Cheese Sticks", category: "Food", image: CheeseSticks },
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
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl text-center text-primary font-bold mb-6"
        >
          GALLERY
        </motion.h2>

        {/* CATEGORY */}
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
        <motion.div
          key={activeCategory}
          layout
          className="grid md:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {visibleItems.map((item, index) => (
              <motion.div
                key={item.title + index}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                whileHover={{ y: -10 }}
                className="relative cursor-pointer overflow-hidden rounded-lg aspect-[4/3] group"
                onClick={() => setSelectedImage(item)}
              >
                {/* BLUR LOADING IMAGE */}
                <BlurImage src={item.image} alt={item.title} />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-end p-4 transition">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition">
                    <p className="text-primary text-sm">{item.category}</p>
                    <h3 className="text-white font-bold">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* VIEW MORE */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 bg-primary text-black rounded-full font-bold"
          >
            {showAll ? "VIEW LESS" : "VIEW MORE"}
          </button>
        </div>

      </div>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.img
              src={selectedImage.image}
              alt=""
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-h-[90vh] rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* 🔥 BLUR IMAGE COMPONENT */
function BlurImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      className={`w-full h-full object-cover transition-all duration-700 ${
        loaded ? "blur-0 scale-100" : "blur-md scale-110"
      }`}
    />
  );
}