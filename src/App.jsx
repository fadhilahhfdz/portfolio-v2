import { Navbar } from "./components/Navbar";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import Home from "./pages/Home";
import { Showcase } from "./pages/Showcase";

function App() {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* home page */}
      <Home />

      {/* about page */}
      <About />

      {/* Showcase page */}
      <Showcase />

      {/* Contact page */}
      <Contact />

      <hr className="border border-gray-800"/>
      <footer className="bg-gradient-to-l from-gray-900 to-gray-950 p-6 text-gray-300 text-sm text-center">
        <p>&copy; 2025 FadhilahHfdz. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
