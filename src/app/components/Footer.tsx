import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  logo: string;
}

export function Footer({ logo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    { icon: MapPin, text: '3rd floor, Trimurti sadan, Plot no-30, Sector - 8, Khanda Colony, New Panvel, Navi Mumbai. 410206' },
    { icon: Phone, text: '+91 91372 94841' },
    { icon: Mail, text: 'breakroom008@gmail.com' },
    { icon: Clock, text: 'Mon-Thurs: 11:00 AM - 11:00 PM' },
    { icon: Clock, text: 'Fri-Sun: 11:00 AM - 1:00 AM' },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/breakroom_08/' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Games', href: '#games' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#' },
    { name: 'Reservations', href: '#' },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-b from-black to-secondary/20 pt-20 pb-8 px-4 border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <motion.img
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              src={logo}
              alt="Breakroom Logo"
              className="w-24 h-24 mb-6"
            />
            <h3 className="text-primary mb-4" style={{ fontWeight: 'bold' }}>
              BREAKROOM
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Where champions are made and memories are created. Join us for an unforgettable experience
              of premium gaming and exceptional dining.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-primary mb-6" style={{ fontWeight: 'bold' }}>
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center group"
                  >
                    <motion.span
                      className="mr-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-primary mb-6" style={{ fontWeight: 'bold' }}>
              CONTACT US
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="flex items-start gap-3 text-muted-foreground group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0"
                  >
                    <info.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-sm group-hover:text-primary transition-colors duration-300">
                    {info.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-primary/20 pt-8 mb-8"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-primary mb-4" style={{ fontWeight: 'bold' }}>
              STAY UPDATED
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for exclusive offers and events
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-input-background rounded-full border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-black rounded-full hover:bg-primary/90 transition-all duration-300"
                style={{ fontWeight: 'bold' }}
              >
                SUBSCRIBE
              </motion.button>
            </div>
          </div>
        </motion.div> */}

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="border-t border-primary/20 pt-8 text-center"
        >
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Breakroom. All rights reserved
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-primary inline-block"
            >
            </motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
