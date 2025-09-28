import { useState } from "react";
import { ArrowRight, CodeXml, FolderCode } from "lucide-react";
import bootstrap from "../assets/img/bootstrap.png";
import css from "../assets/img/css-3.png";
import express from "../assets/img/express.png";
import git from "../assets/img/git.png";
import html from "../assets/img/html-5.png";
import js from "../assets/img/js.png";
import laravel from "../assets/img/laravel.png";
import mysql from "../assets/img/mysql.png";
import react from "../assets/img/react.png";
import tailwind from "../assets/img/tailwind.png";
import vscode from "../assets/img/vscode.png";
import nodejs from "../assets/img/nodejs.png";
import portov2 from "../assets/img/portov2.jpg";
import kemiripan from "../assets/img/cekkemiripan.jpg";
import simple from "../assets/img/simple.jpg";
import nextjs from "../assets/img/nextjs.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const techStack = [
  { nama: "HTML", icon: html },
  { nama: "CSS", icon: css },
  { nama: "JavaScript", icon: js },
  { nama: "Laravel", icon: laravel },
  { nama: "Node JS", icon: nodejs },
  { nama: "Express", icon: express },
  { nama: "ReactJS", icon: react },
  { nama: "NextJS", icon: nextjs },
  { nama: "Tailwind CSS", icon: tailwind },
  { nama: "MySQL", icon: mysql },
  { nama: "GIT", icon: git },
  { nama: "VsCode", icon: vscode },
];

const projects = [
  {
    nama: "Portfolio Website V2",
    foto: portov2,
    deskripsi: "Portfolio pribadi versi ke 2 menggunakan ReactJS",
    link: "https://github.com/fadhilahhfdz/portfolio-v2",
  },
  {
    nama: "Sistem Cek Kemiripan Judul",
    foto: kemiripan,
    deskripsi:
      "Sistem berbasis website untuk mengecek kemiripan judul Tugas Akhir 7 Skripsi",
    link: "https://github.com/fadhilahhfdz/sistem-cekkemiripan-frontend",
  },
  {
    nama: "Landing Page SIMPLE",
    foto: simple,
    deskripsi:
      "Landing Page tata cara perawatan pasien di rumah sakit Sardjito Yogyakarta",
    link: "https://fadhilahhfdz.github.io/landing-page-SIMPLE/",
  },
];

export default function TabShowcase() {
  const [activeTab, setActiveTab] = useState("tech");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 text-white">
      {/* Tab navigasi */}
      <div
        className="flex justify-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="w-fit flex justify-center gap-2 mb-8 bg-black/30 p-2 rounded-md backdrop-blur-md">
          <button
            className={`flex items-center gap-2 px-5 py-2 rounded-md transition duration-300 ${
              activeTab === "tech"
                ? "bg-violet-600/30 backdrop-blur-md text-white"
                : "hover:bg-white/5"
            }`}
            onClick={() => setActiveTab("tech")}
          >
            <CodeXml className="md:w-4 md:h-4" />
            Tech Stack
          </button>

          <button
            className={`flex items-center gap-2 px-5 py-2 rounded-md transition duration-300 ${
              activeTab === "projects"
                ? "bg-violet-600/30 backdrop-blur-md text-white"
                : "hover:bg-white/5"
            }`}
            onClick={() => setActiveTab("projects")}
          >
            <FolderCode className="md:w-4 md:h-4" />
            Last Projects
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "tech" && (
        <div className="w-full flex flex-wrap justify-center gap-4 md:gap-8">
          {techStack.map((tech, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="p-4 py-6 w-32 h-32 md:w-40 md:h-40 bg-white/5 backdrop-blur-md flex flex-col gap-2 justify-between items-center rounded-lg hover:bg-white/10 hover:scale-110 transition duration-300">
                <img src={tech.icon} alt="html" width={70} className="w-12 md:w-[4.2rem]" />
                <p className="mt-2 font-medium text-sm md:text-lg">{tech.nama}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "projects" && (
        <div className="w-full flex flex-wrap justify-center gap-6">
          {projects.map((proj, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="p-5 w-80 md:w-96 bg-white/5 backdrop-blur-md rounded-xl hover:shadow-lg hover:shadow-violet-800/50 hover:scale-105 transition duration-300">
                <img
                  src={proj.foto}
                  alt={proj.nama}
                  width={350}
                  className="rounded-md"
                />
                <h4 className="text-gradient w-fit text-xl font-semibold mt-3 mb-1">
                  {proj.nama}
                </h4>
                <p className="text-md">{proj.deskripsi}</p>
                <div className="flex justify-end mt-5">
                  <a href={proj.link} target="_blank">
                    <div className="flex gap-1 px-3 py-2 bg-violet-800/30 backdrop-blur-md rounded-md hover:scale-105 hover:bg-violet-800/50 transition duration-300">
                      <p>Show</p>
                      <ArrowRight width={18} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div data-aos="fade-up">
            <a
              href="https://github.com/fadhilahhfdz"
              target="_blank"
              className="flex gap-1.5 items-center px-4 py-2 rounded-lg mt-6 bg-gradient-to-r from-violet-900 via-purple-900 to-fuchsia-800 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-800 transition duration-300"
            >
              <p>More projects on GitHub</p>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
