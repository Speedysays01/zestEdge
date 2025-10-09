import { motion } from "framer-motion";
import { useState } from "react";
import chef1 from "../assets/parag.jpg"; // Vikram
import chef2 from "../assets/vikram.png"; // Parag

const CulinaryCollabs = () => {
  const [showVikramFull, setShowVikramFull] = useState(false);
  const [showParagFull, setShowParagFull] = useState(false);

  return (
    <section id="culinary-collabs" className="min-h-screen bg-white flex items-center py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading text-center text-brand-text mb-10"
        >
          Culinary Collaborators
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-[70vh]">

  {/* Chef Parag */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-brand-bg rounded-2xl shadow-lg flex flex-col md:flex-row items-center overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
          >
            {/* Image */}
            <div className="w-full md:w-[45%] h-48 md:h-full">
              <img
                src={chef1}
                alt="Chef Parag Kapile"
                className="w-full h-full object-cover rounded-t-2xl md:rounded-none md:rounded-l-2xl"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-[55%] p-5 md:p-6 flex flex-col justify-center text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-heading text-brand-text mb-1">
                Chef Parag Kapile
              </h3>
              <p className="text-sm md:text-base font-semibold text-gray-700 mb-3">
                Culinary Strategist &amp; Educator – ZestEdge | Founder, Tarka Dining
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base font-body">
                {showParagFull ? (
                  <>
                    Chef Parag brings 22 years of global experience spanning luxury hotels, cruise lines, and fine dining across continents. As founder of Tarka Dining, he pioneers immersive, globally inspired Indian cuisine experiences and leads culinary innovation, education, and concept development for ZestEdge Hospitality.
                  </>
                ) : (
                  <>
                    With 22+ years of global hospitality experience, Chef Parag leads innovation and education at ZestEdge, blending authentic Indian flavors with modern culinary artistry.
                  </>
                )}
              </p>

              <button
                onClick={() => setShowParagFull(!showParagFull)}
                className="mt-2 text-brand-text text-sm font-semibold hover:underline"
              >
                {showParagFull ? "Read Less" : "Read More"}
              </button>
            </div>
          </motion.div>





          {/* Chef Vikram */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-brand-bg rounded-2xl shadow-lg flex flex-col md:flex-row items-center overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
          >
            {/* Image */}
            <div className="w-full md:w-[45%] h-48 md:h-full">
              <img
                src={chef2}
                alt="Chef Vikram Singh Negi"
                className="w-full h-full object-cover rounded-t-2xl md:rounded-none md:rounded-l-2xl"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-[55%] p-5 md:p-6 flex flex-col justify-center text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-heading text-brand-text mb-1">
                Chef Vikram Singh Negi
              </h3>
              <p className="text-sm md:text-base font-semibold text-gray-700 mb-3">
                Culinary Strategist &amp; Kitchen Operations Mentor – ZestEdge Hospitality
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base font-body">
                {showVikramFull ? (
                  <>
                    With over 25 years of leadership across India, the UK, Europe, and the Middle East, Chef Vikram brings unmatched depth in kitchen operations, food safety, and menu engineering. He’s led large culinary teams, driven food cost efficiency, and trained hundreds in kitchen optimization, hygiene, and recipe design — guiding owners to build resilient, profitable, and sustainable operations.
                  </>
                ) : (
                  <>
                    With 25+ years of global experience, Chef Vikram specializes in kitchen operations, food safety, and menu engineering — helping hospitality ventures achieve precision and profitability.
                  </>
                )}
              </p>

              <button
                onClick={() => setShowVikramFull(!showVikramFull)}
                className="mt-2 text-brand-text text-sm font-semibold hover:underline"
              >
                {showVikramFull ? "Read Less" : "Read More"}
              </button>
            </div>
          </motion.div>

        
        </div>
      </div>
    </section>
  );
};

export default CulinaryCollabs;
