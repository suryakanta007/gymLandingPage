import { motion } from 'framer-motion';
import { useState } from 'react';

const pricingPlans = [
  {
    duration: '1 Month',
    price: '₹1,499',
    features: [
      'Access to gym facilities',
      'Basic workout plan',
      'Locker access',
      'Free fitness consultation'
    ]
  },
  {
    duration: '3 Months',
    price: '₹3,999',
    features: [
      'All 1-month features',
      'Personal training session (2x)',
      '10% off on supplements',
      'Access to group classes'
    ],
    popular: true
  },
  {
    duration: '6 Months',
    price: '₹6,999',
    features: [
      'All 3-month features',
      'Personal training session (4x)',
      '15% off on supplements',
      'Nutrition consultation'
    ]
  },
  {
    duration: '1 Year',
    price: '₹11,999',
    features: [
      'All 6-month features',
      'Personal training session (8x)',
      '20% off on supplements',
      'Monthly body assessment'
    ]
  }
];

const faqs = [
  {
    question: 'What are your operating hours?',
    answer: 'We are open 7 days a week from 5:30 AM to 10:30 PM. On public holidays, timings may vary.'
  },
  {
    question: 'Do you provide personal trainers?',
    answer: 'Yes, we have certified personal trainers available. You can book sessions based on your membership plan.'
  },
  {
    question: 'Can I freeze my membership?',
    answer: 'Yes, you can freeze your membership for up to 30 days per year with valid reason.'
  },
  {
    question: 'What amenities do you provide?',
    answer: 'We provide lockers, changing rooms, showers, towel service, and a supplement store.'
  }
];

const PricingSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="space-y-16">
      {/* Pricing Plans */}
      <div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Choose Your Plan
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.duration}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 rounded-xl ${
                plan.popular 
                  ? 'bg-gym-red text-white border-2 border-white' 
                  : 'bg-gym-black text-gray-300'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-gym-red px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold mb-4">{plan.duration}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2 rounded-lg transition-colors ${
                plan.popular 
                  ? 'bg-white text-gym-red hover:bg-gray-100' 
                  : 'bg-gym-red text-white hover:bg-red-600'
              }`}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gym-black rounded-lg overflow-hidden"
            >
              <button
                className="w-full p-4 text-left flex justify-between items-center"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span className={`transform transition-transform ${
                  openFaq === index ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              {openFaq === index && (
                <div className="p-4 pt-0 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
