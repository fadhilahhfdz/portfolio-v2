import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TabShowcase from "../components/TabShowcase";

export const Showcase = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="showcase"
      className="min-h-screen bg-gradient-to-tl from-violet-950 via-gray-900 to-gray-950 p-6"
    >
      {/* judul */}
      <div className="flex justify-center">
        <h2
          className="text-gradient w-fit text-center text-3xl font-bold mt-12"
          data-aos="fade-up"
        >
          Showcase
        </h2>
      </div>

      {/* showcase */}
      <TabShowcase />
    </section>
  );
};
