// src/components/Connect.jsx
import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Connect() {
  return (
    <section id="contact" className="py-16 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Connect With Us</h2>
        <p className="text-lg text-gray-700 mb-10">
          We’d love to hear from you! whether you’re planning to open a new venture, 
          or want expert guidance for your existing one. Let’s build something remarkable together.
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/8805240524"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-text hover:bg-green-600 text-white font-semibold rounded-full shadow-md transition-all duration-300"
        >
          <FaWhatsapp size={22} />
          Connect on WhatsApp
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://www.instagram.com/zestedge"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-brand-text hover:bg-black text-brand-bg rounded-full transition-all duration-300 shadow-sm"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://www.facebook.com/ZestEdge"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-brand-text hover:bg-black text-brand-bg rounded-full transition-all duration-300 shadow-sm"
          >
            <FaFacebookF size={20} />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-brand-text hover:bg-black text-brand-bg rounded-full transition-all duration-300 shadow-sm"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
