import './App.css';
import Navbar from './components/nav/nav.tsx';
import Home from './components/home/home.tsx';
import About from './components/about/about.tsx';
import Skill from './components/skill/skill.tsx';
import Work from './components/work/work.tsx';
import Contact from './components/contact/contact.tsx';
import Experience from './components/experience/exper.tsx';
import Certificates from './components/certificate/certificate.tsx';

export default function App() {

  return (
    <div className='p-4'>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Certificates />
      <Skill />
      <Work />
      <Contact />
    </div>
  )
}
