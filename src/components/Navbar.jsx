import { useState } from "react";
import logo from '../assets/logo1.png'
import { X, Menu } from "lucide-react"; // icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "What's ZestEdge", href: "#about" },
    { name: "Founders", href: "#founder" },
    { name: "Minds behind ZestEdge", href: "#minds-together" },
    { name: "What we provide", href: "#services" },
    { name: "Connect", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-brand-bg shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo} // replace with your logo path
              alt="ZestEdge"
              className="h-40 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-text font-heading font-extrabold hover:text-amber-950 hover:opacity-70 hover:text- transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden mr-6">
            <button onClick={() => setIsOpen(true)}>
              <Menu className="h-6 w-6 mr-6 text-brand-text" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="relative w-64 bg-brand-bg p-6 shadow-lg">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6 text-brand-text" />
            </button>

            <div className="mt-10 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-lg font-heading text-brand-text hover:opacity-70 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
