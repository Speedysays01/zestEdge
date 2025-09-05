import { motion } from "framer-motion";
import partner1 from "../assets/partner1.jpg";
import partner2 from "../assets/partner2.jpg";

const Collab = () => {
  return (
    <section id="collaborating-partners" className="py-20 bg-brand-bg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading text-center text-brand-text mb-16"
        >
          Collaborating Partners
        </motion.h2>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Partner 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <img
              src={partner1}
              alt="Manoj Jaiswal"
              className="w-72 md:w-80 h-auto rounded-2xl shadow-lg object-cover mb-6"
            />
            <h3 className="text-2xl md:text-3xl font-heading text-brand-text mb-2">
              Manoj Jaiswal
            </h3>
            <p className="text-lg font-semibold text-gray-700 mb-4">
              Senior Hospitality Strategist | F&amp;B Operations Specialist | Team Development Mentor
            </p>
            <p className="text-gray-700 leading-relaxed text-lg font-body space-y-4">
              With over two decades of hands-on experience across India and the
              Middle East, Manoj brings a wealth of operational insight and
              leadership to ZestEdge Hospitality. A graduate of NIHMC Bhubaneswar
              (1999), he began his journey in hospitality with the Mansingh Group
              and quickly rose through the ranks - serving as Captain, Restaurant
              Manager, Area Manager, and eventually Head of Department for F&amp;B
              Service at Elite Seef Residences in Bahrain.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg font-body mt-4">
              His career spans renowned brands such as Sarovar Park Plaza, Blue
              Foods Pvt. Ltd., Pan India Food Solutions, and Harry’s India Pvt. Ltd.,
              where he led bar and café operations, managed multi-unit restaurant
              portfolios, and drove strategic growth through budgeting, licensing,
              supplier negotiations, and customer experience design.
            </p>
          </motion.div>

          {/* Partner 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <img
              src={partner2}
              alt="Abhimanyu Pareek"
              className="w-72 md:w-80 h-auto rounded-2xl shadow-lg object-cover mb-6"
            />
            <h3 className="text-2xl md:text-3xl font-heading text-brand-text mb-2">
              Abhimanyu Pareek
            </h3>
            <p className="text-lg font-semibold text-gray-700 mb-4">
              Strategic Growth &amp; Marketing | Aggregator Platforms &amp; Digital Outreach
            </p>
            <p className="text-gray-700 leading-relaxed text-lg font-body space-y-4">
              Abhimanyu brings a rare blend of aggregator expertise, digital
              marketing acumen, and entrepreneurial spirit to ZestEdge
              Hospitality. With a proven track record at Zomato - where he led PAN
              India expansion initiatives, turned loss-making accounts profitable
              and ranked among the top Key Account Managers nationwide - he offers
              deep insight into platform strategy, client acquisition, and brand
              growth.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg font-body mt-4">
              At ZestEdge, he contributes across core functions including defining
              aggregator strategies and coordination, digital content planning, and
              marketing outreach. His role also extends to supporting strategic
              initiatives such as international education campaigns for Colleges and
              Universities in hospitality sector as well as higher management
              studies and assisting in high-stakes client negotiations.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg font-body mt-4">
              A certified digital marketer and analytics enthusiast, Abhimanyu
              combines data-driven thinking with creative execution. His leadership
              in campus music programs, student mentoring, and entrepreneurial
              ventures reflects a people-first approach and a passion for impact.
              With continued alignment and performance, he is being considered for
              future leadership within ZestEdge, where his energy, strategic
              mindset, and emotional intelligence can help shape the next chapter of
              legacy creation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Collab;
