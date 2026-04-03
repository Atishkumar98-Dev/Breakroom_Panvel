import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, Utensils, Users, Clock, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FoodMenu } from './components/FoodMenu';
import { PoolSection } from './components/PoolSection';
import { PS5Zone } from './components/PS5Zone';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';


export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Navigation isScrolled={isScrolled} logo={logo} />
      <Hero logo={logo} />
      <About />
      <FoodMenu />
      <PoolSection />
      <PS5Zone />
      <Testimonials />
      <Gallery />
      <Footer logo={logo} />
    </div>
  );
}
