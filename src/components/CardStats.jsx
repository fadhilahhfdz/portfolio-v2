// import { BadgeCheck, CodeXml, FolderCode } from "lucide-react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// const stats = [
//   {
//     icon: <CodeXml />,
//     title: "TECH STACK",
//     desc: "Web development software",
//     count: 12,
//   },
//   {
//     icon: <FolderCode />,
//     title: "TOTAL PROJECTS",
//     desc: "Total professional web created",
//     count: 20,
//   },
//   {
//     icon: <BadgeCheck />,
//     title: "CERTIFICATES",
//     desc: "Professional course learned",
//     count: 8,
//   },
// ];

// export default function CardStats() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div className="flex flex-col md:flex-row gap-6 justify-center items-center py-10 px-4">
//       {stats.map((item, index) => (
//         <div
//           key={index}
//           className="w-full md:w-96 rounded-2xl p-6 bg-white/5 shadow-xl backdrop-blur-md text-white relative transition duration-300 hover:scale-105"
//           data-aos="fade-up"
//           data-aos-delay={index * 200}
//         >
//           {/* Icon & total */}
//           <div className="flex justify-between items-center">
//             <div className="text-3xl bg-white/20 p-3 rounded-full">
//               {item.icon}
//             </div>
//             <div className="text-4xl font-bold">{item.count}</div>
//           </div>

//           {/* judul */}
//           <div className="mt-6 uppercase text-sm font-semibold tracking-wide text-violet-500">
//             {item.title}
//           </div>

//           {/* deskripsi */}
//           <p className="text-sm text-gray-300">{item.desc}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

import { BadgeCheck, CodeXml, FolderCode } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

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

// eslint-disable-next-line react/prop-types
function StatCard({ icon, title, desc, count, delay }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="group relative w-full md:w-96 rounded-2xl p-6 bg-white/5 shadow-xl backdrop-blur-md text-white transition duration-300 hover:scale-105 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={delay}
      onMouseMove={handleMouseMove}
    >
      {/* Efek spotlight lingkaran */}
      <span
        className="absolute pointer-events-none w-40 h-40 bg-violet-800/20 rounded-full blur-2xl transition duration-200"
        style={{
          left: position.x - 80,
          top: position.y - 80,
        }}
      ></span>

      {/* Isi Card */}
      <div className="relative z-10">
        <div className="flex justify-between items-center">
          <div className="text-3xl bg-white/20 p-3 rounded-full">{icon}</div>
          <div className="text-4xl font-bold cursor-default">{count}</div>
        </div>
        <div className="mt-6 uppercase text-sm font-semibold tracking-wide text-violet-500 cursor-default">
          {title}
        </div>
        <p className="text-sm text-gray-300 cursor-default">{desc}</p>
      </div>
    </div>
  );
}

export default function CardStats() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center py-10 px-4">
      {stats.map((item, index) => (
        <StatCard
          key={index}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
          count={item.count}
          delay={index * 200}
        />
      ))}
    </div>
  );
}
