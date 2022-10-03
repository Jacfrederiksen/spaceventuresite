import './App.scss';
import { Routes, Route } from 'react-router-dom';

// Bruger site
import Layout from "./components/layout/Layout"
import Home from './pages/home/Home';
import Shuttle from './pages/shuttle/Shuttle'
import Trips from './pages/trips/Trips'
import Gallery from './pages/gallery/Gallery'
import Safety from './pages/safety/Safety'
import Contact from './pages/contact/Contact'

// Admin site
import AdminLayout from './admin/layout/aLayout';
import AdminHome from './admin/pages/home/AdminHome'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element ={<Home />}/>
          <Route path="shuttle" element={<Shuttle />} />
          <Route path="trips" element={<Trips />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="safety" element={<Safety />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
