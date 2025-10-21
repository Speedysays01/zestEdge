// src/components/Why.jsx
import { motion } from "framer-motion";
import why from '../assets/logo.png'

export default function Why() {
  const points = [
    "29+ years of hands-on hospitality leadership",
    "Expertise across India & the Middle East",
    "Strategic + operational consulting under one roof",
    "Trusted by brands, chefs, and entrepreneurs",
    "Legacy-driven, future-ready approach",
  ];

  return (
    <section className="py-16 bg-brand-bg" id="why">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="grid md:grid-cols-2 gap-10 items-center ml-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Why ZestEdge?</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              {points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2"
                >
                  <span className="text-emerald-600 text-xl">✔</span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
  src={why}
  alt="Why ZestEdge"
  className="rounded-2xl shadow-lg w-3/4 mx-auto object-cover"
/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
