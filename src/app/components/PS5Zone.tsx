import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Gamepad2, Monitor, Users, Wifi, Trophy, Zap, Crown, Star } from 'lucide-react';

export function PS5Zone() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const setups = [
    {
      name: 'Premium Station',
      screen: '65"',
      screenSize: '65 Inch 4K Display',
      features: [
        'PlayStation 5 Console',
        '4K HDR Gaming',
        'Premium Sound System',
        'Dual Controllers',
        'Comfortable Gaming Chairs',
        'Private Gaming Booth',
      ],
      price: '$30',
      duration: 'per hour',
      popular: true,
    },
    {
      name: 'Standard Station',
      screen: '55"',
      screenSize: '55 Inch 4K Display',
      features: [
        'PlayStation 5 Console',
        '4K Gaming Experience',
        'Quality Audio',
        'Dual Controllers',
        'Gaming Chairs',
        'Semi-Private Area',
      ],
      price: '$20',
      duration: 'per hour',
    },
  ];

  const features = [
    {
      icon: Gamepad2,
      title: 'Latest Games',
      description: 'Access to popular PS5 titles',
    },
    {
      icon: Users,
      title: 'Multiplayer Ready',
      description: 'Play with friends locally',
    },
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Seamless online gaming',
    },
    {
      icon: Trophy,
      title: 'Tournament Events',
      description: 'Regular gaming competitions',
    },
  ];

  return (
    <section
      id="ps5zone"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-black via-secondary/20 to-black relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          rotate: [90, 0, 90],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"
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
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
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
            PS5 GAMING ZONE
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
          Experience next-generation gaming on our premium PlayStation 5 setups.
          Immerse yourself in stunning 4K graphics on massive screens with crystal-clear audio.
          Perfect for solo gaming or multiplayer sessions with friends.
        </motion.p>

        {/* Gaming Stations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {setups.map((setup, index) => (
            <motion.div
              key={setup.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`relative bg-card border rounded-xl p-8 ${
                setup.popular
                  ? 'border-primary shadow-xl shadow-primary/20'
                  : 'border-primary/20 hover:border-primary/50'
              } transition-all duration-300`}
            >
              {setup.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-black px-6 py-1 rounded-full text-sm flex items-center gap-2"
                  style={{ fontWeight: 'bold' }}
                >
                  <Crown className="w-4 h-4" />
                  MOST POPULAR
                </motion.div>
              )}

              {/* Screen Size Badge */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 0 0px rgba(255, 215, 0, 0.3)',
                    '0 0 20px rgba(255, 215, 0, 0.5)',
                    '0 0 0px rgba(255, 215, 0, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-6"
              >
                <Monitor className="w-6 h-6 text-primary" />
                <span className="text-primary text-2xl" style={{ fontWeight: 'bold' }}>
                  {setup.screen}
                </span>
              </motion.div>

              <h3 className="text-primary mb-2" style={{ fontWeight: 'bold' }}>
                {setup.name}
              </h3>
              <p className="text-muted-foreground mb-4">{setup.screenSize}</p>

              <div className="mb-6">
                <motion.span
                  animate={setup.popular ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl text-primary"
                  style={{ fontWeight: 'bold' }}
                >
                  {setup.price}
                </motion.span>
                <span className="text-muted-foreground">/{setup.duration}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {setup.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.2 + i * 0.05 }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                    >
                      <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                    </motion.div>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-full transition-all duration-300 ${
                  setup.popular
                    ? 'bg-primary text-black'
                    : 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-black'
                }`}
                style={{ fontWeight: 'bold' }}
              >
                RESERVE NOW
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: 'spring' }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-card border border-primary/20 rounded-lg p-6 text-center group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
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

        {/* Game Library Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gradient-to-r from-card via-primary/5 to-card border border-primary/20 rounded-xl p-8 text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Star className="w-8 h-8 text-primary fill-primary" />
            <h3 className="text-primary text-xl md:text-2xl" style={{ fontWeight: 'bold' }}>
              EXTENSIVE GAME LIBRARY
            </h3>
            <Star className="w-8 h-8 text-primary fill-primary" />
          </motion.div>
          <p className="text-muted-foreground mb-4 max-w-3xl mx-auto">
            Access a vast collection of the latest PS5 games including action, sports, racing, and adventure titles.
            From FIFA and NBA 2K to Call of Duty and Spider-Man, we've got all the hits!
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {['FIFA', 'COD', 'NBA 2K', 'Spider-Man', 'God of War', 'Gran Turismo'].map((game, i) => (
              <motion.span
                key={game}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1.4 + i * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm"
              >
                {game}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Special Offers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {[
            { label: 'Happy Hour', detail: '50% Off 2-5 PM Weekdays' },
            { label: 'Group Package', detail: '4+ Hours Get 20% Off' },
            { label: 'Weekend Special', detail: 'Book Both Stations & Save' },
          ].map((offer, index) => (
            <motion.div
              key={offer.label}
              initial={{ opacity: 0, x: index === 0 ? -50 : index === 2 ? 50 : 0, y: 50 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card border border-primary/20 rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                className="text-primary mb-2"
                style={{ fontWeight: 'bold' }}
              >
                {offer.label}
              </motion.div>
              <p className="text-muted-foreground text-sm">{offer.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
