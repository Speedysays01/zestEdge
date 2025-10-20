import { motion } from "framer-motion";
import { useState } from "react";
import partner1 from "../assets/partner1.png"; // Manoj
import partner2 from "../assets/partner2.png"; // Abhimanyu
import chef1 from "../assets/parag.png"; // Parag
import chef2 from "../assets/vikram.png"; // Vikram
import kedar from "../assets/kedar.png";
import pi from "../assets/pi.jpg";

const Collab = () => {
  const [showManojFull, setShowManojFull] = useState(false);
  const [showAbhiFull, setShowAbhiFull] = useState(false);
  const [showParagFull, setShowParagFull] = useState(false);
  const [showVikramFull, setShowVikramFull] = useState(false);
  const [showKedarFull, setShowKedarFull] = useState(false);
  const [showPiFull, setShowPiFull] = useState(false);

  const collabs = [
    {
      id: 1,
      name: "Manoj Jaiswal",
      role: "Senior Hospitality Strategist | F&B Operations Specialist",
      img: partner1,
      short:
        "With two decades of experience across India and the Middle East, Manoj brings deep operational insight and leadership to ZestEdge.",
      full: "With over two decades of hands-on experience across India and the Middle East, Manoj brings a wealth of operational insight and leadership to ZestEdge Hospitality. A graduate of NIHMC Bhubaneswar (1999), he began his journey in hospitality with the Mansingh Group and quickly rose through the ranks - serving as Captain, Restaurant Manager, Area Manager, and eventually Head of Department for F&B Service at Elite Seef Residences in Bahrain.His career spans renowned brands such as Sarovar Park Plaza, Blue Foods Pvt. Ltd., Pan India Food Solutions, and Harry’s India Pvt. Ltd., where he led bar and café operations, managed multi-unit restaurant portfolios, and drove strategic growth through budgeting, licensing, supplier negotiations, and customer experience design.",
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
      full: "Abhimanyu brings a rare blend of aggregator expertise, digital marketing acumen, and entrepreneurial spirit to ZestEdge Hospitality. With a proven track record at Zomato - where he led PAN India expansion initiatives, turned loss-making accounts profitable and ranked among the top Key Account Managers nationwide - he offers deep insight into platform strategy, client acquisition, and brand growth. At ZestEdge, he contributes across core functions including defining aggregator strategies and coordination, digital content planning, and marketing outreach. His role also extends to supporting strategic initiatives such as international education campaigns for Colleges and Universities in hospitality sector as well as higher management studies and assisting in high-stakes client negotiations.A certified digital marketer and analytics enthusiast, Abhimanyu combines data-driven thinking with creative execution. His leadership in campus music programs, student mentoring, and entrepreneurial ventures reflects a people-first approach and a passion for impact.",
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
      full: "Chef Parag Kapile brings over 22 years of global culinary and hospitality experience to ZestEdge, where he serves as Culinary Strategist & Educator. A graduate of the prestigious Oberoi Centre of Learning and Development, Chef Parag has led kitchen operations and concept development across luxury hotels, cruise lines, airline catering, and fine dining restaurants in India, Australia, Mauritius, and the U.S.As the founder of Tarka Dining, a premium pop-up dining concept, Chef Parag curates immersive, multi-course degustation experiences that reimagine Indian cuisine through a modern, globally inspired lens. His work has been featured in Hospitality Magazine for its innovative interpretation of traditional Indian dishes.Based in Brisbane, Australia, he remains deeply connected to India’s culinary landscape - frequently traveling for ZestEdge projects & as an Educational Advisory, where he contributes to menu innovation, experiential dining formats, and operational consulting. His expertise spans modern Indian cuisine, global fusion, and immersive pop-up experiences, including his own venture, Tarka Dining.  As a Educationist, he contribute to the society in developing Stars of the Future in Culinary.",
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
      full: "With over 25 years of culinary leadership across India, the UK, Europe, and the Middle East, Chef Vikram brings unmatched depth in kitchen operations, food safety, and menu engineering to ZestEdge Hospitality. From opening high-volume outlets in Birmingham and London to leading teams of 150+ chefs across multi-cuisine formats, his journey reflects a rare blend of hands-on mastery and strategic insight.At ZestEdge, he plays a pivotal role in helping hospitality owners build resilient, efficient, and profitable kitchen ecosystems. His scope includes menu planning, recipe costing, hygiene and food safety training, pre-prep action plans, and ingredient sourcing—all tailored to reduce waste, control food costs, and elevate operational standards.A certified food safety supervisor and a graduate in Hotel Administration and Food Technology, Chef Vikram is known for his ability to train teams with precision, set up kitchens aligned to menu goals, and evaluate culinary workflows with a sharp eye for detail. His leadership style is rooted in discipline, mentorship, and a passion for delivering excellence plate after plate.With ZestEdge’s mission to empower owners and reduce dependency on staff, Vikram stands as a trusted guide—helping clients make informed decisions, implement best practices, and build ventures that thrive on quality, consistency, and control.",
      state: showVikramFull,
      setState: setShowVikramFull,
    },
    {
      id: 5,
      name: "Kedar Lele",
      role: "Training & Development, Mindset Architect, Hospitality Trainer, Emotional Intelligence Coach",
      img: kedar,
      short:
        "With over 21 years of experience, Kedar spearheads employee training programs across all verticals, including F&B, Front Office, and Guest Experience, ensuring every team member embodies ZestEdge’s commitment to excellence.",
      full: "With over 21 years of experience across leading hospitality brands and academic institutions, such as Holiday Inn, Radisson Blu, and various boutique resorts. Kedar, is a double graduate and a certified trainer & facilitator, who brings a rare blend of operational insight, emotional intelligence, and training excellence to ZestEdge Hospitality. As Lead - Training & Development, he plays a pivotal role in shaping the mindset, skillset, and service culture of our teams.Kedar spearheads employee training programs across all verticals, including F&B, Front Office, and Guest Experience, ensuring every team member embodies ZestEdge’s commitment to excellence. His pre-opening training modules are tailored to each concept’s ethos - whether boutique, quick service, or experiential dining - ensuring seamless launches and operational readiness.",
      state: showKedarFull,
      setState: setShowKedarFull,
    },
    {
      id: 6,
      name: "Pi Mediaworks",
      role: "Communication & Digital Growth Partners – ZestEdge Hospitality",
      img: pi,
      short:
        "Team Pi Mediaworks serves as ZestEdge Hospitality’s dedicated partner for brand communication, digital marketing, and online growth strategy.",
      full: "Team Pi Mediaworks serves as ZestEdge Hospitality’s dedicated partner for brand communication, digital marketing, and online growth strategy. With over five years of experience across FMCG, education, political communication, and corporate sectors, the team brings a powerful blend of creative storytelling and data-driven execution to the world of modern media. As digital growth partners, Pi Mediaworks leads branding, social media, and performance marketing initiatives for ZestEdge’s restaurant and F&B ventures. Their approach integrates strategic communication, visual identity design, platform intelligence, and design thinking—ensuring each concept, whether boutique dining or fast-service, achieves strong visibility, engagement, and digital traction. With a sharp focus on building brands that are not just seen but remembered, Team Pi Mediaworks crafts meaningful digital experiences that elevate trust, loyalty, and long-term business impact. Their work strengthens ZestEdge’s online presence while reinforcing the emotional and strategic value of each hospitality concept.",
      state: showPiFull,
      setState: setShowPiFull,
    },
  ];

  return (
    <section id="minds-together" className="bg-white flex flex-col items-center py-10 overflow-x-hidden text-justify">
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
              layout
              className={`bg-brand-bg rounded-2xl shadow-lg flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center overflow-hidden hover:shadow-xl transition-all duration-300`}
            >
              <div className="w-full md:w-[40%] h-56 md:h-full flex items-center justify-center bg-white">
                <img
                  src={person.img}
                  alt={person.name}
                  className="max-h-full w-auto object-contain rounded-lg"
                />
              </div>

              <motion.div
                layout
                className="w-full md:w-[60%] p-4 md:p-6 flex flex-col justify-center text-center md:text-left"
              >
                <h3 className="text-lg md:text-xl font-heading text-brand-text mb-1">
                  {person.name}
                </h3>
                <p className="text-xs md:text-sm font-semibold text-gray-700 mb-2">
                  {person.role}
                </p>

                <p className="text-gray-700 leading-relaxed text-sm font-body text-justify">
                  {person.state ? person.full : person.short}
                </p>

                <button
                  onClick={() => person.setState(!person.state)}
                  className="mt-1 text-brand-text text-xs md:text-sm font-semibold hover:underline"
                >
                  {person.state ? "Read Less" : "Read More"}
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collab;






// raining & Development | Mindset Architect | Hospitality Trainer | Emotional Intelligence Coach 
//  With over 21 years of experience across leading hospitality brands and academic institutions, such as Holiday Inn, Radisson Blu, and various boutique resorts. Kedar, is a double graduate and a certified trainer & facilitator, who brings a rare blend of operational insight, emotional intelligence, and training excellence to ZestEdge Hospitality. As Lead - Training & Development, he plays a pivotal role in shaping the mindset, skillset, and service culture of our teams.

// Kedar spearheads employee training programs across all verticals, including F&B, Front Office, and Guest Experience, ensuring every team member embodies ZestEdge’s commitment to excellence. His pre-opening training modules are tailored to each concept’s ethos - whether boutique, quick service, or experiential dining - ensuring seamless launches and operational readiness.






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
