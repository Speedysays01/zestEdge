import { motion } from "framer-motion"; 
import { useState } from "react";
import partner1 from "../assets/partner1.jpg";
import partner2 from "../assets/partner2.jpg";

const Collab = () => {
  const [showManojFull, setShowManojFull] = useState(false);
  const [showAbhiFull, setShowAbhiFull] = useState(false);

  return (
    <section id="collaborating-partners" className="min-h-screen bg-brand-bg flex items-center py-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading text-center text-brand-text mb-10"
        >
          F&amp;B Service Collaborators
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-[65vh]">
          {/* Partner 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
          >
            {/* Image */}
            <div className="w-full md:w-[45%] h-48 md:h-full flex items-center justify-center">
              <img
                src={partner1}
                alt="Manoj Jaiswal"
                className="w-auto h-full md:w-full md:h-full object-contain md:object-cover object-center mt-2 md:mt-0"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-[55%] p-5 md:p-6 flex flex-col justify-center text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-heading text-brand-text mb-1">
                Manoj Jaiswal
              </h3>
              <p className="text-sm md:text-base font-semibold text-gray-700 mb-3">
                Senior Hospitality Strategist | F&amp;B Operations Specialist
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base font-body">
                {showManojFull ? (
                  <>
                    With two decades of experience across India and the Middle East, Manoj brings deep operational insight and leadership to ZestEdge Hospitality. His journey spans roles in Sarovar Park Plaza, Blue Foods, and Elite Seef Residences, Bahrain.
                  </>
                ) : (
                  <>
                    With two decades of experience across India and the Middle East, Manoj brings deep operational insight and leadership to ZestEdge.
                  </>
                )}
              </p>

              <button
                onClick={() => setShowManojFull(!showManojFull)}
                className="mt-2 text-brand-text text-sm font-semibold hover:underline"
              >
                {showManojFull ? "Read Less" : "Read More"}
              </button>
            </div>
          </motion.div>

          {/* Partner 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
          >
            {/* Image */}
            <div className="w-full md:w-[45%] h-48 md:h-full flex items-center justify-center">
              <img
                src={partner2}
                alt="Abhimanyu Pareek"
                className="w-auto h-full md:w-full md:h-full object-contain md:object-cover object-center mt-2 md:mt-0 "
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-[55%] p-5 md:p-6 flex flex-col justify-center text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-heading text-brand-text mb-1">
                Abhimanyu Pareek
              </h3>
              <p className="text-sm md:text-base font-semibold text-gray-700 mb-3">
                Strategic Growth &amp; Marketing | Digital Outreach
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base font-body">
                {showAbhiFull ? (
                  <>
                    Abhimanyu combines aggregator expertise, digital marketing acumen, and entrepreneurial spirit. Formerly with Zomato, he led expansion and growth strategies across India, driving performance and visibility.
                  </>
                ) : (
                  <>
                    Abhimanyu brings aggregator expertise and digital marketing leadership to ZestEdge Hospitality.
                  </>
                )}
              </p>

              <button
                onClick={() => setShowAbhiFull(!showAbhiFull)}
                className="mt-2 text-brand-text text-sm font-semibold hover:underline"
              >
                {showAbhiFull ? "Read Less" : "Read More"}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Collab;
