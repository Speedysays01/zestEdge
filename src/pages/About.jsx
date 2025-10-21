import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-justify">
        
        {/* Fancy Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading text-#E2725B mb-8 relative inline-block -mt-4 text-center  "
        >
          About ZestEdge Hospitality
          <span className="absolute -bottom-2 left-1/2 md:left-0 w-16 h-1 bg-brand-text transform -translate-x-1/2 md:translate-x-0"></span>
        </motion.h2>

        {/* Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6 text-lg text-gray-700 font-body leading-relaxed"
        >
          <p>
            ZestEdge Hospitality is a premium consulting firm led by{" "}
            <span className="font-semibold text-brand-text">
              Manish Khasgiwala
            </span>, a hospitality strategist with nearly three decades of
            experience across India and the Middle East. We specialize in
            comprehensive restaurant setup, strategic consulting, and modular
            hospitality formats – each infused with operational excellence,
            brand clarity, and a thoughtful respect for tradition.
          </p>

          <p>
            Our methodology combines timeless design principles with intelligent
            brand architecture, resulting in identities that are emotionally
            engaging, culturally attuned, and built for enduring success. With
            tech-enabled execution at the core, we deliver hospitality solutions
            that are both soulful and smart.
          </p>

          <p>
            From concept development to compliance, from team training to
            aggregator strategy, ZestEdge is your one-stop partner for building
            profitable, future-ready food ventures. Whether you're launching a
            café, scaling a cloud kitchen, acquiring property, or navigating
            franchise and legal frameworks – we guide you every step of the way.
          </p>
        </motion.div>

        {/* Closing Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <p className="text-2xl md:text-3xl font-heading font-semibold text-brand-text italic relative text-center">
            “Your growth, our blueprint. Let’s build something unforgettable.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
