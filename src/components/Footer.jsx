// // src/components/Footer.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
// import '../css/footer.css';

// const Footer = () => {
//   const quickLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Programs', path: '/programs' },
//     { name: 'Admission', path: '/admission' },
//     { name: 'Fees', path: '/fees' },
//     { name: 'Contact', path: '/contact' }
//   ];

//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer-grid">
//           <div className="footer-section">
//             <div className="footer-logo">
//               <span className="logo-icon">🕌</span>
//               <h3>AIQM</h3>
//             </div>
//             <p className="footer-description">
//               Nurturing Future Huffaz Through Knowledge, Discipline and Excellence.
//             </p>
//             <div className="social-links">
//               <a href="https://facebook.com/aliquraninstitute" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//                 <FaFacebook />
//               </a>
//               <a href="https://instagram.com/ali_quran_institute" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//                 <FaInstagram />
//               </a>
//             </div>
//           </div>

//           <div className="footer-section">
//             <h4>Quick Links</h4>
//             <ul>
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link to={link.path}>{link.name}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="footer-section">
//             <h4>Contact Info</h4>
//             <ul className="contact-info">
//               <li>
//                 <FaMapMarkerAlt />
//                 <span>Plot 11-15, Block 7, Oba Akinyele Estate, Off Olomi-Ayegun Road, Ibadan, Oyo State, Nigeria</span>
//               </li>
//               <li>
//                 <FaPhone />
//                 <span>+234 903 978 5732</span>
//               </li>
//               <li>
//                 <FaEnvelope />
//                 <span>ali.quraninstitute@gmail.com</span>
//               </li>
//             </ul>
//           </div>

//           <div className="footer-section">
//             <h4>Newsletter</h4>
//             <p>Subscribe for updates on admissions and events</p>
//             <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
//               <input type="email" placeholder="Your email address" />
//               <button type="submit" className="btn-primary">Subscribe</button>
//             </form>
//           </div>
//         </div>
        
//         <div className="footer-bottom">
//           <p>&copy; 2026 Ali Institute For Qur'an Memorization (AIQM). All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
// import '../css/footer.css';

// const Footer = () => {
//   const quickLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Programs', path: '/programs' },
//     { name: 'Admission', path: '/admission' },
//     { name: 'Fees', path: '/fees' },
//     { name: 'Gallery', path: '/gallery' },
//     { name: 'Reviews', path: '/reviews' },
//     { name: 'News', path: '/news' },
//     { name: 'Contact', path: '/contact' }
//   ];

//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer-grid">
//           <div className="footer-section">
//             <div className="footer-logo">
//               <span className="logo-icon">🕌</span>
//               <h3>AIQM</h3>
//             </div>
//             <p className="footer-description">
//               Nurturing Future Huffaz Through Knowledge, Discipline and Excellence.
//             </p>
//             <div className="social-links">
//               <a href="https://facebook.com/aliquraninstitute" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//                 <FaFacebook />
//               </a>
//               <a href="https://instagram.com/ali_quran_institute" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//                 <FaInstagram />
//               </a>
//             </div>
//           </div>

//           <div className="footer-section">
//             <h4>Quick Links</h4>
//             <ul>
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link to={link.path}>{link.name}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="footer-section">
//             <h4>Contact Info</h4>
//             <ul className="contact-info">
//               <li>
//                 <FaMapMarkerAlt />
//                 <span>Plot 11-15, Block 7, Oba Akinyele Estate, Off Olomi-Ayegun Road, Ibadan, Oyo State, Nigeria</span>
//               </li>
//               <li>
//                 <FaPhone />
//                 <span>+234 903 978 5732</span>
//               </li>
//               <li>
//                 <FaEnvelope />
//                 <span>ali.quraninstitute@gmail.com</span>
//               </li>
//             </ul>
//           </div>

//           <div className="footer-section">
//             <h4>Newsletter</h4>
//             <p>Subscribe for updates on admissions and events</p>
//             <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
//               <input type="email" placeholder="Your email address" />
//               <button type="submit" className="btn-primary">Subscribe</button>
//             </form>
//           </div>
//         </div>
        
//         <div className="footer-bottom">
//           <p>&copy; 2026 Ali Institute For Qur'an Memorization (AIQM). All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// src/components/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../css/Footer.css';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Admission', path: '/admission' },
    { name: 'Fees', path: '/fees' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    
    if (!newsletterEmail) {
      setNewsletterStatus('Please enter an email address');
      return;
    }
    
    // Save to FormSubmit (sends email)
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/ali.quraninstitute@gmail.com';
    form.target = '_blank';
    
    const emailInput = document.createElement('input');
    emailInput.type = 'hidden';
    emailInput.name = 'email';
    emailInput.value = newsletterEmail;
    form.appendChild(emailInput);
    
    const subjectInput = document.createElement('input');
    subjectInput.type = 'hidden';
    subjectInput.name = '_subject';
    subjectInput.value = 'New Newsletter Subscription - AIQM';
    form.appendChild(subjectInput);
    
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    
    setNewsletterStatus('✓ Subscribed successfully!');
    setNewsletterEmail('');
    setTimeout(() => setNewsletterStatus(''), 3000);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🕌</span>
              <h3>AIQM</h3>
            </div>
            <p className="footer-description">
              Nurturing Future Huffaz Through Knowledge, Discipline and Excellence.
            </p>
            <div className="social-links">
              <a href="https://facebook.com/aliquraninstitute" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com/ali_quran_institute" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt />
                <span>Plot 11-15, Block 7, Oba Akinyele Estate, Off Olomi-Ayegun Road, Ibadan, Oyo State, Nigeria</span>
              </li>
              <li>
                <FaPhone />
                <span>+234 903 978 5732</span>
              </li>
              <li>
                <FaEnvelope />
                <span>ali.quraninstitute@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe for updates on admissions and events</p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
            {newsletterStatus && (
              <p className="newsletter-status" style={{ marginTop: '10px', fontSize: '0.85rem', color: '#C9A227' }}>
                {newsletterStatus}
              </p>
            )}
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Ali Institute For Qur'an Memorization (AIQM). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;