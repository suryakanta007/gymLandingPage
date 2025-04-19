import { motion } from 'framer-motion';

const gymInteriorImage = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop';

const AboutSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h3 className="text-2xl font-semibold text-gym-red">Welcome to Bharat Fitness Den</h3>
        <p className="text-gray-300">
          At Bharat Fitness Den, we believe in transforming lives through fitness. Our state-of-the-art
          facility is designed to help you achieve your fitness goals in a motivating and supportive
          environment.
        </p>
        <ul className="list-none space-y-2">
          <li className="flex items-center space-x-2">
            <span className="text-gym-red">✓</span>
            <span>Expert trainers with years of experience</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-gym-red">✓</span>
            <span>Modern equipment and facilities</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-gym-red">✓</span>
            <span>Personalized training programs</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-gym-red">✓</span>
            <span>Supportive community atmosphere</span>
          </li>
        </ul>
        <button className="btn-primary mt-4">Learn More</button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-transparent to-transparent z-10"></div>
        <img
          src={gymInteriorImage}
          alt="Gym Interior"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default AboutSection;
