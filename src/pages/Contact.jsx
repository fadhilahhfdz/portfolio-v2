import AOS from "aos";
import "aos/dist/aos.css";
import {
  ChevronRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  SendHorizontal,
} from "lucide-react";
import { useEffect } from "react";

const listSosmed = [
  {
    nama: "Email",
    url: "mailto:fadhilahhafidz010@gmail.com",
    logo: <Mail size={25} />,
    deskripsi: "Let's talk about business",
  },
  {
    nama: "GitHub",
    url: "https://github.com/fadhilahhfdz",
    logo: <Github size={25} />,
    deskripsi: "Explore my code & projects",
  },
  {
    nama: "LinkedIn",
    url: "https://www.linkedin.com/in/fadhilahhafidz/",
    logo: <Linkedin size={25} />,
    deskripsi: "Let's connect professionally",
  },
  {
    nama: "Instagram",
    url: "https://instagram.com/fadhilahhfdz",
    logo: <Instagram size={25} />,
    deskripsi: "My life updates",
  },
];

export const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-tr from-gray-950 via-gray-900 to-violet-950 p-6"
    >
      {/* judul */}
      <div className="flex justify-center">
        <h2
          className="text-gradient w-fit text-center text-3xl font-bold mt-12"
          data-aos="fade-up"
        >
          Get In Touch
        </h2>
      </div>

      <div className="flex flex-wrap-reverse justify-center items-center gap-8 mt-12">
        {/* sosmed */}
        <div className="flex flex-col gap-4">
          {listSosmed.map((item, index) => (
            <div key={index} data-aos="fade-right" data-aos-delay={index * 200}>
              <a href={item.url} target="_blank">
                <div className="p-4 px-8 bg-white/5 backdrop-blur-md rounded-lg flex items-center hover:-translate-y-1 hover:scale-105 transition duration-300">
                  <div className="flex items-center gap-4 w-96">
                    <p className="p-4 border-2 border-violet-800 text-violet-800 rounded-full">
                      {item.logo}
                    </p>
                    <div>
                      <h5 className="text-white text-xl">{item.nama}</h5>
                      <p className="text-gray-400 text-sm">{item.deskripsi}</p>
                    </div>
                  </div>
                  <div className="text-white">
                    <ChevronRight />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* send me message */}
        <div
          className="px-8 py-10 bg-white/5 backdrop-blur-md rounded-lg"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h5 className="text-gradient w-fit font-semibold text-2xl mb-4">
            Send Me A Message
          </h5>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="nama"
              placeholder="Your Name"
              className="py-2 px-4 bg-white/5 backdrop-blur-md rounded-lg w-96 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="py-2 px-4 bg-white/5 backdrop-blur-md rounded-lg w-96 text-white"
            />
            <textarea
              name="message"
              className="py-2 h-28 px-4 bg-white/5 backdrop-blur-md rounded-lg w-96 text-white"
              placeholder="Message type here..."
            ></textarea>
            <button
              type="submit"
              className="px-2 py-2.5 rounded-lg w-full flex justify-center items-center gap-2 text-gray-200 bg-gradient-to-r from-violet-950 via-purple-900 to-fuchsia-800 glow-button"
            >
              <p>Send</p>
              <SendHorizontal size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
