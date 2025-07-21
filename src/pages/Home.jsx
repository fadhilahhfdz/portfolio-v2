import logo from "../assets/img/icon.png";
import {
  ArrowDownToLine,
  ArrowRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

const listSosmed = [
  { nama: "email", url: "mailto:fadhilahhafidz010@gmail.com", logo: <Mail /> },
  { nama: "github", url: "https://github.com/fadhilahhfdz", logo: <Github /> },
  {
    nama: "linkedin",
    url: "https://www.linkedin.com/in/fadhilahhafidz/",
    logo: <Linkedin />,
  },
  {
    nama: "instagram",
    url: "https://instagram.com/fadhilahhfdz",
    logo: <Instagram />,
  },
];

export const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-violet-950 p-6">
      <div className="flex flex-col justify-center items-center mx-auto my-9 p-4">
        {/* logo */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={logo}
            alt=""
            width={100}
            className="rounded-full border-4 border-violet-700 mt-16"
          />
        </motion.div>

        {/* nama */}
        <motion.h3
          className="text-3xl font-bold mt-4 text-gradient"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Fadhilah Hafidz Pradana
        </motion.h3>

        {/* deskripsi */}
        <motion.p
          className="text-white max-w-2xl text-center mt-3 text-xl font-semibold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span className="text-violet-600">2 years</span> of experience in Full
          Stack Web Developer, using{" "}
          <span className="text-violet-600">Laravel, React, and Express</span>{" "}
          for developing a website.
        </motion.p>

        {/* tombol kontak & cv */}
        <div className="flex justify-center items-center gap-4 mt-5">
          <motion.a
            href="https://wa.me/6281234982153"
            className="glow-button rounded-full"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -100 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="flex flex-row items-center gap-1.5 bg-gradient-to-r from-violet-800 via-purple-800 to-fuchsia-800 px-4 py-2 rounded-full text-white">
              <p>Contact Me</p>
              <ArrowRight size={18} />
            </div>
          </motion.a>
          <motion.a
            href="https://wa.me/6281234982153"
            className="glow-button rounded-full"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 100 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="flex flex-row items-center gap-1.5 border-2 border-violet-600 px-4 py-2 rounded-full text-violet-600">
              <p>Download CV</p>
              <ArrowDownToLine size={18} />
            </div>
          </motion.a>
        </div>

        {/* menu sosmed */}
        <div className="mt-6">
          <ul className="flex justify-center items-center gap-3">
            {listSosmed.map((item, index) => (
              <motion.div
                key={index}
                className="glow-button rounded-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.2 + index * 0.2,
                  duration: 0.5,
                }}
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-500"
                >
                  <li className="p-4 rounded-full border-2 border-violet-800">
                    {item.logo}
                  </li>
                </a>
              </motion.div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
