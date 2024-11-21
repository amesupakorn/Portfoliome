import './App.css';
import Navbar from './components/nav/nav.tsx';
import Home from './components/home/home.tsx';
import About from './components/about/about.tsx';
import Skill from './components/skill/skill.tsx';
import Work from './components/work/work.tsx';
import Contact from './components/contact/contact.tsx';
export default function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Work />
      <Contact />
    </div>
  )
}
