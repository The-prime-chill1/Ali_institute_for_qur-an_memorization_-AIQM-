// src/components/WhyChoose.jsx
import React from 'react';
import { FaChalkboardTeacher, FaHome, FaBook, FaHeart, FaShieldAlt, FaGraduationCap } from 'react-icons/fa';

const WhyChoose = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher />,
      title: 'Qualified Teachers',
      description: 'Experienced Huffaz and Islamic scholars dedicated to student success.'
    },
    {
      icon: <FaHome />,
      title: 'Boarding Facilities',
      description: 'Comfortable and secure accommodation with proper supervision.'
    },
    {
      icon: <FaBook />,
      title: 'Structured Revision System',
      description: 'Daily, weekly, and monthly revision schedules for retention.'
    },
    {
      icon: <FaHeart />,
      title: 'Islamic Character Building',
      description: 'Focus on developing strong Islamic morals and values.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Safe Environment',
      description: 'Secure campus with 24/7 monitoring and care.'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Academic Excellence',
      description: 'Balanced approach to Qur\'anic and conventional education.'
    }
  ];

  return (
    <section className="why-choose section">
      <div className="container">
        <h2 className="section-title">Why Choose AIQM</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;