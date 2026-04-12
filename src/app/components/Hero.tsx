import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

interface HeroProps {
  logo: string;
}

export function Hero({ logo }: HeroProps) {
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
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-primary/20">

        {/* floating orb 1 */}
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-2xl will-change-transform"
        />

        {/* floating orb 2 */}
        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-2xl will-change-transform"
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          {/* <motion.img
            src={logo}
            alt="Breakroom Logo"
            loading="eager"
            className="w-56 md:w-72 will-change-transform"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          /> */}
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h1
            className="text-5xl md:text-7xl tracking-wider"
            style={{
              fontWeight: "bold",
              color: "#FFD700",
              textShadow: "0 0 15px rgba(255,215,0,0.5)",
            }}
          >
            BREAKROOM
          </h1>

          <p className="text-xl md:text-2xl text-foreground tracking-widest">
            PLAY. EAT. REPEAT.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
            Where great food meets great games. Experience the ultimate blend
            of gourmet cuisine and competitive pool in an atmosphere designed
            for champions.
          </p>
        </motion.div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToAbout}
          className="mt-12 px-8 py-4 bg-primary text-black rounded-full tracking-wider hover:bg-primary/90 transition-all duration-300 font-bold"
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