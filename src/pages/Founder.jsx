import { motion } from "framer-motion";

const Founder = () => {
  return (
    <section id="founder" className="py-20 bg-brand-bg space-y-24">
      {/* Founder 1 - Manish */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Image + Intro */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
            <h2 className="text-3xl md:text-4xl font-heading text-brand-text mb-2">
            Manish Khasgiwala
          </h2>
          <p className="text-lg font-body text-gray-700">
            <span className="font-semibold text-brand-text">
              Hospitality Strategist | Culinary Architect | Business Builder
            </span>
          </p>
          <img
            src="/founder.jpg"
            alt="Manish Khasgiwala"
            className="w-72 md:w-80 h-auto rounded-2xl shadow-lg object-cover mb-6"
          />
        
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="space-y-5 text-gray-700 font-body leading-relaxed text-lg">
            <p>
              With a career spanning nearly three decades, Manish Khasgiwala has
              led hospitality operations across India and the Middle East –
              steering luxury resorts, extended stays, business hotels,
              multi-cuisine restaurants, cloud kitchens, and senior living
              formats toward operational excellence. He began his journey as a
              chef, mastering the art of food before evolving into a strategic
              force behind some of the region’s most successful F&amp;B ventures.
            </p>

            <p>
              Manish’s expertise spans the full spectrum of hospitality
              operations: kitchen design and workflow optimization, menu
              engineering, procurement strategy, inventory control, vendor
              management, hygiene compliance, budgeting and P&amp;L oversight.
              He’s a certified expert in configuring POS systems, and has trained
              hundreds of associates in service excellence, food safety, and
              operational finesse.
            </p>

            <p>
              Beyond operations, Manish is a trusted advisor in property
              acquisition, franchise development, and hospitality legal
              frameworks – offering clients a 360° consulting experience. His
              expertise extends beyond dine-in and catering, into formulas and
              calculations for online aggregators like{" "}
              <span className="font-semibold">Zomato</span> and{" "}
              <span className="font-semibold">Swiggy</span>, helping brands
              optimize visibility, promotions, and profitability.
            </p>

            <p>
              Today, through ZestEdge Hospitality, Manish channels his
              experience into building legacy-driven food ventures, mentoring
              future leaders, and crafting brands that blend precision, purpose,
              and passion.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Founder 2 - Rupali */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Info (left) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="order-2 md:order-1"
        >
            <h2 className="text-3xl md:text-4xl font-heading text-brand-text mb-2">
            Rupali Khasgiwala
          </h2>
          <p className="text-lg font-body text-gray-700">
            <span className="font-semibold text-brand-text">
              Entrepreneur | Compliance Strategist | Wellness Advocate
            </span>
          </p>
          <div className="space-y-5 text-gray-700 font-body leading-relaxed text-lg">
            <p>
              Rupali joins ZestEdge Hospitality as a Director, bringing with her
              a strong foundation in healthcare, business operations, and
              customer-centric service. A qualified pharmacist and proprietor of
              a successful pharmacy business, she has built a reputation for
              precision, integrity, and community-focused care.
            </p>

            <p>
              Her entrepreneurial journey reflects a deep understanding of
              compliance, inventory management, and customer engagement – skills
              that translate seamlessly into the hospitality ecosystem.
            </p>

            <p>
              At ZestEdge, she contributes to strategic oversight, governance,
              and operational discipline, while also offering a unique lens on
              wellness integration and guest experience.
            </p>
          </div>
        </motion.div>

        {/* Image + Intro */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2"
        >
          <img
            src="/founder1.jpg"
            alt="Rupali Khasgiwala"
            className="w-72 md:w-80 h-auto rounded-2xl shadow-lg object-cover mb-6"
          />
        
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
