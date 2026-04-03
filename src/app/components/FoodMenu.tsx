import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Flame, Leaf, Star } from 'lucide-react';

export function FoodMenu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'momos', name: 'Momos Fried & Steam' },
    { id: 'noodles', name: 'Bread & Noodles' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Drinks' },
  ];

  const menuItems = {
    appetizers: [
      { name: 'French Fries', price: '₹12', description: 'Crispy Fries with signature sauce', vegetarian: true },
      { name: 'Peri Peri Fries', price: '₹12', description: 'Crispy Fries with signature sauce', spicy: true, popular: true  },
      { name: 'Cheesy Peri Peri Fries', price: '₹12', description: 'Crispy Fries with signature sauce'},
      { name: 'Cheesy Fries', price: '₹12', description: 'Crispy Fries with signature sauce'},
      { name: 'Loaded Nachos', price: '₹14', description: 'Loaded chips with cheese, jalapeños sauce', popular: true },
      { name: 'Mozzarella Cheese Sticks', price: '₹10', description: 'Golden fried mozzarella with a dip', vegetarian: true },
      { name: 'Onion Rings', price: '₹8', description: 'Crispy onion rings' },
      { name: 'Potatoe Wedges', price: '₹8', description: 'Crispy Wedges' },
      { name: 'Jalapeno Popers', price: '₹8', description: 'Cheesy Jalapeno Popers' },
    ],
    momos: [
      { name: 'Cheesy Chilli Momos', price: '₹28', description: '12oz ribeye with garlic butter', popular: true },
      { name: 'Peri Peri Cheesy Chilli Momos', price: '₹28', description: '12oz ribeye with garlic butter', popular: true },
      { name: 'Paneer Momos', price: '₹28', description: '12oz ribeye with garlic butter', popular: true },
      { name: 'Peri Peri Paneer Momos', price: '₹28', description: '12oz ribeye with garlic butter', popular: true },
      { name: 'Veg Momos', price: '₹24', description: 'Slow-cooked ribs with house BBQ sauce' },
      { name: 'Dumplings', price: '₹18', description: 'Steamed' },
      { name: 'Veggie Bowl', price: '₹16', description: 'Quinoa, roasted vegetables & tahini', vegetarian: true },
    ],
    noodles: [
      { name: 'Maggie', price: '₹16', description: 'For Simple Maggie Lover', popular: true },
      { name: 'Spicy Chessy Maggie', price: '₹15', description: 'Spicy Touch with Cheese', spicy: true },
      { name: 'Veg Spicy Korean Noodles', price: '₹14', description: 'House-made patty with avocado', vegetarian: true },
      { name: 'Bao', price: '₹13', description: 'Bao Stuffing that you wont Forget' },
      { name: 'Stuffed Garlic Bread', price: '₹13', description: 'Stuffed Garlic Bread Cheese and Corn' },
    ],
    desserts: [
      { name: 'Chocolate Lava Cake', price: '₹9', description: 'Warm chocolate cake with vanilla ice cream', popular: true },
      { name: 'Fudge', price: '₹8', description: 'Dessert that completes your incomplete mood' },
      { name: 'Ice Cream Sundae', price: '₹6', description: 'Three scoops with toppings' },
    ],
    drinks: [
      { name: 'Cold Coffee', price: '₹7', description: 'Rotating local and imported beers',popular: true  },
      { name: 'Lemonade', price: '₹12', description: 'House-crafted cocktails', popular: true },
      { name: 'BlueBerry Lemonade', price: '₹5', description: 'Freshly squeezed lemonade' },
      { name: 'Hot Choclate', price: '₹5', description: 'Refreshing Hot Choclate' },
      { name: 'Tea', price: '₹5', description: 'Lemongrass Ginger Flavoured Special Tea' },
      { name: 'Coffee', price: '₹5', description: 'Coffee that you love' },
      { name: 'Americano', price: '₹5', description: 'Espresso, cappuccino, latte' },
      { name: 'Orange Americano', price: '₹5', description: 'Americano with Orange pulpy touch' },
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
              className={`px-6 py-3 rounded-full transition-all duration-300 ₹{
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
        </motion.div>
      </div>
    </section>
  );
}
