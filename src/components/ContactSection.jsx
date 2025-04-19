import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gym-red">Get in Touch</h3>
          <p className="text-gray-300">
            Ready to start your fitness journey? Contact us today!
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FaPhone className="text-gym-red text-xl" />
            <span className="text-gray-300">+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-gym-red text-xl" />
            <span className="text-gray-300">info@bharatfitnessden.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-gym-red text-xl" />
            <span className="text-gray-300">
              123 Fitness Street, Workout District, City - 123456
            </span>
          </div>
        </div>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          <FaWhatsapp className="text-xl" />
          Chat on WhatsApp
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-gym-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gym-red"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-gym-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gym-red"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-300 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full bg-gym-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gym-red"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full bg-gym-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gym-red"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full btn-primary"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactSection;
