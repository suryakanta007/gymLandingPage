import { motion } from 'framer-motion';
import { FaDumbbell, FaRunning, FaHotTub, FaUserFriends } from 'react-icons/fa';

const facilities = [
  {
    icon: FaDumbbell,
    title: 'Strength Training',
    description: 'State-of-the-art equipment for strength training and muscle building.',
    image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: FaRunning,
    title: 'Cardio Zone',
    description: 'Modern cardio machines for effective cardiovascular workouts.',
    image: 'https://images.pexels.com/photos/4944976/pexels-photo-4944976.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: FaHotTub,
    title: 'Steam Bath',
    description: 'Relaxing steam bath facilities for post-workout recovery.',
    image: 'https://images.pexels.com/photos/7020064/pexels-photo-7020064.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: FaUserFriends,
    title: 'Personal Training',
    description: 'Expert personal trainers to guide your fitness journey.',
    image: 'https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const FacilitiesSection = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {facilities.map((facility, index) => (
        <motion.div
          key={facility.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gym-black rounded-lg overflow-hidden shadow-xl"
        >
          <div className="relative">
            <img
              src={facility.image}
              alt={facility.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gym-black/80" />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <facility.icon className="text-gym-red text-2xl" />
              <h3 className="text-xl font-semibold">{facility.title}</h3>
            </div>
            <p className="text-gray-400">{facility.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FacilitiesSection;
