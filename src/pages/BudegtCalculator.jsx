import { motion } from "framer-motion";
import cafe from "../assets/cafe.jpg";
import restaurant from "../assets/restaurant.jpg";
import kiosk from "../assets/kiosk.png";
import lounge from "../assets/central.jpg";
import cloud from "../assets/cloud.jpg";
import qsr from "../assets/qsr.png";
import central from "../assets/central.png"; // placeholder, replace later
import Footer from "../components/Foooter";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BudgetCalculator = () => {
  const cards = [
    {
      title: "A CAFE",
      img: cafe,
      desc: "Approximate budget of ₹25 Lakhs onwards with minimum space of 900 sq.ft.",
    },
    {
      title: "A RESTAURANT",
      img: restaurant,
      desc: "Approximate budget of ₹40 Lakhs onwards with minimum space of 1000 sq.ft.",
    },
    {
      title: "KIOSK",
      img: kiosk,
      desc: "Approximate budget of ₹12 Lakhs onwards with minimum space of 200 sq.ft.",
    },
    {
      title: "A LOUNGE BAR",
      img: lounge,
      desc: "Approximate budget of ₹2 Crore onwards with minimum space of 2500 sq.ft.",
    },
    {
      title: "A CLOUD KITCHEN",
      img: cloud,
      desc: "Approximate budget of ₹15 Lakhs onwards with minimum space of 400 sq.ft.",
    },
    {
      title: "QSR CHAINS",
      img: qsr,
      desc: "Each chain with an approximate budget of ₹25 Lakhs onwards with minimum space of 600 sq.ft.",
    },
    {
      title: "CENTRAL KITCHEN",
      img: central,
      desc: "Approximate budget of ₹15 Lakhs onwards with minimum space of 900 sq.ft.",
    },
  ];

  return (
    <>
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20 overflow-x-hidden mt-8 text-justify">
        <Link
  to="/"
  className="flex items-center gap-2 px-4 py-2 text-gray-800 border border-gray-400 rounded-full 
             hover:bg-gray-100 transition-all duration-200 
             sticky top-12 ml-auto w-fit mr-4"
>
  <ArrowLeft className="w-4 h-4" />
  Home
</Link>

      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-heading text-brand-text mb-6"
        >
          Budget Calculator
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-gray-700 font-body text-base md:text-lg leading-relaxed mb-8 text-justify"
        >
          Our prospective clients are entrepreneurs or investors eager to start or revamp their food ventures.
          Below is an indicative budget range for different types of F&amp;B establishments. Understanding the
          required investment helps you recognise the value of expert guidance. When a substantial sum is at
          stake, every decision matters. With ZestEdge Hospitality, your venture is planned with precision —
          minimising risks and maximising profitability.
        </motion.p>

        {/* WhatsApp CTA */}
        <motion.a
          href="https://wa.me/8805240524" // 🔁 replace with actual number
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-brand-text text-white font-body px-8 py-3 rounded-2xl shadow-md hover:opacity-90 transition mb-12"
        >
          Chat on WhatsApp
        </motion.a>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-56 object-cover hover:grayscale transition duration-500"
              />
              <div className="p-5">
                <h3 className="text-lg md:text-xl font-heading text-brand-text mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-700 font-body text-sm md:text-base">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default BudgetCalculator;
