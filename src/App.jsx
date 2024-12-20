import { useRef } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Home from './page/Home';
import About from './page/About';
import Services from './page/Services';
import Project from './page/Project';
import Testimonial from './page/Testimonial';
import Interesting from './page/Interesting';
import Footer from './components/Footer';

function App() {

  // สร้าง refs สำหรับแต่ละ section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);

  // ฟังก์ชันสำหรับเลื่อนหน้าไปยัง section ที่ต้องการ
  const scrollToSection = (section) => {
    if (section.current) {
      section.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
    <Navbar
      scrollToSection={scrollToSection}
      homeRef={homeRef}
      aboutRef={aboutRef}
      servicesRef={servicesRef}
      projectsRef={projectsRef}
    />
    <div ref={homeRef}>
      <Home/>
    </div>
    <div ref={aboutRef}>
      <About/>
    </div>
    <div ref={servicesRef}>
      <Services/>
    </div>
    <div ref={projectsRef}>
      <Project/>
    </div>

    <Testimonial/>
    <Interesting/>
    <Footer
      scrollToSection={scrollToSection}
      homeRef={homeRef}
      aboutRef={aboutRef}
      servicesRef={servicesRef}
    />
    
    </div>
  )
}

export default App
