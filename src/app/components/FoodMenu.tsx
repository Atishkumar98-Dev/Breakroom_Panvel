import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Flame, Leaf, Star } from 'lucide-react';

export function FoodMenu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Course' },
    { id: 'burgers', name: 'Burgers & Sandwiches' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Drinks' },
  ];

  const menuItems = {
    appetizers: [
      { name: 'Buffalo Wings', price: '$12', description: 'Crispy wings with signature sauce', spicy: true },
      { name: 'Loaded Nachos', price: '$14', description: 'Tortilla chips with cheese, jalapeños & sour cream', popular: true },
      { name: 'Mozzarella Sticks', price: '$10', description: 'Golden fried mozzarella with marinara', vegetarian: true },
      { name: 'Onion Rings', price: '$8', description: 'Beer-battered crispy onion rings' },
    ],
    mains: [
      { name: 'Grilled Ribeye Steak', price: '$28', description: '12oz ribeye with garlic butter', popular: true },
      { name: 'BBQ Ribs', price: '$24', description: 'Slow-cooked ribs with house BBQ sauce' },
      { name: 'Chicken Alfredo', price: '$18', description: 'Creamy pasta with grilled chicken' },
      { name: 'Veggie Bowl', price: '$16', description: 'Quinoa, roasted vegetables & tahini', vegetarian: true },
    ],
    burgers: [
      { name: 'Breakroom Burger', price: '$16', description: 'Double patty, cheese, bacon & special sauce', popular: true },
      { name: 'Spicy Jalapeño Burger', price: '$15', description: 'Jalapeños, pepper jack & chipotle mayo', spicy: true },
      { name: 'Veggie Burger', price: '$14', description: 'House-made patty with avocado', vegetarian: true },
      { name: 'Club Sandwich', price: '$13', description: 'Triple-decker with turkey, bacon & avocado' },
    ],
    desserts: [
      { name: 'Chocolate Lava Cake', price: '$9', description: 'Warm chocolate cake with vanilla ice cream', popular: true },
      { name: 'Cheesecake', price: '$8', description: 'New York style with berry compote' },
      { name: 'Apple Pie', price: '$7', description: 'Classic apple pie with cinnamon' },
      { name: 'Ice Cream Sundae', price: '$6', description: 'Three scoops with toppings' },
    ],
    drinks: [
      { name: 'Craft Beer Selection', price: '$7', description: 'Rotating local and imported beers' },
      { name: 'Signature Cocktails', price: '$12', description: 'House-crafted cocktails', popular: true },
      { name: 'Fresh Lemonade', price: '$5', description: 'Freshly squeezed lemonade' },
      { name: 'Specialty Coffee', price: '$5', description: 'Espresso, cappuccino, latte' },
    ],
  };

  return (
    <section id="menu" ref={ref} className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-4xl md:text-5xl mb-4"
            style={{
              fontWeight: 'bold',
              color: '#FFD700',
              textShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
            }}
          >
            OUR MENU
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-primary mx-auto"
          />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-black shadow-lg shadow-primary/50'
                  : 'bg-card text-foreground border border-primary/30 hover:border-primary'
              }`}
              style={{ fontWeight: activeCategory === category.id ? 'bold' : 'normal' }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-primary group-hover:text-primary/90" style={{ fontWeight: 'bold' }}>
                      {item.name}
                    </h3>
                    {item.popular && (
                      <motion.div
                        animate={{ rotate: [0, 20, -20, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Star className="w-5 h-5 text-primary fill-primary" />
                      </motion.div>
                    )}
                    {item.spicy && (
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <Flame className="w-5 h-5 text-red-500" />
                      </motion.div>
                    )}
                    {item.vegetarian && (
                      <Leaf className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-primary ml-4"
                  style={{ fontWeight: 'bold' }}
                >
                  {item.price}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            All dishes are prepared fresh to order. Please inform us of any dietary restrictions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 215, 0, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-black rounded-full hover:bg-primary/90 transition-all duration-300"
            style={{ fontWeight: 'bold' }}
          >
            VIEW FULL MENU
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
