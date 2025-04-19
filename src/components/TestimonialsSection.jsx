import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Rahul Sharma',
    before: 'https://images.pexels.com/photos/4854272/pexels-photo-4854272.jpeg?auto=compress&cs=tinysrgb&w=600',
    after: 'https://images.pexels.com/photos/4854272/pexels-photo-4854272.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'Lost 20kg in 6 months! The trainers here are amazing and supportive.',
    duration: '6 months'
  },
  {
    name: 'Priya Patel',
    before: 'https://images.pexels.com/photos/4853677/pexels-photo-4853677.jpeg?auto=compress&cs=tinysrgb&w=600',
    after: 'https://images.pexels.com/photos/4853677/pexels-photo-4853677.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'Gained confidence and strength. Best decision of my life!',
    duration: '4 months'
  },
  {
    name: 'Amit Kumar',
    before: 'https://images.pexels.com/photos/4853675/pexels-photo-4853675.jpeg?auto=compress&cs=tinysrgb&w=600',
    after: 'https://images.pexels.com/photos/4853675/pexels-photo-4853675.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'The personalized training program helped me achieve my goals faster.',
    duration: '8 months'
  }
];

const TestimonialsSection = () => {
  return (
    <div className="space-y-12">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="bg-gym-black rounded-lg overflow-hidden shadow-xl"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            <div className="flex gap-4">
              <div className="w-1/2">
                <img
                  src={testimonial.before}
                  alt={`${testimonial.name} Before`}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-center mt-2 text-gray-400">Before</p>
              </div>
              <div className="w-1/2">
                <img
                  src={testimonial.after}
                  alt={`${testimonial.name} After`}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-center mt-2 text-gray-400">After</p>
              </div>
            </div>
            
            <div className="lg:col-span-2 flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-semibold text-gym-red">{testimonial.name}</h3>
              <p className="text-gray-300 text-lg italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-2">
                <span className="text-gym-red">Transformation Time:</span>
                <span className="text-gray-300">{testimonial.duration}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TestimonialsSection;
