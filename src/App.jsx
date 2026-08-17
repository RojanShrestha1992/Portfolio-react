import { Hero } from "@/sections/Hero";
import { Navbar } from "@/layout/Navbar";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { Education } from "./sections/Education";
import { BackToTop } from "./components/BackToTop";
import { Reveal } from "./components/Reveal";
import { ScrollProgress } from "./components/ScrollProgress";

function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-clip">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Reveal>
            <Projects />
          </Reveal>
          <Reveal>
            <Education />
          </Reveal>
          {/* <Reveal><Testimonials /></Reveal>  not needed for now */}
          <Contact />
        </main>
        <Footer />
      </div>
      <BackToTop />
      <ScrollProgress />
    </>
  );
}

export default App;
