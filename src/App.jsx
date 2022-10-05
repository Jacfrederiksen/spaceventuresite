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
import Login from './pages/login/Login'
import Nomatch from './pages/nomatch/Nomatch'

// Admin site
import AdminLayout from './admin/layout/aLayout';
import AdminHome from './admin/pages/home/AdminHome'
import AdminTours from './admin/pages/tours/AdminTours';
import AdminToursAdd from './admin/pages/tours/AdminToursAdd';
import AdminToursEdit from './admin/pages/tours/AdminToursEdit'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element ={<Home />}/>
          <Route path="shuttle" element={<Shuttle />} />
          <Route path="trips" element={<Trips />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="safety" element={<Safety />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element ={<Login />} />
          <Route path="*" element ={<Nomatch />} />
        </Route>
        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="admintours" element={<AdminTours />} />
          <Route path="admintoursadd" element={ <AdminToursAdd />} />
          <Route path="admintoursedit/:tourID" element={ <AdminToursEdit />} />
          <Route path="*" element ={<Nomatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
