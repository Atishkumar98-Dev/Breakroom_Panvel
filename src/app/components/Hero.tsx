import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import poolBg from "../img-webp/pool3.webp";

export function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.img
  src={poolBg}
  alt="Pool table background"
  className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
  style={{ opacity: 0.6 }}   // 🔥 was 0.35
  animate={{ scale: [1.1, 1.2, 1.1] }}
  transition={{ duration: 20, repeat: Infinity }}
/>

        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/90 to-primary/30" /> */}

        {/* Glow Effects */}
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-2xl"
        />

        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-2xl"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4"
      >
        {/* BREAKROOM TEXT */}
        <h1 className="logo-text">
  Breakroom
</h1>

        {/* TAGLINE */}
        <p
          className="play-eat-repeat"
          style={{
            fontFamily: "Anton",
            letterSpacing: "4px",
            color: "#ffffff",
            textShadow: "0 0 20px rgba(255, 255, 255, 0.19)"
          }}
        >
          PLAY | EAT | REPEAT
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
          Where great food meets great games. Experience the ultimate blend
          of gourmet cuisine and competitive pool in an atmosphere designed
          for champions.
        </p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToAbout}
          className="mt-12 px-8 py-4 bg-primary text-black rounded-full font-bold tracking-wider"
        >
          EXPLORE MORE
        </motion.button>
      </motion.div>

      {/* Scroll Icon */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <ChevronDown size={36} className="text-primary" />
      </motion.div>
    </section>
  );
}