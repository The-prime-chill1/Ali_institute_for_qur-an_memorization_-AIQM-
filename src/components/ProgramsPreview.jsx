// src/components/ProgramsPreview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuran, FaMosque, FaBookOpen, FaPrayingHands } from 'react-icons/fa';

const ProgramsPreview = () => {
  const previewPrograms = [
    { icon: <FaQuran />, title: 'Qur\'an Memorization', description: 'Complete Hifz program with Tajweed' },
    { icon: <FaMosque />, title: 'Tajweed & Tarteel', description: 'Perfect your Qur\'an recitation' },
    { icon: <FaBookOpen />, title: 'Islamic Studies', description: 'Comprehensive Islamic education' },
    { icon: <FaPrayingHands />, title: 'Character Building', description: 'Islamic manners and ethics' }
  ];

  return (
    <section className="programs-preview section">
      <div className="container">
        <h2 className="section-title">Our Programs</h2>
        <div className="programs-grid">
          {previewPrograms.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-icon">{program.icon}</div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/programs" className="btn btn-primary">View All Programs</Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;