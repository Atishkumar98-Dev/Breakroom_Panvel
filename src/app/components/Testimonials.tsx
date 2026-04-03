import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";

export function Testimonials() {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    { name: "Rahul Sharma", text: "Best gaming lounge ever! PS5 experience is insane 🔥" },
    { name: "Aman Verma", text: "Pool tables are top class. Feels like a professional arena." },
    { name: "Sneha Patel", text: "Food + gaming combo is perfect. Loved the vibe!" },
    { name: "Rohit Mehta", text: "Amazing vibe, great music & premium setup!" },
  ];

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
                <h4 className="text-primary font-bold">{t.name}</h4>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}