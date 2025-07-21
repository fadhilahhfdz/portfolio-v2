import { Navbar } from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import { TechStack } from "./pages/TechStack";

function App() {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* home page */}
      <Home />

      {/* about page */}
      <About />

      {/* tech stack page */}
      <TechStack />
    </>
  );
}

export default App;
