// src/pages/ExpansionStrategy.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import exapansion from '../assets/expansion.jpg'

export default function ExpansionStrategy() {
  const points = [
    "Multi-location rollout",
    "Franchisee onboarding",
    "Brand standardization",
    "Investor pitch support",
  ];

  return (
    <section className="py-16 bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/#services"
            className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors"
          >
            ← Back to Services
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Expansion Strategy</h2>
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
              src={expansion}
              alt="Expansion Strategy"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
