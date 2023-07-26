import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/home';
import Om from './screens/Om';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Tjänster from './screens/tjänster';
import Kontakt from './screens/kontakt'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className='footer-container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Om-oss' element={<Om />} />
          <Route path='/tjänster' element={<Tjänster />} />
          <Route path='/kontakt' element={< Kontakt />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
