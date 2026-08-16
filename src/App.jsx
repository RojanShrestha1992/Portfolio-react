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

function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Reveal>
            <About />
          </Reveal>
          <Reveal>
            <Projects />
          </Reveal>
          <Reveal>
            <Education />
          </Reveal>
          {/* <Reveal><Testimonials /></Reveal>  not needed for now */}
          <Reveal>
            <Contact />
          </Reveal>
        </main>
        <Footer />
      </div>
      <BackToTop />
    </>
  );
}

export default App;
