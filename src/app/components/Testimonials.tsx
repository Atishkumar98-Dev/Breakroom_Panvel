import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";

export function Testimonials() {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    { name: "Jokshith dsouza", text: "This is the best 8 ball pool near my place in Khanda Colony Panvel. Staff here are so sweet and place here is very clean and has a very good vibe. If anyone is looking for a place to spend time over the weekend to play pool I would highly recommend this place. Their contact number is available on their instagram page." },
    { name: "Satyam Baviskar", text: "Very spacious and comforting place, the service is up to mark and satisfying. Great on the go place to chill with your homies, the food adds the left over kink to the experience. Definitely deserves a try" },
    { name: "Tanvi Raje", text: "Love the place 😄😄 Specially the cold coffee and the vibe ☕☕☕✌️✌️" },
    { name: "Nehal Raje", text: "Must visit place very nice must try cold coffee in beverages " },
    { name: "Manish Shahane", text: "Wonderful experience ❤️" },
    { name: "Krishnendu Nair", text: "One of the bestest place to chill and hangout. The PS 5 setup is very comfortable for long gaming sessions. And the coffee in their cafe is absolutely yummy.😍" },
    { name: "chaitanya", text: "crazy smooth pool table" },
  ];
  
// chaitanya
// Krishnendu Nair

  const loopData = [...testimonials, ...testimonials];

  // 🔥 START ANIMATION
  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      controls.stop(); // ✅ REAL PAUSE
    }
  }, [isPaused, controls]);

  return (
    <section className="py-20 bg-black relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-3xl opacity-20 rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <h2 className="text-center text-4xl text-primary font-bold mb-12">
          TESTIMONIALS
        </h2>

        {/* 🚀 SCROLL AREA */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-6 w-max"
            animate={controls}
          >
            {loopData.map((t, i) => (
              <div
                key={i}
                className="min-w-[300px] max-w-[300px] bg-white/5 border border-primary/20 backdrop-blur-xl rounded-xl p-6 hover:scale-105 transition"
              >
                <p className="text-gray-300 mb-4">"{t.text}"</p>
                <h4 className="text-primary font-bold"> - {t.name}</h4>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}