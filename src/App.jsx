import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

import AboutSection from './components/AboutSection';
import FacilitiesSection from './components/FacilitiesSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import PricingSection from './components/PricingSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Facilities', to: 'facilities' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Pricing', to: 'pricing' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-gym-black">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-gym-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gym-red">Bharat Fitness Den</div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                className="nav-link"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gym-black/95 backdrop-blur-sm"
          >
            <div className="container mx-auto px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  className="block py-2 nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 ">
        <div className="absolute inset-0 w-full h-full ">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div className="relative w-full h-full overflow-hidden back bg-custom-radial">
          
          </div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Join Now & Save 20%
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Driven by Passion. Bonded Like Family.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="btn-primary"
          >
            Get Started Today
          </motion.button>
        </div>
      </section>

      {/* Placeholder sections - we'll implement these next */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">About Us</h2>
          <AboutSection />
        </div>
      </section>

      <section id="facilities" className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Facilities</h2>
          <FacilitiesSection />
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Gallery</h2>
          <GallerySection />
        </div>
      </section>

      <section id="testimonials" className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Transformations</h2>
          <TestimonialsSection />
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gym-black">
        <div className="container mx-auto px-4">
          <PricingSection />
        </div>
      </section>

      <section id="contact" className="py-20 bg-gym-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Contact Us</h2>
          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gym-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-white hover:text-gym-red transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-gym-red transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-gym-red transition-colors">
              <FaWhatsapp size={24} />
            </a>
          </div>
          <p className="text-center text-gray-400">
            {new Date().getFullYear()} Bharat Fitness Den. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
