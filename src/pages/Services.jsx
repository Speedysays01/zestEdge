// src/components/Services.jsx
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import setup from '../assets/setup.jpg';
import strategy from '../assets/strategy.jpg';
import turnaround from '../assets/turnaround.jpg';
import expansion from '../assets/expansion.jpg';
import custom from '../assets/custom.jpg';

const services = [
  {
    id: 1,
    title: "Setup & Launch",
    // icon: "🏗️",
    image: setup,
    link: "/services/setup",
  },
  {
    id: 2,
    title: "Strategic Consulting",
    // icon: "📈",
    image: strategy,
    link: "/services/strategic",
  },
  {
    id: 3,
    title: "Turnaround Consulting",
    // icon: "🔧",
    image: turnaround,
    link: "/services/turnaround",
  },
  {
    id: 4,
    title: "Expansion Strategy",
    // icon: "🌐",
    image: expansion,
    link: "/services/expansion",
  },
  {
    id: 5,
    title: "Custom Consulting",
    // icon: "🧠",
    image: custom,
    link: "/services/custom",
  },
];

export default function Services() {
  const sliderRef = useRef(null);

  // Infinite scroll simulation
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0; // reset to start for infinite loop
      }
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Duplicate services for infinite loop
  const doubledServices = [...services, ...services];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">What We Provide</h2>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-scroll scroll-smooth scrollbar-hide no-scrollbar p-3.5"
        >
          {doubledServices.map((service, index) => (
            <div
              key={index}
              className="flex-none w-72 bg-brand-bg rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2">
                   {service.title}
                </h3>
                <Link
                  to={service.link}
                  className="mt-3 inline-block px-4 py-2 bg-brand-text text-white rounded-2xl hover:bg-black transition-colors"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <div className="flex justify-between mt-6 px-6">
          <button
            onClick={() => scroll("left")}
            className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            ◀
          </button>
          <button
            onClick={() => scroll("right")}
            className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
