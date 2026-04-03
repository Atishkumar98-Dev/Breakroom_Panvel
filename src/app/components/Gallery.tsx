import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Mock gallery images with Unsplash
  const galleryItems = [
    {
      title: 'Premium Pool Tables',
      category: 'Gaming',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop',
    },
    {
      title: 'Gourmet Burgers',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop',
    },
    {
      title: 'Craft Cocktails',
      category: 'Drinks',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=600&fit=crop',
    },
    {
      title: 'Cozy Atmosphere',
      category: 'Venue',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
    },
    {
      title: 'Fresh Appetizers',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1541589456737-dff1db0887e4?w=800&h=600&fit=crop',
    },
    {
      title: 'Night Gaming',
      category: 'Gaming',
      image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&h=600&fit=crop',
    },
  ];

  return (
    <section id="gallery" ref={ref} className="py-20 px-4 bg-black">
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
            GALLERY
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-primary mx-auto"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            Take a glimpse into the Breakroom experience
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative overflow-hidden rounded-lg aspect-[4/3] group cursor-pointer"
            >
              {/* Image */}
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.6 }}
                className="w-full h-full"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: hoveredIndex === index ? 0 : 20,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="text-primary text-sm mb-2">{item.category}</div>
                  <h3 className="text-foreground" style={{ fontWeight: 'bold' }}>
                    {item.title}
                  </h3>
                </motion.div>
              </motion.div>

              {/* Border Animation */}
              <motion.div
                className="absolute inset-0 border-2 border-primary rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 215, 0, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-black rounded-full hover:bg-primary/90 transition-all duration-300"
            style={{ fontWeight: 'bold' }}
          >
            VIEW MORE PHOTOS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
