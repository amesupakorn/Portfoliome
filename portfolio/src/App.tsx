import './App.css';
import Navbar from './components/nav/nav.tsx';
import Home from './components/home/home.tsx';
import About from './components/about/about.tsx';


export default function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}
