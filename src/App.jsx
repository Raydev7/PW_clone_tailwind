import { Link, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
    <div class="bg-slate-900 w-full h-full">
    <Navbar />
    <Outlet />
    <Footer />
    </div>
    </>
  )
}

export default App
