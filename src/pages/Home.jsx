import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import hero from "../assets/latest.mp4";
import { Link } from "react-router-dom";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // 👈 slow motion
    }
  }, []);

  return (
    <section className="pt-20 pb-16 bg-brand-bg">
      <div className="max-w-7xl mx-auto mt-[3rem] px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left: Video */}
        <div className="w-full">
          <video
            ref={videoRef}
            src={hero}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>

        {/* Right: Content with animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-heading text-brand-text leading-tight">
            Crafting Hospitality with Purpose.
          </h1>
          <p className="mt-4 text-lg text-gray-700 font-body">
            From cafés to cloud kitchens, we bring your F&amp;B vision to life – 
            with strategy, precision, and heart.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#services"
              className="px-6 py-3 bg-brand-text text-white rounded-2xl shadow-md hover:opacity-90 transition font-body"
            >
              Explore Our Services
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-brand-text text-brand-text rounded-2xl hover:bg-brand-text hover:text-white transition font-body"
            >
              Book a Consultation
            </a>
            <Link
              to={"/budget-calculator"}
              className="px-6 py-3 border-2 border-brand-text text-brand-text rounded-2xl hover:bg-brand-text hover:text-white transition font-body"
            >
              Budget Calculator
            </Link>
            <a
              href="/ZestEdge_Brochure.pdf" // 👈 Replace with your actual brochure file path
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-brand-text text-white rounded-2xl shadow-md hover:opacity-90 transition font-body"
            >
              Download Brochure
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
