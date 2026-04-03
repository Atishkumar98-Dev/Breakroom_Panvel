import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Gamepad2, Trophy, Users, Clock, Zap, Target } from 'lucide-react';

export function PoolSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Trophy,
      title: 'Tournament Ready',
      description: 'Professional tournament-grade tables',
    },
    {
      icon: Users,
      title: 'Group Play',
      description: 'Perfect for team competitions',
    },
    {
      icon: Clock,
      title: 'Hourly Rates',
      description: 'Affordable pricing packages',
    },
    {
      icon: Zap,
      title: 'Premium Equipment',
      description: 'Top-quality cues and accessories',
    },
  ];

  const packages = [
    {
      name: 'Casual Play',
      price: '$15',
      duration: 'per hour',
      features: ['Standard table', 'Cue rental included', 'Chalk & accessories'],
    },
    {
      name: 'Premium Experience',
      price: '$25',
      duration: 'per hour',
      features: ['Premium table', 'Professional cues', 'Private area', 'Priority service'],
      popular: true,
    },
    {
      name: 'Tournament Package',
      price: '$200',
      duration: 'per event',
      features: ['Multiple tables', 'Referee service', 'Live scoring', 'Food & drinks included'],
    },
  ];

  return (
    <section id="games" ref={ref} className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1, rotate: 360 } : {}}
            transition={{ duration: 0.8, type: 'spring' }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6"
          >
            <Gamepad2 className="w-10 h-10 text-primary" />
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl mb-4"
            style={{
              fontWeight: 'bold',
              color: '#FFD700',
              textShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
            }}
          >
            POOL & GAMES
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-primary mx-auto"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Experience the finest pool tables in the city. Our premium tables are maintained to professional standards,
          perfect for casual play or serious competition. Whether you're a beginner or a seasoned pro, we have everything you need.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1, type: 'spring' }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-card border border-primary/20 rounded-lg p-6 text-center group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300"
              >
                <feature.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="mb-2 text-primary text-sm md:text-base" style={{ fontWeight: 'bold' }}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Packages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl text-center mb-12 text-primary" style={{ fontWeight: 'bold' }}>
            PRICING PACKAGES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -15, scale: 1.03 }}
                className={`relative bg-card border rounded-lg p-8 text-center ${
                  pkg.popular
                    ? 'border-primary shadow-lg shadow-primary/20'
                    : 'border-primary/20 hover:border-primary/50'
                } transition-all duration-300`}
              >
                {pkg.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-sm"
                    style={{ fontWeight: 'bold' }}
                  >
                    POPULAR
                  </motion.div>
                )}
                <h4 className="text-primary mb-2" style={{ fontWeight: 'bold' }}>
                  {pkg.name}
                </h4>
                <div className="mb-4">
                  <motion.span
                    animate={pkg.popular ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-4xl text-primary"
                    style={{ fontWeight: 'bold' }}
                  >
                    {pkg.price}
                  </motion.span>
                  <span className="text-muted-foreground text-sm">/{pkg.duration}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 1 + index * 0.1 + i * 0.05 }}
                      className="text-muted-foreground text-sm flex items-center justify-center gap-2"
                    >
                      <Target className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-full transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-primary text-black'
                      : 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-black'
                  }`}
                  style={{ fontWeight: 'bold' }}
                >
                  BOOK NOW
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12 p-6 bg-card border border-primary/20 rounded-lg"
        >
          <p className="text-muted-foreground">
            <strong className="text-primary">Special Events:</strong> Host your tournament or party with us!
            Contact us for custom packages and group discounts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
