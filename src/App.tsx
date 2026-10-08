import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './app/layout';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Crew from './pages/crew/crew';
import Press from './pages/press/press';

import './App.css';


export default function App() {
  return (
    <BrowserRouter>
      <div className="relative isolate min-h-screen">
        <video
          className="bg-video"
          src="/img/bg-home.mp4"
          muted
          autoPlay
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="relative z-10 min-h-screen">
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<About />} />
              <Route path="/crew" element={<Crew />} />
              <Route path="/press" element={<Press />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}