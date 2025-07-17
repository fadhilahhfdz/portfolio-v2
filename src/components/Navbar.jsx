import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/10 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-lg font-bold cursor-default">
          Fadhilah.dev
        </h1>
        <ul className="flex gap-6 text-white text-sm">
          {[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Tech Stack", href: "#tech" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
          ].map((item, index) => (
            <li key={index} className="relative group cursor-pointer">
              <a
                href={item.href}
                className="transition-all duration-300 font-semibold"
              >
                {item.label}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] rounded-md bg-white group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};
