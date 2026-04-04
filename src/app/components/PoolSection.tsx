import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Gamepad2, Trophy, Users, Clock, Zap, Target } from "lucide-react";

export function PoolSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  /* 🔥 UPDATED PRICING LOGIC */
  const getPricing = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday
    const hour = now.getHours();

    const isWeekend = day === 0 || day === 6;

    // Weekday before 5 PM
    if (!isWeekend && hour < 17) {
      return {
        half: 120,
        full: 200,
        label: "Weekday Offer (Before 5 PM)",
      };
    }

    // Weekend before 2 PM
    if (isWeekend && hour < 14) {
      return {
        half: 120,
        full: 200,
        label: "Weekend Offer (Before 2 PM)",
      };
    }

    // Default pricing
    return {
      half: 150,
      full: 250,
      label: "Regular Pricing",
    };
  };

  const pricing = getPricing();

  const features = [
    { icon: Trophy, title: "Tournament Ready", description: "Professional tables" },
    { icon: Users, title: "Group Play", description: "Perfect for teams" },
    { icon: Clock, title: "Hourly Rates", description: "Flexible pricing" },
    { icon: Zap, title: "Premium Equipment", description: "Top-quality cues" },
  ];

  const packages = [
    {
      name: "Starter Cue",
      price: "₹1999",
      duration: "Monthly",
      features: ["Standard table", "Cue rental", "Accessories"],
    },
    {
      name: "Premium Experience",
      price: "₹3500",
      duration: "Monthly",
      features: ["Premium table", "Private area", "Priority service"],
      popular: true,
    },
    {
      name: "Tournament Package",
      price: "₹6500",
      duration: "Per Event",
      features: ["Multiple tables", "Referee", "Live scoring"],
    },
  ];

  return (
    <section
      id="games"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-black relative overflow-hidden"
    >
      {/* 🔥 Glow Background */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"
      />

      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 🔥 TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1, rotate: 360 } : {}}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6"
          >
            <Gamepad2 className="w-10 h-10 text-primary" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            POOL ZONE
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            className="w-24 h-1 bg-primary mx-auto mt-3"
          />
        </motion.div>

        {/* DESCRIPTION */}
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          Experience the finest pool tables with premium equipment and pro-level gameplay.
        </p>

        {/* 🔥 PRICING SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-20 text-center"
        >
          <h3 className="text-3xl text-primary font-bold mb-4">
            HOURLY PRICING
          </h3>

          <p className="text-primary mb-2 font-semibold">
            {pricing.label}
          </p>

          <p className="text-sm text-gray-400 mb-6">
            💡 Weekday before 5 PM & Weekend before 2 PM get discounted pricing
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">

            {/* HALF */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl border border-primary/30 bg-white/5 backdrop-blur-lg"
            >
              <h4 className="text-primary font-bold mb-2">30 Minutes</h4>
              <p className="text-4xl text-primary font-bold">
                ₹{pricing.half}
              </p>
            </motion.div>

            {/* FULL */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl border border-primary/30 bg-white/5 backdrop-blur-lg"
            >
              <h4 className="text-primary font-bold mb-2">1 Hour</h4>
              <p className="text-4xl text-primary font-bold">
                ₹{pricing.full}
              </p>
            </motion.div>

          </div>
        </motion.div>

        {/* FEATURES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-6 text-center border border-primary/20 rounded-lg bg-white/5"
            >
              <f.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="text-primary font-bold">{f.title}</h4>
              <p className="text-gray-400 text-sm">{f.description}</p>
            </motion.div>
          ))}
        </div>

        {/* PACKAGES */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`p-6 text-center rounded-xl border ${
                pkg.popular
                  ? "border-primary shadow-lg shadow-primary/30"
                  : "border-primary/20"
              }`}
            >
              {pkg.popular && (
                <div className="mb-2 text-sm bg-primary text-black px-3 py-1 rounded-full inline-block">
                  POPULAR
                </div>
              )}

              <h4 className="text-primary font-bold">{pkg.name}</h4>

              <p className="text-3xl text-primary font-bold my-3">
                {pkg.price}
              </p>

              <ul className="mb-4 text-gray-400 text-sm">
                {pkg.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>

              <button className="px-5 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-black transition">
                BOOK NOW
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}