import { motion } from "framer-motion";
import { useState } from "react";

const Founder = () => {
  // states for read more toggle
  const [showManishFull, setShowManishFull] = useState(false);
  const [showRupaliFull, setShowRupaliFull] = useState(false);

  return (
    <section id="founder" className="py-20 bg-brand-bg text-justify">
       <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading text-center text-brand-text mb-12"
        >
          The Pioneers Behind ZestEdge Hospitality
        </motion.h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        
        {/* Founder 1 */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center lg:text-left"
        >
          <img
            src="/founder.jpg"
            alt="Manish Khasgiwala"
            className="w-72 h-80 object-cover rounded-2xl shadow-lg mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-heading text-brand-text mb-2">
            Manish Khasgiwala
          </h2>
          <p className="text-lg font-body text-gray-700 mb-4">
            <span className="font-semibold text-brand-text">
              Hospitality Strategist | Culinary Architect | Business Builder
            </span>
          </p>

          <p className="text-gray-700 font-body leading-relaxed text-lg text-justify">
            {showManishFull ? (
              <>
                With a career spanning nearly three decades, Manish Khasgiwala has led hospitality operations across India and the Middle East – steering luxury resorts, extended stays, business hotels, multi-cuisine restaurants, cloud kitchens, and senior living formats toward operational excellence. He began his journey as a chef, mastering the art of food before evolving into a strategic force behind some of the region’s most successful F&amp;B ventures. <br /><br />
                His expertise spans the full spectrum of hospitality operations, including kitchen design, menu engineering, vendor management, hygiene compliance, and budgeting. Beyond operations, he’s a trusted advisor in property acquisition, franchise development, and hospitality legal frameworks – offering clients a 360° consulting experience. <br /><br />
                Through ZestEdge Hospitality, Manish channels his experience into building legacy-driven food ventures, mentoring future leaders, and crafting brands that blend precision, purpose, and passion.
              </>
            ) : (
              <>
                With a career spanning nearly three decades, Manish has led operations across India and the Middle East — steering luxury resorts, extended stays, business hotels, and restaurants toward excellence. He began as a chef before evolving into a strategic force behind some of the region’s top F&amp;B ventures.
              </>
            )}
          </p>
          <button
            onClick={() => setShowManishFull(!showManishFull)}
            className="mt-3 text-brand-text font-semibold hover:underline"
          >
            {showManishFull ? "Read Less" : "Read More"}
          </button>
        </motion.div>

        {/* Founder 2 */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center lg:text-left"
        >
          <img
            src="/founder1.jpg"
            alt="Rupali Khasgiwala"
            className="w-72 h-80 object-cover rounded-2xl shadow-lg mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-heading text-brand-text mb-2">
            Rupali Khasgiwala
          </h2>
          <p className="text-lg font-body text-gray-700 mb-4">
            <span className="font-semibold text-brand-text">
              Entrepreneur | Compliance Strategist | Wellness Advocate
            </span>
          </p>

          <p className="text-gray-700 font-body leading-relaxed text-lg text-justify">
            {showRupaliFull ? (
              <>
                Rupali joins ZestEdge Hospitality as a Director, bringing with her a strong foundation in healthcare, business operations, and customer-centric service. A qualified pharmacist and proprietor of a successful pharmacy business, she’s built a reputation for precision and integrity. <br /><br />
                Her entrepreneurial journey reflects deep understanding of compliance, inventory management, and customer engagement – skills that translate seamlessly into hospitality. At ZestEdge, she contributes to strategic oversight, governance, and wellness integration, ensuring every venture blends service with purpose.
              </>
            ) : (
              <>
                Rupali brings a strong foundation in healthcare, operations, and customer-centric service. As a pharmacist and entrepreneur, she’s known for precision, integrity, and community-focused care — values she brings to ZestEdge Hospitality.
              </>
            )}
          </p>
          <button
            onClick={() => setShowRupaliFull(!showRupaliFull)}
            className="mt-3 text-brand-text font-semibold hover:underline"
          >
            {showRupaliFull ? "Read Less" : "Read More"}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
