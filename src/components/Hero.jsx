// // src/components/Hero.jsx
// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../css/home.css';

// const Hero = () => {
//   useEffect(() => {
//     const heroElements = document.querySelectorAll('.hero-animate');
//     heroElements.forEach((el, index) => {
//       setTimeout(() => {
//         el.classList.add('fade-in-up');
//       }, index * 200);
//     });
//   }, []);

//   return (
//     <section className="hero">
//       <div className="hero-overlay"></div>
//       <div className="hero-content">
//         <h1 className="hero-animate">ALI INSTITUTE FOR QUR'AN MEMORIZATION (AIQM)</h1>
//         <p className="hero-animate">Nurturing Future Huffaz Through Knowledge, Discipline and Excellence.</p>
//         <div className="hero-buttons hero-animate">
//           <Link to="/admission" className="btn btn-primary">Apply For Admission</Link>
//           <Link to="/contact" className="btn btn-outline">Contact Us</Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import heroBg from '../assets/hero.jpg';

const Hero = () => {
  useEffect(() => {
    const heroElements = document.querySelectorAll('.hero-animate');
    heroElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('fade-in-up');
      }, index * 200);
    });
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-animate">ALI INSTITUTE FOR QUR'AN MEMORIZATION (AIQM)</h1>
        <p className="hero-animate">Memorization With Righteousneess</p>
        <div className="hero-buttons hero-animate">
          <Link to="/admission" className="btn btn-primary">Apply For Admission</Link>
          <Link to="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;