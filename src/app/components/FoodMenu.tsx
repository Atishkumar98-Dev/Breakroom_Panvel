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
    { id: 'dips', name: 'Dips & Sauces' },
    { id: 'drinks', name: 'Drinks' },
  ];

  const menuItems = {
    appetizers: [
      { name: 'French Fries', price: '₹119', description: 'Golden crispy fries seasoned to perfection, served with our signature dip', vegetarian: true },
      { name: 'Peri Peri Fries', price: '₹129', description: 'Crispy fries tossed in bold peri peri seasoning for a spicy kick', spicy: true, popular: true },
      { name: 'Cheesy Peri Peri Fries', price: '₹149', description: 'Loaded fries with melted cheese and spicy peri peri glaze' },
      { name: 'Cheesy Fries', price: '₹139', description: 'Hot crispy fries topped with rich, creamy melted cheese' },
      { name: 'Loaded Nachos', price: '₹79', description: 'Crunchy nachos layered with cheese, tangy jalapeños & zesty sauces', popular: true },
      { name: 'Mozzarella Cheese Sticks', price: '₹189', description: 'Crispy coated mozzarella sticks with a gooey cheesy center', vegetarian: true },
      { name: 'Potatoe Wedges', price: '₹129', description: 'Thick-cut potato wedges, crisp outside and fluffy inside' },
      { name: 'Jalapeno Popers', price: '₹179', description: 'Cheese-filled jalapeños coated and fried to golden perfection' },
    ],

    momos: [
      { name: 'Cheesy Chilli Momos', price: '₹159', description: 'Soft dumplings tossed in spicy chilli sauce with a cheesy twist', popular: true },
      { name: 'Peri Peri Cheesy Chilli Momos', price: '₹169', description: 'Flavor-packed momos coated in fiery peri peri and melted cheese', popular: true },
      { name: 'Paneer Momos', price: '₹149', description: 'Delicate dumplings filled with seasoned paneer and aromatic spices', popular: true },
      { name: 'Peri Peri Paneer Momos', price: '₹159', description: 'Paneer-filled momos tossed in bold peri peri flavors', popular: true },
      { name: 'Veg Momos', price: '₹139', description: 'Steamed dumplings stuffed with finely seasoned vegetables' },
      { name: 'Veg Peri Peri Momos', price: '₹139', description: 'Veggie-filled momos with a spicy peri peri punch' },
      { name: 'Dumplings', price: '₹159', description: 'Soft steamed dumplings served hot with flavorful dipping sauce' },
      { name: 'Veggie Bowl', price: '₹160', description: 'A wholesome mix of veggies, grains & flavorful dressing', vegetarian: true },
    ],

    dips: [
      { name: 'Mayonise', price: '₹29', description: 'Creamy classic mayo dip', vegetarian: true },
      { name: 'Chipotle', price: '₹29', description: 'Smoky chipotle dip with a spicy twist', vegetarian: true },
      { name: 'Cheese Dip', price: '₹39', description: 'Rich and creamy cheese sauce', vegetarian: true },
    ],

    noodles: [
      { name: 'Maggie', price: '₹49', description: 'Classic comfort noodles cooked with our signature masala touch', popular: true },
      { name: 'Double Masala Maggie', price: '₹59', description: 'Extra masala-loaded noodles for a richer, bolder taste', popular: true },
      { name: 'Spicy Chessy Noodles', price: '₹80', description: 'Hot noodles tossed in spicy sauce with creamy melted cheese', spicy: true },
      { name: 'Veg Spicy Korean Noodles', price: '₹89', description: 'Korean-style noodles with bold spices and veggie crunch', vegetarian: true },
      { name: 'Bao', price: '₹199', description: 'Soft fluffy bao stuffed with flavorful fillings you’ll love' },
      { name: 'Stuffed Garlic Bread', price: '₹149', description: 'Buttery garlic bread loaded with cheese and sweet corn filling' },
    ],

    desserts: [
      { name: 'Chocolate Lava Cake', price: '₹69', description: 'Warm chocolate cake with a rich molten center', popular: true },
      { name: 'Fudge', price: '₹79', description: 'Smooth, rich chocolate fudge for a perfect sweet finish' },
    ],

    drinks: [
      { name: 'Tea', price: '₹29', description: 'Refreshing tea infused with aromatic flavors' },
      { name: 'Lemon Tea', price: '₹39', description: 'Light and zesty lemon-infused tea' },
      { name: 'Coffee', price: '₹49', description: 'Freshly brewed coffee with a bold aroma' },
      { name: 'Hot Choclate', price: '₹109', description: 'Rich and creamy hot chocolate' },
      { name: 'Cold Coffee', price: '₹109', description: 'Chilled coffee blended to smooth perfection', popular: true },
      { name: 'Lemonade', price: '₹40', description: 'Refreshing classic lemonade', popular: true },
      { name: 'BlueBerry Lemonade', price: '₹90', description: 'Fruity blueberry twist on refreshing lemonade' },
      { name: 'Americano', price: '₹99', description: 'Smooth espresso diluted for a rich coffee experience' },
      { name: 'Orange Coffee', price: '₹139', description: 'A unique blend of coffee with a citrusy orange twist' },
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
                    <h3 className="text-primary group-hover:text-primary/90 font-bold">
                      {item.name}
                    </h3>

                    {item.popular && (
                      <motion.div animate={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                        <Star className="w-5 h-5 text-primary fill-primary" />
                      </motion.div>
                    )}

                    {item.spicy && (
                      <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                        <Flame className="w-5 h-5 text-red-500" />
                      </motion.div>
                    )}

                    {item.vegetarian && <Leaf className="w-5 h-5 text-green-500" />}
                  </div>

                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>

                <motion.div whileHover={{ scale: 1.1 }} className="text-primary ml-4 font-bold">
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