import { BadgeCheck, CodeXml, FolderCode } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const stats = [
  {
    icon: <CodeXml />,
    title: "TECH STACK",
    desc: "Web development software",
    count: 12,
  },
  {
    icon: <FolderCode />,
    title: "TOTAL PROJECTS",
    desc: "Total professional web created",
    count: 20,
  },
  {
    icon: <BadgeCheck />,
    title: "CERTIFICATES",
    desc: "Professional course learned",
    count: 8,
  },
];

export default function CardStats() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center py-10 px-4">
      {stats.map((item, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 200}
          className="w-full md:w-96 rounded-2xl p-6 bg-white/5 shadow-xl backdrop-blur-md text-white relative transition duration-300 hover:scale-105"
        >
          {/* Icon & total */}
          <div className="flex justify-between items-center">
            <div className="text-3xl bg-white/20 p-3 rounded-full">
              {item.icon}
            </div>
            <div className="text-4xl font-bold">{item.count}</div>
          </div>

          {/* judul */}
          <div className="mt-6 uppercase text-sm font-semibold tracking-wide text-violet-500">
            {item.title}
          </div>

          {/* deskripsi */}
          <p className="text-sm text-gray-300">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
