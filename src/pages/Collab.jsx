import { motion } from "framer-motion";
import { useState } from "react";
import partner1 from "../assets/partner1.jpg"; // Manoj
import partner2 from "../assets/partner2.jpg"; // Abhimanyu
import chef1 from "../assets/parag.jpg"; // Parag
import chef2 from "../assets/vikram.png"; // Vikram

const Collab = () => {
  const [showManojFull, setShowManojFull] = useState(false);
  const [showAbhiFull, setShowAbhiFull] = useState(false);
  const [showParagFull, setShowParagFull] = useState(false);
  const [showVikramFull, setShowVikramFull] = useState(false);

  const collabs = [
    {
      id: 1,
      name: "Manoj Jaiswal",
      role: "Senior Hospitality Strategist | F&B Operations Specialist",
      img: partner1,
      short:
        "With two decades of experience across India and the Middle East, Manoj brings deep operational insight and leadership to ZestEdge.",
      full: "With two decades of experience across India and the Middle East, Manoj brings deep operational insight and leadership to ZestEdge Hospitality. His journey spans roles in Sarovar Park Plaza, Blue Foods, and Elite Seef Residences, Bahrain.",
      state: showManojFull,
      setState: setShowManojFull,
    },
    {
      id: 2,
      name: "Abhimanyu Pareek",
      role: "Strategic Growth & Marketing | Digital Outreach",
      img: partner2,
      short:
        "Abhimanyu brings aggregator expertise and digital marketing leadership to ZestEdge Hospitality.",
      full: "Abhimanyu combines aggregator expertise, digital marketing acumen, and entrepreneurial spirit. Formerly with Zomato, he led expansion and growth strategies across India, driving performance and visibility.",
      state: showAbhiFull,
      setState: setShowAbhiFull,
    },
    {
      id: 3,
      name: "Chef Parag Kapile",
      role: "Culinary Strategist & Educator – ZestEdge | Founder, Tarka Dining",
      img: chef1,
      short:
        "With 22+ years of global hospitality experience, Chef Parag leads innovation and education at ZestEdge, blending authentic Indian flavors with modern culinary artistry.",
      full: "Chef Parag brings 22 years of global experience spanning luxury hotels, cruise lines, and fine dining across continents. As founder of Tarka Dining, he pioneers immersive, globally inspired Indian cuisine experiences and leads culinary innovation, education, and concept development for ZestEdge Hospitality.",
      state: showParagFull,
      setState: setShowParagFull,
    },
    {
      id: 4,
      name: "Chef Vikram Singh Negi",
      role: "Culinary Strategist & Kitchen Operations Mentor – ZestEdge Hospitality",
      img: chef2,
      short:
        "With 25+ years of global experience, Chef Vikram specializes in kitchen operations, food safety, and menu engineering — helping hospitality ventures achieve precision and profitability.",
      full: "With over 25 years of leadership across India, the UK, Europe, and the Middle East, Chef Vikram brings unmatched depth in kitchen operations, food safety, and menu engineering. He’s led large culinary teams, driven food cost efficiency, and trained hundreds in kitchen optimization, hygiene, and recipe design — guiding owners to build resilient, profitable, and sustainable operations.",
      state: showVikramFull,
      setState: setShowVikramFull,
    },
  ];

  return (
    <section
      id="minds-together"
      className="bg-white flex flex-col items-center py-10 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading text-center text-brand-text mb-12"
        >
          Minds Together in Purpose
        </motion.h2>

        <div className="flex flex-col gap-8">
          {collabs.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-brand-bg rounded-2xl shadow-lg flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center overflow-hidden hover:shadow-xl transition-shadow duration-300 
              md:h-[30vh] h-auto`}
            >
              {/* Image */}
              <div className="w-full md:w-[40%] h-56 md:h-full">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-[60%] p-4 md:p-6 flex flex-col justify-center text-center md:text-left">
                <h3 className="text-lg md:text-xl font-heading text-brand-text mb-1">
                  {person.name}
                </h3>
                <p className="text-xs md:text-sm font-semibold text-gray-700 mb-2">
                  {person.role}
                </p>

                <p className="text-gray-700 leading-relaxed text-sm font-body">
                  {person.state ? person.full : person.short}
                </p>

                <button
                  onClick={() => person.setState(!person.state)}
                  className="mt-1 text-brand-text text-xs md:text-sm font-semibold hover:underline"
                >
                  {person.state ? "Read Less" : "Read More"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collab;











// import { motion } from "framer-motion"; 
// import { useState } from "react";
// import partner1 from "../assets/partner1.jpg";
// import partner2 from "../assets/partner2.jpg";

// const Collab = () => {
//   const [showManojFull, setShowManojFull] = useState(false);
//   const [showAbhiFull, setShowAbhiFull] = useState(false);

//   return (
//     <section id="collaborating-partners" className="min-h-screen bg-brand-bg flex items-center py-6 overflow-x-hidden">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         {/* Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-heading text-center text-brand-text mb-10"
//         >
//           F&amp;B Service Collaborators
//         </motion.h2>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-[65vh]">
//           {/* Partner 1 */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
//           >
//             {/* Image */}
//             <div className="w-full md:w-[45%] h-48 md:h-full flex items-center justify-center">
//               <img
//                 src={partner1}
//                 alt="Manoj Jaiswal"
//                 className="w-auto h-full md:w-full md:h-full object-contain md:object-cover object-center mt-2 md:mt-0"
//               />
//             </div>

//             {/* Text */}
//             <div className="w-full md:w-[55%] p-5 md:p-6 flex flex-col justify-center text-center md:text-left">
//               <h3 className="text-xl md:text-2xl font-heading text-brand-text mb-1">
//                 Manoj Jaiswal
//               </h3>
//               <p className="text-sm md:text-base font-semibold text-gray-700 mb-3">
//                 Senior Hospitality Strategist | F&amp;B Operations Specialist
//               </p>

//               <p className="text-gray-700 leading-relaxed text-sm md:text-base font-body">
//                 {showManojFull ? (
//                   <>
//                     With two decades of experience across India and the Middle East, Manoj brings deep operational insight and leadership to ZestEdge Hospitality. His journey spans roles in Sarovar Park Plaza, Blue Foods, and Elite Seef Residences, Bahrain.
//                   </>
//                 ) : (
//                   <>
//                     With two decades of experience across India and the Middle East, Manoj brings deep operational insight and leadership to ZestEdge.
//                   </>
//                 )}
//               </p>

//               <button
//                 onClick={() => setShowManojFull(!showManojFull)}
//                 className="mt-2 text-brand-text text-sm font-semibold hover:underline"
//               >
//                 {showManojFull ? "Read Less" : "Read More"}
//               </button>
//             </div>
//           </motion.div>

//           {/* Partner 2 */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
//           >
//             {/* Image */}
//             <div className="w-full md:w-[45%] h-48 md:h-full flex items-center justify-center">
//               <img
//                 src={partner2}
//                 alt="Abhimanyu Pareek"
//                 className="w-auto h-full md:w-full md:h-full object-contain md:object-cover object-center mt-2 md:mt-0 "
//               />
//             </div>

//             {/* Text */}
//             <div className="w-full md:w-[55%] p-5 md:p-6 flex flex-col justify-center text-center md:text-left">
//               <h3 className="text-xl md:text-2xl font-heading text-brand-text mb-1">
//                 Abhimanyu Pareek
//               </h3>
//               <p className="text-sm md:text-base font-semibold text-gray-700 mb-3">
//                 Strategic Growth &amp; Marketing | Digital Outreach
//               </p>

//               <p className="text-gray-700 leading-relaxed text-sm md:text-base font-body">
//                 {showAbhiFull ? (
//                   <>
//                     Abhimanyu combines aggregator expertise, digital marketing acumen, and entrepreneurial spirit. Formerly with Zomato, he led expansion and growth strategies across India, driving performance and visibility.
//                   </>
//                 ) : (
//                   <>
//                     Abhimanyu brings aggregator expertise and digital marketing leadership to ZestEdge Hospitality.
//                   </>
//                 )}
//               </p>

//               <button
//                 onClick={() => setShowAbhiFull(!showAbhiFull)}
//                 className="mt-2 text-brand-text text-sm font-semibold hover:underline"
//               >
//                 {showAbhiFull ? "Read Less" : "Read More"}
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Collab;
