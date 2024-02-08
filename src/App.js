import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import FromLearnerToProfessionalPage from './pages/From-learner-to-professional.js';
import AboutPage from './pages/About.js';
import ContactPage from './pages/Contact.js';
import NotFoundPage from './pages/Not-found.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/fromlearnertoprofessional" element={<FromLearnerToProfessionalPage />} />
         
      <Route path="/about" element={<AboutPage />} />
         
      <Route path="/contact" element={<ContactPage />} />
         
      <Route path="/notfound" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
