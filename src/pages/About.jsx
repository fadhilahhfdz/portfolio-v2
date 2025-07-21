import { ArrowRight } from "lucide-react";
import profil from "../assets/img/profile.png";
import CardStats from "../components/CardStats";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-bl from-violet-950 via-gray-900 to-gray-950 p-6"
    >
      {/* judul */}
      <div className="flex justify-center">
        <h2 className="text-gradient w-fit text-center text-3xl font-bold mt-12" data-aos="fade-up">
          About Me
        </h2>
      </div>

      <div className="max-w-7xl mx-auto p-6 flex flex-row flex-wrap-reverse justify-between items-center mt-6">
        <div className="max-w-xl">
          {/* nama */}
          <div>
            <h2 className="text-white text-3xl font-bold" data-aos="fade-right">Hello, I&apos;m</h2>
            <h2 className="text-gradient text-3xl font-bold w-fit" data-aos="fade-right" data-aos-delay="200">
              Fadhilah Hafidz Pradana
            </h2>
          </div>

          {/* deskripsi */}
          <div>
            <p className="text-gray-400 text-justify mt-2" data-aos="fade-right" data-aos-delay="400">
              Saya seorang Web Developer yang tertarik dalam bidang Full Stack
              Developer. Saya berfokus pada pengembangan website digital yang
              modern dan selalu berusaha memberikan yang terbaik.
            </p>
          </div>

          {/* tombol */}
          <a href="https://t.me/fadhilahhdz" target="_blank">
            <div className="w-fit flex flex-row gap-1.5 justify-center items-center text-white bg-gradient-to-r from-violet-800 via-purple-800 to-fuchsia-800 px-4 py-2 rounded-md mt-4 glow-button" data-aos="fade-right" data-aos-delay="600">
              <p>Reach Me</p>
              <ArrowRight width={19} />
            </div>
          </a>
        </div>

        {/* profil */}
        <div>
          <img
            src={profil}
            alt="profil"
            width={300}
            className="rounded-full shadow-[0_0_100px_4px] shadow-violet-800"
            data-aos="fade-left" data-aos-delay="200"
          />
        </div>
      </div>

      <CardStats />
    </section>
  );
};

export default About;
