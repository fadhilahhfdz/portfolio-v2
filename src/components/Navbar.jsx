import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const itemMenu = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Showcase", href: "#showcase" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-screen z-50 transition-all duration-300 ${
        scrolled ? "bg-black/10 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold cursor-default bg-gradient-to-r from-purple-800 to-violet-700 bg-clip-text text-transparent">
          FadhilahHfdz
        </h1>

        {/* mobile menu icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-violet-600">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* desktop menu */}
        <ul className="hidden lg:flex gap-6 text-white text-sm">
          {itemMenu.map((item, index) => (
            <li key={index} className="relative group cursor-pointer">
              <a
                href={item.href}
                className="transition-all duration-300 font-semibold text-violet-600"
              >
                {item.label}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] rounded-md bg-violet-700 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile menu dropdown */}
      {open && (
        <div className="lg:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-white text-sm">
            {itemMenu.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 hover:font-semibold hover:text-violet-600 transition-all"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
};
