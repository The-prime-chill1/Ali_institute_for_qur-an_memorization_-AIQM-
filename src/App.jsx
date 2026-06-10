// // src/App.jsx
// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import WhatsAppFloat from './components/WhatsAppFloat';
// import Home from './pages/Home';
// import About from './pages/About';
// import Programs from './pages/Programs';
// import Admission from './pages/Admission';
// import Fees from './pages/Fees';
// import Gallery from './pages/Gallery';
// import Reviews from './pages/Reviews';
// import News from './pages/News';
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';
// import ScrollToTop from './components/ScrollToTop';

// function App() {
//   useEffect(() => {
//     document.title = "AIQM - Ali Institute For Qur'an Memorization";
//   }, []);

//   return (
//     <Router>
//       <ScrollToTop />
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/programs" element={<Programs />} />
//         <Route path="/admission" element={<Admission />} />
//         <Route path="/fees" element={<Fees />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/reviews" element={<Reviews />} />
//         <Route path="/news" element={<News />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//       <WhatsAppFloat />
//     </Router>
//   );
// }

// export default App;



import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Admission from './pages/Admission';
import Fees from './pages/Fees';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import News from './pages/News';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    document.title = "AIQM - Ali Institute For Qur'an Memorization";
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}

export default App;