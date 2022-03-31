import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import ArchivesPage from './pages/ArchivesPage';
import Navbar from './bars/Navbar';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='about' element={<AboutPage/>} />
    <Route path='service' element={<ServicePage/>} />
    <Route path='archives' element={<ArchivesPage/>} />
    <Route path='contact' element={<ContactPage/>} />
  </Routes>
  </BrowserRouter>
  );
};

export default App