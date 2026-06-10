// src/pages/Programs.jsx
import React, { useEffect } from 'react';
import { FaClock, FaCheckCircle } from 'react-icons/fa';
import { programsData } from '../data/programs';
import '../css/programs.css';

const Programs = () => {
  useEffect(() => {
    document.title = 'AIQM - Programs | Ali Institute For Qur\'an Memorization';
  }, []);

  return (
    <main className="programs-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Programs</h1>
          <p>Comprehensive Qur'anic and Islamic Education Programs</p>
        </div>
      </div>

      <section className="programs-list section">
        <div className="container">
          <div className="programs-info">
            <div className="info-cards">
              <div className="info-card">
                <h3>Program Duration</h3>
                <p>12 Months – 3 Years</p>
              </div>
              <div className="info-card">
                <h3>Age Range</h3>
                <p>7 – 28 Years</p>
              </div>
            </div>
          </div>

          <div className="all-programs">
            {programsData.map((program) => (
              <div key={program.id} className="program-detail-card">
                <h2>{program.title}</h2>
                <p className="program-description">{program.description}</p>
                <div className="program-duration">
                  <FaClock /> Duration: {program.duration}
                </div>
                <div className="program-benefits">
                  <h4>Key Benefits:</h4>
                  <ul>
                    {program.benefits.map((benefit, index) => (
                      <li key={index}><FaCheckCircle /> {benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="revision-system">
            <h2 className="section-title">Continuous Revision System</h2>
            <div className="revision-grid">
              <div className="revision-card">
                <h3>Daily Revision</h3>
                <p>Daily structured revision of recently memorized portions to ensure strong retention.</p>
              </div>
              <div className="revision-card">
                <h3>Weekly Revision</h3>
                <p>Weekly comprehensive review of the week's memorization with teacher assessment.</p>
              </div>
              <div className="revision-card">
                <h3>Monthly Assessment</h3>
                <p>Monthly evaluation of memorization progress and retention quality.</p>
              </div>
              <div className="revision-card">
                <h3>Retention Strategy</h3>
                <p>Proven techniques and methods to ensure long-term memorization retention.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Programs;