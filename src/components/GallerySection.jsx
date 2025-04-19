import { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  { 
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48', 
    title: 'Main Training Area' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c', 
    title: 'Cardio Section' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712', 
    title: 'Weight Area' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f', 
    title: 'DeadLift and Squat Area' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f', 
    title: 'Functional Training' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1561214078-f3247647fc5e', 
    title: 'Leg Area' 
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.url}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">{image.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
