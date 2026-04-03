import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Utensils, Users, Clock, Trophy } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Utensils,
      title: 'Gourmet Cuisine',
      description: 'Chef-crafted dishes made with premium ingredients',
    },
    {
      icon: Trophy,
      title: 'Premium Pool Tables',
      description: 'Professional-grade tables for the ultimate experience',
    },
    {
      icon: Users,
      title: 'Social Atmosphere',
      description: 'Perfect for groups, events, and gatherings',
    },
    {
      icon: Clock,
      title: 'Open Late',
      description: 'Extended hours for night owls and weekend warriors',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-4 bg-gradient-to-b from-black to-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl mb-4"
            style={{
              fontWeight: 'bold',
              color: '#FFD700',
              textShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
            }}
          >
            ABOUT BREAKROOM
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
          Welcome to Breakroom, where the thrill of competition meets culinary excellence.
          We've created a unique space that combines world-class pool tables with an exceptional
          dining experience. Whether you're here to sink the 8-ball or savor our signature dishes,
          we promise an unforgettable visit.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-card border border-primary/20 rounded-lg p-6 text-center group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300"
              >
                <feature.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="mb-2 text-primary" style={{ fontWeight: 'bold' }}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: '2', label: 'Pool Table and PS5' },
            { number: '30+', label: 'Menu Items' },
            { number: '1000+', label: 'Happy Customers' },
            { number: 'Till Midnight', label: 'Service' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1, type: 'spring' }}
              className="text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className="text-4xl md:text-5xl text-primary mb-2"
                style={{ fontWeight: 'bold' }}
              >
                {stat.number}
              </motion.div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
