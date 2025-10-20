const Footer = () => {
  return (
    <footer className="bg-brand-text text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-heading mb-4">ZestEdge Hospitality</h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            Legacy-driven, future-ready consulting for hospitality brands,
            chefs, and entrepreneurs across India & the Middle East.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-200">
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#why" className="hover:text-white transition">
                Why ZestEdge
              </a>
            </li>
            <li>
              <a href="#founder" className="hover:text-white transition">
                Founders
              </a>
            </li>
            <li>
              <a href="#collaborating-partners" className="hover:text-white transition">
                Team together in purpose
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <p className="text-gray-200 text-sm">
            Email: <a href="mailto:support@zestedge.in" className="hover:text-white">support@zestedge.in</a>
          </p>
         
          <p className="text-gray-200 text-sm mt-2">
            Location: India &amp; Middle East
          </p>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 border-t border-gray-400 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} ZestEdge Hospitality. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
