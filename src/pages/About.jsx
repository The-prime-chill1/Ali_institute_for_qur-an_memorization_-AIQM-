// src/pages/About.jsx
// import React, { useEffect } from 'react';
import { FaRuler, FaHeart, FaStar, FaHandshake, FaShieldAlt } from 'react-icons/fa';
import '../css/about.css';
import aiqmlogo from '../../public/assets/aiqm_logo.jpeg';
import directorImage from '../../public/assets/rvw.jpg';

const About = () => {
  useEffect(() => {
    document.title = 'AIQM - About Us | Ali Institute For Qur\'an Memorization';
  }, []);

  const values = [
    { icon: <FaRuler />, title: 'Discipline', description: 'Structured approach to learning and personal development' },
    { icon: <FaHeart />, title: 'Sincerity', description: 'Pure intentions in seeking Islamic knowledge' },
    { icon: <FaStar />, title: 'Excellence', description: 'Striving for the highest quality in education' },
    { icon: <FaHandshake />, title: 'Respect', description: 'Mutual respect between students and teachers' },
    { icon: <FaShieldAlt />, title: 'Integrity', description: 'Upholding Islamic values in all aspects' }
  ];

  const logoStyle = {
    width: '100%',
    maxWidth: '280px',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  };

  const directorImageStyle = {
    width: '100%',
    maxWidth: '250px',
    height: 'auto',
    borderRadius: '12px',
    objectFit: 'cover',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
  };

  return (
    <main className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>About AIQM</h1>
          <p>Nurturing Future Huffaz Through Knowledge, Discipline and Excellence</p>
        </div>
      </div>

      <section className="about-intro section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Welcome to Ali Institute For Qur'an Memorization</h2>
              <p>Ali Institute For Qur'an Memorization (AIQM) is a leading Islamic boarding school dedicated to Qur'an memorization, Tajweed excellence, Islamic studies and character development. Located in Ibadan, Oyo State, Nigeria, we provide a comprehensive Islamic education that nurtures both the mind and soul.</p>
              <p>Our unique approach combines traditional Qur'anic teaching methods with modern educational practices, ensuring students receive the highest quality of instruction in a supportive and disciplined environment.</p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <img 
                  src={aiqmlogo} 
                  alt="AIQM Logo" 
                  style={logoStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vision-mission section">
        <div className="container">
          <div className="vm-grid">
            <div className="vision-card">
              <h3>Our Vision</h3>
              <p>To nurture generations of Qur'an memorizers who embody Islamic values and excellence.</p>
            </div>
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>To provide quality Qur'anic education through discipline, sincerity, consistency and spiritual growth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="director-section section">
        <div className="container">
          <h2 className="section-title">Director's Message</h2>
          <div className="director-content">
            <div className="director-image">
              <div className="image-placeholder" style={{ textAlign: 'center' }}>
                <img 
                  src={directorImage} 
                  alt="Malam Ali Temitope Abdus-Salam" 
                  style={directorImageStyle}
                />
                <h3 style={{ marginTop: '15px', marginBottom: '5px', color: '#1e3a5f' }}>
                  Malam Ali Temitope
                </h3>
                <p style={{ color: '#2e7d32', fontWeight: 'bold', marginTop: '0' }}>
                  Abdus-Salam
                </p>
              </div>
            </div>
            <div className="director-message">
              <p>Assalamu Alaikum Warahmatullahi Wabarakatuh</p>
              <p>Welcome to Ali Institute For Qur'an Memorization (AIQM). Our institute was established with a clear vision: to create an environment where students can excel in Qur'an memorization while developing strong Islamic character.</p>
              <p>We believe that every child has the potential to become a Hafiz or Hafiza, and our dedicated team of qualified teachers works tirelessly to help each student achieve this noble goal. Our structured revision system, supportive boarding facilities, and comprehensive Islamic curriculum set us apart as a premier institution for Qur'anic education.</p>
              <p>I invite you to join our growing family of Huffaz who are making a positive impact on their communities. Together, we can preserve the Qur'an in the hearts of the next generation.</p>
              <p className="director-signature">Malam Ali Temitope Abdus-Salam<br />Director, AIQM</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;