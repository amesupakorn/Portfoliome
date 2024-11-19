import './App.css';
import NavBar from './nav/nav.tsx';


export default function App() {

  return (
    <div>
      <NavBar />
        <main className="p-4">
          <h1 className="text-2xl font-bold">Welcome to My Website</h1>
        </main>
    </div>
  )
}
